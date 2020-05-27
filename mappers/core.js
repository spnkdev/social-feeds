const util = require('../util/util');

/**
 *
 * @param {*} rawItems Data loaded from the API
 * @param {Function} buildItem Data loaded from the API
 * @returns {import('../models/Feed').Feed}
 */
const core = (rawItems, buildItem) => {

  const feed = [];
  rawItems.forEach(rawItem => {
    feed.push(buildItem(rawItem));
  });

  return util.sort.byDateDescending(feed);
};


module.exports = core;
