console.log('JS OK');
console.log('Questo è il terzo script.');
/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/
// const fakeInvites = [];
// const firstNames = ['nicolas', 'matteo', 'vasco', 'linda', 'adriana'];
// const lastNames = ['maranzano', 'imbimbo', 'rossi', 'bettini', 'arminio'];
// console.log(fakeInvites);

// while (fakeInvites.lenght < 3) {
//     const randNum1 = Math.floor(Math.random() * firstNames.lenght);
//     const randNum2 = Math.floor(Math.random() * lastNames.lenght);

//     const name = firstNames[randNum1];
//     const lastName = lastNames[randNum2];

//     const fakePerson = `${name} ${lastName}`;

//     if (!fakeInvites.includes(fakePerson)) {
//         fakeInvites.push(fakePerson);
//     }
// }

const fakeInvites = [];
const firstNames = ['nicolas', 'matteo', 'vasco', 'linda', 'adriana'];
const lastNames = ['maranzano', 'imbimbo', 'rossi', 'bettini', 'arminio'];

while (fakeInvites.length < 3) {
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);

    const name = firstNames[randNum1];
    const lastName = lastNames[randNum2];

    const fakePerson = `${name} ${lastName}`;

    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson);
    }
}

console.log(fakeInvites);
