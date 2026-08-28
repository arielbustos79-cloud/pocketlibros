'use client';

import { useState, useEffect, useCallback } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────── */

type SupabaseData = {
  total: number;
  topClasicos: { clasico: string; qty: number }[];
  ultimos: { email: string; clasico: string; fecha: string }[];
} | null;

type GumroadData = {
  total: number;
  pagadas: number;
  cortesias: number;
  revenue: number;
  topProducto: { nombre: string; qty: number } | null;
  ultimas: { email: string; producto: string; precio: number; fecha: string }[];
} | null;

type AdminData = {
  supabase: SupabaseData;
  gumroad: GumroadData;
  ts: string;
};

type State = 'idle' | 'loading' | 'ready' | 'error';

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function fmt(date: string) {
  try {
    return new Date(date).toLocaleDateString('es-CL', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return date;
  }
}

function maskEmail(email: string) {
  const [user, domain] = email.split('@');
  if (!domain) return email;
  return user.slice(0, 3) + '***@' + domain;
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function StatCard({
  label, value, sub, accent = false,
}: {
  label: string; value: string | number; sub?: string; accent?: boolean;
}) {
  return (
    <div
      className="rounded-sm p-5 flex flex-col gap-1"
      style={{ background: accent ? '#0D2B4E' : '#fff', border: '1px solid #E0DDD8' }}
    >
      <span
        className="text-xs uppercase tracking-widest font-medium"
        style={{ color: accent ? '#B8952A' : '#666' }}
      >
        {label}
      </span>
      <span
        className="text-4xl font-light tabular-nums leading-none"
        style={{ color: accent ? '#fff' : '#0D2B4E' }}
      >
        {value}
      </span>
      {sub && (
        <span className="text-xs" style={{ color: accent ? 'rgba(255,255,255,0.45)' : '#999' }}>
          {sub}
        </span>
      )}
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <span
        className="text-xs uppercase tracking-widest font-semibold"
        style={{ color: '#B8952A' }}
      >
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: '#E0DDD8' }} />
    </div>
  );
}

