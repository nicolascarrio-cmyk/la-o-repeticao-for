let numero = parseInt(prompt("Tabuada de qual número?"));

alert(` Tabuada do ${numero} ---`);

tabuada = "";

for (let i = 1; i <= 10; i++) {
    tabuada = tabuada + (`${numero} x ${i} = ${numero * i}\n`);
}

alert(tabuada)