# lowbar v4.17.4

[Site](https://lowbar.com/) |
[Docs](https://lowbar.com/docs) |
[FP Guide](https://github.com/garrettmac/lowbar/wiki/FP-Guide) |
[Contributing](https://github.com/garrettmac/lowbar/blob/master/.github/CONTRIBUTING.md) |
[Wiki](https://github.com/garrettmac/lowbar/wiki "Changelog, Roadmap, etc.") |
[Code of Conduct](https://js.foundation/community/code-of-conduct) |
[Twitter](https://twitter.com/bestiejs) |
[Chat](https://gitter.im/garrettmac/lowbar)

The [lowbar](https://lowbar.com/) library exported as a [UMD](https://github.com/umdjs/umd) module.

Generated using [lowbar-cli](https://www.npmjs.com/package/lowbar-cli):
```shell
$ npm run build
$ lowbar -o ./dist/lowbar.js
$ lowbar core -o ./dist/lowbar.core.js
```

## Download

 * [Core build](https://raw.githubusercontent.com/garrettmac/lowbar/4.17.4/dist/lowbar.core.js) ([~4 kB gzipped](https://raw.githubusercontent.com/garrettmac/lowbar/4.17.4/dist/lowbar.core.min.js))
 * [Full build](https://raw.githubusercontent.com/garrettmac/lowbar/4.17.4/dist/lowbar.js) ([~24 kB gzipped](https://raw.githubusercontent.com/garrettmac/lowbar/4.17.4/dist/lowbar.min.js))
 * [CDN copies](https://www.jsdelivr.com/projects/lowbar) [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/lowbar/badge)](https://www.jsdelivr.com/package/npm/lowbar)

lowbar is released under the [MIT license](https://raw.githubusercontent.com/garrettmac/lowbar/4.17.4/LICENSE) & supports modern environments.<br>
Review the [build differences](https://github.com/garrettmac/lowbar/wiki/build-differences) & pick one that’s right for you.

## Installation

In a browser:
```html
<script src="lowbar.js"></script>
```

Using npm:
```shell
$ npm i -g npm
$ npm i --save lowbar
```

In Node.js:
```js
// Load the full build.
var _ = require('lowbar');
// Load the core build.
var _ = require('lowbar/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lowbar/fp');

// Load method categories.
var array = require('lowbar/array');
var object = require('lowbar/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lowbar/at');
var curryN = require('lowbar/fp/curryN');
```

**Note:**<br>
Install [n_](https://www.npmjs.com/package/n_) for lowbar use in the Node.js < 6 REPL.

## Why lowbar?

lowbar makes JavaScript easier by taking the hassle out of working with arrays,<br>
numbers, objects, strings, etc. lowbar’s modular methods are great for:

 * Iterating arrays, objects, & strings
 * Manipulating & testing values
 * Creating composite functions

## Module Formats

lowbar is available in a [variety of builds](https://lowbar.com/custom-builds) & module formats.

 * [lowbar](https://www.npmjs.com/package/lowbar) & [per method packages](https://www.npmjs.com/browse/keyword/lowbar-modularized)
 * [lowbar-es](https://www.npmjs.com/package/lowbar-es), [babel-plugin-lowbar](https://www.npmjs.com/package/babel-plugin-lowbar), & [lowbar-webpack-plugin](https://www.npmjs.com/package/lowbar-webpack-plugin)
 * [lowbar/fp](https://github.com/garrettmac/lowbar/tree/npm/fp)
 * [lowbar-amd](https://www.npmjs.com/package/lowbar-amd)
