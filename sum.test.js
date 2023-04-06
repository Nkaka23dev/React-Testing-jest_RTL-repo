const sum = require('./sum');

describe("toBe()[for primitive] and toEqual()\
[for referential datatype] functions of jest", () => {
    it("I should takes two numbers and add them", () => {
        const results = sum(4, 1);
        expect(results).toBe(5);
    });

    it("Should compare two object to see if there are equal", () => {
        const obj = {};
        expect(obj).toEqual({});
    })
}
)
describe("Should Test for Truth or Falsy", () => {
    it("Should test for truth", () => {
        const str = null;
        expect(str).toBeFalsy();
        expect(str).not.toBeTruthy();
        // expect(str).not.toBeUnderfined();
    })
    it("Should test for falsy", () => {
        const str = "nkaka";
        expect(str).toBeTruthy();
    })
})

// describe("Should check for arrays ")