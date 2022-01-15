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
            return res.status(404, { errores: errors.array() }).json()
        }
        // req.body.contraseña = bcrypt.hashSync(req.body.contraseña, 10);
        // req.body.contraseña = req.body.contraseña;
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario)
    });

router.post('/login', async (req, res) => {
    // const usua = await Usuario.findOne({ where: { contraseña: req.body.contraseña } && { usuario: req.body.usuario } });
    const usua = await Usuario.findOne({ where: { usuario: req.body.usuario, contraseña: req.body.contraseña } });
    if (usua) {
        console.log("Usuario ok");
        // const usua2 = await Usuario.findOne({ where: { contraseña: req.body.contraseña } });
        // if (usua2) {
        // res.json({ success: createToken(usua) })
        res.status(200).json(usua)
        console.log(usua.dataValues.nombre);
        // } else {
        //     console.log("no contraseña");
        //     res.status(404).json({ error: 'Error en usuario y/o contraseña' })
        // }




    } else {
        console.log("no Ok");
        res.status(404).json({ error: 'Error en usuario y/o contraseña' })
    }
})

module.exports = router;