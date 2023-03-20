const { Router } = require('express');
const router = Router() ;
const { createHistory } = require('../controllers/history')


router.get('/getHistory' , createHistory );

module.exports = router;