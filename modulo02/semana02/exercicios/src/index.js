function filtrarNumerosPares(numeros) {
    let numerosPares = numeros.filter((numero) => numero % 2 === 0);
    return(numerosPares)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros)
console.log(filtrarNumerosPares(numeros)); 