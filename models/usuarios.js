module.exports = (Sequelize, type) => {
    return Sequelize.define('usuarios', {

        id: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        ciudad: {
            type: type.STRING
        },
        contraseña: {
            type: type.STRING
        },
        direccion: {
            type: type.STRING
        },
        nombre: {
            type: type.STRING
        },
        pais: {
            type: type.STRING
        },
        usuario: {
            type: type.STRING
        }
    });
}