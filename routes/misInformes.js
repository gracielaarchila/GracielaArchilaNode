var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('MisInformes', {
    titulo: 'Mis Informes',
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
    logo:'logoMedico.png', 
    alt:'Personal Médico'

  });
});

module.exports = router;
