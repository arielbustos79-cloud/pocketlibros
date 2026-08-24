@AGENTS.md

# CLAUDE.md — Pocket Libros
> Archivo de contexto del proyecto. Leer completo al inicio de cada sesión antes de ejecutar cualquier tarea.
---
## Identidad del proyecto
**Marca:** Pocket Libros
**Dominio:** pocketlibros.cl
**Razón social:** LongViva SpA
**Inicio de actividades:** 19 de julio de 2026
**Repositorio:** arielbustos79-cloud/pocketlibros
**Deploy:** Vercel (auto-deploy al hacer push a main)
**Servidor local:** `localhost:3000` (`npm run dev` desde `C:\Users\ARIEL\pocketlibros`)
---
## Lema oficial
> **"Conocimiento accionable. Sin relleno aceptable."**
Este lema aparece en:
- Ticker/marquee del landing
- Sección Quiénes Somos
- Footer y materiales de marca
---
## Stack tecnológico
El proyecto está en **Next.js 16**. El HTML estático (`public/index-d.html`) es referencia histórica — no se toca.
```
app/
  page.tsx              ← página principal (todas las secciones)
  layout.tsx            ← layout raíz + metadata Open Graph
  globals.css           ← tokens de color
  opengraph-image.tsx   ← imagen OG 1200×630px generada con next/og
  api/
    register/
      route.ts          ← API registro: Supabase (dedup) + Resend (emails)
  _components/
    Nav.tsx             ← navegación con hamburger + control tamaño fuente A/A+/A++
    EmailForm.tsx       ← formulario hero (dos pasos, reset en duplicado)
    CatalogTabs.tsx     ← tabs No Ficción / Ficción con subcategorías
public/
  pocket_libros_logo.svg      ← logo principal (Georgia 24pt, "e" en isotipo)
  pocket_libros_isotipo.svg   ← solo isotipo (favicon, avatar, con "e" en pág. dorada)
  pocket_libros_logo_neg.svg  ← versión negativa (sobre navy, texto blanco)
  portadas/                   ← portadas SVG de todos los títulos
  portadas/png/               ← portadas PNG exportadas para Gumroad
```
---
## Paleta de colores (tokens en globals.css)
```css
--navy:      #0D2B4E   /* azul marino oscuro — color principal */
--navyMid:   #1A4070   /* azul marino medio */
--gold:      #B8952A   /* dorado — acento universal en toda la colección */
--goldLight: #F0E6C0   /* dorado claro — fondos */
--white:     #FFFFFF
--gray1:     #222222   /* texto principal */
--gray4:     #AAAAAA   /* texto secundario */
--gray5:     #F2F2F0   /* fondos suaves */
```
---
## Logo (estado actual)
- **Isotipo:** libro abierto. Página izquierda blanca con líneas onduladas navy, página derecha dorada con "e" itálica navy, lomo navy/dorado según versión, base curva
- **Nombre:** "Pocket" sobre línea dorada y "Libros" bajo ella, pegados al lado derecho del isotipo
- **Tipografía:** Georgia serif, **font-size 24**, peso normal, color azul claro `#6B8EC2` (logo) / blanco (logo_neg)
- **Línea divisoria:** centrada entre "Pocket" y "Libros", stroke gold #B8952A, ancho ajustado al texto de "Pocket" (72px medido en browser)
- **Tamaño en nav:** 170×82px desktop / isotipo 40×41px mobile
- **Sin lema** en el logo — el lema va solo en el ticker y los textos
---
## Estructura del catálogo
### Precios por banda
| Categoría | Precio |
|---|---|
| No ficción (trading, liderazgo, salud, operaciones) | USD $5 |
| Clásicos universales, Grandes pensadores, Novela negra | USD $2 |
| Relatos +18 | USD $5 |
### Catálogo actual — No Ficción (8 títulos — USD $5)
| Archivo portada | Título | Subcategoría |
|---|---|---|
| `portada_ansiedad.svg` | Domina tu Ansiedad al Invertir | Trading |
| `portada_trading.svg` | Trading para Principiantes: Las 5 Reglas que Nadie te Dice | Trading |
| `portada_supply_chain.svg` | Supply Chain en Crisis | Operaciones |
| `portada_liderazgo.svg` | Lidera sin Cargo | Liderazgo |
| `portada_kpis.svg` | KPIs que Importan | Operaciones |
| `portada_lider_escucha.svg` | El Líder que Escucha | Liderazgo |
| `portada_ayuno.svg` | Ayuno Intermitente: Protocolo Simple | Salud |
| `portada_energia.svg` | Energía sin Cafeína | Salud |
### Catálogo actual — Clásicos Universales (10 títulos — USD $2)
| Archivo portada | Título | Autor |
|---|---|---|
| `portada_quijote.svg` | Don Quijote de la Mancha | Cervantes |
| `portada_hamlet.svg` | Hamlet | Shakespeare |
| `portada_metamorfosis.svg` | La Metamorfosis | Kafka |
| `portada_odisea.svg` | La Odisea | Homero |
| `portada_1984.svg` | 1984 | Orwell |
| `portada_crimen_castigo.svg` | Crimen y Castigo | Dostoievski |
| `portada_orgullo_prejuicio.svg` | Orgullo y Prejuicio | Austen |
| `portada_guerra_paz.svg` | La Guerra y la Paz | Tolstói |
| `portada_moby_dick.svg` | Moby Dick | Melville |
| `portada_divina_comedia.svg` | La Divina Comedia | Dante |
### Catálogo actual — Grandes Pensadores (10 títulos — USD $2)
| Archivo portada | Título | Autor |
|---|---|---|
| `portada_republica.svg` | La República | Platón |
| `portada_etica.svg` | Ética a Nicómaco | Aristóteles |
| `portada_meditaciones.svg` | Meditaciones | Marco Aurelio |
| `portada_descartes.svg` | Discurso del Método | Descartes |
| `portada_leviatan.svg` | Leviatán | Hobbes |
| `portada_zaratustra.svg` | Así habló Zaratustra | Nietzsche |
| `portada_kant.svg` | Crítica de la Razón Pura | Kant |
| `portada_schopenhauer.svg` | El Mundo como Voluntad y Representación | Schopenhauer |
| `portada_hume.svg` | Tratado de la Naturaleza Humana | Hume |
| `portada_spinoza.svg` | Ética | Spinoza |
### Catálogo actual — Relatos +18 (5 títulos — USD $5)
| Archivo portada | Título | Estado |
|---|---|---|
| `portada_marcia.svg` | A los pies de Marcia | ✅ Publicado en Gumroad |
| `portada_noches_graciela.svg` | Las Noches de Graciela | ✅ Publicado en Gumroad |
| `portada_pies_sofia.svg` | Los Pies de Sofía | ✅ Publicado en Gumroad |
| `portada_vestido_rojo.svg` | La Chica del Vestido Rojo | ✅ Publicado en Gumroad |
| `portada_llave_5b.svg` | La Llave del 5B | ✅ Publicado en Gumroad |

