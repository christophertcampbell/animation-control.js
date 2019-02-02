import * as animationTiming from "./animation-timing.js";
import * as documentState from "./common/document-state.js";
import animationSet from "./animation-set.js";

/**
 * Lightweight library providing fine-grained control of CSS animation timing
 * 
 * Specify timings on individual elements via CSS classes
 * (ie: delay-100ms, duration-2s, animate-on-visible)
 * 
 * By default looks for Animate.css style delay and duration classes.
 * 
 * The timing values (ie: 100ms, 2s) can be any valid value in seconds or milliseconds
 */
window.animationControl = {

	/**
	 * Apply custom animation timings based on css class prefix.
	 * 
	 * @param {string} classPrefix The class prefix which preceds the timing value
	 * @param {string[]} targetAttributes An array of CSS attributes to apply the timing value to
	 */
	applyTimingValues: function(classPrefix, targetAttributes) {
		animationTiming.initializeTimedAttributes(classPrefix, targetAttributes);
	},

	/**
	 * Initialize a new animation set for delaying CSS animation
	 * until an element is within view
	 * 
	 * @param {string} targetSelector A CSS selector which identifies the element(s) to delay animation for
	 * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false
	 * 
	 * @return {animationSet}
	 */
	newAnimationSet: function(targetSelector, fullyOnScreen) {
		return new animationSet(targetSelector, fullyOnScreen);
	},
}

documentState.onDocumentInteractive(function() {
	window.animationControl.applyTimingValues( "delay-", [ "animation-delay", "-webkit-animation-delay" ] );
	window.animationControl.applyTimingValues( "duration-", [ "animation-duration", "-webkit-animation-duration" ] );
})

documentState.onDocumentReady(function() {
	var defaultAnimationSet = window.animationControl.newAnimationSet( ".animated", false );
});
