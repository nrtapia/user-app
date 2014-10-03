var express = require('express')
var session = require('express-session')
var jade 			= require('jade');

var app = express()

app.engine('jade', jade.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(session({secret: 'keyboard cat'}))

app.use(function(req,res,next){
    res.locals = req.session;
    next();
});


app.get('/index', function(req, res){
		req.session.message = "Holaaaaa Session1";		
		console.log( "Session",  req.session.message)
		res.render('test', {msg:"Hola mundo"});		
	});


app.listen(80);