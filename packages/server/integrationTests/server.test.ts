import buildServer from "../src/serverFactory";

describe("server integration tests", () => {
  it("should start without error", () => {
    expect(() => {
      buildServer();
    }).not.toThrow();
  });
});
