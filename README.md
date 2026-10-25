# Arcano del día

Juego diario para aprender el tarot. Cada día hay una carta secreta entre las **78 del mazo**, tienes 5 intentos y cada fallo revela una pista.

## Uso

Abre `index.html` en el navegador. No necesita instalación ni dependencias.

## Publicar con GitHub Pages

1. Sube los archivos a un repositorio.
2. En Settings > Pages, elige la rama `main` y la carpeta `/ (root)`.
3. Tu juego estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Estructura

- `index.html`: estructura de la página
- `style.css`: estilos (tema morado + naranja por defecto, claro opcional)
- `cards.js`: los datos de las 78 cartas
- `script.js`: lógica del juego y del cambio de tema

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

- Retroalimentación tipo Wordle al fallar: palo ✓/✗ y número más alto/más bajo
- Modo entrenamiento con repetición espaciada (cajas de Leitner), separado del diario
- Preguntas en ambos sentidos: carta → significado y significado → carta
- Distractores tomados del mismo palo o de números vecinos
- Barras de dominio por palo en lugar de solo la racha
- Ejercicio de ordenar un palo del As al Rey
- Imágenes de un mazo de dominio público (Rider-Waite, 1909)
