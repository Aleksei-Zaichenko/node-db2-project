
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '3123', makeCompany: 'Toyota', model: 'Camry', mileage: '13222'},
        {
          VIN: '4422', makeCompany: 'Toyota', 
          model: 'Camry', mileage: '19222', 
          transmissionType: 'it`s ok, still working'
        }
      ]);
    });
};
