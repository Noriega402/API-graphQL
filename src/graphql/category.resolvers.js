const boom = require('@hapi/boom');
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const category = (_, { id }) => {
    return service.findOne(id);
}

const categories = (_, args) => {
    return service.find({});
}

/**
 * @param _
 * @param dto datos para nueva categoria
 * @param context permite ejecutar las estrategias de autenticacion
 * @returns {Promise<Model<any, TModelAttributes>>}
 */
const addCategory = async (_, { dto }, context) => {
    const { user } = await context.authenticate('jwt', {session: false});
    if(!user){
        boom.unauthorized('JWT no es valido...');
    }
    return service.create(dto);
}


module.exports = {
    category,
    categories,
    addCategory
}