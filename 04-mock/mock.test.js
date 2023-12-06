const forEach = (items, callback) => {
  for (i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

describe("mocking", () => {
  it("It should mock the callback funtion", () => {
    const mockCallBack = jest.fn((x) => x + 42);
    forEach([0, 1], mockCallBack);
    expect(mockCallBack.mock.calls.length).toBe(2);
  });
});
