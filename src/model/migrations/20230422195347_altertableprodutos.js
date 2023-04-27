/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("produtos", (table) => {
    table.integer("user_id").references("users.id").notNullable().unsigned().onDelete("CASCADE").onUpdate("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("produtos", (table) => {
    table.dropColumn("user_id");
  })
};
