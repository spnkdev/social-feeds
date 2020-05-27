/**
 * Core
 * @typedef {{buildFeed: Function}} CoreService
 * @param {import('../models/ServiceConfig').ClientConfig} clientConfig
 * @param {import('../models/ServiceConfig').QueryConfig} queryConfig
 */
const core = (clientConfig, queryConfig) => {

  const buildFeed = async() => {
  /**
   * @type {import('../models/Feed').Feed}
   */
    const feed = [];
    return feed;
  };
  return {
    buildFeed,
  };
};

module.exports = core;
