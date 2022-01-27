module.exports = (Sequelize, type) => {
    return Sequelize.define('casas', {

        id: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true
        },
        nombreCasa: type.STRING,
        disponibilidad: type.DATEONLY,
        disponibilidad2: type.DATEONLY,
        telefono: type.STRING,
        pais: type.STRING,
        ciudad: type.STRING,
        direccion: type.STRING,
        imagen: type.STRING,
        idpropietario: type.STRING,

    });
}