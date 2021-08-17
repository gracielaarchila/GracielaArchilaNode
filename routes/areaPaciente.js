var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('areaPaciente', {
    titulo:'Área Paciente',
    item1:' Inicio',
    item2:' Consultorio Virtual',
    item3: ' Pedir Hora',
    item4: ' Contactanos',
    rutaitem1:'/'  ,
    rutaitem2:'/ConsultorioVirtual',
    rutaitem3:'/PedirHoraAfiliado',
    rutaitem4: '/contactanos',
    iconoitem1: 'home',
    iconoitem2: 'person-booth',
    iconoitem3:'calendar-alt',
    iconoitem4:'at',
    logo:'logoPaciente.jpg ', 
    alt:'area medica'

});
});

module.exports = router;
