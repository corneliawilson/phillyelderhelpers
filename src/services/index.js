const users = require('./users/users.service.js');
const activity = require('./activity/activity.service.js');
const activityTypes = require('./activity-types/activity-types.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(activity);
  app.configure(activityTypes);
};
