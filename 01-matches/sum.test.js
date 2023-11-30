const sumOfTwoNumbers = require("./sum.js");

describe("Examples tests", () => {
  it("Should add 1 and 2 to equal to 3", () => {
    const result = sumOfTwoNumbers(1, 2);
    expect(result).toBe(3);
  });
  it("Should test if an object is not empty", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("check for truth and false values", () => {
  it("null", () => {
    const n = "";
    expect(n).not.toBeTruthy();
    // expect(n).toBeNull();
  });
});

describe("numbers", () => {
  it("Two plus two", () => {
    const sum = 2 + 2;
    expect(sum).toBe(4);
    expect(sum).toBeGreaterThan(2);
    expect(sum).toBeGreaterThanOrEqual(4);
    expect(sum).toBeLessThanOrEqual(4);
  });
  it("adding floating point", () => {
    const sum = 0.2 + 0.1;
    expect(sum).toBeCloseTo(0.3);
  });
});

describe("Strings", () => {
  it("check for a character or characters in a string", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("Arrays", () => {
  it("check for an array", () => {
    const shoppingList = ["diapers", "kleenex", "paper towels", "milk"];
    expect(shoppingList).toContain("milk");
  });
});

function compileAndroidCode() {
  throw new Error("You are using the wrong JDK");
}

describe("Exceptions", () => {
  it("compiling code goes as excepted", () => {
    expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
  });
});
