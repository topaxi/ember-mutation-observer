"use strict";

const mergeTrees = require("broccoli-merge-trees");
var writeFile = require("broccoli-file-creator");
const version = require("./package.json").version;

module.exports = {
  name: "ember-mutation-observer",

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import("vendor/WeakMap.js");
    app.import("vendor/MutationObserver.js");
    app.import("vendor/ember-mutation-observer/register-version.js");
  },

  treeForVendor(vendorTree) {
    let registerVersionTree = writeFile(
      "ember-mutation-observer/register-version.js",
      `Ember.libraries.register('Ember Mutation Observer', '${version}')`
    );

    return mergeTrees([vendorTree, registerVersionTree]);
  }
};
