//chiedi all’utente il cognome
var surname = prompt('inserisci il tuo cognome?');
console.log(surname);

//inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var array = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(array);

array.push(surname);
console.log(array);

array.sort();
console.log(array);



//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova