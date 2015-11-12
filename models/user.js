var mongoose	= require('mongoose')

//create a schema

var userSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: {type: String, required: true, unique: true},
	friends: []
})

userSchema.methods.sayHello = function() {
	console.log("Hi " + this.first_name)
}

var User = mongoose.model('User', userSchema)

module.exports = User