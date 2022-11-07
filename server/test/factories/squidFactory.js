// eslint-disable-next-line import/no-unresolved
import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

import Squid from "../../src/models/index.js";
import { squidSpecies } from "./helpers/squidSpecies.js";
// table.uuid("id").primary().notNullable();
// table.string.unique("name", 1000).notNullable();
// table.string("species", 255).notNullable();
// table.string("special_power", 500);
// table.integer("points").notNullable().defaultTo(0);
// table.timestamp("created_at").defaultTo(knex.fn.now());
Factory.define("Squid", Squid)
  .attr("id", faker.datatype.uuid())
  .attr("name", faker.name.fullName())
  .attr("species", faker.helpers.arrayElement(squidSpecies))
  .attr("special_power", faker.word.verb())
  .attr("points", faker.random.numeric(6, { bannedDigits: ["0"] }))
  .attr("created_at", faker.date.now);

export { Factory };
