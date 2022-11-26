const { Model } = require("objection");
class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  // static get idColumn() {
  //   return "id";
  // }

  // static get jsonSchema() {
  //   return {
  //     type: "object",
  //     required: ["id", "name", "species", "points"],
  //     properties: {
  //       name: { type: "string" },
  //       species: { type: "string" },
  //       special_power: { type: "string" },
  //       points: { type: "integer" },
  //       created_at: { type: "string" },
  //     },
  //   };
  // }
}

module.exports = Squid;
