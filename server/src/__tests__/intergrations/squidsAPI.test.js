import { describe, expect, it } from "@jest/globals";
import request from "supertest";

import { app } from "./../../app.js";

describe("GET /squids", function () {
  it("responds with json", async () => {
    const res = await request(app).get("api/v1/squids");
    expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
    // expect(res.data).toContain(200);
  });
});
