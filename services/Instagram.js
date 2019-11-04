require('./Core');

/**
 *
 * @typedef {Object} InstagramService
 * @type {import('./Core').CoreServices}
 */

/**
 *
 * @param {string} config
 * @returns {InstagramService}
 */
const Instagram = (config) => {
  // const feedEndpoint = '';

  const getFeed = () => {
    // console.log('This is an instagram feed');
    return ['This is an instagram feed'];
  };
  return {
    getFeed,
  };
};


module.exports = Instagram;
