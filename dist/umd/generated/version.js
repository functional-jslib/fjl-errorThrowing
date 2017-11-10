(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.version = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @memberOf module:fjlErrorThrowing
   * @property version {String} - Semantic version string.
   * @note Content generated by '{project-root}/node-scripts/VersionNumberReadStream.js'.
   * @generated Fri Nov 10 2017 17:20:42 GMT-0500 (Eastern Standard Time) 
   */

  var version = exports.version = '0.5.1';

  exports.default = version;
});