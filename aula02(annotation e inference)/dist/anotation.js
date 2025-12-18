"use strict";
console.log('Hello,word!');
// Annotation(anotação)
// com o TS podemos indicar qual sera o tipo de dado de uma variável através de anotações (:string)
let produto = "Livro";
let numero = 100;
const carro = {
    marca: "Audi",
    portas: 4
};
// Inference(Inferência)
// o TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.
// Funções 
// as anotações serão necessárias qaundo lidamos com funções
function somar(a, b) {
    return a + b;
}
somar(4, 19);
console.log(somar);
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformarPreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(" Analise DE sIsTEmas"));
