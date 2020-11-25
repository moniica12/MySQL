const express = require("express");
const router = express.Router();
const mysqlConnection = require('../../bd/bd');

router.get('/', (req, res)=>{
  mysqlConnection.query('SELECT * FROM ADMINISTRADOR', (err, results, fields)      =>{
   if (err){
     return console.error(err.message);
   }
   res.json(results);
 });
});
module.exports = router;