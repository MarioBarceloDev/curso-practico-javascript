const lista = [1, 2, 5, 6, 8, 9, 50];

function mediaGeometrica(lista) {
  const multiplicacion = lista.reduce(function (a, b) {
    return a * b;
  });
  return multiplicacion ** (1 / lista.length);
}
