var ListaEmail = ['topolino@gmail.com', 'paperino@gmail.com', 'minni@gmail.com', 'pluto@gmail.com', 'paperone@gmail.com', 'quiquoqua@gmail.com', 'paperoga@gmail.com'];

var EmailUtente;
EmailUtente = prompt('inserisci la tua email:');
var messaggio = "non sei nella lista, non puoi entrare";

for (var i = 0; i < ListaEmail.length; i++) {

  if (ListaEmail[i] == EmailUtente) {
    i = ListaEmail.length;
    messaggio = "sei nella lista, puoi entrare";
  }
}

  alert(messaggio);
