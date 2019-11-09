
/**
 *
 * @param {*} data
 * @returns {import('../models/UserFeed').UserFeed}
 */
const twitterDto = (data) => {
  return {
    serviceName: 'twitter',
    feed: [
      {
        createdAt: 'SampleDate',
        text: 'SampleText',
        media: [{}],
      },
    ],
    sourceData: data,
  };
};

module.exports = twitterDto;
