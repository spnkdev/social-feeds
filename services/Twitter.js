require('./Core');
require('../models/UserFeed');
const Twit = require('twit');
const { twitterDto } = require('../mappers/index');

/**
 *
 * @typedef {Object} TwitterService
 * @type {import('./Core').Core}
 */

/**
 *
 * @param {Object} config
 * @returns {TwitterService}
 */
const Twitter = (config, options) => {

  const client = new Twit(config);
  const { users, queryOptions } = options;

  const getFeed = async() => {
    const userFeeds = [];
    for (const user of users) {
      const userFeed = await loadUserFeed(client, user, queryOptions);
      userFeeds.push(twitterDto(userFeed));
    }
    return userFeeds;
  };


  return {
    getFeed,
  };
};

/**
 *
 * @returns {Promise<import('../models/UserFeed').UserFeed>}
 */
const loadUserFeed = async(client, user, queryOptions) => {
  // const query = {...queryOptions, screen_name: user};
  return client.get('statuses/user_timeline', {})
    .catch(function(err) {
      console.log('caught error', err.stack);
    })
    .then(function(result) {
      return result['data'];
    });
};


module.exports = Twitter;
