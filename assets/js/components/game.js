'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Games());
  root.append(wrapper);
}

$( _ => {
      render($('#root-game'));
});
