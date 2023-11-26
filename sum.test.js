const sumOfTwoNumbers = require("./sum.js");

it("Should add 1 and 2 to equal to 3", () => {
  const result = sumOfTwoNumbers(1, 2);
  expect(result).toBe(7);
});
