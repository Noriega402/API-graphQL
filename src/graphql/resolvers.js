const { product, products, addProduct, updatedProduct, deletedProduct } = require('./product.resolvers')
const { categories, category, addCategory } = require('./category.resolvers')
const { login } = require('./auth.resolvers')

const resolvers = {
    Query: {
        product,
        products,
        category,
        categories
    },
    Mutation: {
        login,
        addProduct,
        addCategory, // con validacion de JWT
        updatedProduct,
        deletedProduct
    }
}

module.exports = resolvers;