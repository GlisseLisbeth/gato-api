'use strict';
const ItemGameCat = (update, pos) => {
  const itemGameCat = $('<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>');
  const buttonGameCat         = $('<button type="button" id="'+pos+'" class="buttonCat btn btn-info btn-lg"></button>');

  itemGameCat.append(buttonGameCat);
  return itemGameCat;
}
const GameCats = (update) => {
  const games       = $('<section class="games"></section>');
  const container         = $('<div class="container"></div>');
  const rowTurn              = $('<div class="row text-center"></div>');
  const colTitleTurn      = $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>');
  const turn              = $('<u><h1 class="name-turno"> Turno de '+state.turn+'</h1></u>');

  const rowGames              = $('<div class="row text-center"></div>');
  const colGame      = $('<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const rowGameCats      = $('<div class="row"></div>');
  for(let i = 0; i < 9; i++){
    rowGameCats.append(ItemGameCat(update, i+1));
  }
  const colMov      = $('<div class="move col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>');
  const labelMovPlayer1 = $('<label class="move-player1">Movimientos '+state.player1+' '+state.movPlayer1+'</label>');
  const labelMovPlayer2 = $(' <label  class="move-player2">Movimientos '+state.player2+' '+state.movPlayer2+'</label>');
  games.append(container);
  container.append(rowTurn);
  rowTurn.append(colTitleTurn);
  colTitleTurn.append(turn);
  container.append(rowGames);
  rowGames.append(colGame);
  colGame.append(rowGameCats);
  rowGames.append(colMov);
  colMov.append(labelMovPlayer1);
  colMov.append(labelMovPlayer2);
  return games;
}
