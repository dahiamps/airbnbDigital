const router = require('express').Router();

const apiUsuarioRouter = require('./api/usuarios')

router.use('/usuario', apiUsuarioRouter);
module.exports = router;