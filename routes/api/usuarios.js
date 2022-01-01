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
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422, { errores: errors.array() }).json()
        }
        // req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
        // req.body.contraseña = req.body.contraseña;
        const usuario = await Usuario.create(req.body);
        res.json(usuario)
    });



module.exports = router;