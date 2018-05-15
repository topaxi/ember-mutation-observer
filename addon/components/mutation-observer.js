import Component from "@ember/component";
import MutationObserverMixin from "../mixins/mutation-observer";
import { alias } from "@ember/object/computed";

/**
 * Ember mutation observer component
 *
 * @class MutationObserverComponent
 * @extends Ember.Component
 * @uses MutationObserverMixin
 * @public
 */
export default Component.extend(MutationObserverMixin, {
  /**
   * Set to true if additions and removals of the target node's child
   * elements (including text nodes) are to be observed.
   *
   * @property {boolean} childList
   * @default false
   * @public
   */
  childList: alias("mutationObserverConfig.childList"),

  /**
   * Set to true if mutations to target's attributes are to be observed.
   *
   * @property {boolean} attributes
   * @default false
   * @public
   */
  attributes: alias("mutationObserverConfig.attributes"),

  /**
   * Set to true if mutations to target's data are to be observed.
   *
   * @property {boolean} characterData
   * @default false
   * @public
   */
  characterData: alias("mutationObserverConfig.characterData"),

  /**
   * Set to true if mutations to not just target, but also target's
   * descendants are to be observed.
   *
   * @property {boolean} subtree
   * @default false
   * @public
   */
  subtree: alias("mutationObserverConfig.subtree"),

  /**
   * Set to true if attributes is set to true and target's attribute
   * value before the mutation needs to be recorded.
   *
   * @property {boolean} attributeOldValue
   * @default false
   * @public
   */
  attributeOldValue: alias("mutationObserverConfig.attributeOldValue"),

  /**
   * Set to true if characterData is set to true and target's data
   * before the mutation needs to be recorded.
   *
   * @property {boolean} characterDataOldValue
   * @default false
   * @public
   */
  characterDataOldValue: alias("mutationObserverConfig.characterDataOldValue"),

  /**
   * Set to an array of attribute local names (without namespace) if not
   * all attribute mutations need to be observed.
   *
   * @property {string[]|null} attributeFilter
   * @default null
   * @public
   */
  attributeFilter: alias("mutationObserverConfig.attributeFilter"),

  /**
   * Actions of MutationObserverComponent
   *
   * @property {Object}
   * @public
   */
  actions: {
    /**
     * Trigger mutation actions
     *
     * @method actions.mutations
     * @param {MutationRecord[]} mutations The triggered mutation records
     * @return {void}
     * @public
     */
    mutations(mutations) {
      this["on-mutations"](mutations);
    }
  }
});
