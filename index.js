/* eslint node: true */

module.exports = {
  name: 'ember-mutation-observer',

  included: function(app) {
    this._super.included(app)

    app.import(app.bowerDirectory + '/WeakMap/WeakMap.js')
    app.import(app.bowerDirectory + '/MutationObserver/MutationObserver.js')
    app.import('vendor/ember-mutation-observer/register-version.js')
  }
}
