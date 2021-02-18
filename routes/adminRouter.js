const express = require('express')
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/',auth, (req, res) =>{
    if (req.send.admin){
    res.send('Esse dado so deve ser visto pleo admin')
    }else {
        res.status(401).send('Access Denied')
    }
})

module.exports = router;