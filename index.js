const express = require('express');
const app = express();
const registrarse = require('./routes/GESTIONAR/registrarse');
const iniciarsesion_usuario = require ('./routes/iniciarsesion_usuario');
const valoracionadm = require ('./routes/administrador/valoracionadm');
const solicitudespendientes = require ('./routes/administrador/solicitudespendientes');
const solicitarservicio = require = ('./routes/usuarios/solicitarservicio');
// Ajustes
app.set('port',3306);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api/registrarse', registrarse);
app.use('/api/iniciarsesion_usuario', iniciarsesion_usuario);
app.use('/api/valoracionadm', valoracionadm);
app.use('/api/solicitudespendientes', solicitudespendientes);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});

