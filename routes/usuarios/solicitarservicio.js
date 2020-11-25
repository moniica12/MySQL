const express = require('express');
const router = express.Router();
const mysqlConnection = require('../../bd/bd');

router.post('/SolicitarServicio', (req, res)=>{
  const{  vereda, ubicacion}= req.body;
  let actor = [vereda, ubicacion];
  let nuevoActor = `INSERT INTO USUARIO(mensaje,placa)`;

  mysqlConnection.query(nuevoActor, actor, (err, results, fields) =>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:`Solicitud enviada`, });
  });
});
module.exports = router;