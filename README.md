# Arcano del día

Juego diario para aprender el tarot. Cada día hay una carta secreta entre las **78 del mazo**, tienes 5 intentos y cada fallo revela una pista.

## Uso

Abre `index.html` en el navegador. No necesita instalación ni dependencias.

## Ayuda

El botón `?` de la esquina abre un modal con el objetivo, las 5 pistas, el
significado de los colores del feedback y los modos. Se cierra con la X, con
`Esc` o haciendo clic fuera.

## Publicar con GitHub Pages

1. Sube los archivos a un repositorio.
2. En Settings > Pages, elige la rama `main` y la carpeta `/ (root)`.
3. Tu juego estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Estructura

- `index.html`: estructura de la página
- `style.css`: estilos (tema morado + naranja por defecto, claro opcional)
- `cards.js`: los datos de las 78 cartas
- `meanings.js`: lecturas extendidas de las 78 cartas (derecho, invertido y contextos)
- `script.js`: lógica del juego diario, del modo En mano y del cambio de tema
- `img/`: las 78 cartas del Rider-Waite-Smith (1909)
- `tools/fetch-images.ps1`: descarga y reduce las imágenes

## Cómo están modeladas las cartas

Los Arcanos Mayores son 22 entradas sueltas. Los Menores **no** son 56 entradas
independientes: se generan a partir de `SUITS` × `RANKS`, y cada carta guarda
solo lo que no se deduce (palabras clave, escena y significado).

```
carta menor = rango ("qué pasa")  ×  palo ("dónde pasa")
```

- **Rango**: As = semilla · 2 = dualidad · 5 = crisis · 10 = cierre · Paje, Caballo, Reina y Rey = grados de dominio (11 a 14).
- **Palo**: Bastos = acción/fuego · Copas = emoción/agua · Espadas = mente/aire · Oros = materia/tierra.

Así el juego puede enseñar el sistema: *5 de Copas* = crisis + emoción = pérdida
emocional. Al resolver una carta menor, el panel final muestra esa descomposición.

Las palabras clave de cada carta son una propuesta; ajústalas a tu escuela o mazo.

## Pistas (de la emoción a la estructura)

La escalera es la misma para Mayores y Menores, y son cinco:

1. **Dominio** — la mitad emocional del símbolo, lo que va tras el guion (*agua, emoción, vínculo e intuición*).
2. **Símbolo** — el objeto que la encarna (*la copa*, *la espada*, *el basto*, *el oro*) o el elemento, en Mayores.
3. **Palabra clave** — el significado.
4. **Ambiente** — la situación y la emoción, sin nombrar el objeto del palo ni la cantidad (campo `AMB`).
5. **Posición** — el tramo (0–VII / VIII–XIV / XV–XXI) o el rango (As–5, 6–10, corte).

El **dominio** y el **símbolo** son las dos mitades de la misma correspondencia: primero
el agua y lo que significa, después la copa que la representa. La **posición** va al
final porque es la última muleta, no la primera: el número exacto no se dice nunca, se
deduce del significado y del ambiente.

La escena literal del Rider-Waite ya no gasta pista: se muestra al resolver, junto al
significado. La composición del Menor (Cinco = crisis) y el astro del Mayor también
salen en el panel de resultado.

## Al resolver

El panel final muestra, además del significado, un bloque **Cómo se lee**: la
composición de la carta (rango + palo, o arcano + elemento + astro) y la clave para
interpretarla. Los textos viven en `READ`, en `cards.js`, y son independientes de las
pistas: se pueden reescribir sin tocar el juego.

Sobre la carta aparece la imagen real del Rider-Waite, para fijar la escena.

## En mano (baraja física)

La pestaña **En mano** no hace tiradas online: tú sacas una carta de tu baraja y
le dices a la app cuál es con dos toques (palo + número/rango). Entonces la app
te propone recordar su significado antes de revelarlo.

- **Pista**: muestra la composición (rango + palo, o arcano + elemento + astro)
  y las palabras clave.
- **Ver significado**: muestra el significado, **Cómo se lee** y una **lectura
  extendida** con el texto al derecho y el invertido. El selector
  **Derecho / Invertido** cambia la lectura principal.
- **Contextos**: debajo aparecen bloques de **amor**, **amistad** y **trabajo**.
  Cada uno incluye el matiz al derecho y el invertido en el mismo párrafo.
- **Autoevaluación**: *La sabía* manda la carta a **dominadas**; *A medias* a
  **aprendiendo**; *No la sabía* a **para repasar**.
- **Progreso**: cada carta se guarda en `localStorage` (`arcano-hand`) en uno de
  esos tres montones. El selector muestra un punto verde, amarillo o rojo según
  el montón.
- **Repasar pendientes**: elige al azar una carta que aún no esté dominada
  (aprendiendo o para repasar).

Las lecturas extendidas de `meanings.js` siguen la tradición de *The Pictorial
Key to the Tarot* de A. E. Waite (1911, dominio público). La redacción es propia
y orientativa: no reproduce el texto original.

El diario sigue siendo la pestaña principal al abrir la app.

## Imágenes

Al resolver, la carta muestra el escaneo original del **Rider-Waite-Smith de 1909**
(Pamela Colman Smith, f. 1951), en dominio público. Los archivos están en `img/`,
nombrados con el id de la carta (`m18.jpg`, `copas-5.jpg`, ...), reducidos a 400 px
de ancho.

Para regenerarlos:

```powershell
powershell -ExecutionPolicy Bypass -File tools/fetch-images.ps1
```

El script usa las miniaturas del CDN de Wikimedia Commons, se salta las que ya
existen y reintenta si el servidor limita las peticiones. Si falta una imagen, la
carta cae en el numeral y el nombre.

## Feedback de cada fallo

Cada intento fallado deja una fila con tres señales, estilo Wordle:

| Señal | Verde | Amarillo | Rojo |
|-------|-------|----------|------|
| **Palo** | mismo palo (o los dos Mayores) | mismo elemento, distinto palo | otra familia |
| **Elemento** | mismo elemento | — | distinto |
| **Número** | el mismo | — | ↑/↓ = la carta secreta está más arriba o más abajo |

El número solo se compara dentro del mismo tipo: un 5 de Menor y un V de Mayor no se
mezclan. Es la única pista direccional y sirve para acotar sin decir la carta.

El elemento de los Mayores usa la atribución de la Golden Dawn, simplificada a
los cuatro elementos. Si tu escuela usa otra, se cambia en `MAJOR_ELEMENT`.

## Ideas para ampliar

- Preguntas en ambos sentidos: carta → significado y significado → carta
- Distractores tomados del mismo palo o de números vecinos
- Barras de dominio por palo en lugar de solo la racha
- Ejercicio de ordenar un palo del As al Rey
- Notas personales por carta e historial de tiradas
- Exportar o importar el progreso de `arcano-hand`
