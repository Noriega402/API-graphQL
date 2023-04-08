const { product, products, addProduct, updatedProduct, deletedProduct } = require('./product.resolvers')

const resolvers = {
    Query: {
        hello: () => "Hello World",
        product,
        products
    },
    Mutation: {
        addProduct,
        updatedProduct,
        deletedProduct
    }
}

module.exports = resolvers;