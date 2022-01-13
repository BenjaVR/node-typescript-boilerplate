import DivisionByZeroError from "./DivisionByZeroError";

export default function divide(a: number, b: number): number {
  if (b === 0) {
    throw new DivisionByZeroError();
  }
  return a / b;
}
