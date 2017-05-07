# toggle-array [![NPM version](https://img.shields.io/npm/v/toggle-array.svg?style=flat)](https://www.npmjs.com/package/toggle-array) [![NPM monthly downloads](https://img.shields.io/npm/dm/toggle-array.svg?style=flat)](https://npmjs.org/package/toggle-array) [![NPM total downloads](https://img.shields.io/npm/dt/toggle-array.svg?style=flat)](https://npmjs.org/package/toggle-array) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/toggle-array.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/toggle-array)

> In an array of objects, this enables a property on the object at the specified index, while disabling the property on all other objects.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save toggle-array
```

## Usage

```js
var toggle = require('toggle-array');
var arr = [
  {foo: true},
  {foo: true},
  {foo: true},
  {foo: true},
  {foo: true}
];

console.log(toggle(arr, 'foo', 2));
// [ { foo: false },
//   { foo: false },
//   { foo: true },
//   { foo: false },
//   { foo: false } ]
```

## .enable

Enables the element at the given index, and disables all other items:

```js
var toggle = require('toggle-array');
var arr = [
  {foo: true},
  {foo: true},
  {foo: true},
  {foo: true},
  {foo: true}
];

console.log(toggle.enable(arr, 'foo', 2));
// [ { foo: false },
//   { foo: false },
//   { foo: true },
//   { foo: false },
//   { foo: false } ]
```

## .disable

Disabled the element at the given index, and enables all other items:

```js
var toggle = require('toggle-array');
var arr = [
  {foo: false},
  {foo: false},
  {foo: false},
  {foo: false},
  {foo: false}
];

console.log(toggle.disable(arr, 'foo', 2));
// [ { foo: true },
//   { foo: true },
//   { foo: false },
//   { foo: true },
//   { foo: true } ]
```

## About

### Related projects

* [arr-flatten](https://www.npmjs.com/package/arr-flatten): Recursively flatten an array or arrays. | [homepage](https://github.com/jonschlinkert/arr-flatten "Recursively flatten an array or arrays.")
* [array-unique](https://www.npmjs.com/package/array-unique): Remove duplicate values from an array. Fastest ES5 implementation. | [homepage](https://github.com/jonschlinkert/array-unique "Remove duplicate values from an array. Fastest ES5 implementation.")
* [prompt-choices](https://www.npmjs.com/package/prompt-choices): Create an array of multiple choice objects for use in prompts. | [homepage](https://github.com/enquirer/prompt-choices "Create an array of multiple choice objects for use in prompts.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on May 07, 2017._