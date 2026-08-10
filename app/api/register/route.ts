import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DOWNLOAD_LINKS: Record<string, string> = {
  "Don Quijote de la Mancha": "#",
  "Hamlet": "#",
  "La Metamorfosis": "#",
  "La Odisea": "#",
  "1984": "#",
  "Crimen y Castigo": "#",
  "Orgullo y Prejuicio": "#",
  "La Guerra y la Paz": "#",
  "Moby Dick": "#",
  "La Divina Comedia": "#",
};

export async function POST(request: NextRequest) {
  try {
    const { email, clasico } = await request.json();

    if (!email || !clasico) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    const downloadLink = DOWNLOAD_LINKS[clasico] ?? "#";

    const welcomeHtml = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#F2F2F0;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F2F2F0;padding:40px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0D2B4E;max-width:560px;width:100%;">
        <tr>
          <td style="padding:40px 40px 24px;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#B8952A;">POCKET LIBROS</p>
            <p style="margin:0;font-size:11px;color:#B8952A;opacity:0.5;">Conocimiento accionable. Sin relleno aceptable.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;">
            <h1 style="margin:0 0 16px;font-size:28px;font-weight:normal;color:#FFFFFF;line-height:1.25;">Tu ebook gratuito está listo</h1>
            <p style="margin:0 0 24px;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.7;">Elegiste <strong style="color:#FFFFFF;">${clasico}</strong>. Aquí tienes tu link de descarga:</p>
            <a href="${downloadLink}" style="display:inline-block;background:#B8952A;color:#0D2B4E;font-family:Georgia,serif;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:14px 32px;">Descargar ebook →</a>
            <p style="margin:24px 0 0;font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;">Si el botón no funciona, copia este enlace en tu navegador:<br><a href="${downloadLink}" style="color:#B8952A;">${downloadLink}</a></p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.1);">
            <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);line-height:1.6;">© 2026 Pocketlibros.cl — LongViva SpA<br>Contenido educativo. No constituye asesoría financiera ni profesional.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const notifyHtml = `
<p><strong>Nuevo registro en Pocket Libros</strong></p>
<p>Email: <a href="mailto:${email}">${email}</a></p>
<p>Clásico elegido: ${clasico}</p>
`;

    const [userEmail, adminEmail] = await Promise.all([
      resend.emails.send({
        from: "Pocket Libros <hola@pocketlibros.cl>",
        to: email,
        subject: `Tu ebook gratuito: ${clasico} — Pocket Libros`,
        html: welcomeHtml,
      }),
      resend.emails.send({
        from: "Pocket Libros <hola@pocketlibros.cl>",
        to: "hola@pocketlibros.cl",
        subject: `Nuevo registro: ${email} eligió ${clasico}`,
        html: notifyHtml,
      }),
    ]);

    if (userEmail.error || adminEmail.error) {
      console.error("Resend error:", userEmail.error ?? adminEmail.error);
      return NextResponse.json({ error: "Error al enviar correo." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}
