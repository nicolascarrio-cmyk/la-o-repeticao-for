//Coletando numeros para o intervalo
let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite outro numero: "));

//Variavel para armazenar o resultado
let resultado = "";

//Verificação para evitar erro de intervalo +/- na condição
if (num1 > num2){
    let temp = num1;
    num1 = {num2};
    num2 = {temp};
}

//laço de repetição para obter valores pares
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0){
        resultado = (`${resultado} ${i}`);
    }
}
//Exibir valores
alert(resultado)