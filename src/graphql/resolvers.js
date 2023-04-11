const { RegularExpression } = require('graphql-scalars');
const { product, products, addProduct, updatedProduct, deletedProduct } = require('./product.resolvers');
const { categories, category, addCategory } = require('./category.resolvers');
const { customer, customers, getUser } = require('./customer.resolvers');
const { login } = require('./auth.resolvers');

const categoryRegex = new RegularExpression('categoryRegex', /^[a-zA-Z0-9]{3,15}$/);
const userRoleRegex = new RegularExpression('userRoleRegex', /^admin|seller|customer$/);

const resolvers = {
    Query: {
        product,
        products,
        category,
        categories,
        customer,
        customers
    },
    Mutation: {
        login,
        addProduct,
        addCategory, // con validacion de JWT
        updatedProduct,
        deletedProduct
    },
    categoryRegex, //llamando al nuevo tipo de schema desde archivo graphql
    userRoleRegex,
    Customer: {
        user: getUser
    }
}

module.exports = resolvers;