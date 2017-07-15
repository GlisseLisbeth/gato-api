'use strict';
const Games = () => {
  const games             = $('<section id="games"></section>');
  const divPlayers        = $('<div class="players"></div>');
  const rowPlayers        = $('<div class="row text-center"></div>');
  const colPlayers        = $('<div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1"></div>');
  const inputGroupPlayer1 = $('<div class="input-group"></div>');
  const spanInputGroup1   = $('<span class="input-group-addon" id="sizing-addon1">Jugador 1</span>');
  const inputTextPlayer1  = $('<input type="text" class="form-control" placeholder="Ingrese nombre del jugador 1" aria-describedby="sizing-addon1">');
  const inputGroupPlayer2 = $('<div class="input-group"></div>');
  const spanInputGroup2   = $('<span class="input-group-addon" id="sizing-addon2">Jugador 2</span>');
  const inputTextPlayer2  = $('<input type="text" class="form-control" placeholder="Ingrese nombre del jugador 2" aria-describedby="sizing-addon2">');
  const buttonStart       = $('<button type="button" class="btn btn-info btn-lg">Comenzar</button>');

  buttonStart.on('click', (e) =>{
    e.preventDefault();
    localStorage.setItem("player_1",inputTextPlayer1.val());
    localStorage.setItem("player_2",inputTextPlayer2.val());
    location.href="gameCat.html";
  });

  games.append(divPlayers);
  divPlayers.append(rowPlayers);
  rowPlayers.append(colPlayers);
  colPlayers.append(inputGroupPlayer1);
  inputGroupPlayer1.append(spanInputGroup1);
  inputGroupPlayer1.append(inputTextPlayer1);
  colPlayers.append(inputGroupPlayer2);
  inputGroupPlayer2.append(spanInputGroup2);
  inputGroupPlayer2.append(inputTextPlayer2);
  colPlayers.append(buttonStart);
  return games;
}
