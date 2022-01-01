const { Sequelize } = require('sequelize');
const usuarioModel = require('./models/usuarios');

const baseDatos = new Sequelize("proyectobd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = usuarioModel(baseDatos, Sequelize);


baseDatos.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Usuario
}