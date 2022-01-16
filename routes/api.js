const router = require('express').Router();

const apiUsuarioRouter = require('./api/usuarios')
const apiCasasRouter = require('./api/casas')
const apiReservaRouter = require('./api/reserva')

router.use('/usuario', apiUsuarioRouter);
router.use('/casa', apiCasasRouter);
router.use('/reservas', apiReservaRouter);

module.exports = router;