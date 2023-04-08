const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const category = (_, { id }) => {
    return service.findOne(id);
}

const categories = (_, args) => {
    return service.find({});
}

module.exports = {
    category,
    categories
}