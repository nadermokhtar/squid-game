import "../../../test/factories/factories.js";
import { Factory } from "../../../test/factories/Factory.js";
import Squid from "../../models/Squid.js";

class SquidSeeder {
  static async seed() {
    try {
      const squidFactory = new Factory(Squid);
      await squidFactory.createMany(3);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}
export { SquidSeeder };
