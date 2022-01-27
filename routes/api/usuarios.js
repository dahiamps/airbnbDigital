const router = require('express').Router();
const { Usuario } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple');

router.post('/registro',
    [
        check('ciudad', 'LA ciudad es obligatoria').not().isEmpty(),
        check('contraseña', 'LA Contraseña es obligatoria').not().isEmpty(),
        check('direccion', 'LA direccion es obligatoria').not().isEmpty(),
        check('nombre', 'El nombre es obligatori').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404, { errores: errors.array() }).json()
        }
        // req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
        // req.body.contraseña = req.body.contraseña;
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario)
    });


router.get("/ping", (req, res) => {
    res.send("pong")
})
module.exports = router;