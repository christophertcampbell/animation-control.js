import * as elementVisibility from "./common/element-visibility.js";

/**
 * Delay CSS animation until an element is within view
 * 
 * Useful for delaying Animate.css animations which would otherwise play offscreen.
 * 
 * Works by quickly removing and re-adding the object's CSS classes when it
 * enters view, thereby triggering a reflow which restarts the animation.
 * 
 * @param {string} targetSelector A CSS selector which identifies the elements to delay animation for
 * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false
 */
export function initializeAnimateOnVisible(targetSelector, fullyOnScreen) {

	var targetSelector = typeof(targetSelector) === "string" ? targetSelector : ".animated";
	var fullyOnScreen = typeof(fullyOnScreen) === "boolean" ? fullyOnScreen : false;

	enqueueOffscreenElements();
	if (hasDelayedElements()) {
		addEventHandlers();
	}

	/**
	 * Enqueue off-screen elements to be animated when they become visible
	 */
	function enqueueOffscreenElements() {
		var elements = document.querySelectorAll(targetSelector);
		elements.forEach(el => {
			if (!elementVisibility.isOnScreenMatch(el, fullyOnScreen)) {
				// Element is not an on-screen match, enqueue it
				enqueueElement(el);
			}
		})
	}

	/**
	 * Enqueue a single element
	 * 
	 * @param {HTMLElement} el 
	 */
	function enqueueElement(el) {
		// Add the identifying "enqueued" class
		el.className = ( el.className ? el.className + " " : "" ) + "animate-on-visible";

		// Add the element to a collection to watch during scroll events
		if (! window.delayedElements) window.delayedElements = [];
		window.delayedElements.push(el);
	}

	/**
	 * Dequeues a single element
	 * 
	 * @param {HTMLElement} el 
	 */
	function dequeueElement(el) {
		// Remove the delay class from the element
		el.className = el.className.replace(/(\s)*animate-on-visible/mig, "");

		// Remove the element from the queue
		if (window.delayedElements && window.delayedElements.forEach) {
			window.delayedElements = window.delayedElements.filter(delayedEl => {
				return delayedEl !== el;
			})
		}
	}
	
	/**
	 * Returns true if there are delayed elements queued, false otherwise
	 */
	function hasDelayedElements() {
		return window.delayedElements && window.delayedElements.length;
	}

	/**
	 * Listen for scroll event and check if any elements should be animated
	 */
	function addEventHandlers() {
		window.addEventListener("scroll", animateOnScreenElements);
		window.addEventListener("resize", animateOnScreenElements);
	}

	/**
	 * Stop listening for scroll events
	 */
	function removeEventHandlers() {
		window.removeEventListener("scroll", animateOnScreenElements);
		window.removeEventListener("resize", animateOnScreenElements);
	}
	
	/**
	 * Begin animation for any elements that are now on screeen
	 */
	function animateOnScreenElements() {
		window.delayedElements.forEach(el => {
			if (elementVisibility.isOnScreenMatch(el, fullyOnScreen)) {
				// Element is an on-screen match, animate it
				animateElement(el);
				dequeueElement(el);
			}
		})

		if (! hasDelayedElements()) {
			// No more delayed elements
			delete window.delayedElements;
			removeEventHandlers();
		}
	}

	/**
	 * Trigger an animation by removing/adding the element's
	 * css classees and triggering a reflow
	 * 
	 * @param {HTMLElement} el 
	 */
	function animateElement(el) {
		// Store the className (minus the delay class) for re-adding
		var className = el.className;
		
		// Remove classes
		el.className = "";

		// Make sure element is visible, in case it was hidden until animation
		el.style.visibility = "visible";

		// Trigger reflow - This is key to making the animation play again
		// @see https://css-tricks.com/restart-css-animation/
		void el.offsetWidth;

		// Re-add classes
		el.className = className;
	}
}