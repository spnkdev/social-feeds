const moment = require('moment');

const ToISO = (date, format) => {
  return moment(date, format).toISOString();
};

module.exports = {
  ToISO,
};
