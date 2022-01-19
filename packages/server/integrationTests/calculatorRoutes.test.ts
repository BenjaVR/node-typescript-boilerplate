import buildServer from "../src/serverFactory";

describe("calculator integration tests", () => {
  describe("/calculator/sum/:x/:y", () => {
    it("should correctly handle route", async () => {
      const server = buildServer();
      const response = await server.inject({
        method: "GET",
        url: "/calculator/sum/3/5",
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({
        result: 8,
      });
    });

    it("should return 404 if not all route params are provided", async () => {
      const server = buildServer();
      const response = await server.inject({
        method: "GET",
        url: "/calculator/sum/3",
      });

      expect(response.statusCode).toBe(404);
    });
  });
});
