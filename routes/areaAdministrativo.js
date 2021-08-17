var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('areaAdministrativo', {
    titulo: 'Área Administrativo',
    item1:' Inicio',
    item2:' Pacientes',
    item3: ' Buscar',
    item4: ' Editar Contacto',
    rutaitem1:'/'  ,
    rutaitem2:'/TodosPacientes',
    rutaitem3:'/Buscar',
    rutaitem4: '/EditarContacto',
    iconoitem1: 'home',
    iconoitem2: 'user-injured',
    iconoitem3:'search',
    iconoitem4:'edit',
    logo:'logoAdministrativo.jpg', 
    alt:'area administrativa'

});
});

module.exports = router;
