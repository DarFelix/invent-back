const { Router } = require('express');
const router = Router();

router.post('/', function(req, res){
    res.send('Estoy desde estado equipo POST');
});

router.get('/', function(req, res){
    res.send('Estoy desde estado equipo GET');
});

router.put('/', function(req, res){
    res.send('Estoy desde estado equipo PUT');
});

module.exports = router;