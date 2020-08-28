/**
 *   RUTA: /api/login
 */

const { Router } = require('express');
const { check } = require('express-validator');
const {login} = require('../controllers/auth');
const  { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/', [
    check('token', 'El token de google es necesario').not().isEmpty(),
    validarCampos
] ,login);


module.exports = router;