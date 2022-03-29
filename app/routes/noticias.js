const dbConnection = require('../../config/dbConnection'); // ../ é dar um passo para traz, no caso, uma pasta anterior.

module.exports=function(app){ 

var connection=dbConnection(); //executando a variável dbConnection (da primeira linha) e armazenando na variável connection.

//rota para a página de notícia
app.get('/noticias',function(req,res){
	
    connection.query('select*from noticias', function(error, result){
    	if(error){
    		console.log(error);
    	}
    	res.render('noticias/noticia.ejs', {noticias:result});//renderização da tela noticias.ejs juntamente com o envio da variavel result por meio de um objeto jason. noticias:nome do objeto; result:valor desse objeto.
    });
    });


}

//Esse arquivo é um módulo.