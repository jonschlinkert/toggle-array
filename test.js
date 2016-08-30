'use strict';

require('mocha');
var assert = require('assert');
var toggleArray = require('./');

describe('toggle-array', function() {
  it('should export a function', function() {
    assert.equal(typeof toggleArray, 'function');
  });

  it('should add the given property to all objects', function() {
    var arr = [{}, {}, {}, {}, {}];
    assert.deepEqual(toggleArray(arr, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should skip non-objects', function() {
    var arr = [{}, 'nope', {}, {}, {}];
    assert.deepEqual(toggleArray(arr, 'foo', 1), [
      { foo: false },
      'nope',
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should disable all values that are not the given index', function() {
    var arr = [{foo: true}, {foo: true}, {foo: true}, {foo: true}, {foo: true}];
    assert.deepEqual(toggleArray(arr, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });
});
