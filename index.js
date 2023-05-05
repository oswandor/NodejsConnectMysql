const mysql = require('mysql');
const fs = require('fs');


var conn=mysql.createConnection({host:process.env.SQL_CONNECTION_STRING, user:"Oswaldo", password:"Gnulinux2023", database:"dbusers", port:3306,   ssl: {
    cert: fs.readFileSync('./DigiCertGlobalRootCA.crt.pem')
  }});



conn.connect((err) => {
    if (err) {
      console.error('Error de conexión: ', err);
    } else {
      console.log('Conexión exitosa');
    
    }
  });


conn.end();