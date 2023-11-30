const fetchData = require("./async");

describe("Should return a correct todo", () => {
  it("Test if a todo contain a provided Id", async () => {
    const todo = await fetchData(1);
    expect(todo.data.id).toBe(1);
  });
});
