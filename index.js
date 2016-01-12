/* eslint node: true */

module.exports = {
  name: 'ember-mutation-observer',

  included: function(app) {
    this._super.included(app)

    app.import('bower_components/WeakMap/WeakMap.js')
    app.import('bower_components/MutationObserver/MutationObserver.js')
    app.import('vendor/ember-mutation-observer/register-version.js')
  }
}
