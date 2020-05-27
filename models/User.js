/**
 * User
 * @typedef {Object} User
 * @property {string} id User id.
 * @property {string} name Creation timestamp in ISO 8601 format
 * @property {string} username Name of the service used. Ex: twitter
 * @property {string} avatarUrl  Item text
 */
/**
 * @type {User}
 */
const user = {
  id: '',
  name: '',
  username: '',
  avatarUrl: '',
};

/**
 *
 * @typedef {Object} UserFeeds
 * @type {Array<import('../models/UserFeed').UserFeed>}
 */


module.exports = user;
