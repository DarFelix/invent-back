const { Router } = require('express');
const router = Router();

router.post('/', function(req, res){
    res.send('Estoy desde marca POST');
});

router.get('/', function(req, res){
    res.send('Estoy desde marca GET');
});

router.put('/', function(req, res){
    res.send('Estoy desde marca PUT');
});

module.exports = router;