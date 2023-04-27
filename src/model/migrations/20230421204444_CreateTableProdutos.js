/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("lote").notNullable();
    table.integer("quantidade").notNullable();
    table.string("marca").notNullable();
    table.string("unidade").notNullable();
    table.date("dataDeValidade").notNullable();
    table.integer("categoria_id").references("categorias.id").notNullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
    table.integer("local_id").references("local.id").notNullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
    table.string("img").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("produtos");
};
