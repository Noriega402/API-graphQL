const ProductsService = require('./../services/product.service');
const  service = new ProductsService();

/*
    No es necesario utilizar async/await porque los resolvers
    se encargan de retornar la promesa, a menos que se necesite
    manipular algo antes de retornar si se tendria que usar
 */

const product = (_, { id }) => {
    return service.findOne(id);
}

const products = (_, args) => {
    return service.find({});
}

const addProduct = (_, { dto }) => {
    return service.create(dto);
}

const updatedProduct = (_, { id, dto }) => {
    return service.update(id, dto);
}

const deletedProduct = async (_, { id }) => {
    await service.delete(id);
    return id;
}

module.exports = {
    product,
    products,
    addProduct,
    updatedProduct,
    deletedProduct
}