const express=require('express');//Importação do express
const app=express();//Execução do express
app.set('view-engine','ejs');//configuração do ejs como motor de telas
app.set('views','./app/views');//alteração do diretório da pasta views


//rota para a página principal do app
app.get('/',function(req,res){
	res.render('home/index.ejs');
});

//rota para a página de notícia
app.get('/noticia',function(req,res){
	//res.render('noticias/noticia.ejs');
	const mysql= require('mysql'); // importação do módulo mysql
    const connection= mysql.createConnection({
    	host:'localhost',
    	user:'root',
    	password:'ifms',
    	database:'portal_noticias'
    });
    connection.query('select*from noticias', function(error, result){
    	if(error){
    		console.log(error);
    	}
    	res.render('noticias/noticia.ejs', {noticias:result});//renderização da tela noticias.ejs juntamente com o envio da variavel result
    })
});

//rota para a página do formulário de inclusão de noticia
app.get('/formularioinclusaonoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs');
});


//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});