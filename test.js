const Twit = require('twit');

const requestFeed = async(client, query) => {
  const a = new Twit(client);
  const { endpoint, parameteres } = query;
  return a.get(endpoint, parameteres)
    .then(function(result) {
      return result['data'];
    })
    .catch(function(err) {
      // console.log('caught error', err.stack);
      throw Error(err.stack);
    });
};
