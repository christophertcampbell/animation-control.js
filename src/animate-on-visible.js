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

	var fullyOnScreen = typeof(fullyOnScreen) === 'boolean' ? fullyOnScreen : false;
	var elements = document.querySelectorAll(targetSelector);
	
	var i = 0;
	elements.forEach((el) => {
		// TOOD: In progress
	});
	
}