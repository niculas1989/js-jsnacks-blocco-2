console.log('JS OK');

/*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/

let userNumber = parseInt(prompt('Inserisci un numero'));

if (userNumber % 2 != 0) {
    const numberEven = userNumber + 1;
    console.log(numberEven);
} else {
    console.log(userNumber);
}
