require('dotenv').config()
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: process.env.END_BC,
  user: process.env.USER_BC,
  password: process.env.SENHA_BC,
  database: "joemama"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Servidor rodando!");
    console.log("Tudo normal")
    var sql = "CREATE TABLE juninVrau (signo VARCHAR(50), vulgo VARCHAR (50), tamanho VARCHAR(50))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tabela Criada");
    });
});
