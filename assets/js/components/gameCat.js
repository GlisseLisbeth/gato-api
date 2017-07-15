'use strict';
let player1 = localStorage.getItem("player_1");
let player2 = localStorage.getItem("player_2");

const render = (rootGameCat) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(GameCats( _ => {
    render(rootGameCat);
  }));
  rootGameCat.append(wrapper);
}

 const state ={
    players: null,
    player1: null,
    player2: null,
    players: null,
    nroTurn: null,
    turn: null,
    movPlayer1: 0,
    movPlayer2: 0,
    winner: null,
    loser: null,
    number: null,
}

$( _ => {
  let pressTurn = 0;

  state.player1    = player1;
  state.player2    = player2;
  state.players    = [player1, player2];

  if(state.movPlayer1 == 0 && state.movPlayer2 == 0){
      let turno = getTurnoAleatorio([player1,player2]);
      state.turn       = state.players[turno];
      state.nroTurn    = turno;
    }
  render($('#root-game-cat'));



  $(this).on('click', (e) =>{
      e.preventDefault();
      if (pressTurn == 0 || pressTurn%2 == 0 ){
        $(e.target).css("background","#fc624d");
        $(e.target).css("border-color","#fc624d");
        $(e.target).attr("disabled", true);
        if(state.nroTurn == 0){
          state.movPlayer1++;
          $('.move-player1').text("Movimientos "+state.player1+" " +state.movPlayer1);
        }
        else{
          state.movPlayer2++;
          $('.move-player2').text("Movimientos "+state.player2+" " +state.movPlayer2);
        }
      }
      else if (pressTurn == 1 || pressTurn%2 != 0){
        $(e.target).css("background","#a3de83");
        $(e.target).css("border-color","#a3de83");
        $(e.target).attr("disabled", true);
        if(state.nroTurn == 0){
          state.movPlayer1++;
          $('.move-player1').text("Movimientos "+state.player1+" " +state.movPlayer1);
        }
        else{
          state.movPlayer2++;
          $('.move-player2').text("Movimientos "+state.player2+" " +state.movPlayer2);
        }
      }
      pressTurn++;
      state.nroTurn = getTurno(state.nroTurn);
      $('.name-turno').text("Turno de "+ state.players[state.nroTurn]);
  });

});
