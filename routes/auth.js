/**
 *   RUTA: /api/login
 */

const { Router } = require('express');
const { check } = require('express-validator');
const {login, test} = require('../controllers/auth');
const  { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/', [
    check('token', 'El token de google es necesario').not().isEmpty(),
    validarCampos
] ,login);

router.get('/', test);

module.exports = router;