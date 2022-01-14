console.log('JS OK');

/*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/


//! VERSIONE normale

let userNumber = parseInt(prompt('Inserisci un numero'));

if (userNumber % 2 !== 0) {
    const numberEven = userNumber + 1;
    console.log(numberEven);
} else {
    console.log(userNumber);
}


//! WHILE
/*
let askNumb = parseInt(prompt('Inserisci un numero'));

while (askNumb % 2) {
    askNumb += 1;
}

console.log(askNumb);
*/