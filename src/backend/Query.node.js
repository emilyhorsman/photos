const axios = require('axios');

async function fetch(query, variables) {
  return await axios.post('http://localhost:3000/graphql', {
    query,
    variables,
  });
}

module.exports = {
  fetch,
};
