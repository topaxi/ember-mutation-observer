import { moduleForComponent, test } from 'ember-qunit'
import wait from 'ember-test-helpers/wait'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('mutation-observer', 'Integration | Component | mutation observer', {
  integration: true
})

test('it throws without options', function(assert) {
  assert.expect(1)
  assert.throws(() => this.render(hbs`{{mutation-observer}}`), /Error:/)
})


test('it triggers mutation events', function(assert) {
  assert.expect(2)

  let mutations = []
  this.set('content', 'foo')
  this.on('mutations', m => mutations = m)

  this.render(hbs`
    {{#mutation-observer subtree=true childList=true characterData=true on-mutations=(action 'mutations')}}
      {{#if content}}
        <p>{{content}}</p>
      {{/if}}
    {{/mutation-observer}}
  `)

  this.set('content', 'bar')

  return wait().then(() => {
    assert.equal(mutations.length, 1)
    assert.equal(mutations[0].type, 'characterData')
  })
})
