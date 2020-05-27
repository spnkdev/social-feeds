const moment = require('moment');

const byDateAscending = (items) => {
  return items.sort(
    (a, b) => moment(a.createdAt).diff(moment(b.createdAt))
  );
};
const byDateDescending = (items) => {
  return items.sort(
    (a, b) => moment(b.createdAt).diff(moment(a.createdAt))
  );
};

module.exports = {
  byDateAscending,
  byDateDescending,
};
