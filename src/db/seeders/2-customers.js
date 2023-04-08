const { CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(CUSTOMER_TABLE, [
      {
        name: 'Daniel',
        last_name: 'Noriega',
        phone: '7830601',
        user_id: 1,
        created_at: new Date()
      },
      {
        name: 'Melany',
        last_name: 'Salazar',
        phone: '3456723',
        user_id: 2,
        created_at: new Date()
      },
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(CUSTOMER_TABLE, null, {});
  }
};
