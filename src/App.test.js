import { add } from './StringCalculator';

describe('StringCalculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(add("5")).toBe(5);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should return the sum of an unknown amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should handle newlines(\n) between numbers', () => {
    expect(add("1\\n2,3")).toBe(6);
  });

  test('should throw an error if the input contains a negative number', () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
  });

  test('should handle custom delimiter specified in the format "//delimiter\\nnumbers"', () => {
    expect(add("//;\\n1;2")).toBe(3); // delimiter is ";"
    expect(add("//|\\n3|4|5")).toBe(12); // delimiter is "|"
    expect(add("//:\\n6:7")).toBe(13); // delimiter is ":"
  });
});
