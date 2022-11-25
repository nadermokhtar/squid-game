const { Model } = require("objection");
class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  // static get idColumn() {
  //   return "id";
  // }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["id", "name", "species", "points"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 1000 },
        species: { type: "string", minLength: 1, maxLength: 255 },
        special_power: { type: "string", minLength: 1, maxLength: 500 },
        points: { type: "integer" },
        created_at: { type: "string" },
      },
    };
  }
}

module.exports = Squid;
