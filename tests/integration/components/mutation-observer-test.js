import { module, test, skip } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render, settled } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | mutation observer', function(hooks) {
  setupRenderingTest(hooks)

  hooks.beforeEach(function() {
    this.actions = {}
    this.send = (actionName, ...args) =>
      this.actions[actionName].apply(this, args)
  })

  skip('it throws without options', async function(assert) {
    // This test is skipped since we can't expect assertions right now
    // See https://github.com/workmanw/ember-qunit-assert-helpers/issues/18
    assert.expect(1)

    assert.expectAssertion(
      async () => await render(hbs`{{mutation-observer}}`),
      /Error:/
    )
  })

  test('it triggers mutation events', async function(assert) {
    assert.expect(2)

    let mutations = []
    this.set('content', 'foo')
    this.actions.mutations = m => (mutations = m)

    await render(hbs`
      {{#mutation-observer subtree=true childList=true characterData=true on-mutations=(action 'mutations')}}
        {{#if content}}
          <p>{{content}}</p>
        {{/if}}
      {{/mutation-observer}}
    `)

    this.set('content', 'bar')

    await settled()

    assert.equal(mutations.length, 1)
    assert.equal(mutations[0].type, 'characterData')
  })
})
