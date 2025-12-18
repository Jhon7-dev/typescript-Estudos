// tipos (Types)
// o tipo define o que podemos fazer com um dado.
// @ts-check
const frase = 'Front-end';
const total = 100.05;
const empresas = ['apple','microsoft'];
frase.toLowerCase();
// total.toLowerCase();

total.toFixed();
const t = total.toFixed();
console.log(t+10);

empresas.map((empresa => empresa.toLowerCase()));

const body = document.body;

body.style.background="#000"//mudou o bg para black

const button = document.querySelector('button');
if( button ){
     button.click();
}

frase.toLowerCase();
//frase.toFixed();
total.toFixed();
// total.toLowerCase();
