# Arcano del día

Juego diario para aprender el tarot. Cada día hay una carta secreta entre las **78 del mazo**, tienes 6 intentos y cada fallo revela una pista.

## Uso

Abre `index.html` en el navegador. No necesita instalación ni dependencias.

## Publicar con GitHub Pages

1. Sube los archivos a un repositorio.
2. En Settings > Pages, elige la rama `main` y la carpeta `/ (root)`.
3. Tu juego estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Estructura

- `index.html`: estructura de la página
- `style.css`: estilos (modo claro y oscuro)
- `cards.js`: los datos de las 78 cartas
- `script.js`: lógica del juego

## Cómo están modeladas las cartas

Los Arcanos Mayores son 22 entradas sueltas. Los Menores **no** son 56 entradas
independientes: se generan a partir de `SUITS` × `RANKS`, y cada carta guarda
solo lo que no se deduce (palabras clave, escena y significado).

```
carta menor = rango ("qué pasa")  ×  palo ("dónde pasa")
```

- **Rango**: As = semilla · 2 = dualidad · 5 = crisis · 10 = cierre · Sota/Caballo/Reina/Rey = grados de dominio.
- **Palo**: Bastos = acción/fuego · Copas = emoción/agua · Espadas = mente/aire · Oros = materia/tierra.

Así el juego puede enseñar el sistema: *5 de Copas* = crisis + emoción = pérdida
emocional. Al resolver una carta menor, el panel final muestra esa descomposición.

Las palabras clave de cada carta son una propuesta; ajústalas a tu escuela o mazo.

## Pistas (de general a concreta)

1. Categoría (Mayor / Menor)
2. Palo y su dominio, o elemento y astro
3. Rango o mitad del viaje
4. Una palabra clave
5. Escena (la pista mnemotécnica)
6. Numeral o paridad

## Ideas para ampliar

- Retroalimentación tipo Wordle al fallar: palo ✓/✗ y número más alto/más bajo
- Modo entrenamiento con repetición espaciada (cajas de Leitner), separado del diario
- Preguntas en ambos sentidos: carta → significado y significado → carta
- Distractores tomados del mismo palo o de números vecinos
- Barras de dominio por palo en lugar de solo la racha
- Ejercicio de ordenar un palo del As al Rey
- Imágenes de un mazo de dominio público (Rider-Waite, 1909)
