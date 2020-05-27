/**
 * Example services config
 * @type {import('./models/ServiceConfig').ServicesConfig}
 */
const servicesConfigExample = [
  {
    name: 'twitter',
    clientConfig: {
      consumer_key: '',
      consumer_secret: '',
      access_token: '',
      access_token_secret: '',
    },
    queryConfig: {
      feedConfig: {
        // These options are used with the follwing endpoints
        // statuses/home_timeline and statuses/user_timeline

        // IDs OR Usernames. Leave this array empty to load tweets from the current user
        users: ['izsubs', 'SayakaNeon', 'anoctis_abade', 'usakosaan'],
        // Set to true if the users array above is an array of IDs
        lookupById: false,
        // You can add any parameters accepted by the API. Do not include any user related parameteres.
        // As of now the following parameteres should give the best results. You can use others shown on the API
        // documentation but results may vary.
        queryParameters: {
          count: 10, trim_user: false, exclude_replies: true, include_rts: false,
        },
      },
      customEndpointConfig: {
        // ex: statuses/user_timeline
        endpoint: '',
        // ex: count: 10
        queryParameters: {},
      },
    },
  },
];

module.exports = servicesConfigExample;
