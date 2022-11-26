// eslint-disable-next-line import/no-unresolved
import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";
import { squidSpecies } from "./helpers/squidSpecies.js";
// table.increments("id").primary().notNullable();
// table.string("name", 1000).notNullable().unique();
// table.string("species", 255).notNullable();
// table.string("special_power", 500);
// table.integer("points").notNullable().defaultTo(0);
// table.timestamps(true, true);
const randomNumber = (number) => {
  return Math.floor(Math.random() * number);
};
Factory.define("Squid", Squid).attrs({
  name: () => faker.name.firstName(),
  species: () => squidSpecies[randomNumber.length],
  specialPower: () => "fighting",
  points: () => faker.datatype.number({ min: 1, max: 10 }),
});

export { Factory };
