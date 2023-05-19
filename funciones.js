window.onload = function() {
    var nombre = document.getElementById('txtNombre');
    var tel = document.getElementById('txtTel');
    var email = document.getElementById('txtEmail');
    var mensaje = document.getElementById('txtMensaje'); 
    nombre.value = '';
    tel.value = '';
    email.value = '';
    mensaje.value = '';
}

function validarFormulario() {
    var nombre = document.getElementById("txtNombre").value;
    var tel = document.getElementById("txtTel").value;
    var email = document.getElementById("txtEmail").value;
    var mensaje = document.getElementById("txtMensaje").value;
    if (nombre === "" || tel === "" || email === "" || mensaje === "") {
      return false;
    } 
    else{
        return true;
    }
}

function enviarCorreo() {
    var formularioValido = validarFormulario();
    if (formularioValido) {
      return true;
    } else {
    alert("Por favor, completá todos los campos.");
      return false; 
    }
  }


