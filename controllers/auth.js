const express = require('express')
const { validationResult } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const createUser = (req , res = response) => {

    const {name , email , password } = req.body;
    //manejo de errores
   
   
    res.status(201).json({
        ok:true,
        msg:'registro',
        name, 
        email, 
        password
    })
}

const loginUser = (req , res = response ) =>{

    const { email , password } = req.body;

   

    res.status(201).json({
        ok:true,
        msg:'login', 
        email, 
        password
    })
}
const reValidToken = (req , res = express.response ) =>{
    res.json({
        ok:true,
        msg:'reNew'
    })
}



module.exports = {
    createUser,
    loginUser,
    reValidToken

};