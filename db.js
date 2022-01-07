const { Sequelize } = require('sequelize');
const usuarioModel = require('./models/usuarios');
const casaModel = require('./models/casas');

const baseDatos = new Sequelize("proyectobd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = usuarioModel(baseDatos, Sequelize);
const Casa = casaModel(baseDatos, Sequelize);


baseDatos.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Usuario,
    Casa
}