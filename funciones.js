//variables const
const n1 = 0
const n2 = 2
const n3 = 4
const n4 = 6
const n5 = 8

//variables let
let i1 = 1
let i2 = 3
let i3 = 5
let i4 = 7
let i5 = 9

//Funciónes tipo flecha
const sumar = () => {
    console.log(2+1);
}
sumar(); //debe de dar como resultado 3

const print = () => {
    console.log("Hello world!");
}
print(); //debe dar como resultado "Hello world!"

//funciones con dos parametros
const multiplicar = (a,b) => {
    return a*b
    
}
console.log(multiplicar(n1,n2)) //debe dar como resultado 0

const dividir = (a,b) => {
    return a/b
}
console.log(dividir(n5,n2)); //debe dar como resultado 4

//funciones con validacion
const sumaVerificada = () => {
    if (n1 === undefined || n2 === undefined) {
        console.log("Variables num1 o num2 no están definidas.");
        return;
        }
    console.log(2+1);
}
sumaVerificada(); //debe dar como resultado 3

const divisionVerificada = (a,b) => {
    if (b===0) {
        console.log("No se puede dividir por 0");
    } else {
        return a/b
    }
}
console.log(divisionVerificada(n4,n2)); //debedar como resultado 3

const multiplicacionAnalizada = (a) => {
    if (a>0||a<100) {
        console.log("El resultado esta entre o y 100");
    }
}
console.log(multiplicar(n3,n2)); //debe dar como resultado 8
console.log(multiplicacionAnalizada(multiplicar(n3,n2))); //debe dar como resultado "El resultado esta entre 0 y 100"
