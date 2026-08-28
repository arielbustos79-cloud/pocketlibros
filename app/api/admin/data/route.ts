import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

interface GumroadSale {
  id: string;
  product_name: string;
  price: number;
  buyer_email?: string;
  email?: string;
  created_at: string;
  refunded?: boolean;
}

async function fetchSupabaseMetrics() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  const sb = createClient(url, key);
  const { data: all, error } = await sb
    .from('registros')
    .select('email, clasico_elegido, fecha_registro')
    .order('fecha_registro', { ascending: false });

  if (error || !all) return null;

  // Aggregate by clásico
  const counts: Record<string, number> = {};
  for (const r of all) {
    const k = r.clasico_elegido ?? '—';
    counts[k] = (counts[k] ?? 0) + 1;
  }

  return {
    total: all.length,
    topClasicos: Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([clasico, qty]) => ({ clasico, qty })),
    ultimos: all.slice(0, 5).map((r) => ({
      email: r.email as string,
      clasico: r.clasico_elegido as string,
      fecha: r.fecha_registro as string,
    })),
  };
}

async function fetchGumroadMetrics() {
  const token = process.env.GUMROAD_ACCESS_TOKEN;
  if (!token) return null;

  let sales: GumroadSale[] = [];
  let pageKey: string | undefined;

  // Paginate through all sales (max 20 pages = ~1000 sales)
  for (let page = 0; page < 20; page++) {
    const urlStr =
      `https://api.gumroad.com/v2/sales?access_token=${token}` +
      (pageKey ? `&page_key=${encodeURIComponent(pageKey)}` : '');

    let res: Response;
    try {
      res = await fetch(urlStr, { cache: 'no-store' });
    } catch {
      break;
    }
    if (!res.ok) break;

    const json = await res.json() as {
      success: boolean;
      sales?: GumroadSale[];
      next_page_key?: string;
    };
    if (!json.success) break;

    sales = sales.concat(json.sales ?? []);
    if (!json.next_page_key) break;
    pageKey = json.next_page_key;
  }

  const paid = sales.filter((s) => s.price > 0 && !s.refunded);
  const free = sales.filter((s) => s.price === 0);
  const revenue = paid.reduce((sum, s) => sum + s.price, 0) / 100;

  // Rank products
  const byProduct: Record<string, number> = {};
  for (const s of sales) {
    const k = s.product_name ?? '—';
    byProduct[k] = (byProduct[k] ?? 0) + 1;
  }
  const ranked = Object.entries(byProduct).sort((a, b) => b[1] - a[1]);
  const topProducto = ranked[0]
    ? { nombre: ranked[0][0], qty: ranked[0][1] }
    : null;

  const ultimas = [...sales]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 5)
    .map((s) => ({
      email: s.buyer_email ?? s.email ?? '—',
      producto: s.product_name,
      precio: s.price / 100,
      fecha: s.created_at,
    }));

  return {
    total: sales.length,
    pagadas: paid.length,
    cortesias: free.length,
    revenue,
    topProducto,
    ultimas,
  };
}

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || token !== expected) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const [supabase, gumroad] = await Promise.all([
    fetchSupabaseMetrics(),
    fetchGumroadMetrics(),
  ]);

  return NextResponse.json({
    supabase,
    gumroad,
    ts: new Date().toISOString(),
  });
}
