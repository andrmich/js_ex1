/**
 * Napraw bądź dopisz brakujące funkcje.
 */

export function oddOrEven(x) {
  return x & 1 ? "odd" : "even"; // fixme
}

export function isGreaterThanZero(number) {
  return number > 0 ? "provided number is greater than 0" : false;
}

export function toCelsius(fahrenheit) {
  // Fixme: https://en.wikipedia.org/wiki/Fahrenheit
  return (5 / 9) * (fahrenheit - 32);
}
