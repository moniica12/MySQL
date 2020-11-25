const express = require("express");
const router = express. Router();
const mysqlConnection = require('../../bd/bd');

router.post('/solicitudes', (req, res)=>{
  const{ nombre, placa, ubicacion}= req.body ;
  let actor = [nombre, placa, ubicacion];
  let nuevoActor = ' INSERT INTO ADMINISTRADOR(nombre,placa,ubicacion)';

  msqlConnection.query(nuevoActor. actor, (err, results, fields)=>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:'solicitud enviada' ,});
  });
});
module.exports =router;


router.get('/solicitudes', (req, res)=>{
  const{ nombre, placa, ubicacion}= req.body ;
  let actor = [nombre, placa, ubicacion];
  let nuevoActor = ' INSET INTO ADMINISTRADOR(nombre,placa,ubicacion)';

  msqlConnection.query(nuevoActor. actor, (err, results, fields)=>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:'solicitud enviada' ,});
  });
});
module.exports =router;