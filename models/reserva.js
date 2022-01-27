module.exports = (Sequelize, type) => {
    return Sequelize.define('reserva', {

        idReserva: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        idCliente: type.STRING,
        nombreCliente: type.STRING,
        // telefono: type.STRING,
        fechaInicio: type.DATEONLY,
        fechaFin: type.DATEONLY,
        idCasa: type.STRING,
        nombreCasa: type.STRING,
        idPropietario: type.STRING,
        estadoSolicitud: type.STRING,
        NotasCliente: type.STRING,
        cCliente: type.STRING,
        cCasa: type.STRING

    });
}