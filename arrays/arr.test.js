let arr = ["cow", "Nkaka", "Computer", "James"];

beforeAll(() => {
    console.log("BEFORE ALL RUNS")
    arr = ["cow", "Nkaka", "Computer", "James"];
    /*Here we can do it to check if our arrays is empty*/
})
afterEach(() => {
    arr = ["cow", "Nkaka", "Computer", "James"];
    console.log("AFTER EACH")
})
afterAll(() => {
    console.log("AFTER ALL RUNS")
    arr = ["cow", "Nkaka", "Computer", "James"];
})
describe("I should test all arrays", () => {
    beforeEach(() => {
        console.log("I am Running before each test")
        arr = ["cow", "Nkaka", "Computer", "James"];
    })

    it("This is to test for the element which we will add on the end of arr array", () => {
        arr.push("Eric");
        expect(arr[arr.length - 1]).toBe("Eric")
    })

    it("It should test for the added element at the beggining", () => {
        arr.unshift("Christella");
        expect(arr[0]).toBe("Christella")
    })
})

// describe(("It should stop other test and run alone"), () => {
//     it.only("It should only test for truth", () => {
//         expect(true).toBeTruthy();
//     })
// })