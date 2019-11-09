/**
 * ServiceConfig
 * @typedef {Object} ServiceConfig
 * @property {'twitter' | 'instagram'} name The name of the service to use.
 * @property {Object} config Service configuration.
 * @property {Object} options Service options.
 */

/**
 * ServicesConfig
 * @typedef {Array<ServiceConfig>} ServicesConfig
 */


/**
 * @type {ServiceConfig}
 */
const servicesConfig = {
  name: 'twitter',
  config: {},
  options: {},
};

module.exports = servicesConfig;
