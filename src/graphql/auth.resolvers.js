const AuthService = require('../services/auth.service');
const service = new AuthService();

/**
 * @param _
 * @param email String
 * @param password String
 * @param context viene de la creacion del servidor: src/graphql/index.js : linea 27
 * @returns {Promise<*>}
 */
const login = async (_, { email, password }, context) => {
    const { user } = await context.authenticate('graphql-local', {email, password});
    return service.signToken(user);
}

module.exports = { login };