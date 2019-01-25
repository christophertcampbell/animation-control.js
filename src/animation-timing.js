/**
 * Finds all elements in the document that are to
 * be timed (ie: class name 'delay-100ms' or 'duration-1s').
 * 
 * Parses the timing value (ie: '100ms' or '1s') from any class beginning with classPrefix
 * and applies the timing value to the specified target attributes (ie: 'animation-delay').
 * 
 * @param string classPrefix The class prefix which preceds the timing value
 * @param string[] targetAttributes An array of CSS attributes to apply the timing value to
 */
export function initializeTimedAttributes(classPrefix, targetAttributes) {
	
	if (typeof classPrefix !== 'string' || typeof targetAttributes !== 'object' || targetAttributes.length < 1) {
		return;
	}
	
	var elements = document.querySelectorAll('[class*="' + classPrefix + '"]');
	elements.forEach(function(el) {
		applyDelay(el);
	});
	
	function applyDelay(el) {
		var delay = getDelay(el);
		if (delay) {
			addStyles(el, delay)
		};
	}

	function getDelay(el) {
		var regex = new RegExp('^' + classPrefix + '\\d+(s|ms)$', 'i');
		var classArray = el.className.split(" ");
		for (let i = 0; i < classArray.length; i++) {
			var className = classArray[i];
			if (regex.test(className) == true) {
				return className.replace(classPrefix, "");
			}
		}
		return undefined;
	}

	function addStyles(el, delay) {
		var style = el.getAttribute("style") || "";
		targetAttributes.forEach(function(attribute) {
			style += attribute + ":" + delay + ";";
		});
		el.setAttribute("style", style);
	}
}