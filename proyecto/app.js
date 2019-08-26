const path = require('path');
const express = require(`express`)
const app = express ();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
// inicio del servidor
app.listen(3000, () => console.log('server on port 3000'));


//configuracion
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

//middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));
