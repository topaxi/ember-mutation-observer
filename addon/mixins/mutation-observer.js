import Mixin from '@ember/object/mixin'
import { computed } from '@ember/object'
import { run } from '@ember/runloop'
import { on } from '@ember/object/evented'
import { assert } from '@ember/debug'

const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver

/**
 * Ember mutation observer mixin for components
 *
 * @class MutationObserverMixin
 * @public
 */
export default Mixin.create({
  /**
   * The mutation observer instance
   *
   * @property {MutationObserver} _mutationObserver
   * @default null
   * @private
   */
  _mutationObserver: null,

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
      childList: false,
      // Set to true if mutations to target's attributes are to be observed.
      attributes: false,
      // Set to true if mutations to target's data are to be observed.
      characterData: false,
      // Set to true if mutations to not just target, but also target's
      // descendants are to be observed.
      subtree: false,
      // Set to true if attributes is set to true and target's attribute
      // value before the mutation needs to be recorded.
      attributeOldValue: false,
      // Set to true if characterData is set to true and target's data
      // before the mutation needs to be recorded.
      characterDataOldValue: false,
      // Set to an array of attribute local names (without namespace) if not
      // all attribute mutations need to be observed.
      attributeFilter: undefined
    }
  }),

  /**
   * Initialize mutation observer
   *
   * @method addMutationObserver
   * @return {void}
   * @public
   */
  addMutationObserver: on('didInsertElement', function() {
    try {
      this._mutationObserver = new MutationObserver(mutations =>
        run(() => this.send('mutations', mutations))
      )

      let config = this.get('mutationObserverConfig')

      this._mutationObserver.observe(this.element, config)
    } catch (e) {
      assert(e.message)
    }
  }),

  /**
   * Destroy mutation observer
   *
   * @method removeMutationObserver
   * @return {void}
   * @public
   */
  removeMutationObserver: on('willDestroyElement', function() {
    if (this._mutationObserver) {
      this._mutationObserver.disconnect()
    }
  })
})
