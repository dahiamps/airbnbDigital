const router = require('express').Router();

const apiUsuarioRouter = require('./api/usuarios')
const apiCasasRouter = require('./api/casas')
const apiReservaRouter = require('./api/reserva')
const apiCalificacionCasaRouter = require('./api/calificacionCasa')
const cClienteRouter = require('./api/cCliente')

router.use('/usuario', apiUsuarioRouter);
router.use('/casa', apiCasasRouter);
router.use('/reservas', apiReservaRouter);
router.use('/calificacion', apiCalificacionCasaRouter);
router.use('/calificacionCliente', cClienteRouter);
module.exports = router;