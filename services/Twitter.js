require('./Core');
require('../models/UserFeed');
const Twit = require('twit');
const { twitterDto } = require('../mappers/index');

/**
 *
 * @typedef {Object} TwitterService
 * @type {import('./Core').CoreService}
 */

/**
 *
 * @param {import('../models/ServiceConfig').ClientConfig} clientConfig
 * @param {import('../models/ServiceConfig').QueryConfig} queryConfig
 *
 * @returns {TwitterService}
 */
const Twitter = (clientConfig, queryConfig) => {

  const client = new Twit(clientConfig);
  const { feedConfig: { users }, customEndpointConfig } = queryConfig;
  const isCustomEndpoint = !!customEndpointConfig.endpoint;

  const requestOwnFeed = async() => {
    const query = buildQuery(null, queryConfig);
    const feed = await requestFeed(client, query);
    return twitterDto(feed);
  };

  const requestUsersFeed = async() => {
    let userFeeds = [];
    for (const user of users) {
      const query = buildQuery(user, queryConfig);
      const userFeed = await requestFeed(client, query)
        .catch(e => console.log(e));

      if (userFeed) userFeeds = [...userFeeds, ...userFeed];
    };

    return twitterDto(userFeeds);
  };

  const buildFeed = async() => {
    if (isCustomEndpoint) {
      const query = buildQuery(null, queryConfig);
      return await requestFeed(client, query);
    }
    if (!users.length) {
      return await requestOwnFeed();
    }
    return await requestUsersFeed();
  };


  return {
    buildFeed,
  };
};

/**
 * @param {*} user
 * @param {import('../models/ServiceConfig').QueryConfig} queryConfig
 *
 */
const buildQuery = (user, queryConfig) => {
  const { feedConfig: { lookupById, queryParameters }, customEndpointConfig } = queryConfig;

  if (customEndpointConfig.endpoint.length) {
    return {
      endpoint: customEndpointConfig.endpoint,
      parameteres: customEndpointConfig.queryParameters,
    };
  }

  if (user) {
    const userParameter = lookupById ? 'user_id' : 'screen_name';
    return {
      endpoint: 'statuses/user_timeline',
      parameteres: { ...queryParameters, [userParameter]: user },
    };
  }
  // In case it's own feed request
  return {
    endpoint: 'statuses/home_timeline',
    parameteres: { ...queryParameters },
  };
};

const requestFeed = async(client, query) => {
  const { endpoint, parameteres } = query;
  return client.get(endpoint, parameteres)
    .then(function(result) {
      return result['data'];
    })
    .catch(function(err) {
      // console.log('caught error', err.stack);
      throw Error(err.stack);
    });
};


module.exports = Twitter;
