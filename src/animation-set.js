import * as animateOnVisible from "./animate-on-visible";

/**
 * Animation set for configuring animate-on-visible, hide-until-on-screen, etc.
 * 
 * @param {string} targetSelector A CSS selector which identifies the elements to delay animation for
 * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false
 */
export default function animationSet(targetSelector, fullyOnScreen) {

	var targetSelector = typeof(targetSelector) === "string" ? targetSelector : ".animated";
	var fullyOnScreen = typeof(fullyOnScreen) === "boolean" ? fullyOnScreen : false;

	// Initilize the set
	animateOnVisible.initializeAnimateOnVisible(targetSelector, fullyOnScreen);
}