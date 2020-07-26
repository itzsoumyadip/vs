// modules import
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');








// using them with express 

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))








mongoose.connect('mongodb://localhost:27017/WikiDB', {useNewUrlParser: true, useUnifiedTopology: true});




const  articleSchema=mongoose.Schema({
    title:String,
    content:String,
})

const ArticleModel=mongoose.model("Article",articleSchema)


const article1=new ArticleModel({
   
        
        title : "API",
        content : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
})
//article1.save()

const article2=new ArticleModel({
    title : "Bootstrap",
    content : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"

})
//article2.save()




const article3=new ArticleModel({
    title : "DOM",
    content : "The Document Object Model is like an API for interacting with our HTML"

})
//article3.save()


app.get('/articles',function(req,res){
    
    ArticleModel.find(function(err,articles){

         res.send(articles)
            
        
    })

})












  //server start 
 
  app.listen(7007,function(){
    console.log("Server is up and running at 7007");
 
})