export default class DivisionByZeroError extends Error {
  constructor() {
    super("Cannot divide a number by zero.");
  }
}
