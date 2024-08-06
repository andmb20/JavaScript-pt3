/*
    Operadores de Comparação (Comparison Operators)

     == -> Igual // Compara o VALOR, mas não o TIPO
    === -> Comparação = TOTALMENTE Igual // Compara o VALOR e TIPO

     != -> Diferente // Compara o VALOR, mas não o TIPO
    !== -> Comparação = TOTALMENTE Diferentes // Compara o VALOR e TIPO

*/

const firstNumber = 30
const seccondNumber = "30"

console.log(firstNumber == seccondNumber) // = true -> compara o valor

console.log(firstNumber === seccondNumber) // = false -> compara o valor e tipo

console.log(firstNumber != seccondNumber) // = false -> não, não são diferentes

console.log(firstNumber !== seccondNumber) // = true -> sim, são totalmente diferentes