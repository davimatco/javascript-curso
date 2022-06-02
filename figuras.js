console.group("cuadrado");

const ladocuadrado = 5;
console.log("lados del cuadrado: " + ladocuadrado + "cm");

const perimetroCuadrado = ladocuadrado * 4;
console.log("el perimetor del cuadrado es: " + perimetroCuadrado + "cm2");

const areaCuadrado = ladocuadrado * ladocuadrado;
console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();


//codigo triangulo 
console.group("triangulo");
const ladouno = 6;
const ladodos = 6;
const ladotres = 4;

console.log ("los lados de mis triangulo miden: " 
+ ladouno 
+ "cm, "
+ ladodos
+ "cm, "
+ ladotres
+ "cm " 
);

const altura = 5.5;
console.log("la altura del triangulo es: " + altura);

const perimetrotrinagulo = ladouno + ladodos + ladotres;
console.log("la altura del triangulo es: " + perimetrotrinagulo);

const areaTriangulo = (ladotres * altura)  / 2;  // se pone en parentecis para que primero jv ejecute primero lo de parentesis
console.log("el area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//codigo triangulo 
console.group("circulo");

//radio 
const radiocirculo = 4;
console.log("el radio del ciruclo es: " + radiocirculo);
//diametro 
const diamtroCirculo = radiocirculo * 2;
console.log("el diametro del ciruclo es: " + diamtroCirculo);
//PI
const PI = Math.PI;
console.log(" PI  es: " + PI);
// circunferencia 
const perimetroCirculo = diamtroCirculo * PI;
console.log("el perimetro del ciruclo es: " + perimetroCirculo);
// area
const areaCirculo = (radiocirculo * radiocirculo) * PI;
console.log("el area del ciruclo es: " + areaCirculo);

console.groupEnd();

