// @ts-nocheck
require('../Core');
require('../../models/UserFeed');
const Twit = require('twit');
const { requestOwnFeed, requestUsersFeed } = require('../Core/Feed');
// const { twitterDto } = require('../../mappers/index');

/**
 *
 * @typedef {Object} TwitterService
 * @type {import('../Core').CoreService}
 */

/**
 *
 * @param {import('../../models/ServiceConfig').ClientConfig} clientConfig
 * @param {import('../../models/ServiceConfig').QueryConfig} queryConfig
 *
 * @returns {TwitterService}
 */
const Twitter = (clientConfig, queryConfig) => {

  const client = new Twit(clientConfig);

  const { feedConfig: { users }, customEndpointConfig } = queryConfig;
  const isCustomEndpoint = !!customEndpointConfig.endpoint;

  const buildFeed = async() => {
    if (isCustomEndpoint) {
      const query = buildQuery(null, queryConfig);
      return await requestFeed(query);
    }
    if (!users.length) {
      const query = buildQuery(null, queryConfig);
      return await requestOwnFeed(query, requestFeed, 'twitter');
    }
    return await requestUsersFeed(users, buildQuery, queryConfig, requestFeed, 'twitter');
  };


  /**
 * @param {*} user
 * @param {import('../../models/ServiceConfig').QueryConfig} queryConfig
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

  const requestFeed = async(query) => {
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


  return {
    buildFeed,
  };
};

module.exports = Twitter;
