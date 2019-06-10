import * as logic from "./logic";

test("result should be odd", () => {
  expect(logic.oddOrEven(1)).toBe("odd");
});

test("result should be even", () => {
  expect(logic.oddOrEven(2)).toBe("even");
});

test("result should be greater than 0", () => {
  expect(logic.isGreaterThanZero(222)).toBe(
    "provided number is greater than 0"
  );
});

test("result should be lower than 0", () => {
  expect(logic.isGreaterThanZero(-222)).toBe(false);
});

test("function should return correct Celsius", () => {
  expect(logic.toCelsius(80)).toBe(26.666666666666668);
  expect(logic.toCelsius(0)).toBe(-17.77777777777778);
});
