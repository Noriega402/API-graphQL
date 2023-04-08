const { product, products, addProduct } = require('./product.resolvers')

const resolvers = {
    Query: {
        hello: () => "Hello World",
        product,
        products,
    },
    Mutation: {
        addProduct
    }
}

module.exports = resolvers;