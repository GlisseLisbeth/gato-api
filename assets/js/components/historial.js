'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Historials());
  root.append(wrapper);
}

const state = {
  historials: null,
}
$( _ => {
  const api="http://test-ta.herokuapp.com/games";

   $.getJSON(api, (dataHistorials) =>{
     state.historials = dataHistorials;
     render($('#root-historials'));
   });
});
