const { default: axios } = require("axios");

const getPosts = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  module.exports = getPosts;
  