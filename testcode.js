// const buildFeed = (data) => {
//   let feed = [];
//   data.forEach(tweet => {
//     console.log('Data', tweet.extended_entities);
//     if (tweet.entities.media) {
//       feed = [...feed, buildFeedItem(tweet)];
//     }
//   });
//   return feed;
// };

// const buildFeedItem = (tweet) => {
//   // console.log(item.entities.media);
//   // for each media item
//   const tweetMedia = tweet.extended_entities.media;
//   const media = [];

//   tweetMedia.forEach(element => {
//     media.push({
//       createdAt: tweet.created_at,
//       displayUrl: getDisplayUrl(element),
//       id: element.id_str,
//       text: tweet.text,
//       type: element.type,
//       url: element.url,
//     });

//   });


//   // console.log(media);


// };

// const getDisplayUrl = (media) => {

//   if (media.type === 'photo') {
//     const url = media.media_url_https;
//     return url.replace('.jpg', '?format=jpg&name=orig');
//   }

//   let highestBitrate = -1;
//   let displayUrl = '';
//   if (!media.video_info) {
//     return;
//   }
//   media.video_info.variants.forEach(variant => {
//     if (variant.bitrate && variant.bitrate > highestBitrate){
//       displayUrl = variant.url;
//     }
//   });

//   return displayUrl;

// };