### Sinopsis — Relatos +18 nuevos (18 agosto 2026)
- **Las Noches de Graciela** — Suegra 50 años / yerno 20. Cerro Navia. Fetiche voyeurismo nocturno, medias sin calzón. Valentina (hija) ausente en viaje. Climax progresivo en 5 capítulos.
- **Los Pies de Sofía** — Tía política 55 (cougar, Iquique) / sobrino lejano 30. Fetiche pies. Ella casada. Final: él elige a su novia, Sofía queda con el corazón roto.
- **La Chica del Vestido Rojo** — Elena (colorina, casada) / Marcelo (bestia). 9 años de aventura. Fetiche vestidos rojos cortos. Tono comedia soft sensual. El rojo como código secreto.
- **La Llave del 5B** — Catalina 32 / Diego 47. Edificio Almería. Fetiche dominación/bondage consensuado. Final: ella enamorada, él hace ghosting.

### Catálogo pendiente de producción
- **Novela Negra:** 10 títulos — USD $3 (dominio público: Conan Doyle, Agatha Christie, etc.)
- **Relatos +18:** catálogo completo (5/5 producidos)
---
## Estructura del landing (app/page.tsx)
### Secciones en orden
1. **Nav** — logo SVG + hamburger mobile + control tamaño fuente A/A+/A++
2. **Hero** — fondo navy, headline con lema, formulario dos pasos
3. **Ticker/marquee** — banda navy, texto dorado en loop
4. **Cómo funciona** — 4 pasos: Elige → Descarga → Aplica → Disfruta
5. **Catálogo** — organizado por tabs y subcategorías
6. **Por qué Pocket Libros** — 4 argumentos de valor
7. **Footer** — logo_neg.svg + links + © 2026 Pocketlibros.cl — LongViva SpA
### Ticker/marquee — texto actual
```
Conocimiento accionable. Sin relleno aceptable.  ·  Pocket Libros  ·  No Ficción · Clásicos · Grandes Pensadores · Relatos +18  ·  Tu primera descarga es gratis  ·
```
### Catálogo — organización por tabs
```
Tabs: [ No Ficción ] [ Ficción ]
No Ficción:
  → Trading & Finanzas
  → Liderazgo
  → Salud & Bienestar
  → Operaciones
Ficción:
  → Clásicos Universales   (USD $2)
  → Grandes Pensadores     (USD $2)
  → Novela Negra           (USD $2)  ← sin títulos aún, no renderiza
  → Relatos +18            (USD $5)
```
En mobile: tabs como scroll horizontal.
### Formulario de dos pasos (EmailForm.tsx)
- **Paso 1:** campo email + botón "Continuar"
- **Paso 2:** selector de 5 clásicos de bienvenida + botón "Obtener mi ebook gratis"
- **5 clásicos disponibles:** Hamlet (Shakespeare), Don Quijote (Cervantes), 1984 (Orwell), La Metamorfosis (Kafka), La Divina Comedia (Dante)
- El campo `clasico` se envía como `"Título — Autor"` (con " — ") al API
- **Error duplicado:** muestra mensaje + botón "← Intentar con otro correo" que resetea al paso 1
- **API route:** `app/api/register/route.ts` — Supabase (dedup) + Resend (emails)

