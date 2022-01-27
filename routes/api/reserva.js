const router = require('express').Router();
const { Reserva } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment')
const jwt = require('jwt-simple');

router.post('/reserva', async (req, res) => {
    const reserva = await Reserva.create(req.body);
    res.status(200).json(reserva)
})

router.get('/reserva/:propietarioid', async (req, res) => {
    const reserva = await Reserva.findAll({ where: { idPropietario: req.params.propietarioid } })
    // const casas = await Casa.findAll();
    res.json(reserva)
})


router.get('/solicitudes/:clienteid', async (req, res) => {
    const reserva = await Reserva.findAll({ where: { idCliente: req.params.clienteid } })
    // const casas = await Casa.findAll();
    res.json(reserva)
})

router.get('/solicitudes/:clienteid/:estado', async (req, res) => {
    const reserva = await Reserva.findAll({
        where: {
            idCliente: req.params.clienteid,
            estadoSolicitud: req.params.estado
        }
    })
    // const casas = await Casa.findAll();
    res.json(reserva)
})



router.put('/reserva/:idRe', async (req, res) => {
    await Reserva.update(req.body,{
        where: { idReserva:req.params.idRe}
    });
res.json({success:"Se ha modificado correctametne"})})

module.exports = router;