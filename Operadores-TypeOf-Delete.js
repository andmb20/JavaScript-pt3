/*
    Operadores Type Of e Delete (Type Of and Delete Operators)

    Typeof -> Tipo de Dados
    Delete -> Deleta

*/

const myObject = {
    name: "André",
    age: 24,
    country: "Brazil"
}

console.log(myObject)

console.log( typeof myObject)
console.log( typeof myObject.age)

delete myObject.country

console.log(myObject)