// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let mailList = [
  "lorenzo.ma@gmail.com",
  "lorenzo.ma@hotmail.com",
  "lorenzo.ma@yhaoo.it",
];
let inLista = false;

let userMail = prompt("Inserisci la tua emali:");

for (let i = 0; i < mailList.length; i++) {
  if (mailList[i] === userMail) {
    inLista = true;
    break;
  }
}
if (inLista === true) {
    console.log("La tua mail è nella lista!")
} else {
    console.log("La tua mail non è presente nella inLista, mi dispiace!")
}


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let tiroGiocatore1 = Math.floor(Math.random() * 6) + 1;
console.log("Il giocatore 1 ha fatto ==> " + tiroGiocatore1);

let tiroGiocatore2 = Math.floor(Math.random() * 6) + 1;
console.log("Il giocatore 2 ha fatto ==> " + tiroGiocatore2);

if (tiroGiocatore1 > tiroGiocatore2) {
    console.log("Complimenti Giocatore 1 hai vinto!")
} else if (tiroGiocatore1 < tiroGiocatore2) {
    console.log("Complimenti Giocatore 2 hai vinto!");
} else {
    console.log("È un pareggio!");
}

