import * as animateOnVisible from "./animate-on-visible";
import * as elementVisiblity from "./common/element-visibility";

/**
 * Animation set for configuring animate-on-visible, hide-until-on-screen, etc.
 * 
 * @param {string} targetSelector A CSS selector which identifies the elements to delay animation for
 * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false
 */
export default function animationSet(targetSelector, fullyOnScreen) {

	var parentSetSelector = typeof(targetSelector) === "string" ? targetSelector : ".animated";
	var fullyOnScreen = typeof(fullyOnScreen) === "boolean" ? fullyOnScreen : false;
	// Initilize the set
	animateOnVisible.initializeAnimateOnVisible(parentSetSelector, fullyOnScreen);

	// Return the methods we want to be publicly accessible
	return {
		/**
		 * Hide the specified elements until they are animated
		 * 
		 * Uses visibility: hidden
		 * 
		 * Useful if wanting to prevent fadeIn type of effects until an element
		 * is fully on screen
		 * 
		 * @param {string} selector 
		 */
		hideUntilAnimated: function(targetSelector) {
			var parentSet = document.querySelectorAll(parentSetSelector);
			parentSet.forEach(el => {
				if (el.matches(targetSelector) && !elementVisiblity.isOnScreenMatch(el, fullyOnScreen)) {
					el.style.visibility = "hidden";
				}
			})
		}
	}
}