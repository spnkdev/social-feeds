// require('../Core');

/**
 *
 * @typedef {Object} InstagramService
 * @type {import('../Core').CoreService}
 */

// /**
//  *
//  * @param {string} config
//  * @returns {InstagramService}
//  */
const Instagram = (config, options) => {

  const buildFeed = () => {
    const betafeed = ['This is an instagram feed'];
    return betafeed;
  };

  return {
    buildFeed,
  };
};


module.exports = Instagram;
