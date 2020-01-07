var dado1;
var dado2;

dado1 = Math.floor(Math.random() * 6 + 1);
dado2 = Math.floor(Math.random() * 6 + 1);
alert ("al primo tiro è uscito " + dado1)
alert ("al secondo tiro è uscito " + dado2)

if (dado1 == dado2) {
  alert ("è un pareggio")
} else if (dado1 > dado2) {
  alert ("vince il primo giocatore")
} else {
  alert ("vince il secondo giocatore")
}
