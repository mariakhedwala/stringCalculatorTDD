import { calculate } from './StringCalculator';

describe('StringCalculator', () => {
  test('should return 0 for an empty string', () => {
    expect(calculate("")).toBe(0);
  });

  test('should return the number for a single number string', () => {
    expect(calculate("5")).toBe(5);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(calculate("1,2")).toBe(3);
  });

  test('should return the sum of an unknown amount of numbers', () => {
    expect(calculate("1,2,3,4")).toBe(10);
  });

  test('should handle newlines(\n) between numbers', () => {
    expect(calculate("1\n2,3")).toBe(6);
  });

});
