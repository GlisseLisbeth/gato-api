'use strict';

const ItemHistorial = (historial, update) => {

  const itemHistorial    = $('<div class=" box historial-'+historial.id+ ' text-center"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const content          = $('<span><strong>'+ historial.winner_player+ '</strong> le gano a <strong>'+historial.loser_player+' en '+historial.number_of_turns_to_win+'</strong> movimientos </span>');
  const divResponses     = $('<div></div>');
  const viewResponses    = $('<a class="comentario" href="comentario.html?game_id='+historial.id+'" class="pos-right">Comentar</a>');

  viewResponses.on('click', (e) => {
    e.preventDefault();
    localStorage.setItem("winner_player", historial.winner_player);
    localStorage.setItem("loser_player", historial.loser_player);
    localStorage.setItem("number_of_turns_to_win", historial.number_of_turns_to_win);
    location.href="comentario.html?game_id="+historial.id;
    update();
  })
  itemHistorial.append(colContent);
  colContent.append(content);
  content.append(divResponses);
  divResponses.append(viewResponses);
  colContent.append(viewResponses);
  return itemHistorial;
}

const Historials = (update) => {
  const historiales       = $('<section class="historials"></section>');
  const container         = $('<div class="container"></div>');
  const row               = $('<div class="row"></div>');
  const colTitle          = $('<div class="col-md-9 text-center"></div>');
  const titleHistorials   = $('<h1>Historial</h1>');
  const historialsDiv     = $('<div class="content-historial"></div>');

  state.historials.forEach((historial) => {
    historialsDiv.prepend(ItemHistorial(historial, update));
  });

  historiales.append(container);
  container.append(row);
  row.append(colTitle);
  colTitle.append(titleHistorials);
  historiales.append(historialsDiv);
  return historiales;
}
