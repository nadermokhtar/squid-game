import "../../../test/factories/factories.js";
import { Factory } from "../../../test/factories/Factory.js";

export class SquidSeeder {
  static async seed() {
    const squidFactory = new Factory(squidFactory);
    await squidFactory.createMany(5);
  }
}
