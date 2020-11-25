const express = require("express");
const router = express.Router();
const mysqlConnection = require('../../bd/bd');

router.post('/Valoracion', (req, res)=>{
  const{ puntaje, buzon}= req.body;
  let actor = [puntaje, buzon];
  let nuevoActor = ' INSERT INTO USUARIO(PUNTAJE,BUZON)';

msqlConnection.query(nuevoActor, actor, (err, results, fields)      =>{
   if (err){
     return console.error(err.message);
   }
   res.json({message:'Valoracion Exitosa' , });
 });
});
module.exports = router;
