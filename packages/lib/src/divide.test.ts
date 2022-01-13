import divide from "./divide";
import DivisionByZeroError from "./DivisionByZeroError";

describe("divide", () => {
  it("should calculate the division correctly", () => {
    expect(divide(6, 2)).toBe(3);
  });

  it("should throw an exception when dividing by zero", () => {
    expect(() => divide(1, 0)).toThrow(DivisionByZeroError);
  });
});
