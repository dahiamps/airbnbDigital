module.exports = (Sequelize, type) => {
    return Sequelize.define('casas', {

        id: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        disponibilidad: type.STRING,
        telefono: type.STRING,
        pais: type.STRING,
        ciudad: type.STRING,
        direccion: type.STRING,
        imagen: type.STRING,

    });
}