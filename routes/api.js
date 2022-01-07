const router = require('express').Router();

const apiUsuarioRouter = require('./api/usuarios')
const apiCasasRouter = require('./api/casas')


router.use('/usuario', apiUsuarioRouter);
router.use('/casa', apiCasasRouter);

module.exports = router;