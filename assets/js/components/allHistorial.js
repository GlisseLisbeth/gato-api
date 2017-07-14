'use strict';

const ItemHistorial = (historial) => {
  console.log(historial);
  const itemHistorial    = $('<div class=" box historial-'+historial.id+ ' text-center"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const content          = $('<span><stron>'+ historial.winner_player+ '</strong> le gano a <strong>'+historial.loser_player+'</strong> movimientos </span>');
  const viewResponses = $('<div><a href="comentario.html?game_id='+historial.id+'" class="pos-right">Comentar</a></div>');

  itemHistorial.append(colContent);
  colContent.append(content);
  colContent.append(viewResponses);
  return itemHistorial;
}

const Historials = () => {
  const historiales       = $('<section class="historials"></section>');
  const container         = $('<div class="container"></div>');
  const row               = $('<div class="row"></div>');
  const colTitle          = $('<div class="col-md-9 text-center"></div>');
  const titleHistorials   = $('<h1>Historial</h1>');
  const historialsDiv     = $('<div class="content-historial"></div>');

  console.log(state.historials);
  state.historials.forEach((historial) => {
    console.log(historial);
    historialsDiv.append(ItemHistorial(historial));
  });

  historiales.append(container);
  container.append(row);
  row.append(colTitle);
  colTitle.append(titleHistorials);
  historiales.append(historialsDiv);
  return historiales;
}
