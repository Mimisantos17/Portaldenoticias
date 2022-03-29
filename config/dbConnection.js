const mysql=require('mysql'); // estou importando um modulo da internet, precisou ser instalado.

module.exports=function(){
return mysql.createConnection({
	   host:'localhost',
	   user:'root',
	   password:'root',
	   database:'portal-noticias'
}); //cria uma conexão com o banco de dados
// o método createConnection tem apenas 
}