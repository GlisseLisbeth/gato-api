'use strict';

const ItemComentario = (comentario) => {
  console.log(comentario);
  const itemComentario    = $('<div class=" box comentario-'+comentario.id+ ' text-center"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const content          = $('<div><span>'+ comentario.name+ ' dice:</div><div>'+comentario.content+'</div>');

  itemComentario.append(colContent);
  colContent.prepend(content);
  return itemComentario;
}

const Comentarios = (update) => {
  const comentarios       = $('<section class="comentarios"></section>');
  const container         = $('<div class="container"></div>');
  const row               = $('<div class="row"></div>');
  const colTitle          = $('<div class="col-md-9 text-center"></div>');
  const titleComentarios  = $('<h1>Comentarios</h1>');
  const contentHistorial  = $('<span><strong>'+ state.winner+ '</strong> le gano a <strong>'+state.loser+' en '+state.number+'</strong> movimientos </span>');
  const buttonAdd         = $('<button type="button" class="btn btn-info btn-lg" id="modalThemeNew">Agregar comentario</button>');
  const modal             = $('<div id="modalThemeNew" class="modal"></div>');
  const modalDialog       = $('<div class="modal-dialog role="document"></div>');
  const formModal         = $('<form id="formNewTheme"></form')
  const modalContent      = $('<div class="modal-content"></div>');
  const modalHeader       = $('<div class="modal-header"</div>');
  const buttonClose       = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
  const titleHeader       = $('<h4 class="modal-title" id="modalLabel">Agregar comentario</h4>');
  const modalBody         = $('<div class="modal-body"></div>');
  const formGroup         = $('<div class="form-group"></div>');
  const labelName         = $('<label for="theme-name">Tu nombre: </label>');
  const divName           = $('<div></div>')
  const inputName         = $('<input type="text" class="form-control" id="theme-name" placeholder="Ingrese su nombre">');
  const labelContent      = $('<div><label for="theme-content">Tu comentario: </label></div>');
  const inputContent      = $('<textarea name="textarea" placeholder="Ingrese su comentario" rows="10" cols="50"></textarea>');
  const modalFooter       = $('<div class="modal-footer"></div>');
  const buttonModalClose  = $('<button type="button" class="btn btn-default">Cancelar</button>');
  const buttonModalAdd    = $('<button type="submit" class="btn btn-success">Agregar</button>');
  const comentariosDiv    = $('<div class="content-comentario"></div>');

  buttonAdd.on('click', (e) =>{
    e.preventDefault();
    modal.css("display", "block");
  });

  buttonModalAdd.on('click', (e) =>{
    e.preventDefault();
    $.ajax({
       url: 'http://test-ta.herokuapp.com/games/'+state.idGame+'/comments',
       dataType: 'json',
       contentType: 'application/json',
       type: 'post',
       data: JSON.stringify({name: inputName.val(), content:inputContent.val(), game_id:state.idGame, created_at: new Date(),  update_at: new Date()}),
       processData: false,
       success: function(data,res)
       {
         if(res == 'success') {
           modal.css("display","none");
          comentariosDiv.prepend(ItemComentario(data));
          update();
         }
       },
       error: function (request, error) {
         alert(" Necesitas ingresar los datos requeridos");
       },
     });

  });

  buttonModalClose.on('click', (e) =>{
    modal.css("display", "none");
  });
  buttonClose.on('click', (e) =>{
    modal.css("display", "none");
  });

  state.comments.forEach((comentario) => {
    comentariosDiv.prepend(ItemComentario(comentario));
  });

  comentarios.append(container);
  container.append(row);
  row.append(colTitle);
  row.append(buttonAdd);
  colTitle.append(titleComentarios);
  colTitle.append(contentHistorial);
  comentarios.append(modal);
  modal.append(modalDialog);
  modalDialog.append(formModal);
  formModal.append(modalContent);
  modalContent.append(modalHeader);
  modalHeader.append(buttonClose);
  modalHeader.append(titleHeader);
  modalContent.append(modalBody);
  modalBody.append(formGroup);
  formGroup.append(labelName);
  divName.append(inputName);
  formGroup.append(divName);
  formGroup.append(labelContent);
  formGroup.append(inputContent);
  modalContent.append(modalFooter);
  modalFooter.append(buttonModalClose);
  modalFooter.append(buttonModalAdd);
  comentarios.append(comentariosDiv);
  return comentarios;
}
