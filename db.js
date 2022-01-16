const { Sequelize } = require('sequelize');

const usuarioModel = require('./models/usuarios');
const casaModel = require('./models/casas');
const reservaModel = require('./models/reserva');

const baseDatos = new Sequelize("proyectobd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = usuarioModel(baseDatos, Sequelize);
const Casa = casaModel(baseDatos, Sequelize);
const Reserva = reservaModel(baseDatos, Sequelize);


baseDatos.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Usuario,
    Casa,
    Reserva
}