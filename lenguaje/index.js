const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// bodyParser

app.use(bodyParser.urlencoded({ extended: false }));

// Vistas

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Cdns

app.use(express.static(path.join(__dirname,'public')));

// Rutas

app.use(require('./routes/ruta'));

// Escuchar el servidor

app.listen(3000, () =>{
  console.log('escuchando puerto 3000');
});
