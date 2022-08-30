let num1=prompt("digite um número")
let num2=prompt("digite outro número")

const maior = num1>num2
const igual = num1==num2
const divisivelprimeiro = (num1%num2)==0
const divisivelsegundo = (num2%num1)==0

console.log("O primeiro numero é maior que segundo?", maior)
console.log("O primeiro numero é igual ao segundo?", igual)
console.log("O primeiro numero é divisível pelo segundo?", divisivelprimeiro)
console.log("O segundo numero é divisível pelo primeiro?", divisivelsegundo)