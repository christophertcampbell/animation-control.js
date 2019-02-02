/**
 * Returns true if the HTMLElement is fully on screen, false otherwise
 * 
 * @param {HTMLElement} el 
 */
export function isElementFullyOnScreen(el) {
	var rect = el.getBoundingClientRect();

	var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	var fullyOnScreenVert = (rect.top >= 0 && rect.bottom <= windowHeight);
	var fullyOnScreenHoriz = (rect.left >= 0 && rect.right <= windowWidth);

	return (fullyOnScreenVert === true && fullyOnScreenHoriz === true);
}

/**
 * Returns true if the HTMLElement is partially on screen, false otherwise
 * 
 * @param {HTMLElement} el 
 */
export function isElementPartiallyOnScreen(el) {
	var rect = el.getBoundingClientRect();

	var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
	
	var partiallyOnScreenVert = (rect.bottom >= 0 && rect.top <= windowHeight);
	var partiallyOnScreenHoriz = (rect.right >= 0 && rect.left <= windowWidth);
	
	return (partiallyOnScreenVert === true && partiallyOnScreenHoriz === true);
}

/**
 * Returns true if the element matches fully/partially on screen, false otherwise
 * 
 * @param {HTMLElement} el
 * @param {boolean} (Optional) True to check if the element is fully on screen, false to check if partially on screen.  Default: false
 */
export function isOnScreenMatch(el, fullyOnScreen) {
	var fullyOnScreen = typeof(fullyOnScreen) === "boolean" ? fullyOnScreen : false;
	return fullyOnScreen
		? isElementFullyOnScreen(el)
		: isElementPartiallyOnScreen(el);
}