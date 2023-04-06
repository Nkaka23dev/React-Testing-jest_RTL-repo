const getPosts = require('./async');

describe("It should check if returned value is true", () => {
    it("check get postData function", async () => {
        const data = await getPosts(2);
        expect(data.id).toBe(2);
    })
})