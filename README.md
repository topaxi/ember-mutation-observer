# ember-mutation-observer [![Build Status](https://travis-ci.org/topaxi/ember-mutation-observer.svg?branch=master)](https://travis-ci.org/topaxi/ember-mutation-observer)

This README outlines the details of collaborating on this Ember addon.

## Addon Installation

* `ember install ember-mutation-observer`

## Addon Usage

Can be used as a component like this:

```handlebars
{{#mutation-observer subtree=true childList=true characterData=true on-mutations=(action 'listMutations')}}
  <ul>
    {{#each list as |item|}}
      <li>{{item}}</li>
    {{/each}}
  </ul>
{{/mutations}}
```

Which will pass the MutationEvents to your given function, once your list will be updated or reordered. This obviously makes the most sense when you don't have access to the given data (ex. some jQuery plugin).

Or used as a Ember.Mixin for your own components:

```javascript
import Component from "@ember/component";
import { computed } from "@ember/object";
import MutationObserverMixin from "ember-mutation-observer/mixins/mutation-observer";

/**
 * My Component
 *
 * @class MyComponent
 * @extends Ember.Component
 * @uses EmberMutationObserver.MutationObserverMixin
 * @public
 */
export default Component.extend(MutationObserverMixin, {
  /**
   * Mutation observer config
   *
   * NOTE: At the very least, childList, attributes, or characterData must be
   *       set to true. Otherwise, "An invalid or illegal string was specified"
   *       error is thrown.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit
   * @property {Object} mutationObserverConfig
   * @public
   */
  mutationObserverConfig: computed(() => {
    return {
      // Set to true if additions and removals of the target node's child
      // elements (including text nodes) are to be observed.
      childList: true,
      // Set to true if mutations to target's attributes are to be observed.
      attributes: false,
      // Set to true if mutations to target's data are to be observed.
      characterData: true,
      // Set to true if mutations to not just target, but also target's
      // descendants are to be observed.
      subtree: true,
      // Set to true if attributes is set to true and target's attribute
      // value before the mutation needs to be recorded.
      attributeOldValue: false,
      // Set to true if characterData is set to true and target's data
      // before the mutation needs to be recorded.
      characterDataOldValue: false,
      // Set to an array of attribute local names (without namespace) if not
      // all attribute mutations need to be observed.
      attributeFilter: undefined
    };
  }),

  /**
   * Actions of MyComponent
   *
   * @property {Object}
   * @public
   */
  actions: {
    /**
     * Triggered mutation actions
     *
     * @method actions.mutations
     * @param {MutationRecord[]} mutationRecords The triggered mutation records
     * @return {void}
     * @public
     */
    mutations(mutationRecords) {
      // Do something with mutation records
    }
  }
});
```

## Installation

* `git clone` this repository
* `yarn`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `yarn test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
