console.log('JS OK');

/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
*/

// ! CICLO FOR

let sum = 0;
for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (!isNaN(userNumber)) {
        sum += userNumber;
        console.log(sum);
    }
}

// ! CICLO WHILE 

let sum = 0;
let i = 1;

while (i < 5) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (!isNaN(userNumber)) {
        sum += userNumber;
        console.log(sum);
    }

    i++;
}

// ! CICLO DO WHILE
let sum = 0;
let i = 1;

do {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    if (!isNaN(userNumber)) {
        sum += userNumber;
        console.log(sum);
    }
} while (i < 5);




