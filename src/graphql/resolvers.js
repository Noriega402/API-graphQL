const { product, products, addProduct, updatedProduct, deletedProduct } = require('./product.resolvers')
const { categories, category } = require('./category.resolvers')
const { login } = require('./auth.resolvers')

const resolvers = {
    Query: {
        hello: () => "Hello World",
        product,
        products,
        category,
        categories
    },
    Mutation: {
        login,
        addProduct,
        updatedProduct,
        deletedProduct
    }
}

module.exports = resolvers;