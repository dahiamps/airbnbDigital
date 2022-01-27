module.exports = (Sequelize, type) => {
    return Sequelize.define('calificacionCasa', {

        idcalificacion: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        idCliente: type.STRING,
       idCasa: type.STRING,
        nombreCliente: type.STRING,
        // telefono: type.STRING,
        puntuacion: type.INTEGER,
        Nota: type.STRING,
        // idCasa: type.STRING,
        
    });
}
