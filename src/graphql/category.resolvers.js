const boom = require('@hapi/boom');
const checkRolesGraphql = require('../utils/check.roles.graph');
const checkJwtGraphql = require('../utils/checkJWT.graph');
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
 * @returns {Promise}
 */
const addCategory = async (_, { dto }, context) => {
    const user = await checkJwtGraphql(context);
    checkRolesGraphql(user,'admin');
    //console.log(dto);
    return service.create({
        ...dto,
        image: dto.image.href
    });
}


module.exports = {
    category,
    categories,
    addCategory
}