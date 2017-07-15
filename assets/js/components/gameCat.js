'use strict';
let player1 = localStorage.getItem("player_1");
let player2 = localStorage.getItem("player_2");
let repetido = false;
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


  $('.buttonCat').on('click', (e) =>{
      e.preventDefault();
      if (pressTurn == 0 || pressTurn%2 == 0 ){
        $(e.target).css("background","#fc624d");
        $(e.target).css("border-color","#fc624d");
        $(e.target).attr("disabled", true);
        if(state.nroTurn == 0){ // Se caracteriza del primer jugador que empieza a jugar
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

      if( $('#1').attr("disabled") === "disabled" && $('#2').attr("disabled") === "disabled" && $('#3').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#4').attr("disabled") === "disabled" && $('#5').attr("disabled") === "disabled" && $('#6').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#7').attr("disabled") === "disabled" && $('#8').attr("disabled") === "disabled" && $('#9').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#1').attr("disabled") === "disabled" && $('#4').attr("disabled") === "disabled" && $('#7').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#2').attr("disabled") === "disabled" && $('#5').attr("disabled") === "disabled" && $('#8').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#3').attr("disabled") === "disabled" && $('#6').attr("disabled") === "disabled" && $('#9').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#1').attr("disabled") === "disabled" && $('#5').attr("disabled") === "disabled" && $('#9').attr("disabled") === "disabled" ){
        repetido = true;
      }

      if( $('#3').attr("disabled") === "disabled" && $('#5').attr("disabled") === "disabled" && $('#7').attr("disabled") === "disabled" ){
        repetido = true;
      }
      if(repetido== true){
        $('.buttonCat').attr("disabled", true);
        $('.win').attr("display","block");
        $('.labelWin').text("Gano el jugador " + state.players[state.nroTurn]);
        state.winner = state.players[state.nroTurn];
        state.nroTurn = getTurno(state.nroTurn);
        state.loser = state.players[state.nroTurn];
        if (state.movPlayer1 > state.movPlayer2){
          state.number = state.movPlayer1;
        }
        else{
          state.number = state.movPlayer2;
        }
        $.ajax({
           url: 'http://test-ta.herokuapp.com/games',
           dataType: 'json',
           contentType: 'application/json',
           type: 'post',
           data: JSON.stringify({winner_player: state.winner, loser_player:state.loser, number_of_turns_to_win:state.number}),
           processData: false,
           success: function(data,res)
           {
             if(res == 'success') {
               alert("Se registro los datos requeridos");
             }
           },
           error: function (request, error) {
             alert(" Necesitas ingresar los datos requeridos");
           },
         });
      }
      pressTurn++;
      state.nroTurn = getTurno(state.nroTurn);
      $('.name-turno').text("Turno de "+ state.players[state.nroTurn]);

  });

});
