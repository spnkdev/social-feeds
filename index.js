const SocialService = require('./services/Social');

/**
 * Example services config
 * @type {import('./models/ServiceConfig').ServicesConfig}
 */
const services = [
  {
    name: 'twitter',
    config: {
      consumer_key: 'cXfZUF6TnYvPMkCAJroQAINMF',
      consumer_secret: 'D9Ah1kOv0KOHvW0cBQcfDTAHS65AgQhDi3637CXvtqvilofq3J',
      access_token: '379305732-smvlfKmvhALjPlY68dOKHFWrp4JorJSF9KuBXXGU',
      access_token_secret: 'j8NjU10FqZsc13POtULrqhsY3cfxu66mVQuCVQe5wV6B5',
    },
    options: {
      users: ['izsubs', 'SayakaNeon'],
      queryOptions: {
        count: 10, trim_user: true, exclude_replies: true, include_rts: false,
      },
    },
  },
  {
    name: 'instagram',
    config: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_TOKEN_SECRET,
    },
    options: {
      users: [],
      queryOptions: {},
    },
  },
];


SocialService(services).getFeed();

module.exports = SocialService;
