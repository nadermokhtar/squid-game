import request from "supertest";
import app from "../../src/app";

describe("GET /squids", function () {
  it("responds with json", async () {
    const res = await request(app)
      .get("/squids")

    expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
    // expect(res.data).toContain(200);
  });
});
