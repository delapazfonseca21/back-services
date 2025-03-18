const express = require('express');
const ProductsService = require('./../services/productos.service');
const validatorHandler = require('./../moddlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');



const router = express.Router();
const service = new ProductsService();

router.get("/", async (req, res)=>{
    const productos = await service.find();
    res.json(productos)
});

router.get('/:id', async (req, res, next)=>{
    try {
        const {id} = req.params;
        const producto = await service.findOne(id);
        res.json(producto);
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res, next) => {
    try{
        const {id}= req.params;
        const body = req.body;
        const producto = await service.update(id, body);
        res.json(producto);
    }catch(error){
        next(error);
    }
})

router.delete('/:id', async (req, res)=>{
    const {id}= req.params;
    const rta = await service.delete(id);
    res.json(rta)
})

module.exports = router;