console.log('JS OK');

/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/
console.log('JS ok')
const fakeInvites = [];
const listOne = ['nicolas', 'matteo', 'vasco'];
const listTwo = ['maranzano', 'imbimbo', 'rossi'];

for (let k = 0; k < listOne.length && listTwo.length; k++) {
    let listRandom = listOne[k] + '' + listTwo[k];
    console.log(listRandom);
}
