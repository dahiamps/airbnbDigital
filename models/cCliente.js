module.exports = (Sequelize, type) => {
    return Sequelize.define('calificacionCliente', {

        idcalificacion: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        idCliente: type.STRING,
        idCasa: type.STRING,
        nombreCliente: type.STRING,
        nombrePropietario: type.STRING,
        // telefono: type.STRING,
        puntuacion: type.INTEGER,
        Nota: type.STRING,
        // idCasa: type.STRING,

    });
}
