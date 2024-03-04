export function notANumber(value){
    return isNaN(value) || value == ""
//esta perguntando se o valor não é um numero 
}

export function calculateIMC(weight, height){
    return (weight/((height / 100) **2)).toFixed(2)
}