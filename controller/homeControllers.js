const fs = require('fs')
const db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const homeControllers={
    index: function (req, res){
        res.write('Bienvenido a nuestro centro de sucursales')
        res.write('\n\n')
        db.forEach((elemento)=>{
            res.write('' + elemento.sucursal +'\n\n' )
        
        })
        res.end()
    }
}

module.exports= homeControllers