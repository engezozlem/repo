//Yüklenen package'lar tanımlanır.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Server'ın çalışacağı port no tanımlanır.
const PORT = 3000;

//Express package'ı için bir instance oluşturulur.
const app = express(); 

//Body-parser'ın json ile bağlantısı
app.use(bodyParser.json());

//Cors package'ı da tanımlanmalı
app.use(cors());

//Server'ı test et
app.get("/",function(req, res){
res.send("Hello from server");
})

//Form data'ların post'lanacağı bir endpoint oluşturalım
app.post("/enroll",function(req, res){
    console.log(req.body);
    res.status(401).send({"Message " : "Data receiver "});
})
//Server'ı dinle
app.listen(PORT, function(){
    console.log("Server running on localhost : " + PORT);
})