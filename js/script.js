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
    }
}
console.log(sum);

// // ! CICLO WHILE 

// let sum = 0;
// let i = 0;

// while (i < 5) {
//     let userNumber = parseInt(prompt('Inserisci un numero'));
//     if (!isNaN(userNumber)) {
//         sum += userNumber;
//     }

//     i++;
// }
// console.log(sum);

// ! CICLO DO WHILE
// let sum = 0;
// let i = 0;

// do {
//     let userNumber = parseInt(prompt('Inserisci un numero'));
//     if (!isNaN(userNumber)) {
//         sum += userNumber;
//     }
//     i++
// } while (i < 5);
// console.log(sum);




