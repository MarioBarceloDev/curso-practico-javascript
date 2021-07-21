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




/**
 * Reto: matemáticas con JavaScript
 */

// Triángulo isósceles

/*En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

    - La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    - La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    - La función debe retornar la altura del triángulo.
*/

//Solución

// Altura Triángulo Isósceles
function alturaTriangulo(lado1, lado2, base) {
    if (lado1 == lado2) {
        const altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(base/2, 2));
        return altura;
    } else {
        return 'Los lados no son iguales';
    }
}

// Ejemplo
alturaTriangulo(4, 4, 3); // 3.7080992435478315