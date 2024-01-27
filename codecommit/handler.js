'use strict';
const moment = require('moment')

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'serverless code commit ',
        timeStamp: moment().unix()
      },
      null,
      2
    ),
  };

};
