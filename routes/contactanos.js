var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactanos', {
    isItem4:true,
    titulo: 'Contactanos',
    item1:' Inicio',
    item2:' Nosotros',
    item3: ' Pedir Hora',
    item4: ' Contactanos',
    rutaitem1:'/'  ,
    rutaitem2:'/nosotros',
    rutaitem3:'/pedirHora',
    rutaitem4: '/contactanos',
    iconoitem1: 'home',
    iconoitem2: 'users',
    iconoitem3:'calendar-alt',
    iconoitem4:'at',
    logo:'logo.jpg', 
    alt:'telemedicina'
  });
});

router.post('/', async(req, res, next) =>{
//console.log(req.body.asunto);
var nombre = req.body.nombre;
var email = req.body.email;
var telefono = req.body.telefono;
var asunto = req.body.asunto;
var adjunto = req.body.adjunto;
var mensaje = req.body.mensaje;
//COMO HAY TRES OPCIONES DE ASUNTO,
//QUIERO ENVIAR TRES MENSAJES html
//inicializo la variale
var html;
if(asunto == 'Quiero Trabajar con ustedes'){
  html="Estimados, mi Nombre es: " + nombre + " y el motivo por el que los contacto, es que me gustaria trabajar con ustedes, <br> por tal motivo, les anexo mi CV," + adjunto +"<br> espero que se comuniquen conmigo " +email +" o " + telefono;
  }
if(asunto == 'Quejas o Sugerencias'){
  html="Estimados, mi Nombre es: " + nombre + " y el motivo por el que los contacto, es que me gustaria hacerles una observación, <br>" + mensaje +"<br> espero que se comuniquen conmigo " +email +" o " + telefono;
  
}
if(asunto == 'Otro'){
  html="Estimados, mi Nombre es: " + nombre + " y el motivo por el que los contacto, es: <br>" + mensaje +"<br> espero que se comuniquen conmigo " +email +" o " + telefono;
  
}

var obj = {
to: 'archilagraciela@gmail.com',

subject:asunto,

html:html

}
var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});//FIN DE TRANSPORTE

var info = await transport.sendMail(obj);
  
res.render('contactanos', {
    message1 :'Mensaje Enviado',
    message2 : 'Gracias por Contactarnos',
    enviado:'true',
    item1:' Inicio',
    item2:' Nosotros',
    item3: ' Pedir Hora',
    item4: ' Contactanos',
    rutaitem1:'/'  ,
    rutaitem2:'/nosotros',
    rutaitem3:'/pedirHora',
    rutaitem4: '/contactanos',
    iconoitem1: 'home',
    iconoitem2: 'users',
    iconoitem3:'calendar-alt',
    iconoitem4:'at',
    logo:'logo.jpg', 
    alt:'telemedicina'
})
})//FIN DE ROUTER
module.exports = router;
