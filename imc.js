let peso = parseFloat(prompt("informe o peso:"));
let altura =  parseFloat(prompt("informe a altura:")) ;

let imc = (peso/(altura*altura));

document.write("o imc é igual a ", imc)