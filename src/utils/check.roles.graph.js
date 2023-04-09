const boom = require("@hapi/boom");

function checkRolesGraphql(user, ...roles) {
  if (!roles.includes(user.role)) { // customer != user.role -> token
      throw boom.unauthorized("Tu rol no esta permitido para realizar esta accion")
  }
}

module.exports = checkRolesGraphql;