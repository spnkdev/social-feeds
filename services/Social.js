const { Instagram, Twitter } = require('./index');
const { getValidServices } = require('../validators/index');

/**
 *
 * @typedef {Object} UserFeeds
 * @type {Array<import('../models/UserFeed').UserFeed>}
 */


const SocialService = (services) => {

  const subscribedServices = getSubscribedServices(services);

  const getFeed = async() => {
    /**
     * @type {UserFeeds}
     */
    let mainFeed = [];
    for (const service of subscribedServices) {
      const serviceFeeds = await service.getFeed();
      mainFeed = [...mainFeed, ...serviceFeeds];

    }
    console.log('Loaded Feed', mainFeed);
    return mainFeed;
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
  const { config, options } = service;

  switch (name) {
    case 'twitter':
      return Twitter(config, options);
    case 'instagram':
      return Instagram(config, options);
    default:
      break;
  }

};


module.exports = SocialService;
