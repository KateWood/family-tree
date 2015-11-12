var express = require('express'),
	logger	= require('morgan'),
 bodyParser = require('body-parser'),
	app 	= express(),
	port 	= process.env.PORT || 3000

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
	email: "kdub@gmail.com"
})

newUser.save(function(err){
	if (err) console.log(err)
	console.log("User created")
})

newUser.sayHello()

//find all users
User.find({}, function(err, users) {
	if (err) console.log(err)
	console.log(users)
})

//find specific user
User.find({email: "katewood@gmail.com"}, function(err, user) {
	if (err) console.log(err)
	console.log(user)
})

app.listen(port)



