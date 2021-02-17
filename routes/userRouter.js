const express = require('express');
const router = express.Router();


router.post('/register', (req, res) =>{
    console.log('register')
    res.send('Resgister')
 })
router.post('/login', (req, res) => { 
    console.log('login')
    res.send('login')
})


module.exports = router;