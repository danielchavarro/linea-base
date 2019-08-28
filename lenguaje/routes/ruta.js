const express = require('express');
const router = express.Router();

router.get('/inicio', (req,res) =>{
    res.render('index');
});
router.get('/registro', (req,res) =>{
    res.render('registro');
});

module.exports = router;