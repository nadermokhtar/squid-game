// eslint-disable-next-line import/no-unresolved
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";
import { squidSpecies } from "./helpers/squidSpecies.js";
// table.increments("id").primary().notNullable();
// table.string("name", 1000).notNullable().unique();
// table.string("species", 255).notNullable();
// table.string("special_power", 500);
// table.integer("points").notNullable().defaultTo(0);
// table.timestamps(true, true);
Factory.define("Squid", Squid).attrs({
  name: () => "John Doe",
  species: () => squidSpecies[0],
  specialPower: () => "fighting",
  points: () => 6,
});

export { Factory };
