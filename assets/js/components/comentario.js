let gameId = getParameterByName('game_id');

var api = 'http://test-ta.herokuapp.com/games/'+gameId+'/comments';

const render = (rootResponses) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Comentarios());
  rootResponses.append(wrapper);
}
const state ={
  comments: null,
}

$( _ => {
   $.getJSON(api, (dataComments) =>{
     state.comments = dataComments;
     console.log(state.comments);
     render($('#root-comentarios'));
   });
});
