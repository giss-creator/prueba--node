const fs = require('fs')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autosControllers = {
    index:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('-----ACÁ ESTAN DISPONIBLES TODOS NUESTROS AUTOS------')
        res.write('\n')
        db.forEach(function(elemento){
            res.write('marcas: ' + elemento.marca)
            res.write('modelo: ' + elemento.modelo)
            res.write('año: ' + elemento.anio)
            res.write('color:' + elemento.color)
        })
        res.end()

    }
}
module.exports= autosControllers