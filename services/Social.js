const Twitter = require('./Twitter');
const Instagram = require('./Instagram');

/**
 *
 * @typedef {Object} UserFeeds
 * @type {Array<import('../models/UserFeed').UserFeed>}
 */


const availableServices = ['twitter', 'instagram'];

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
    console.log('Main Feed', mainFeed.length);
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

const getValidServices = (services) => {
  const validServices = [];

  services.forEach(service => {
    const serviceToValidate = service.name.toLowerCase().trim();
    // if service is available and is not already subscribed
    if (availableServices.indexOf(serviceToValidate) !== -1
        && validServices.indexOf(serviceToValidate) === -1) {
      validServices.push(service);
    }
  });

  return validServices;
};


const getService = (service) => {
  const name = service.name.toLowerCase().trim();
  const { config, options} = service;

  switch (name) {
    case 'twitter':
      return Twitter(config, options);
    case 'instagram':
      return Instagram(config);
    default:
      break;
  }

};


module.exports = SocialService;