### Backend de registro (route.ts)
- **Supabase:** tabla `registros` (email unique, clasico_elegido, fecha_registro)
- **Deduplicación:** INSERT con constraint unique → error 23505 → 409 "Ya tienes tu ebook gratuito registrado."
- **Emails vía Resend:** bienvenida al usuario + notificación a hola@pocketlibros.cl
- **Email usuario incluye:** hint "¿No encuentras tu ebook? Revisa las carpetas Promociones o Notificaciones"
- **Env vars requeridas:** `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `RESEND_API_KEY`
- **Fail-open:** si Supabase no está configurado, el registro procede sin deduplicación

### Open Graph (layout.tsx + opengraph-image.tsx)
- **og:title:** "Pocket Libros"
- **og:description:** "Conocimiento accionable. Sin relleno aceptable. Ebooks en PDF de no ficción, clásicos y grandes pensadores desde USD $3."
- **og:url:** https://pocketlibros.cl
- **og:image:** `/opengraph-image` → PNG 1200×630 generado con `next/og`
- **Imagen OG:** fondo navy, logo_neg.svg arriba izquierda, headline en blanco/dorado, marca de agua "PL" sutil
- **Twitter card:** summary_large_image

### Portadas en el catálogo
```css
transform: rotate(-3deg);
transition: transform 0.3s ease;
```
Hover: `rotate(0deg)` — la portada se endereza.
---
## Sistema de portadas — paleta por categoría

### Regla universal
- **Acento dorado `#B8952A`** se mantiene en TODA la colección sin excepción — es la firma de marca
- **Regla de contraste:** figuras/elementos principales siempre en tono que contraste con el fondo. Nunca figura oscura sobre fondo oscuro similar.

### Paleta por categoría
| Categoría | Fondo | Figura/Elemento | Acento |
|---|---|---|---|
| Clásicos Universales | `#0D2B4E` navy | blanco / dorado | `#B8952A` |
| No Ficción | `#0D2B4E` navy | blanco / dorado | `#B8952A` |
| Grandes Pensadores | variar por filósofo: verde `#0A1A0E` / vino `#1A0A12` / grafito `#0F0F16` | blanco / dorado | `#B8952A` |
| Novela Negra | grafito `#111111` | plata `#A8A8A8` o rojo `#8B1A1A` | `#B8952A` |
| Relatos +18 | vino `#1A0510` | crema/marfil `#F2E8D0` | oro rosado `#C4956A` |

