const addDays = require("date-fns/addDays");

function getDateAfterXDays(days) {
  dateObject = addDays(new Date(2020, 7, 22), days);
  return `${dateObject.getDate()}-${
    dateObject.getMonth() + 1
  }-${dateObject.getFullYear()}`;
}

console.log(getDateAfterXDays(5));
module.exports = getDateAfterXDays;
