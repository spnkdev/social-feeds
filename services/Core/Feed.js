const dto = require('../../mappers/dto');

const requestOwnFeed = async(query, feedRequester, serviceName) => {
  const feed = await feedRequester(query);
  return dto.getDto(serviceName)(feed);
};

const requestUsersFeed = async(users, queryBuilder, queryConfig, feedRequester, serviceName) => {
  let userFeeds = [];
  for (const user of users) {
    const query = queryBuilder(user, queryConfig);
    const userFeed = await feedRequester(query)
      .catch(e => console.log(e));

    if (userFeed) userFeeds = [...userFeeds, ...userFeed];
  };

  return dto.getDto(serviceName)(userFeeds);
};

module.exports = {
  requestOwnFeed,
  requestUsersFeed,
};
