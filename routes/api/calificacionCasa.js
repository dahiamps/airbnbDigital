const router = require('express').Router();
const { Calificacion } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple');


router.post('/casa', async (req, res) => {
    const calificacion = await Calificacion.create(req.body);
    res.status(200).json(calificacion)
})


router.get('/casa/:casaid', async (req, res) => {
    const calificacion = await Calificacion.findAll({
        where: {
            idCasa: req.params.casaid
            // puntuacion: req.params.puntuacion
        }
    })
    // const casas = await Casa.findAll();
    res.json(calificacion)
})

module.exports = router;