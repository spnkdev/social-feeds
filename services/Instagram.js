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
    const betafeed =['This is an instagram feed']
    return betafeed
  };

  return {
    getFeed,
  };
};


module.exports = Instagram;
