
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.integer('VIN').notNullable().unique().index();
    tbl.string('makeCompany', 50).notNullable();
    tbl.string('model', 40).notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('transmissionType');
    tbl.string('titleStatus');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
