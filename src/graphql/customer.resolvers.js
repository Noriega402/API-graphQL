const CustomerService = require('../services/customers.service');
const service = new CustomerService();


const customer = (_, { id }) => {
    return service.findOne(id);
}

const customers = (_, args) => {
    return service.find({});
}

const getUser = (parent,_) => {
    const id = parent.dataValues.id;
    return service.getUserByCustomer(id);
}

module.exports = {
    customer,
    customers,
    getUser
}