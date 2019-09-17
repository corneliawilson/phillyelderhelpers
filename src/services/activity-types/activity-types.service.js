// Initializes the `activity-types` service on path `/activity-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/activity-types.model');
const hooks = require('./activity-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/activity-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('activity-types');

  service.hooks(hooks);
};
