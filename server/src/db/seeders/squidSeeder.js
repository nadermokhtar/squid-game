import { Factory } from "../../../test/factories/Factory.js"
import { Squid } from "../../models/index.js"
import { Configuration } from "../../services/Configuration.js"
import "../../../test/factories/factories.js"

export class SquidSeeder {
  static async seed() {
    const squidFactory = new Factory(Squid)
    await squidFactory.createMany(5)
  }
}