### Portadas PNG exportadas
Ubicación: `public/portadas/png/`
- `*_cover.png` → 600×900px (para cover de Gumroad)
- `*_thumb.png` → 600×600px cuadrado (para thumbnail de Gumroad — DEBE ser cuadrado)
- Portadas exportadas: `hamlet`, `quijote`, `1984`, `metamorfosis`, `divina_comedia`, `marcia`, `odisea`, `crimen_castigo`, `guerra_paz`, `moby_dick`, `orgullo_prejuicio`

> **Marcia (14 agosto 2026):** portada rediseñada. Fondo cambiado de navy #0D2B4E a vino #1A0510, silueta en crema #F2E8D0 para resolver problema de contraste. SVG + PNG + thumbnail actualizados en disco. Pendiente push a Vercel y actualización manual en Gumroad.
---
## Email operativo
- **hola@pocketlibros.cl** — operativo vía Cloudflare Email Routing → reenvío a Gmail
- **noreply@longvivia.cl** — dirección FROM en Resend (dominio verificado), display name "Pocket Libros"
- **reply-to:** hola@pocketlibros.cl
---
## Supabase
- **Tabla:** `registros` — email (unique), clasico_elegido, fecha_registro
- **RLS:** habilitado con políticas de INSERT y SELECT para rol anon
- **Grants:** `GRANT USAGE ON SCHEMA public TO anon` + `GRANT INSERT ON public.registros TO anon`
- **Env vars:** `SUPABASE_URL` y `SUPABASE_ANON_KEY` en .env.local y Vercel
---
## Gumroad
- **Cuenta:** pocketlibros.gumroad.com ✅
- **Login:** cuenta Google personal (ariel.bustos79@gmail.com) — correo público muestra Gmail, pendiente cambio vía soporte Gumroad (support@gumroad.com)
- **Checkout verificado** en modo incógnito ✅
- **Script overlay:** `https://gumroad.com/js/gumroad.js` cargado vía `next/script afterInteractive` en `layout.tsx`
- **Atributo overlay:** `data-gumroad-overlay-checkout="true"` en los links con `buyUrl`
- **PayPal Business:** conectado ✅
- **Payout:** Santander cuenta corriente, semanal, mínimo $100 USD

### Títulos publicados en Gumroad
| Título | Precio | URL Gumroad | buyUrl en landing |
|---|---|---|---|
| Domina tu Ansiedad al Invertir | $5 | pocketlibros.gumroad.com/l/ansiedad | ✅ Live (24 ago 2026) |
| Trading para Principiantes | $5 | pocketlibros.gumroad.com/l/trading | ✅ Live (24 ago 2026) |
| Supply Chain en Crisis | $5 | pocketlibros.gumroad.com/l/supply-chain | ✅ Live (24 ago 2026) |
| Lidera sin Cargo | $5 | pocketlibros.gumroad.com/l/liderazgo | ✅ Live (24 ago 2026) |
| KPIs que Importan | $5 | pocketlibros.gumroad.com/l/kpis | ✅ Live (24 ago 2026) |
| El Líder que Escucha | $5 | pocketlibros.gumroad.com/l/lider-escucha | ✅ Live (24 ago 2026) |
| Ayuno Intermitente: Protocolo Simple | $5 | pocketlibros.gumroad.com/l/ayuno | ✅ Live (24 ago 2026) |
| Energía sin Cafeína | $5 | pocketlibros.gumroad.com/l/energia | ✅ Live (24 ago 2026) |
| A los pies de Marcia | $5 | pocketlibros.gumroad.com/l/marcia | ✅ Conectado |
| Las Noches de Graciela | $5 | pocketlibros.gumroad.com/l/graciela | ✅ Conectado |
| Los Pies de Sofía | $5 | pocketlibros.gumroad.com/l/pies-sofia | ✅ Conectado |
| La Chica del Vestido Rojo | $5 | pocketlibros.gumroad.com/l/vestido-rojo | ✅ Conectado |
| La Llave del 5B | $5 | pocketlibros.gumroad.com/l/llaves-5B | ✅ Conectado |
| Hamlet | $0 | pocketlibros.gumroad.com/l/hamlet | ✅ Conectado |
| Don Quijote de la Mancha | $0 | pocketlibros.gumroad.com/l/quijote | ✅ Conectado |
| 1984 | $0 | pocketlibros.gumroad.com/l/1984 | ✅ Conectado |
| La Metamorfosis | $0 | pocketlibros.gumroad.com/l/metamorfosis | ✅ Conectado |
| La Divina Comedia | $0 | pocketlibros.gumroad.com/l/divina-comedia | ✅ Conectado |
| La Odisea | $2 | pocketlibros.gumroad.com/l/odisea | ✅ Conectado |
| Crimen y Castigo | $2 | pocketlibros.gumroad.com/l/crimen-castigo | ✅ Conectado |
| La Guerra y la Paz | $2 | pocketlibros.gumroad.com/l/guerra-paz | ✅ Conectado |
| Moby Dick | $2 | pocketlibros.gumroad.com/l/moby-dick | ✅ Conectado |
| Orgullo y Prejuicio | $2 | pocketlibros.gumroad.com/l/orgullo-prejuicio | ✅ Conectado |

