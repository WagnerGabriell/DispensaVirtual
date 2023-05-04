/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("lote").nullable();
    table.integer("quantidade").notNullable();
    table.string("marca").nullable();
    table.string("unidade").nullable();
    table.date("dataDeValidade").nullable();
    table.integer("user_id").references("users.id").notNullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
    table.integer("categoria_id").references("categorias.id").nullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
    table.integer("local_id").references("local.id").nullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
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
