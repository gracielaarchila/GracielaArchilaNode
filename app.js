  var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');//variable que guarda la ruta de index.js
var NosotrosRouter = require('./routes/Nosotros');//variable que guarda la ruta de nosotros.js
var PedirHoraRouter = require('./routes/PedirHora');//variable que guarda la ruta de PedirHora.js
var ContactanosRouter = require('./routes/Contactanos');//variable que guarda la ruta de Contactanos.js
//variables para las sesiones
var SesionesPacienteRouter = require('./routes/sesionPaciente');//variable que guarda la ruta de SesionesPaciente.js
var SesionesMedicoRouter = require('./routes/sesionMedico');//variable que guarda la ruta de SesionesMedico.js
var SesionesAdministrativoRouter = require('./routes/sesionAdministrativo');//variable que guarda la ruta de SesionesAdministrativo.js
//variables para las areas
var areaPacienteRouter = require('./routes/areaPaciente');//variable que guarda la ruta de SesionesAdministrativo.js
var areaMedicoRouter = require('./routes/areaMedico');//variable que guarda la ruta de SesionesAdministrativo.js
var areaAdministrativoRouter = require('./routes/areaAdministrativo');//variable que guarda la ruta de SesionesAdministrativo.js

//variables area paciente
var ConsultorioVirtualRouter = require('./routes/ConsultorioVirtual');//variable que guarda la ruta de SesionesAdministrativo.js
var PedirHoraAfiliadoRouter = require('./routes/PedirHoraAfiliado');//variable que guarda la ruta de SesionesAdministrativo.js
var PagarAfiliadoRouter = require('./routes/PagarAfiliado');//variable que guarda la ruta de SesionesAdministrativo.js
var HistorialAfiliadoRouter = require('./routes/HistorialAfiliado');//variable que guarda la ruta de SesionesAdministrativo.js
var PendientesAfiliadoRouter = require('./routes/PendientesAfiliado');//variable que guarda la ruta de SesionesAdministrativo.js
var AfiliacionUsuarioRouter = require('./routes/AfiliacionUsuario');//variable que guarda la ruta de SesionesAdministrativo.js
//variables area medico
var misPacientesRouter = require('./routes/misPacientes');//variable que guarda la ruta de SesionesAdministrativo.js
var misInformesRouter = require('./routes/misInformes');//variable que guarda la ruta de SesionesAdministrativo.js
var pacientesHoyRouter = require('./routes/pacientesHoy');//variable que guarda la ruta de SesionesAdministrativo.js
var EstadisticasMedicoRouter = require('./routes/EstadisticasMedico');//variable que guarda la ruta de SesionesAdministrativo.js
var ProductividadMedicoRouter = require('./routes/ProductividadMedico');//variable que guarda la ruta de SesionesAdministrativo.js
var MiAgendaRouter = require('./routes/MiAgenda');//variable que guarda la ruta de SesionesAdministrativo.js
//variables are administrativo
var TodosPacientesRouter = require('./routes/TodosPacientes');//variable que guarda la ruta de SesionesAdministrativo.js
var BuscarRouter = require('./routes/Buscar');//variable que guarda la ruta de SesionesAdministrativo.js
var EditarContactoRouter = require('./routes/EditarContacto');//variable que guarda la ruta de SesionesAdministrativo.js
var EstadisticasCMRouter = require('./routes/EstadisticasCM');//variable que guarda la ruta de SesionesAdministrativo.js
var ProductividadCMRouter = require('./routes/ProductividadCM');//variable que guarda la ruta de SesionesAdministrativo.js
var PersonalCMRouter = require('./routes/PersonalCM');//variable que guarda la ruta de SesionesAdministrativo.js
var IngresosCMRouter = require('./routes/IngresosCM');//variable que guarda la ruta de SesionesAdministrativo.js

//otras variables
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// /nosotros(ruta URL) nos llevará a lo que esta almacenado en la variable NosotrosRouter
app.use('/', indexRouter);
app.use('/nosotros', NosotrosRouter);
app.use('/pedirHora', PedirHoraRouter);
app.use('/contactanos', ContactanosRouter);
// /sesionPaciente(ruta URL) nos llevará a lo que esta almacenado en la variable sesionPacienteRouter
app.use('/sesionPaciente', SesionesPacienteRouter);
app.use('/sesionMedico', SesionesMedicoRouter);
app.use('/sesionAdministrativo', SesionesAdministrativoRouter);
// /area(ruta URL) nos llevará a lo que esta almacenado en la variable areaRouter
app.use('/areaPaciente', areaPacienteRouter);
app.use('/areaMedico', areaMedicoRouter);
app.use('/areaAdministrativo', areaAdministrativoRouter);

// /areaPaciente(ruta URL) nos llevará a lo que esta almacenado en la variable areaPacienteRouter
app.use('/ConsultorioVirtual', ConsultorioVirtualRouter);
app.use('/PedirHoraAfiliado', PedirHoraAfiliadoRouter);
app.use('/PagarAfiliado', PagarAfiliadoRouter);
app.use('/HistorialAfiliado', HistorialAfiliadoRouter);
app.use('/PendientesAfiliado', PendientesAfiliadoRouter);
app.use('/AfiliacionUsuario', AfiliacionUsuarioRouter);
// /areaMedico(ruta URL) nos llevará a lo que esta almacenado en la variable areaMedicoRouter
app.use('/misPacientes', misPacientesRouter);
app.use('/misInformes', misInformesRouter);
app.use('/pacientesHoy', pacientesHoyRouter);
app.use('/EstadisticasMedico', EstadisticasMedicoRouter);
app.use('/ProductividadMedico', ProductividadMedicoRouter);
app.use('/MiAgenda', MiAgendaRouter);
// /areaAdministrativo(ruta URL) nos llevará a lo que esta almacenado en la variable areaAdministrativoRouter
app.use('/TodosPacientes', TodosPacientesRouter);
app.use('/Buscar', BuscarRouter);
app.use('/EditarContacto', EditarContactoRouter);
app.use('/EstadisticasCM', EstadisticasCMRouter);
app.use('/ProductividadCM', ProductividadCMRouter);
app.use('/PersonalCM', PersonalCMRouter);
app.use('/IngresosCM', IngresosCMRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
