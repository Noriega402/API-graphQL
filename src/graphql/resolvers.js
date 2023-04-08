const { product, products } = require('./product.resolvers')

const resolvers = {
    Query: {
        hello: () => "Hello World",
        product,
        products
    }
}

module.exports = resolvers;