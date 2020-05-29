const util = require('../util/util');
const coreMapper = require('../mappers/core');


/**
 *
 * @param {*} userFeeds
 * @returns {import('../models/Feed').Feed}
 */
const twitterDto = (userFeeds) => {
  return coreMapper(userFeeds, buildItem);
};

/**
 *
 * @param {*} data Data loaded from the API
 * @returns {import('../models/FeedItem').FeedItem}
 */
const buildItem = (data) => {

  return {
    user: {
      id: data.user.id_str,
      name: data.user.name,
      username: data.user.screen_name,
      avatarUrl: data.user.profile_image_url_https,
    },
    createdAt: util.dateFormat
      .ToISO(data.created_at, 'ddd MMM DD HH:mm:ss Z YYYY'),
    text: data.text,
    media: buildMedia(data),
    serviceName: 'twitter',
    sourceData: data,
  };

};


const buildMedia = (tweet) => {
  const media = [];
  if (!tweet.extended_entities) {
    return media;
  }
  // for each media item
  const tweetMedia = tweet.extended_entities.media;

  tweetMedia.forEach(element => {
    media.push({
      createdAt: util.dateFormat
        .ToISO(element.created_at, 'ddd MMM DD HH:mm:ss Z YYYY'),
      displayUrl: getDisplayUrl(element),
      id: element.id_str,
      text: tweet.text,
      type: element.type,
      url: element.url,
    });

  });

  return media;
};

const getDisplayUrl = (media) => {

  if (media.type === 'photo') {
    const url = media.media_url_https;
    return url.replace('.jpg', '?format=jpg&name=orig');
  }

  let highestBitrate = -1;
  let displayUrl = '';
  if (!media.video_info) {
    return;
  }
  media.video_info.variants.forEach(variant => {
    if (variant.bitrate && variant.bitrate > highestBitrate){
      displayUrl = variant.url;
    }
  });

  return displayUrl;
};


module.exports = twitterDto;
