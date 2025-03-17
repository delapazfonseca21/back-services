const faker = require('community-faker');

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
                Image: faker.image.imageUrl()
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
        return this.productos.find(item => item.id === id);
    }

    async update(id, changes){
        const index = this.productos.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error("producto no encontrado, asquerosa perra");
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
            throw new Error("producto no encontrado, asquerosa perra");
        }
        this.productos.splice(index, 1);
        return {"message": "producto eliminado con éxito, insecto", id};

    }

}

module.exports = ProductsService;