let animals = ["Elephant", "Zebra", "Bear", "Tiger"];

beforeAll(() => {
  console.log("BEFORE ALL TEST RUNS");
  animals = ["Elephant", "Zebra", "Bear", "Tiger"];
});

afterEach(() => {
  console.log("AFTER EACH");
  animals = ["Elephant", "Zebra", "Bear", "Tiger"];
});

afterAll(() => {
  console.log("AFTER ALL TEST RUNS");
  animals = ["Elephant", "Zebra", "Bear", "Tiger"];
});
describe("Test Animal array", () => {
  beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ["Elephant", "Zebra", "Bear", "Tiger"];
  });

  it("It should add animal at the end of array", () => {
    animals.push("Gorilla");
    expect(animals[animals.length - 1]).toBe("Gorilla");
  });
  it.only("It should add animal at the beggining of array", () => {
    animals.unshift("human");
    expect(animals[0]).toBe("human");
  });
  it("It should check  if the initial array length is 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("Testing for something else", () => {
  it.skip("Check if something is true", () => {
    const isGodSon = true;
    expect(isGodSon).toBeTruthy();
  });
});
