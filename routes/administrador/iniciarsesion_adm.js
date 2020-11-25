const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../bd/bd');

router.post('/IniciarSesionAdm', (req, res)=>{
  const{  CORREO_ELECTRONICO, CONTRASEÑA}= req.body;
  let actor = [CORREO_ELECTRONICO, CONTRASEÑA];
  let nuevoActor = `INSERT INTO USUARIO(CORREO_ELECTRONICO,CONTRASEÑA)`;

  mysqlConnection.query(nuevoActor, actor, (err, results, fields) =>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:`Iniciaste Sesión`, });
  });
});
module.exports = router;