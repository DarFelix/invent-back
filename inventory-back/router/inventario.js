const { Router } = require('express');
const router = Router();

router.post('/', function(req, res){
    res.send('Hola mundo estoy en crear inventario');
});

router.get('/', function(req, res){
    res.send('Hola mundo estoy en leer inventario');
});

router.put('/', function(req, res){
    res.send('Hola mundo estoy en actualizar inventario');
});

module.exports = router;