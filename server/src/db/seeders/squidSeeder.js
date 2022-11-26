import "../../../test/factories/factories.js";
import { Factory } from "../../../test/factories/Factory.js";
import { Squid } from "../../models/index.js";

class SquidSeeder {
  static async seed() {
    // eslint-disable-next-line no-console
    console.log("Seeding squids...");
    try {
      const squidsFromAFactory = await new Factory(Squid).createMany(3);
      // eslint-disable-next-line no-console
      console.log(squidsFromAFactory);
      for (const toBeSquid of squidsFromAFactory) {
        // eslint-disable-next-line no-console
        console.log(toBeSquid);
        const currentSquid = await Squid.query().findOne({ name: toBeSquid.name });
        if (!currentSquid) {
          await Squid.query().insert(toBeSquid);
        }
      }
      // eslint-disable-next-line no-console
      console.log(squidsFromAFactory);
      // eslint-disable-next-line no-console
      console.log("Its Alive!");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("oh no", error);
    }
  }
}
export { SquidSeeder };
