const express = require('express');
const app = express();

//Importamos nuestro motor de plantillas EJS
app.set('view engine', 'ejs');

//Usar Middleware express static para mostrar lo que hay en la carpeta PUBLIC
app.use(express.static('public')); //Dentro de las comillas ponemos el nombre de la carpeta que contiene los elementos estáticos

//Usar directorios estáticos con "nombre de la carpeta" y la palabra "__dirname" para que los recursos funcionen siempre en cualquier lugar
app.use('/recursos', express.static(__dirname+'/public'));
console.log(__dirname);

//Obtenemos la plantilla EJS
app.get('/', (req, res)=>{
    res.render('index.ejs'); //Podemos quitarle la extensión si queremos
});

app.listen(3000, (req, res)=>{
    console.log("SERVIDOR RUNNING");
});