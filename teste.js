const express = require("express"); // importa o modulo epress neste arqivo
const app = express();//iniciando o express

app.get("/",function(req,res){
    res.send("Bem vindo ao meu site!");
})
app.get("/produtos",function(req,res){//rota de cadastro dos produtos
    res.send("<h1>Lista de produtos!</h1>");
})

app.listen(3000,function(erro){//cria aplicacao na porta 4000
    if(erro){
        console.log("Erro ao iniciar.")
    }else{
        console.log("Servidor Iniciado.")
    }

})
//rota com parametro
app.get("/consulta/:parametro",function(req,res){
    //req->dados enviados pelo cliente
    //req->resposta enviada pelo servidor  de volta ao cliente
    res.send("retorno consulta:"+req.params.parametro)
})
//rota com parametro adicional
app.get("/cadastro/:nome?",function(req,res){
    //req->dados enviados pelo cliente
    var nome=req.params.nome;
    if(nome){
        res.send("<h1>produto "+nome+" criado</h1>");
    }else{
        res.send("produto criado!")
    }
})
app.get("/cpf/",function(req,res){
    //req->dados enviados pelo cliente
    var cpf=req.query["cpf"];
    //res->resposta enviada pelo servidor de volta para o cliente
    if(cpf){
        res.send("retorno consulta: cpf ="+cpf)}
        else{
            res.send("cpf nao fornecido")
        }

})

