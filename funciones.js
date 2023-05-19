window.onload = function() {
    var nombre = document.getElementById('txtNombre');
    var email = document.getElementById('txtEmail');
    var mensaje = document.getElementById('txtMensaje'); 
    nombre.value = '';
    email.value = '';
    mensaje.value = '';
}

/*Validamos formulario*/
function validarFormulario() {
    var nombre = document.getElementById("txtNombre").value;
    var email = document.getElementById("txtEmail").value;
    var mensaje = document.getElementById("txtMensaje").value;
    if (nombre === ""  || email === "" || mensaje === "") {
      return false;
    } 
    else{
        return true;
    }
}


/*Esta funcion valida si el formulario esta completo. Si esta completo manda el mail, sino muestra un cartel aclarando que faltan datos! */ 
function enviarCorreo(event) {
  event.preventDefault(); // Evita que el formulario se envie sin antes cargarle valores

  var nombre = document.getElementById('txtNombre').value;
  var email = document.getElementById('txtEmail').value;
  var mensaje = document.getElementById('txtMensaje').value;

  var formularioValido=validarFormulario();
  if(formularioValido){
  // Creamos correo electrónico con los datos prellenados
  var asunto = encodeURIComponent(nombre + ' (' + email + ')');
  var cuerpo = encodeURIComponent(mensaje);
  var mailtoUrl = 'mailto:noesouza@outlook.es?subject=' + asunto + '&body=' + cuerpo;

  // Abrimos correo con los campos prellenados
  window.location.href = mailtoUrl;
    
  }
  else{
    alert("Por favor, completá todos los campos.");
   }
}


