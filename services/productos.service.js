const faker = require('community-faker');
const boom = require('@hapi/boom');

class ProductsService{
    constructor(){
        this.productos = [];
        this.generate();
    }

    async create(data){
        const newProdcuts = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.productos.push(newProdcuts);
        return newProdcuts;
    }

    async generate(){
        const limit = 100;
        for(let index = 0; index<limit; index++){
            this.productos.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                Image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    find(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.productos);
            }, 5000);
        });
    };

    async findOne(id){
        const product = this.productos.find(item => item.id === id);
        if(!product){
            throw boom.notFound("producto no encontrado, asquerosa perra");
        }
        if(product.isBlock){
            throw boom.conflict("producto bloqueado");
        }
        return product;
    }

    async update(id, changes){
        const index = this.productos.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound("producto no encontrado, asquerosa perra");
        }
        const producto = this.productos[index];
        this.productos[index] = {
            ...producto,
            ...changes
        };
        return this.productos[index];
    }

    async delete(id){
        const index = this.productos.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound("producto no encontrado, asquerosa perra");
        }
        this.productos.splice(index, 1);
        return {"message": "producto eliminado con éxito, insecto", id};

    }

}

module.exports = ProductsService;