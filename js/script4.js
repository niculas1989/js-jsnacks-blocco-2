console.log('JS OK');

/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const num = 10;
const insieme = [];
let sum = 0;


for (let y = 0; y < num; y++) {
    let rnd = Math.floor(Math.random() * 101);
    insieme.push(rnd);
    if (y % 2 != 0) {
        sum += rnd;
    }
}


console.log(insieme);
console.log(sum);









