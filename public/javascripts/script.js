//ver mas...
var boton = document.getElementsByClassName("verMas");
var i;
for (i = 0; i < boton.length; i++) {
  boton[i].addEventListener("click", function () {
    var panel = this.nextElementSibling; //elemento siguiente

    if (panel.style.display == '') {
      panel.style.display = 'block';
    } else {
      panel.style.display = ''
    }

  });
}
//animaciones AOS
AOS.init();
//ver doctores
var btnDoc = document.getElementsByClassName("verDoc");
var j;
for (j = 0; j < btnDoc.length; j++) {
  btnDoc[j].addEventListener("click", function () {
    var panel = this.nextElementSibling; //elemento siguiente

    if (panel.style.visibility == '') {
      panel.style.visibility = 'visible';
    } else {
      panel.style.visibility = ''
    }

  });
}

//iniciar sesion o afiliarse
var btnLogin = document.getElementById('btnlogin');
var btnAfil = document.getElementById('btnAfil');
var frente = document.getElementById("frente");
var atras = document.getElementById("atras");
var usuario = document.getElementById("usuario");

if (btnLogin) {
  btnLogin.addEventListener('click', function () {
    frente.style.visibility = "visible"
    atras.style.visibility = "hidden";
    usuario.style.display = "none";
  });
}

if (btnAfil) {
  btnAfil.addEventListener('click', function () {
    atras.style.visibility = "visible";
    frente.style.visibility = "hidden";
    usuario.style.display = "none";
  });
}
//aparecer opciones para iniciar sesion
var boton = document.getElementById("boton");
if (boton) {
  boton.addEventListener('click', function () {
    var opciones = document.getElementById("opciones");
    if (opciones.style.visibility == "") {
      opciones.style.visibility = "visible";
    } else {
      opciones.style.visibility = "";
    }
  });

}

//redirigir ala afiliacion del usuario
var btnPacienteAfil = document.getElementById("btnPacienteAfil");


if (btnPacienteAfil) {
  btnPacienteAfil.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/AfiliacionUsuario";
  });
}
//redirigir al area del Paciente
var btnPaciente = document.getElementById("btnPaciente");

if (btnPaciente) {
  btnPaciente.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/areaPaciente";
  });
}
//redirigir alpago del Paciente
var btnPago = document.getElementById("btnPago");

if (btnPago) {
  btnPago.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "../afiliados/pago.html";
    location.href = "http://localhost:3000/PagarAfiliado";
  });
}
//redirigir al historial del Paciente
var btnHistorial = document.getElementById("btnHistorial");

if (btnHistorial) {
  btnHistorial.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/HistorialAfiliado";
  });
}
//redirigir ahoras Pendientes del Paciente
var btnPendientes = document.getElementById("btnPendientes");

if (btnPendientes) {
  btnPendientes.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/PendientesAfiliado";
  });
}
//redirigir al area del Administrador
var btnAdmin = document.getElementById("btnAdmin");

if (btnAdmin) {
  btnAdmin.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/areaAdministrativo";
  });
}
//redirigir a estadisticas del Administrador
var btnEstadisticas = document.getElementById("btnEstadisticas");

if (btnEstadisticas) {
  btnEstadisticas.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/EstadisticasCM";
  });
}
//redirigir a productidad del Administrador
var btnProductividad = document.getElementById("btnProductividad");

if (btnProductividad) {
  btnProductividad.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/ProductividadCM";
  });
}
//redirigir a personal del Administrador
var btnPersonal = document.getElementById("btnPersonal");

if (btnPersonal) {
  btnPersonal.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/PersonalCM";
  });
}
//redigir a ingresos del Administrador
var btnIngresos = document.getElementById("btnIngresos");

if (btnIngresos) {
  btnIngresos.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/IngresosCM";
  });
}
//redirigir al area del Médico
var btnMedico = document.getElementById("btnMedico");

if (btnMedico) {
  btnMedico.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/areaMedico";
  });
}
//redirigir ala estadistica del Médico
var btnEstadisticaMedico = document.getElementById("btnEstadisticaMedico");

if (btnEstadisticaMedico) {
  btnEstadisticaMedico.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/EstadisticasMedico";
  });
}
//redirigir ala Productividad del Medico
var btnProductividadMedico = document.getElementById("btnProductividadMedico");

if (btnProductividadMedico) {
  btnProductividadMedico.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/ProductividadMedico";
  });
}
//redirigir ala agenda del Médico
var btnAgendaMedico = document.getElementById("btnAgendaMedico");

if (btnAgendaMedico) {
  btnAgendaMedico.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "http://localhost:3000/MiAgenda";
  });
}

//validar formulario
document.getElementById("formulario").addEventListener('submit', function (e) {
  e.preventDefault();
//si el nombre esta vacio
  var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
    }
//si email o telefono esta vacio
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  if ((email.length == 0) && (telefono.length == 0)){
    alert('Introduce tu email o tu telefono, dónde podamos contactarte');
    return;
  }
//tipo de asunto
//si quiere trabajar con nosotros, tiene que enviarnos CV
var select = document.getElementById('asunto');
var value = select.options[select.selectedIndex].value;
  if(value == 'Quiero Trabajar con ustedes'){
    var cv = document.getElementById('adjunto').value;
    if (cv.length == 0) {
    alert('Debes introducir tu CV');
    return;
    } 
  }
  //si la opcion es queja o sugerencia
  //tiene que decirnos cual es
  if(value == 'Quejas o Sugerencias'){
  var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
    alert('Dinos la razón de tu queja o sugerencia');
    return;
    }
  }
  //si la opcion es otro asunto
  //debe decirnos cual
  if(value == 'Otro'){
  var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
    alert('Dinos la razón de por qué nos contatas!');
    return;
    }
  }
//si el valor que introduce de email no es valido
if(email.length != 0){
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ){
        alert("Error: La dirección de correo " + email + " es incorrecta.");
    }
}

//validar el telefono
if(telefono.length != 0){
    if(isNaN(telefono)){
        alert("Su teléfono debe ser un número")
    }
}

  this.submit();
});
