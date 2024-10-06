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

});
