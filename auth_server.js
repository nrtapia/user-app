var express 		= require('express');
var bodyParser		= require('body-parser');
var cookieParser 	= require('cookie-parser');
var expressSession 	= require('express-session');
var mongoStore		= require('connect-mongo')({ session: expressSession });
var mongoose 		= require('mongoose');
var jade 			= require('jade');

require('./models/users_model.js');

var conn = mongoose.connect('mongodb://localhost/userapp');
var app = express();

app.engine('jade', jade.__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Elementos estaticos
app.use('/css', express.static('./static/css'));
app.use('/font', express.static('./static/fonts'));
app.use('/images', express.static('./static/images'));
app.use('/js', express.static('./static/js'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(expressSession({
    secret: 'CG$#$#%&678A858567867899090088DFAHF55SD#45#SFH6AF',
    //name: cookie_name,
    store: new mongoStore({
		db: mongoose.connection.db,
		collection: 'sessions'
	}),
    //proxy: true,
    resave: true,
    saveUninitialized: true
}));


/*
app.use(expressSession({
	secret: 'hasgfuyfjdf',
 	resave: true,
    saveUninitialized: true
}));
*/

require('./routes')(app);



app.listen(80);

console.log('User APP is runing...');
