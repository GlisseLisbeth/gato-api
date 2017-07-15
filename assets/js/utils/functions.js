/**
 * @param String name
 * @param String turno
 * @return String
 */
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getTurnoAleatorio(players) {
 var aleatorio = Math.floor(Math.random()* (players.length));
 return aleatorio;
}

function getTurno(turno) {
 return turno = turno == 0 ? 1 : 0;
}
