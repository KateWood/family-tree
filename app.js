var express = require('express'),
	logger	= require('morgan'),
 bodyParser = require('body-parser'),
	app 	= express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users')

// use the model from mongoose
var User = require('./models/user.js')

var newUser = new User({
	first_name: "Kate",
	last_name: "Wood",
	email: "katewood@gmail.com"
})

newUser.save(function(err){
	if (err) console.log(err)
	console.log("User created")
})