function SimpleTable({
  headers, rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-sm" style={{ border: '1px solid #E0DDD8' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: '#F5F5F3', borderBottom: '1px solid #E0DDD8' }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs uppercase tracking-wider font-medium"
                style={{ color: '#666' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ background: i % 2 === 0 ? '#fff' : '#FAFAF9', borderBottom: '1px solid #E0DDD8' }}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3" style={{ color: '#222' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Views ──────────────────────────────────────────────────────────────── */

function LoginView({
  onSubmit, error, loading,
}: {
  onSubmit: (pwd: string) => void;
  error: string;
  loading: boolean;
}) {
  const [pwd, setPwd] = useState('');

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#0D2B4E' }}
    >
      <div className="w-full max-w-sm mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[6px] mb-1" style={{ color: '#B8952A' }}>
            Pocket Libros
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Panel de administración
          </p>
        </div>

        <div
          className="p-8 rounded-sm"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(184,149,42,0.25)' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pwd) onSubmit(pwd);
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Contraseña
              </label>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                autoFocus
                className="px-4 py-3 text-sm outline-none focus:ring-1"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                  borderRadius: 2,
                }}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={!pwd || loading}
              className="py-3 text-xs uppercase tracking-widest font-semibold transition-opacity disabled:opacity-40"
              style={{ background: '#B8952A', color: '#0D2B4E', borderRadius: 2 }}
            >
              {loading ? 'Cargando…' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Dashboard({
  data,
  onRefresh,
  loading,
}: {
  data: AdminData;
  onRefresh: () => void;
  loading: boolean;
}) {
  const { supabase: sb, gumroad: gm, ts } = data;

  return (
    <div className="min-h-screen" style={{ background: '#F5F5F3' }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
        style={{ background: '#0D2B4E', borderBottom: '1px solid rgba(184,149,42,0.25)' }}
      >
        <div>
          <span className="text-xs uppercase tracking-[5px]" style={{ color: '#B8952A' }}>
            Pocket Libros
          </span>
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Admin
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs hidden sm:block" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {ts ? `Actualizado ${fmt(ts)}` : ''}
          </span>
          <button
            onClick={onRefresh}
            disabled={loading}
            className="text-xs uppercase tracking-wider px-4 py-2 transition-opacity disabled:opacity-40"
            style={{ background: 'rgba(184,149,42,0.15)', color: '#B8952A', border: '1px solid rgba(184,149,42,0.3)', borderRadius: 2 }}
          >
            {loading ? 'Cargando…' : '↻ Actualizar'}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        {/* ── Bloque 1: Registros ── */}
        <section>
          <SectionHeader title="Registros — Supabase" />

          {!sb ? (
            <p className="text-sm" style={{ color: '#999' }}>
              SUPABASE_SERVICE_ROLE_KEY no configurado.
            </p>
          ) : (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <StatCard label="Total registros" value={sb.total} accent />
                <StatCard
                  label="Clásico top"
                  value={sb.topClasicos[0]?.clasico?.split(' — ')[0] ?? '—'}
                  sub={sb.topClasicos[0] ? `${sb.topClasicos[0].qty} registros` : undefined}
                />
                <StatCard
                  label="Top 3 acumulado"
                  value={sb.topClasicos.reduce((s, t) => s + t.qty, 0)}
                  sub={`de ${sb.total} total`}
                />
              </div>

              {/* Top clásicos */}
              {sb.topClasicos.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#999' }}>
                    Top 3 clásicos elegidos
                  </p>
                  <div className="space-y-2">
                    {sb.topClasicos.map((item, i) => {
                      const pct = sb.total > 0 ? Math.round((item.qty / sb.total) * 100) : 0;
                      return (
                        <div key={item.clasico} className="flex items-center gap-3">
                          <span className="text-xs w-4 text-right" style={{ color: '#B8952A' }}>
                            {i + 1}
                          </span>
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span style={{ color: '#222' }}>{item.clasico}</span>
                              <span style={{ color: '#666' }}>{item.qty} ({pct}%)</span>
                            </div>
                            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#E0DDD8' }}>
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${pct}%`, background: '#B8952A' }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Últimos registros */}
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#999' }}>
                Últimos 5 registros
              </p>
              <SimpleTable
                headers={['Email', 'Clásico elegido', 'Fecha']}
                rows={sb.ultimos.map((r) => [
                  maskEmail(r.email),
                  r.clasico?.split(' — ')[0] ?? r.clasico,
                  fmt(r.fecha),
                ])}
              />
            </>
          )}
        </section>

        {/* ── Bloque 2: Ventas ── */}
        <section>
          <SectionHeader title="Ventas — Gumroad" />

          {!gm ? (
            <p className="text-sm" style={{ color: '#999' }}>
              GUMROAD_ACCESS_TOKEN no configurado.
            </p>
          ) : (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <StatCard label="Total ventas" value={gm.total} accent />
                <StatCard label="Pagadas" value={gm.pagadas} sub={`USD $${gm.revenue.toFixed(2)}`} />
                <StatCard label="Cortesías" value={gm.cortesias} sub="precio $0" />
                <StatCard label="Ingresos" value={`$${gm.revenue.toFixed(2)}`} sub="USD acumulado" accent />
              </div>

              {/* Producto más vendido */}
              {gm.topProducto && (
                <div
                  className="flex items-center gap-4 px-5 py-4 rounded-sm mb-6"
                  style={{ background: 'rgba(184,149,42,0.08)', border: '1px solid rgba(184,149,42,0.2)' }}
                >
                  <span className="text-lg" style={{ color: '#B8952A' }}>🏆</span>
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#B8952A' }}>
                      Producto más vendido
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#0D2B4E' }}>
                      {gm.topProducto.nombre}{' '}
                      <span className="font-normal" style={{ color: '#666' }}>
                        · {gm.topProducto.qty} {gm.topProducto.qty === 1 ? 'venta' : 'ventas'}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {/* Últimas ventas */}
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: '#999' }}>
                Últimas 5 ventas
              </p>
              <SimpleTable
                headers={['Email', 'Producto', 'Precio', 'Fecha']}
                rows={gm.ultimas.map((v) => [
                  maskEmail(v.email),
                  v.producto,
                  v.precio === 0 ? 'Gratis' : `$${v.precio.toFixed(2)}`,
                  fmt(v.fecha),
                ])}
              />
            </>
          )}
        </section>

        {/* ── Bloque 3: Tráfico ── */}
        <section>
          <SectionHeader title="Tráfico — Vercel Analytics" />
          <div
            className="p-6 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: '#fff', border: '1px solid #E0DDD8' }}
          >
            <div className="flex-1">
              <p className="text-sm font-medium mb-1" style={{ color: '#0D2B4E' }}>
                Dashboard de Vercel Analytics
              </p>
              <p className="text-xs" style={{ color: '#999' }}>
                Las métricas de tráfico se visualizan directamente en Vercel. La API pública de Vercel Analytics requiere plan Pro.
              </p>
            </div>
            <a
              href="https://vercel.com/arielbustos79-cloud/pocketlibros/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs uppercase tracking-widest px-5 py-2.5 transition-opacity hover:opacity-80"
              style={{ background: '#0D2B4E', color: '#B8952A', borderRadius: 2, textDecoration: 'none' }}
            >
              Abrir en Vercel →
            </a>
          </div>
        </section>

        <footer className="text-center pb-8">
          <p className="text-xs" style={{ color: '#bbb' }}>
            Pocket Libros · LongViva SpA · Uso interno
          </p>
        </footer>
      </main>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */

export default function AdminPage() {
  const [state, setState] = useState<State>('idle');
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState('');
  const [storedPwd, setStoredPwd] = useState('');

  // Read sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pwd = sessionStorage.getItem('pl_admin_pwd') ?? '';
      if (pwd) {
        setStoredPwd(pwd);
        doFetch(pwd);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doFetch = useCallback(async (pwd: string) => {
    setState('loading');
    setError('');
    try {
      const res = await fetch('/api/admin/data', {
        headers: { Authorization: `Bearer ${pwd}` },
      });
      if (res.status === 401) {
        setState('error');
        setError('Contraseña incorrecta.');
        if (typeof window !== 'undefined') sessionStorage.removeItem('pl_admin_pwd');
        return;
      }
      if (!res.ok) throw new Error('Server error');
      const json: AdminData = await res.json();
      setData(json);
      setStoredPwd(pwd);
      if (typeof window !== 'undefined') sessionStorage.setItem('pl_admin_pwd', pwd);
      setState('ready');
    } catch {
      setState('error');
      setError('Error de conexión. Intenta de nuevo.');
    }
  }, []);

  if (state === 'ready' && data) {
    return (
      <Dashboard
        data={data}
        onRefresh={() => doFetch(storedPwd)}
        loading={false}
      />
    );
  }

  return (
    <LoginView
      onSubmit={(pwd) => doFetch(pwd)}
      error={error}
      loading={state === 'loading'}
    />
  );
}
