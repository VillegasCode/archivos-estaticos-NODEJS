const express = require('express');
const app = express();

//Importamos nuestro motor de plantillas EJS
app.set('view engine', 'ejs');

app.listen(3000, (req, res)=>{
    console.log("SERVIDOR RUNNING");
});