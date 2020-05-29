const twitterDto = require('../dtos/twitter');


const getDto = (serviceName) => {
  switch (serviceName.toLowerCase().trim()) {
    case 'twitter':
      return twitterDto;
    default:
      break;
  }
};
module.exports = {
  getDto,
};