### Nota: productos gratuitos en Gumroad
Gumroad obliga "pay what you want" en productos $0 — no hay precio fijo en $0. El usuario debe escribir "0" en el checkout. Es una limitación de plataforma, no hay fix disponible.

### Regla de workflow Cowork / Code
- **CLAUDE.md lo actualiza solo Cowork** al cierre de cada sesión — Code NO lo toca
- Code recibe briefs de Cowork, ejecuta, pushea
- Cowork verifica vía device bridge
- El usuario solo pega el brief en Code
---
## Documentos institucionales
Ubicación: archivos `.docx` en el proyecto (no en el repo — son materiales de referencia)
| Documento | Estado |
|---|---|
| Términos y Condiciones | ✅ Producido — pendiente: agregar Gumroad como procesador de pagos y política de reembolsos |
| Política de Privacidad | ✅ Producido — pendiente: agregar mención a Supabase como procesador de datos |
| Quiénes Somos v2 | ✅ Producido |
| Marco Legal IA v2 | ✅ Producido |
---
## Reglas de producción de ebooks
- **Marca:** POCKET LIBROS (no POCKET-EBOOKS, no Pocket-Libros)
- **Copyright:** © 2026 Pocketlibros.cl — LongViva SpA
- **Diseño:** HBR style — navy + dorado, stat blocks, callouts, insight boxes
- **Tipografía docx:** Georgia, tamaño 23pt equivalente
- **Estándar de páginas:** 25 páginas en Word (Georgia 11.5pt, A4, justificado, sin interlineado)
- **Disclaimer trading:** "Este contenido es exclusivamente educativo. No constituye asesoría financiera."
- **Disclaimer salud:** "Consulta a tu médico antes de iniciar cualquier protocolo."
- **Relatos +18:** etiqueta +18, todos los personajes mayores de edad
---
## Notas de dev local
- `npm run dev` usa `cross-env NODE_TLS_REJECT_UNAUTHORIZED=0` para evitar error TLS con Supabase en Windows Enterprise
- Esta variable **no aplica en Vercel** (producción funciona sin ella)
---
## Flujo de trabajo — reglas generales
1. **No hacer push al repo** sin confirmación explícita del usuario
2. **Confirmar visualmente en localhost:3000** antes de avanzar a la siguiente tarea
3. **Reportar conflictos** con el código existente antes de resolverlos
4. **Actualizar este archivo** al final de cada sesión con los avances relevantes
---
## Pendientes activos
### Infraestructura
- [x] Verificar propagación DNS pocketlibros.cl ✅
- [x] Crear correo de contacto sobre el dominio (hola@pocketlibros.cl vía Cloudflare) ✅
- [x] Email backend funcional con Resend ✅
- [x] Deduplicación de emails con Supabase ✅
- [x] Open Graph metadata + imagen OG 1200×630 ✅
- [x] Configurar cuenta Gumroad ✅
- [x] Instagram configurado ✅
- [x] 5 clásicos gratuitos publicados en Gumroad ✅
- [x] **Code:** `DOWNLOAD_LINKS` actualizados + `buyUrl` 5 clásicos conectados + push ✅
- [ ] **Gumroad:** Cambiar correo público del perfil (support@gumroad.com)
- [x] **Gumroad:** 4 relatos +18 subidos y live ($7 c/u): Las Noches de Graciela, Los Pies de Sofía, La Chica del Vestido Rojo, La Llave del 5B ✅ (20 agosto 2026)
- [x] **Gumroad:** 5 clásicos de pago subidos y live ($3 c/u): La Odisea, Crimen y Castigo, La Guerra y la Paz, Moby Dick, Orgullo y Prejuicio ✅ (20 agosto 2026)
- [x] **Gumroad:** Subir catálogo de pago — 8 No Ficción ($5) ✅ (24 agosto 2026)

