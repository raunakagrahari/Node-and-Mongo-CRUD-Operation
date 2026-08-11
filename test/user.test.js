const test = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');

// Register the User schema
require('../models/userModel');
const User = mongoose.model('User');

test('userController tests', async (t) => {
  await t.test('getAllUsers should return success and all users', async () => {
    const originalFind = User.find;
    User.find = async function() {
      return [{ name: 'Alice', email: 'alice@example.com' }];
    };

    const req = {};
    let responseStatus, responseJson;
    const res = {
      status: function(code) {
        responseStatus = code;
        return this;
      },
      json: function(data) {
        responseJson = data;
        return this;
      }
    };

    const { getAllUsers } = require('../controllers/userController');
    await getAllUsers(req, res, () => {});

    assert.strictEqual(responseStatus, 200);
    assert.strictEqual(responseJson.status, 'success');
    assert.strictEqual(responseJson.results, 1);
    assert.strictEqual(responseJson.data.users[0].name, 'Alice');

    User.find = originalFind;
  });
});
