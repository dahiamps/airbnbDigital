const router = require('express').Router();
const { cCliente } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple');


router.post('/cliente', async (req, res) => {
    const calificacion = await cCliente.create(req.body);
    res.status(200).json(calificacion)
})


router.get('/cliente/:clienteid', async (req, res) => {
    const calificacion = await cCliente.findAll({
        where: {
            idCliente: req.params.casaid
            // puntuacion: req.params.puntuacion
        }
    })
    // const casas = await Casa.findAll();
    res.json(calificacion)
})

module.exports = router;