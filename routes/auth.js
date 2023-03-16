/*
    RUTAS DE USUARIOS /Auth
    Host+ /api/auth
*/

const { Router } = require('express');
const router = Router() ;
const {check} = require('express-validator');
const { createUser ,loginUser,reValidToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
    '/new' ,
    [ 
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos

    ] , 
    createUser );
router.post(
    '/' ,
    [     
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    loginUser );
router.get('/renew' , reValidToken );




module.exports = router;