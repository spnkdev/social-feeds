require('./Core');
require('../models/UserFeed');
const Twit = require('twit');

/**
 *
 * @typedef {Object} TwitterService
 * @type {import('./Core').CoreServices}
 */

/**
 *
 * @param {Object} config
 * @returns {TwitterService}
 */
const Twitter = (config, options) => {

  const client = new Twit(config);
  const {users, queryOptions} = options;


  const getFeed = async() => {
    const userFeeds = [];
    for (const user of users) {
      userFeeds.push(await loadUserFeed(client, user, queryOptions));
    }
    console.log(userFeeds.length);
    return userFeeds;
  };

  return {
    getFeed,
  };
};

const loadUserFeed = async(client, user, queryOptions) => {
  // const query = {...queryOptions, screen_name: user};
  return client.get('statuses/user_timeline', { })
    .catch(function(err) {
      console.log('caught error', err.stack);
    })
    .then(function(result) {
      // console.log('data', result);
      return {
        type: 'twitter',
        feed: result['data'],
      };
    });
};


module.exports = Twitter;
