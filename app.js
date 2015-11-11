var express = require('express'),
	logger	= require('morgan'),
 bodyParser = require('body-parser'),
	app 	= express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/family-tree')

// use the model from mongoose
var User = require('./models/user.js')

var Andy = new User({
	first_name: "Andy",
	last_name: "Kim",
	email: "andykim@gmail.com"
})