require('./Core');

/**
 *
 * @typedef {Object} InstagramService
 * @type {import('./Core').Core}
 */

/**
 *
 * @param {string} config
 * @returns {InstagramService}
 */
const Instagram = (config, options) => {

  const getFeed = () => {
    return ['This is an instagram feed'];
  };

  return {
    getFeed,
  };
};


module.exports = Instagram;
