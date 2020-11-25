const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/bd');

router.post('/RolUsuarioN', (req, res)=>{
  const{rol}= req.body;
  let actor = [rol];
  let nuevoActor = `INSERT INTO USUARIO(rol)`;

  mysqlConnection.query(nuevoActor, actor, (err, results, fields) =>{
    if (err){
      return console.error(err.message);
    }
    res.json({message:`Has indicado la funcion de usuario`, });
  });
});
module.exports = router;