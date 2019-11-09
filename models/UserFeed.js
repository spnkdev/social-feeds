/**
 * UserFeed
 * @typedef {Object} UserFeed
 * @property {string} serviceName The service name. Ex: twitter
 * @property {Array<FeedItem>} feed The service feed
 * @property {Object} sourceData The original api response for this service
 */


/**
 * FeedItem
 * @typedef {Object} FeedItem
 * @property {string} createdAt The service name. Ex: twitter
 * @property {string} text The item text
 * @property {Array<Object>} media The service feed
 */

/**
 * @type {UserFeed}
 */
const userFeed = {
  serviceName: '',
  feed: [
    {
      createdAt: '',
      text: '',
      media: [{}],
    },
  ],
  sourceData: {},
};

module.exports = userFeed;
