import EmberObject from '@ember/object'
import MutationObserverMixin from '../../../mixins/mutation-observer'
import { module, test } from 'qunit'

module('Unit | Mixin | mutation observer', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    let MutationObserverObject = EmberObject.extend(MutationObserverMixin)
    let subject = MutationObserverObject.create()
    assert.ok(subject)
  })
})
