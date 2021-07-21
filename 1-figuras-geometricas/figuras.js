// Código del cuadrado
console.group('Cuadrados');

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(1);

function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado(3);

console.groupEnd();

// Código del triángulo
console.group('Triangulos');

const alturaTriangulo = 5.5;
console.log('La altura del triángulo es: ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group('Círculos');

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// Perímetro
const PI = Math.PI;
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();