let soma = "";
let numero = Number(prompt("Digite um numero:"));
for (let i = 1; i <= numero; i++) {
    soma = (`${soma} ${i}`);
}

alert ("A soma total é:" + soma);
