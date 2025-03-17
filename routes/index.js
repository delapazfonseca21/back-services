const express = require('express');
const productosRouter = require('./productos.router');
const usersRouter = require('./users.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router)
    router.use('/productos', productosRouter)
    router.use('/usuarios', usersRouter)
}

module.exports = routerApi