const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'b3n0wmpjygk1hofbeach-mysql.services.clever-cloud.com',
  user: 'u7jpn8esauve47wy',
  password: '8OxafcSiBAc2mzlZPnHN',
  database: 'b3n0wmpjygk1hofbeach',
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;

