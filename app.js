var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var db = require("mongodb")

var googleTranslate = require('google-translate')("AIzaSyDD-QBAroiKyXO6TdT1XiZZ898OTt2BONY");
var translateController = require("./controllers/translatecontroller.js")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

// ROUTES

// STATIC PAGES

app.get("/", function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.get("/progress", function(request,response){
	response.sendFile("/html/progress.html",{root:"./public"})
})

app.get("/quiz", function(request,response){
	response.sendFile("/html/quiz.html",{root:"./public"})
})

app.get("/translate", function(request,response){
	response.sendFile("/html/translate.html",{root:"./public"})
})

// TRANSLATE PAGES

app.post("/translation", function(req, res){
	googleTranslate.translate(req.body.word, req.body.oldLanguage, req.body.newLanguage, function(err, data){
		console.log(data);
		if(err){
			console.log(err)
		}
		else{
			console.log(data.translatedText)
			res.send(data.translatedText)
		}
	})
})


// SET UP SERVER

var port = 3000

app.listen(port,function(){
	console.log("Server running on port " + port)
})