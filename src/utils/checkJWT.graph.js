const boom = require("@hapi/boom");

async function checkJwtGraphql(context) {
    const { user } = await context.authenticate('jwt', {session: false});
    if(!user){
        console.log(user);
        throw boom.unauthorized('JWT no es valido...');
    }
    return user;
}

module.exports = checkJwtGraphql;