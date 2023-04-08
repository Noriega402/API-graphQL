const { PRODUCT_TABLE } = require('../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(PRODUCT_TABLE, [
      {
        name: 'Nintendo Game Cube',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        description: 'Consola de Nintendo',
        price: 500,
        category_id: 2,
        created_at: new Date()
      },
      {
        name: 'Play Station 5',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        description: 'Consola de Sony',
        price: 800,
        category_id: 2,
        created_at: new Date()
      },
      {
        name: 'Sillon doble',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        description: 'Sillon para dos personas',
        price: 1200,
        category_id: 1,
        created_at: new Date()
      },
      {
        name: 'Mesa plegable',
        image: 'https://api.lorem.space/image/game?w=150&h=220',
        description: 'Mesa de plastico para visitas',
        price: 250,
        category_id: 1,
        created_at: new Date()
      }
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  }
};
