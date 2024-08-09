/*
    Operador Ternário (Ternary Operator)

    ? if (se)
    : else (se não)
    && (if sem else)

*/

const salary = 2700
 // IF/ELSE
if(salary < 4000){
    console.log("O colaborador é Junior")
} else {
    console.log("O colaborador é Senior")
}
 // ELSE IF
salary < 4000 ? console.log("O colaborador é Junior"): console.log("O colaborador é Senior")

 // IF SEM ELSE
salary < 4000 && console.log("O colaborador é Junior")