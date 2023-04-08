const ProductsService = require('./../services/product.service');
const  service = new ProductsService();

const product = async (_, { id }) => {
    const product = await service.findOne(id);
    return product;
}

const products = async (_, args) => {
    const products = await service.find({});
    return products;
}

const addProduct = async (_, { dto }) => {
    const insert = await service.create(dto);
    return insert;
}

module.exports = { product, products, addProduct }