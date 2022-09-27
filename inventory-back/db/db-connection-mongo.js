const mongoose = require('mongoose');

const getConnection = async () => {

    try{
            const url = 'mongodb://user_bd:MIclavePERSONAL@ac-aerizjv-shard-00-00.iwzuh6l.mongodb.net:27017,ac-aerizjv-shard-00-01.iwzuh6l.mongodb.net:27017,ac-aerizjv-shard-00-02.iwzuh6l.mongodb.net:27017/inventorybd?ssl=true&replicaSet=atlas-blq38k-shard-0&authSource=admin&retryWrites=true&w=majority'
            await mongoose.connect(url);
            console.log('Conexión exitosa');
    }catch (error){
            console.log(error);
    }
}

module.exports = {
    getConnection
}