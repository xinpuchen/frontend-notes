'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULTS = exports.RC = exports.VERSION = undefined;

var _package = require('../../package.json');

var VERSION = exports.VERSION = _package.version;

var HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

var RC = exports.RC = HOME + '/.xprc';

var DEFAULTS = exports.DEFAULTS = {
  registry: 'xinpuchen',
  type: 'users'
};