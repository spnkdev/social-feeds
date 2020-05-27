/* eslint-disable max-len */
/**
 * FeedItem
 * @typedef {Object} FeedItem This item represents each post/item loaded from the user
 * @property {import('../models/User').User} user
 * @property {string} createdAt Creation timestamp in ISO 8601 format
 * @property {Array<import('../models/Media').Media>} media Media contained in this item (video/photo)
 * @property {string} serviceName Name of the service used. Ex: twitter
 * @property {Object} sourceData Contains all the data loaded for this item
 * @property {string} text  Item text
 */

/**
 * @type {FeedItem}
 */
const feedItem = {
  user: {
    id: '',
    name: '',
    username: '',
    avatarUrl: '',
  },
  createdAt: '',
  text: '',
  media: [require('./Media')],
  serviceName: '',
  sourceData: {},
};

module.exports = feedItem;
