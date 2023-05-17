/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("users", (table)=>{
    table.string("token");
    table.date("expiresToken");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("users", (table) =>{
    table.dropColumn("token");
    table.dropColumn("expiresToken");
  })
};
