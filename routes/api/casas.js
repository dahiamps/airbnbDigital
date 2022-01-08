const router = require('express').Router();
const { Casa } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const fs = require('fs')
const jwt = require('jwt-simple');

//images
const multer = require('multer')
const path = require('path')
const upload = multer({ dest: 'public/images' })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null,'images')
//     },
//     filename: (req, file, cb) => {
//         cb(null,Date.now()+ path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { filename: ' 50000000' },
//     fileFilter
// })


router.post('/registro',
    upload.single('imagen2'),
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
        // const casa = await Casa.create(req.body)
       
        const casa = await Casa.create(req.body)
        res.status(200).json(casa)
 
    })


router.post('/registro2', upload.single('imagen2'),(req, res) => {
    console.log(req.file);
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')
    [1])
    res.json(req.file)
}


)


module.exports = router;