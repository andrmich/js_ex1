/**
 * Zaimportuj brakujące moduły za pomocą importów podanych w README.md
 */
import { sum } from "./algebra.js";
import * as alg from "./algebra.js";
import algebra from "./algebra.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 3", () => {
  expect(alg.sum(2, 2)).toBe(4);
});

test("2 - 2 to equal 0", () => {
  expect(alg.minus(2, 2)).toBe(0);
});

test("2 / 2 to equal 1", () => {
  expect(algebra(2, 2)).toBe(1);
});
