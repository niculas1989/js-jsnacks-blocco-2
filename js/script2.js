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

// if (userNumber % 2) {
//     console.log('Il tuo numero è pari');
//     const numberEven = userNumber + 2;
//     console.log(`Il prossimo numero pari è ${numberEven}`);
// } else {
//     alert('Inserisci un altro numero');
//     let userNumber = parseInt(prompt('Inserisci un numero'));
//     console.log(userNumber);
// }
