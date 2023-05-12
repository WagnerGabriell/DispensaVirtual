/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("listaCompras", (table) =>{
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.integer("quantidade").notNullable();
    table.string("marca");
    table.integer("user_id").notNullable().unsigned().references("users.id").onDelete("CASCADE").onUpdate("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("listaCompras");
};
