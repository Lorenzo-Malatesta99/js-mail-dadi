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