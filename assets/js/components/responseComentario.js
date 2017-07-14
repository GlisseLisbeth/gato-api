'use strict';

const ItemComentario = (comentario) => {
  console.log(comentario);
  const itemComentario    = $('<div class=" box comentario-'+comentario.id+ ' text-center"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const content          = $('<div><span>'+ comentario.name+ ' dice:</div><div>'+comentario.content+'</div>');

  itemComentario.append(colContent);
  colContent.append(content);
  return itemComentario;
}

const Comentarios = () => {
  const comentarios       = $('<section class="comentarios"></section>');
  const container         = $('<div class="container"></div>');
  const row               = $('<div class="row"></div>');
  const colTitle          = $('<div class="col-md-9 text-center"></div>');
  const titleComentarios   = $('<h1>Historial</h1>');
  const comentariosDiv     = $('<div class="content-comentario"></div>');

  console.log(state.comments);
  state.comments.forEach((comentario) => {
    console.log(comentario);
    comentariosDiv.append(ItemComentario(comentario));
  });

  comentarios.append(container);
  container.append(row);
  row.append(colTitle);
  colTitle.append(titleComentarios);
  comentarios.append(comentariosDiv);
  return comentarios;
}
