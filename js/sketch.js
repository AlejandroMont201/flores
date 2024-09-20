let angle = 0; // Variable para el ángulo de rotación

function setup() {
  createCanvas(400, 400);
  textFont('Georgia'); // Usar la fuente Georgia
  textSize(32);   // Tamaño de letra
  textAlign(CENTER, CENTER); // Centrar el texto
  background(220);
}

function draw() {
  background(220); // Limpiar el lienzo en cada frame

  // Dibujar el mensaje en la parte superior
  fill(225, 180, 0); // Color del texto
  text("Feliz día, Manfred", width / 2, 40); // Texto centrado en la parte superior

  // Dibujar el tallo verde con un degradado simple
  noStroke();
  for (let i = 0; i < 150; i++) {
    let inter = map(i, 0, 150, 0.6, 1); // Gradiente entre dos colores
    fill(34 * inter, 139 * inter, 34 * inter);
    rect(195, 200 + i, 10, 1); // Tallo degradado
  }

  // Dibujar la flor
  translate(200, 200);
  rotate(angle); // Rotar la flor

  // Sombra de la flor para darle profundidad
  fill(100, 100, 100, 50); // Sombra
  for (let i = 0; i < 10; i++) {
    ellipse(5, 55, 55, 105); // Dibujar la sombra de los pétalos
    rotate(PI / 5);
  }

  // Pétalos con sombreado para mayor profundidad
  for (let i = 0; i < 10; i++) {
    let gradientYellow = lerpColor(color(255, 204, 0), color(255, 255, 0), i / 10); // Gradiente de amarillo
    fill(gradientYellow); // Aplicar el gradiente a los pétalos
    ellipse(0, 50, 50, 100); // Dibujar el pétalo
    rotate(PI / 5);
  }

  // Centro de la flor con gradiente radial
  for (let r = 25; r > 0; r--) {
    let inter = map(r, 25, 0, 0.5, 1); // Gradiente entre marrón claro y oscuro
    fill(150 * inter, 75 * inter, 0);
    ellipse(0, 0, r * 2, r * 2); // Círculos concéntricos
  }

  // Animar el giro de la flor
  angle += 0.01;
}
