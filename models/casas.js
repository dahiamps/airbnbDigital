module.exports = (Sequelize, type) => {
    return Sequelize.define('casas', {

        id: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        disponibilidad: {
            type: type.STRING
        },
        telefono: {
            type: type.STRING
        },
        pais: {
            type: type.STRING
        },
        ciudad: {
            type: type.STRING
        },
        direccion: {
            type: type.STRING
        }
    });
}