const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../bd/bd');

router.post('/Registrarse ', (req, res)=>{
  const{ nombres, correo, contraseña}= req.body;
  let actor = [nombres, correo, contraeña];
  let nuevoActor = `INSERT INTO USUARIO(NOMBRE,CORREO_ELECTRONICO,CONTRASEÑA)
  VALUES(?,?,1234)`;

  mysqlConnection.query(nuevoActor, actor, (err, results, fields) =>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:`Usuario Registrado`, });
  });
});
module.exports = router;
