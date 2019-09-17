const assert = require('assert');
const app = require('../../src/app');

describe('\'activity-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('activity-types');

    assert.ok(service, 'Registered the service');
  });
});
