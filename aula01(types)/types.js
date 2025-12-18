
const produtos = [
     {
          nome: 'o senhor dos anéis',
          tipo: 'livro',
     },
     {
          nome: 'A guerra dos Tronos',
          tipo: 'livro',
     },
     {
          nome: 'God of war',
          tipo: 'livro',
     },
     {
          nome: 'Biblia',
          tipo: 'livro',
     },
     {
          nome: 'as branquelas ',
          tipo: 'filme',
     },
     {
          nome: 'Gramática',
          tipo: 'livro',
     },
     {
          nome: 'fifa 26',
          tipo: 'jogo',
     },
];

// agora, eu quero criar uma função que so retorne livros


function filtrarLivros(dados){
     return dados.filter(item=>item.tipo === 'livro');
}
console.log(filtrarLivros(produtos));