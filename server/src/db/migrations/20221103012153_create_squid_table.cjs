/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("squids", function (table) {
    table.bigIncrements("id");
    table.string("name").notNullable().unique();
    table.string("species").notNullable();
    table.string("specialPower");
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