### Landing
- [x] Integrar logo SVG en Nav ✅
- [x] Implementar ticker/marquee ✅
- [x] Formulario de dos pasos funcional ✅
- [x] Portadas No Ficción y Clásicos en catálogo ✅
- [x] Catálogo organizado por tabs y subcategorías ✅
- [x] Portadas Grandes Pensadores (10 títulos) ✅
- [x] Footer navy con logo_neg.svg + mailto:hola@pocketlibros.cl ✅
- [x] 4 pasos en "Cómo funciona" ✅
- [x] 4 argumentos en "Por qué Pocket Libros" ✅
- [x] Ticker actualizado con catálogo completo ✅
- [x] Subcategoría renombrada a "Relatos +18" ✅
- [x] Logos SVG actualizados (font-size 24, "e" en isotipo, línea ajustada) ✅
- [x] Control tamaño fuente A/A+/A++ en Nav con localStorage ✅
- [x] Reset formulario en error de duplicado ✅
- [x] Overlay Gumroad en "A los pies de Marcia" ✅
- [x] **`buyUrl` de los 5 clásicos conectados en `page.tsx`** ✅
- [x] **`buyUrl` de los 4 relatos +18 nuevos conectados en `page.tsx`** ✅ (20 agosto 2026)
- [x] **`buyUrl` de los 5 clásicos de pago conectados en `page.tsx` + push a Vercel** ✅ (20 agosto 2026)
- [x] **`buyUrl` de 3 No Ficción pendientes (Energía, Líder que Escucha, Ayuno) conectados** ✅ (24 agosto 2026)
- [x] **Precios catálogo actualizados en page.tsx — Clásicos $2, Relatos +18 $5** ✅ (24 agosto 2026)
- [x] **Texto "Precio justo" actualizado: Desde USD $2** ✅ (24 agosto 2026)
- [x] **Logo completo en mobile (Nav.tsx — reemplaza isotipo)** ✅ (24 agosto 2026)
- [ ] Portadas Novela Negra (10 pendientes)
- [x] 4 títulos adicionales Relatos +18 con portadas ✅ (18 agosto 2026)

### Contenido
- [x] 5 PDFs de clásicos gratuitos listos (Hamlet, Quijote, 1984, Metamorfosis, Divina Comedia) ✅
- [x] Portada Marcia rediseñada — contraste corregido ✅
- [x] 5 clásicos de pago expandidos, auditados y rediseñados (template Hamlet) ✅ (20 agosto 2026): Odisea (22p), Crimen y Castigo (20p), Guerra y Paz (23p), Moby Dick (18p), Orgullo y Prejuicio (25p)
- [x] PDFs + covers (600×900) + thumbnails (600×600) PNG generados para los 5 clásicos de pago ✅ (20 agosto 2026)
- [x] 5 clásicos de pago subidos a Gumroad ($3 c/u) y live ✅ (20 agosto 2026)
- [ ] Auditoría Grandes Pensadores (10 títulos) — pendiente revisión copyright y disclaimer
- [ ] Auditoría No Ficción restante (7 títulos)
- [ ] Producir 10 títulos Novela Negra
- [ ] Producir 4 títulos adicionales Relatos +18
- [ ] Rediseño portadas Grandes Pensadores (nueva paleta por filósofo)
- [ ] Agregar páginas /terminos y /privacidad con los docs institucionales
- [ ] Actualizar T&C: Gumroad como procesador de pagos + política de reembolsos
- [ ] Actualizar Política de Privacidad: mención a Supabase
---
*Pocket Libros · LongViva SpA · pocketlibros.cl · Actualizado 24 agosto 2026 — 8 No Ficción live en Gumroad ($5 c/u); precios actualizados: clásicos de pago $2, relatos +18 $5; 10 Grandes Pensadores producidos con sección Reputación y Legado; 3 buyUrls NF conectados; logo mobile completo*
