/*
    IF (SE)
    Else (Se Não)
    Else if

*/

const bodyTemperature = 36

if(bodyTemperature === 36) {
    console.log("Voce está Saudável!")
} else if(bodyTemperature > 36 && bodyTemperature <= 40){
    console.log("Voce está com Febre!")
} else if(bodyTemperature > 40){
    console.log("Voce está com MUITA Febre!")
}
else{
    console.log("Voce está com Hipotermia!")
}