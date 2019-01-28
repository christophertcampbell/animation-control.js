import * as animationTiming from "./animation-timing.js";
import * as documentState from "./common/document-state.js";

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
}

documentState.onDocumentInteractive(function() {
	window.animationControl.applyTimingValues( "delay-", [ "animation-delay", "-webkit-animation-delay" ] );
	window.animationControl.applyTimingValues( "duration-", [ "animation-duration", "-webkit-animation-duration" ] );
})