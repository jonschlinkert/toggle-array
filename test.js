'use strict';

require('mocha');
var assert = require('assert');
var toggle = require('./');

describe('toggle-array', function() {
  it('should export a function', function() {
    assert.equal(typeof toggle, 'function');
  });

  it('should add the given property to all objects', function() {
    var arr = [{}, {}, {}, {}, {}];
    assert.deepEqual(toggle(arr, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should skip non-objects', function() {
    var arr = [{}, 'nope', {}, {}, {}];
    assert.deepEqual(toggle(arr, 'foo', 1), [
      { foo: false },
      'nope',
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should toggle all values to the opposite of the given index', function() {
    var arr1 = [{foo: true}, {foo: true}, {foo: true}, {foo: true}, {foo: true}];
    assert.deepEqual(toggle(arr1, 'foo', 1), [
      { foo: true },
      { foo: false },
      { foo: true },
      { foo: true },
      { foo: true }
    ]);

    var arr2 = [{foo: false}, {foo: false}, {foo: false}, {foo: false}, {foo: false}];
    assert.deepEqual(toggle(arr2, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);

    var arr3 = [{foo: true}, {foo: false}, {foo: false}, {foo: true}, {foo: false}];
    assert.deepEqual(toggle(arr3, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should disable all values that are not the given index', function() {
    var arr = [{foo: true}, {foo: true}, {foo: true}, {foo: true}, {foo: true}];
    assert.deepEqual(toggle.enable(arr, 'foo', 1), [
      { foo: false },
      { foo: true },
      { foo: false },
      { foo: false },
      { foo: false }
    ]);
  });

  it('should enable all values that are not the given index', function() {
    var arr = [{foo: true}, {foo: true}, {foo: true}, {foo: true}, {foo: true}];
    assert.deepEqual(toggle.disable(arr, 'foo', 1), [
      { foo: true },
      { foo: false },
      { foo: true },
      { foo: true },
      { foo: true }
    ]);
  });
});
