console.log('Hello,word!');

// Annotation(anotação)
// com o TS podemos indicar qual sera o tipo de dado de uma variável através de anotações (:string)

let produto: string  = "Livro";
let  numero: number  = 100;

const carro: {
     marca: string;
     portas: number;
}={
     marca: "Audi",
     portas:4
};


// Inference(Inferência)

// o TS consegue inferir o tipo de dado de expressões em JavaScript. Sempre que ele conseguir inferir, você não precisa fazer a anotação do dado.


// Funções 
// as anotações serão necessárias qaundo lidamos com funções

function somar(a:number,b:number){
     return a+b;
}
somar(4,19);
console.log(somar);

const nintendo= {
     nome: 'Nintendo',
     preco:'2000',
};
function transformarPreco(produto:{nome:string;preco:string}){
     produto.preco = 'R$' + produto.preco;
     return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);


function normalizarTexto(texto: string ){
    return texto.trim().toLowerCase();
} 
console.log(normalizarTexto(" Analise DE sIsTEmas"));