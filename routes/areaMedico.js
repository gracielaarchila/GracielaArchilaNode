var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('areaMedico', {
    titulo: 'Área Médico',
    item1:' Inicio',
    item2:' Mis Pacientes',
    item3: ' Mis Informes',
    item4: ' Pacientes Hoy',
    rutaitem1:'/'  ,
    rutaitem2:'/MisPacientes',
    rutaitem3:'/MisInformes',
    rutaitem4: '/pacientesHoy',
    iconoitem1: 'home',
    iconoitem2: 'user-injured',
    iconoitem3:'file-alt',
    iconoitem4:'calendar-day',
    logo:'logoMedico.png', 
    alt:'area medica'

});
});

module.exports = router;
