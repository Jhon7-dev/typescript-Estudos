

const input = document.querySelector('input'); // selecionei o input

const total = localStorage.getItem("total");
input.value = total;




function calcularGanho(value){
     
     const p = document.querySelector("p");
     p.innerText = `ganho total: ${value + 100 - value*0.2} `;
     localStorage.set("total",value); //o local store guarda e mostra o valor
     
     
}
// input.addEventListener('keyup', totalMudou);

// quero calcular o valor final
function totalMudou(){
     const p = document.querySelector("p");
     const value = Number(input.value);
     // o value foi declarado como const value
     // o valor dentro do input é acessado por "input.value"
     p.innerText = `ganho total: ${value + 100 - value*0.2} `;
     localStorage.set("total",value);

     // calcularGanho(value);
     
}
input.addEventListener('keyup', totalMudou);