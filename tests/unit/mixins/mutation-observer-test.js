import Ember from 'ember';
import MutationObserverMixin from '../../../mixins/mutation-observer';
import { module, test } from 'qunit';

module('Unit | Mixin | mutation observer');

// Replace this with your real tests.
test('it works', function(assert) {
  let MutationObserverObject = Ember.Object.extend(MutationObserverMixin);
  let subject = MutationObserverObject.create();
  assert.ok(subject);
});
