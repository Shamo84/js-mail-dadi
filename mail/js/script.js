var ListaEmail = ['topolino@gmail.com', 'paperino@gmail.com', 'minni@gmail.com', 'pluto@gmail.com', 'paperone@gmail.com', 'quiquoqua@gmail.com', 'paperoga@gmail.com'];
var trovato = false;

var EmailUtente;
EmailUtente = prompt('inserisci la tua email:');

for (var i = 0; i < ListaEmail.length; i++) {
  if (ListaEmail[i] == EmailUtente) {
    trovato = true;
  }
}

if (trovato  == true) {
  alert('sei nella lista, puoi entrare.');
} else {
  alert('non sei nella lista, non puoi entrare');
}
