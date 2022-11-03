/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("squids", function (table) {
    table.increments("id").primary().notNullable();
    table.string("name", 1000).notNullable().unique();
    table.string("species", 255).notNullable();
    table.string("special_power", 500);
    table.integer("points").notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTable("squids");
};
