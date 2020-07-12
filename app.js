const express = require ("express");
 
const app = express()

app.listen(3030,()=> console.log('bienvenido')),

app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});

app.get('/sucursales', function(req, res){
    res.send('Seccion sucursales')
})

    