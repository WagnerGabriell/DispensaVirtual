/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("local", (table)=>{
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.integer("user_id").notNullable().unsigned().references("users.id").onDelete("CASCADE").onUpdate("CASCADE");;
    table.boolean("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("local")
};
