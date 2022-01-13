console.log('JS OK');

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


const lenLista1 = Math.floor(Math.random() * 10);
const lenLista2 = Math.floor(Math.random() * 10);

const lista1 = [];
const lista2 = [];

for (let k = 0; k < lenLista1; k++) {
    let num = Math.floor(Math.random() * 100);
    lista1.push(num);
}

for (let k = 0; k < lenLista2; k++) {
    let num = Math.floor(Math.random() * 100);
    lista2.push(num);
}

console.log(lista1);
console.log(lista2);

const diff = lenLista1 - lenLista2;

console.log(diff);

if (diff < 0) {
    console.log('lista 1 più piccola');

    let limsup = Math.abs(diff);
    for (let k = 0; k < limsup; k++) {
        let num = Math.floor(Math.random() * 100);
        lista1.push(num);
    }


} else if (diff > 0) {
    console.log('lista 2 più piccola');

    for (let k = 0; k < diff; k++) {
        let num = Math.floor(Math.random() * 100);
        lista2.push(num);
    }

} else {
    console.log('lista 1 e 2 sono uguali');
}

console.log(lista1);
console.log(lista2);

