import { describe, expect, it } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("Max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return  the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first  argument if  they are equal", () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe("FizzBuzz", () => {
  it("should return FizzBuzz if the number is divisible  by both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if the number is only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if the number is only divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return number to turned into a string when it is not divisible by atleast one number", () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});
