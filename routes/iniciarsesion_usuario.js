const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/bd');

router.post('/IniciarSesionUsuario', (req, res)=>{
  const{ correo_electronico, contraseña}= req.body;
  let actor = [correo_electronico, contraseña];
  let nuevoActor = `INSERT INTO USUARIO(correo_electronico,contraseña)`;

  mysqlConnection.query(nuevoActor, actor, (err, results, fields) =>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:`Iniciaste Sesion`, });
  });
});
module.exports = router;