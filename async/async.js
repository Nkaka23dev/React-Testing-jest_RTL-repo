const axios = require("axios");

const fetchData = async (id) => {
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return data;
};

// fetchData(2).then((data) => {
//   console.log(data.data.id);
// });
module.exports = fetchData;
