const { Sequelize } = require('sequelize');

const usuarioModel = require('./models/usuarios');
const casaModel = require('./models/casas');
const reservaModel = require('./models/reserva');
const calificacionesModel = require('./models/calificaciones');
const cClienteModel = require('./models/cCliente');

const baseDatos = new Sequelize("proyectobd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const Usuario = usuarioModel(baseDatos, Sequelize);
const Casa = casaModel(baseDatos, Sequelize);
const Reserva = reservaModel(baseDatos, Sequelize);
const Calificacion = calificacionesModel(baseDatos, Sequelize);
const cCliente = cClienteModel(baseDatos, Sequelize);



baseDatos.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    Usuario,
    Casa,
    Reserva,
    Calificacion,
    cCliente
}
