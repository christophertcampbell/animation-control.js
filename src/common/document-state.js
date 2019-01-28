/**
 * Cross-browser, vanilla Javascript method for determining when the document is interactive
 * 
 * Uses readyState !== "loading" to detect when when the document is either interactive or complete.
 * This may be too early for some cases.  If you need to wait until all resources are loaded (like images),
 * use onDocumentReady() instead.
 * 
 * To work with IE8 and earlier, include this script toward the end of the <body> element.
 * For IE8 and earlier, there is no "interactive" state so the callback will fire immediately.
 * 
 * @param {function} callback 
 */
export function onDocumentInteractive(callback) {
	if (typeof(callback) !== "function") {
		console.warn("From onDocumentInteractive(): The callback is not a function");
		return;
	}

	if (document.readyState !== "loading" || ! window.addEventListener) {
		callback();
	} else {
		window.addEventListener("DOMContentLoaded", function() {
			if (document.readyState !== "loading") {
				callback();
			}
		})
	}
}

/**
 * Cross-browser, vanilla Javascript method for determining when the document is ready
 * 
 * Uses readyState === "complete" to detect when all resources are loaded.
 * This may be too late for some cases, but necessary for cases where we need
 * to access the boundingclientrect.
 * 
 * @param {function} callback 
 */
export function onDocumentReady(callback) {
	if (typeof(callback) !== "function") {
		console.warn("From onDocumentReady(): The callback is not a function");
		return;
	}

	if (document.readyState === "complete") {
		callback();
	} else if (document.onreadystatechange) {
		document.onreadystatechange = function() {
			if (document.readyState === "complete") {
				callback();
			}
		}
	} else if (window.addEventListener) {
		window.addEventListener("load", function() {
			callback();
		})
	} else if (window.attachEvent) {
		window.attachEvent("onload", function() {
			callback();
		})
	} else {
		setTimeout(function() {
			callback();
		}, 250)
	}
}