function verificarParOuImpar(numero) {
    if(numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
console.log(verificarParOuImpar(3)); 
console.log(verificarParOuImpar(8));
