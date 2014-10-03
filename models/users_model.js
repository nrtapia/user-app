var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema;

var UserSchema = new Schema({
	username: { type: String, unique: true, required: true },
	email: {type: String, required: true},
	color: String,
	hashed_password: {type: String, required: true}
});

mongoose.model( 'User', UserSchema );