/* eslint-disable max-len */
/**
 * Client configuration to access the service API
 * @typedef {Object} ClientConfig
 * @property {string} consumer_key Consumer key
 * @property {string} consumer_secret Consumer secret
 * @property {string} access_token Access token
 * @property {string} access_token_secret Access token secret
 */
const clientConfig = {
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: '',
};

/**
 * Configuration for how to load each user feed
 * @typedef {Object} FeedConfig
 * @property {Array<string>} users Users to load the feed from
 * @property {boolean} lookupById Set to true to load by user ID
 * @property {Object} queryParameters Parameteres to use when loading a user feed
 */
const feedConfig = {
  // These options are used with the follwing endpoints
  // statuses/home_timeline and statuses/user_timeline

  // IDs OR Usernames. Leave this array empty to load tweets from the current user
  users: ['izsubs', 'SayakaNeon', 'anoctis_abade', 'usakosaan'],
  // Set to true if the users array above is an array of IDs
  lookupById: false,
  // You can add any parameters accepted by the API. Do not include any user related parameteres.
  // As of now the following parameteres should give the best results. You can use others shown on the API
  // documentation but results may vary.
  queryParameters: {
    count: 10, trim_user: false, exclude_replies: true, include_rts: false,
  },
};

/**
 * Custom endpoint configuration
 * @typedef {Object} CustomEndpointConfig
 * @property {string} endpoint Endpoint
 * @property {Object} queryParameters Parameteres to use when loading a user feed
 */
const customEndpointConfig = {
  // ex: statuses/user_timeline
  endpoint: '',
  // ex: count: 10
  queryParameters: {},
};

/**
 * Query configuration to access the service API
 * @typedef {Object} QueryConfig
 * @property {FeedConfig} feedConfig
 * @property {CustomEndpointConfig} customEndpointConfig

 */
const queryConfig = {
  feedConfig,
  customEndpointConfig,
};

/**
 * ServiceConfig
 * @typedef {Object} ServiceConfig
 * @property {'twitter' | 'instagram'} name The name of the service to use.
 * @property {ClientConfig} clientConfig Service client configuration.
 * @property {QueryConfig} queryConfig Service query options.
 */

/**
 * ServicesConfig
 * @typedef {Array<ServiceConfig>} ServicesConfig
 */

/**
 * @type {ServiceConfig}
 */
const serviceConfig = {
  name: 'twitter',
  clientConfig,
  queryConfig,
};

module.exports = serviceConfig;
