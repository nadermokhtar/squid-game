// write a test for squidFactory.js to create a object with the correct properties
//    - name
//    - species
//    - special_power
//    - points
//    - created_at
//    - updated_at
import { describe, expect, it } from "@jest/globals";

import "../../../test/factories/factories.js";
import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";

describe("create squidFactory", function () {
  it("responds with json object", async () => {
    expect(true).toBe(true);
    const squidFactory = await new Factory(Squid).createMany(3);
    expect(squidFactory).toBeInstanceOf(Squid);
  });
});
