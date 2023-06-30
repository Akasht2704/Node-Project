const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));



app.listen(800, function(){
    console.log("SERVER IS RUNNING AND UP");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/form.html");

});

 app.get("/s", function(req,res){
    var name = req.query.name;
    var email = req.query.email;
    var id = req.query.id;
    var values=[name,email];
    console.log(name,email);
    fs.writeFileSync(dirPath+"/record of id.text",`${name},${email}`);
    res.send("ok");
    
     
 })