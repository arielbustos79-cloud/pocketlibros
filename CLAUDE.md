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
El proyecto está en **Next.js**. El HTML estático (`public/index-d.html`) es referencia histórica — no se toca.
```
app/
  page.tsx          ← página principal (todas las secciones)
  layout.tsx        ← layout raíz
  globals.css       ← tokens de color
  api/
    register/
      route.ts      ← API de registro: Resend + deduplicación Vercel KV
  _components/
    Nav.tsx         ← navegación con hamburger + control tamaño fuente A/A+/A++
    EmailForm.tsx   ← formulario hero (dos pasos)
    CatalogTabs.tsx ← tabs No Ficción / Ficción con subcategorías
public/
  pocket_libros_logo.svg      ← logo principal (Georgia 24pt, "e" en isotipo)
  pocket_libros_isotipo.svg   ← solo isotipo (favicon, avatar, con "e" en pág. dorada)
  pocket_libros_logo_neg.svg  ← versión negativa (sobre navy, texto blanco)
  portadas/                   ← portadas SVG de todos los títulos
```
---
## Paleta de colores (tokens en globals.css)
```css
--navy:      #0D2B4E   /* azul marino oscuro — color principal */
--navyMid:   #1A4070   /* azul marino medio */
--gold:      #B8952A   /* dorado — acento */
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
| Clásicos universales, Grandes pensadores, Novela negra | USD $3 |
| Relatos +18 | USD $7 |
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
### Catálogo actual — Clásicos Universales (10 títulos — USD $3)
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
### Catálogo actual — Grandes Pensadores (10 títulos — USD $3)
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
### Catálogo actual — Relatos +18 (1 título — USD $7)
| Archivo portada | Título |
|---|---|
| `portada_marcia.svg` | A los pies de Marcia |
### Catálogo pendiente de producción
- **Novela Negra:** 10 títulos — USD $3 (dominio público: Conan Doyle, Agatha Christie, etc.)
- **Relatos +18:** 4 títulos adicionales — USD $7
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
  → Clásicos Universales   (USD $3)
  → Grandes Pensadores     (USD $3)
  → Novela Negra           (USD $3)  ← sin títulos aún, no renderiza
  → Relatos +18            (USD $7)
```
En mobile: tabs como scroll horizontal.
### Formulario de dos pasos (EmailForm.tsx)
- **Paso 1:** campo email + botón "Continuar"
- **Paso 2:** selector de 5 clásicos de bienvenida + botón "Obtener mi ebook gratis"
- **5 clásicos disponibles:** Hamlet (Shakespeare), Don Quijote (Cervantes), 1984 (Orwell), La Metamorfosis (Kafka), La Divina Comedia (Dante)
- El campo `clasico` se envía como `"Título — Autor"` (con " — ") al API
- **API route:** `app/api/register/route.ts` — usa Resend; si KV configurado, bloquea emails duplicados
- **Deduplicación:** Vercel KV (`kv.set(key, ts, { nx: true })`); fail-open si KV no configurado

### Para activar deduplicación de emails (Vercel KV):
1. Vercel dashboard → Storage → Create KV store → conectar al proyecto
2. Las env vars `KV_REST_API_URL` y `KV_REST_API_TOKEN` se agregan automáticamente

### Portadas en el catálogo
```css
transform: rotate(-3deg);
box-shadow: 8px 8px 24px rgba(0,0,0,0.4);
transition: transform 0.3s ease;
```
Hover: `rotate(0deg)` — la portada se endereza.
---
## Estilo de portadas (referencia: edición Drácula de Alma)
- **Fondo:** navy `#0D2B4E`
- **Elemento central:** ilustrativo, evoca la esencia de cada obra
- **No ficción:** elemento geométrico/abstracto
- **Clásicos:** acuarela/ilustración que evoca la obra
- **Tipografía:** Georgia, título grande en blanco, autor en dorado
- **Sello:** "POCKET LIBROS" abajo en dorado pequeño, letra espaciada
- **Formato:** SVG 600×900px en `public/portadas/`
---
## Email operativo
- **hola@pocketlibros.cl** — operativo vía Cloudflare Email Routing → reenvío a Gmail
- **noreply@longvivia.cl** — dirección FROM en Resend (dominio verificado), display name "Pocket Libros"
- **reply-to:** hola@pocketlibros.cl
---
## Documentos institucionales
Ubicación: archivos `.docx` en el proyecto (no en el repo — son materiales de referencia)
| Documento | Estado |
|---|---|
| Términos y Condiciones | ✅ Producido — falta correo contacto |
| Política de Privacidad | ✅ Producido — falta correo contacto |
| Quiénes Somos v2 | ✅ Producido |
| Marco Legal IA | ✅ Producido |
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
- [ ] Configurar Vercel KV para deduplicación de emails
- [ ] Configurar cuenta Gumroad
- [ ] Subir primeros 3-4 títulos a Gumroad
- [ ] Agregar links reales de descarga en `app/api/register/route.ts` (DOWNLOAD_LINKS)
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
- [x] Subcategoría "Literatura Adulta +18" renombrada a "Relatos +18" ✅
- [x] Logos SVG actualizados (font-size 24, "e" en isotipo, línea centrada) ✅
- [x] Control tamaño fuente A/A+/A++ en Nav con localStorage ✅
- [ ] Portadas Novela Negra (10 pendientes)
- [ ] 4 títulos adicionales Relatos +18 con portadas
### Contenido
- [ ] Expandir 10 clásicos a 25 páginas Word
- [ ] Producir 10 títulos Novela Negra
- [ ] Producir 4 títulos adicionales Relatos +18
- [ ] Corregir "A los pies de Marcia" — marca y año
- [ ] Agregar páginas /terminos y /privacidad con los docs institucionales
---
*Pocket Libros · LongViva SpA · pocketlibros.cl · Actualizado 10 agosto 2026*
