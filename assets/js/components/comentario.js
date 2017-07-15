'use strict';

let gameId = getParameterByName('game_id');
const api = 'http://test-ta.herokuapp.com/games/'+gameId+'/comments';

let winner = localStorage.getItem("winner_player");
let loser = localStorage.getItem("loser_player");
let number = localStorage.getItem("number_of_turns_to_win");

const render = (rootResponses) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Comentarios( _ => {
    render(rootResponses);
  }));
  rootResponses.append(wrapper);
}

const state ={
  idGame: null,
  winner: null,
  loser: null,
  number: null,
  comments: null
}

$( _ => {
  $.getJSON(api, (dataComments) =>{
     state.comments = dataComments;
     state.idGame = gameId;
     state.winner = winner;
     state.loser = loser;
     state.number = number;
     render($('#root-comentarios'));
   });
});
