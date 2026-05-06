let somaNotas = 0;
for (let i = 1; i <= 5; i++) {
    let notas = parseFloat(prompt(`Digite a ${i}° nota: ` ));
    somaNotas += notas;
}
let media = somaNotas / 5;
alert("A media é: " + media);