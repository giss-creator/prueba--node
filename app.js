const express = require ("express");
 
const app = express()

app.listen(3030,()=> console.log('bienvenido'));

const rutaHome = require('./routes/home');
const rutaAutos = require('./routes/autos');

app.use('/', rutaHome);
//app.use('/sucursales', rutaSucursales);
app.use('/autos', rutaAutos);
//app.use('/marcas', rutaMarcas)

    