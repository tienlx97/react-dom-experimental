/* eslint-disable max-params */


/**
 * Helper function that attaches an event listener to a target element.
 * If the target supports addEventListener, it adds the listener and returns an object
 * with a remove() method to unregister it.
 *
 * @param {EventTarget} target - The DOM element or object to attach the listener to.
 * @param {string} eventType - The type of the event to listen for.
 * @param {Function} handler - The callback to be invoked when the event fires.
 * @param {Object|boolean} options - Options or useCapture flag for the event listener.
 * @returns {Object} An object with a `remove` method to unregister the listener.
 * @throws If the target does not support addEventListener.
 */
function addEventListenerHelper(target, eventType, handler, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, handler, options);
    return {
      remove: function () {
        target.removeEventListener(eventType, handler, options);
      },
    };
  } else {
    // If addEventListener is not available on the target, throw an unrecoverable error.
    throw Error(
      'Attempted to listen to eventType "' + eventType + '" on a target that does not have addEventListener.',
    );
  }
}

/**
 * CometEventListener is an object providing various methods to add or remove event listeners
 * with different options (such as capturing and passive mode).
 */
export let CometEventListener = {
  /**
   * Add a listener with custom options.
   * @param {EventTarget} target
   * @param {string} eventType
   * @param {Function} handler
   * @param {Object|boolean} options
   */
  addListenerWithOptions: function (target, eventType, handler, options) {
    return addEventListenerHelper(target, eventType, handler, options);
  },

  /**
   * Add a listener that bubbles (non-capturing) with a specified passive flag.
   * @param {EventTarget} target
   * @param {string} eventType
   * @param {Function} handler
   * @param {boolean} passive - If true, the listener is passive.
   */
  bubbleWithPassiveFlag: function (target, eventType, handler, passive) {
    return addEventListenerHelper(target, eventType, handler, {
      capture: false,
      passive: passive,
    });
  },

  /**
   * Add a listener in the capture phase.
   * @param {EventTarget} target
   * @param {string} eventType
   * @param {Function} handler
   */
  capture: function (target, eventType, handler) {
    return addEventListenerHelper(target, eventType, handler, true);
  },

  /**
   * Add a listener in the capture phase with a specified passive flag.
   * @param {EventTarget} target
   * @param {string} eventType
   * @param {Function} handler
   * @param {boolean} passive - If true, the listener is passive.
   */
  captureWithPassiveFlag: function (target, eventType, handler, passive) {
    return addEventListenerHelper(target, eventType, handler, {
      capture: true,
      passive: passive,
    });
  },

  /**
   * Add a non-capturing listener.
   * @param {EventTarget} target
   * @param {string} eventType
   * @param {Function} handler
   */
  listen: function (target, eventType, handler) {
    return addEventListenerHelper(target, eventType, handler, false);
  },

  /**
   * This method is intended to register a default event listener.
   * Currently, it is not implemented and throws an error.
   * @throws An unrecoverable error.
   */
  registerDefault: function (target, eventType) {
    throw Error('EventListener.registerDefault is not implemented.');
  },

  /**
   * Suppress an event by preventing its default action and stopping its propagation.
   *
   * @param {Event} event - The event object to suppress.
   */
  suppress: function (event) {
    event.preventDefault();
    event.stopPropagation();
  },
};
