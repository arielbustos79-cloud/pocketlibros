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
  _components/
    Nav.tsx         ← navegación con hamburger
    EmailForm.tsx   ← formulario hero (dos pasos)
public/
  pocket_libros_logo.svg      ← logo principal (fuente SVG)
  pocket_libros_isotipo.svg   ← solo isotipo (favicon, avatar)
  pocket_libros_logo_neg.svg  ← versión negativa (sobre navy)
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
## Logo
- **Isotipo:** libro abierto. Página izquierda blanca con líneas onduladas navy, página derecha dorada, lomo navy, base curva navy
- **Nombre:** "Pocket" sobre línea dorada y "Libros" bajo ella, pegados al lado derecho del isotipo
- **Tipografía:** Georgia serif, peso normal, color azul claro `#6B8EC2`
- **Sin lema** en el logo — el lema va solo en el ticker y los textos
---
## Estructura del catálogo
### Precios por banda
| Categoría | Precio |
|---|---|
| No ficción (trading, liderazgo, salud, operaciones) | USD $5 |
| Clásicos universales, Grandes pensadores, Novela negra | USD $3 |
| Literatura erótica | USD $7 |
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
### Catálogo pendiente de producción
- **Novela Negra:** 10 títulos — USD $3 (dominio público: Conan Doyle, Agatha Christie, etc.)
- **Literatura Erótica:** 1 título producido ("A los pies de Marcia") + 4 pendientes — USD $7
---
## Estructura del landing (app/page.tsx)
### Secciones en orden
1. **Nav** — logo SVG + hamburger mobile
2. **Hero** — fondo navy, headline con lema, formulario dos pasos
3. **Ticker/marquee** — banda navy, texto dorado en loop
4. **Cómo funciona** — 3 pasos: Elige → Descarga → Aplica
5. **Catálogo** — organizado por tabs y subcategorías
6. **Por qué Pocket** — 3 argumentos de valor
7. **Footer** — © 2026 Pocketlibros.cl — LongViva SpA
### Ticker/marquee — specs
```css
background: #0D2B4E;
color: #B8952A;
font-family: Georgia, serif;
font-size: 15px;
letter-spacing: 0.12em;
height: 44px;
animation: marquee linear infinite; /* sin pausa */
```
Texto en loop:
```
Conocimiento accionable. Sin relleno aceptable.  ·  Conocimiento accionable. Sin relleno aceptable.  ·
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
  → Novela Negra           (USD $3)
  → Literatura Adulta +18  (USD $7)
```
En mobile: tabs como scroll horizontal.
### Formulario de dos pasos (EmailForm.tsx)
- **Paso 1:** campo email + botón "Continuar"
- **Paso 2:** selector de clásico de bienvenida + botón "Obtener mi ebook gratis"
- Los 10 clásicos disponibles como ebook gratuito de bienvenida
- Transición suave entre pasos
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
## Documentos institucionales
Ubicación: archivos `.docx` en el proyecto (no en el repo — son materiales de referencia)
| Documento | Estado |
|---|---|
| Términos y Condiciones | ✅ Producido — falta correo contacto |
| Política de Privacidad | ✅ Producido — falta correo contacto |
| Quiénes Somos v2 | ✅ Producido |
| Marco Legal IA | ✅ Producido |
**Correo de contacto:** pendiente crear sobre pocketlibros.cl — no usar placeholder hasta tener la cuenta real.
---
## Reglas de producción de ebooks
- **Marca:** POCKET LIBROS (no POCKET-EBOOKS, no Pocket-Libros)
- **Copyright:** © 2026 Pocketlibros.cl — LongViva SpA
- **Diseño:** HBR style — navy + dorado, stat blocks, callouts, insight boxes
- **Tipografía docx:** Georgia, tamaño 23pt equivalente
- **Estándar de páginas:** 25 páginas en Word (Georgia 11.5pt, A4, justificado, sin interlineado)
- **Disclaimer trading:** "Este contenido es exclusivamente educativo. No constituye asesoría financiera."
- **Disclaimer salud:** "Consulta a tu médico antes de iniciar cualquier protocolo."
- **Literatura erótica:** etiqueta +18, todos los personajes mayores de edad
---
## Flujo de trabajo — reglas generales
1. **No hacer push al repo** sin confirmación explícita del usuario
2. **Confirmar visualmente en localhost:3000** antes de avanzar a la siguiente tarea
3. **Reportar conflictos** con el código existente antes de resolverlos
4. **Actualizar este archivo** al final de cada sesión con los avances relevantes
---
## Pendientes activos
### Infraestructura
- [ ] Verificar propagación DNS pocketlibros.cl
- [ ] Crear correo de contacto sobre el dominio
- [ ] Configurar cuenta Gumroad
- [ ] Subir primeros 3-4 títulos a Gumroad
### Landing
- [x] Integrar logo SVG en Nav ✅
- [x] Implementar ticker/marquee ✅
- [x] Formulario de dos pasos funcional ✅
- [x] Portadas No Ficción y Clásicos en catálogo ✅
- [ ] Reorganizar catálogo por tabs y subcategorías
- [ ] Portadas Grandes Pensadores (10 pendientes)
- [ ] Portadas Novela Negra (10 pendientes)
- [ ] 4 títulos adicionales Literatura Erótica
### Contenido
- [ ] Expandir 10 clásicos a 25 páginas Word
- [ ] Producir 10 títulos Novela Negra
- [ ] Producir 4 títulos adicionales Literatura Erótica
- [ ] Corregir "A los pies de Marcia" — marca y año
---
*Pocket Libros · LongViva SpA · pocketlibros.cl · Actualizado agosto 2026*
