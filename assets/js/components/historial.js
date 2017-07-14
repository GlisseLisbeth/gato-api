'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Historials( _ => {
    render(root);
  }));
  root.append(wrapper);
}

const state = {
  historials: null,
  historialSelected: null,
}
$( _ => {
  const api="http://test-ta.herokuapp.com/games";

   $.getJSON(api, (dataHistorials) =>{
     state.historials = dataHistorials;
     render($('#root-historials'));
   });
});
