const router = require('express').Router();
const { Casa } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple');



router.post('/registro',
    [
        check('disponibilidad', 'LA disponibilidad es obligatoria').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('pais', 'El pais es obligatorio').not().isEmpty(),
        check('direccion', 'La direccion es obligatoria').not().isEmpty(),
        check('imagen', 'La imagen es obligatoria').not().isEmpty(),
        check('ciudad', 'La ciudad es obligatoria').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errores: errors.array() })
        }
        const casa = await Casa.create(req.body)
        res.json(casa)
    })

module.exports = router;