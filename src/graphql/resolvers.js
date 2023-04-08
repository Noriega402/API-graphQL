const { product, products, addProduct, updatedProduct, deletedProduct } = require('./product.resolvers')
const { categories, category } = require('./category.resolvers')

const resolvers = {
    Query: {
        hello: () => "Hello World",
        product,
        products,
        category,
        categories
    },
    Mutation: {
        addProduct,
        updatedProduct,
        deletedProduct
    }
}

module.exports = resolvers;