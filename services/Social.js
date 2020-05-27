const { Instagram, Twitter } = require('./index');
const { getValidServices } = require('../validators/index');


/**
 * @param {import('../models/ServiceConfig').ServicesConfig} servicesConfig Services Configuration
 */
const SocialService = (servicesConfig) => {

  const subscribedServices = getSubscribedServices(servicesConfig);
  /**
   * Returns the aggreated feed from all the specified services
   */
  const getFeed = async() => {
    /**
     * @type {import('../models/Feed').Feed}
     */
    let feed = [];
    for (const service of subscribedServices) {
      const serviceFeeds = await service.buildFeed();
      feed = [...feed, ...serviceFeeds];
    }
    return feed;
  };

  return {
    getFeed,
  };
};

const getSubscribedServices = (services) => {
  const validServices = getValidServices(services);
  const subscribedServices = [];

  for (const service of validServices) {
    subscribedServices.push(getService(service));
  }

  return subscribedServices;
};

const getService = (service) => {
  const name = service.name.toLowerCase().trim();
  const { clientConfig, queryConfig } = service;

  switch (name) {
    case 'twitter':
      return Twitter(clientConfig, queryConfig);
    case 'instagram':
      return Instagram(clientConfig, queryConfig);
    default:
      break;
  }

};


module.exports = SocialService;
