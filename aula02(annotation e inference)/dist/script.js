"use strict";
const input = document.querySelector("input"); // selecionei o input
const total = localStorage.getItem("total");
if (input && total) {
    // tenho que primeiro verificar se input existe e o "total" também
    input.value = total;
    calcularGanho(Number(input.value));
    // aqui vai far um problema que considera "input.value" como string, para isso eu tenho que considerar-lo como number passsando o Number como   calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    // tenho que verificar se p existe
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2} `;
    }
    localStorage.set("total", value); //o local store guarda e mostra o valor
}
// input.addEventListener('keyup', totalMudou);
// quero calcular o valor final
function totalMudou() {
    const p = document.querySelector("p");
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", input.value);
        calcularGanho(Number(value));
        // no calcular ganho preciso colocar como number
    }
    // o value foi declarado como const value
    // o valor dentro do input é acessado por "input.value"
    // ============
    //   p.innerText = `ganho total: ${value + 100 - value * 0.2} `;
    //   localStorage.set("total", value);
    // calcularGanho(value);
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
