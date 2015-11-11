var mongoose	= require('mongoose')

//create a schema

var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: {type: String, required: true, unique: true},
	friends: []
})