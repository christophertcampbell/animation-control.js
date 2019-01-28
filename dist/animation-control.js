/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animate-on-visible.js":
/*!***********************************!*\
  !*** ./src/animate-on-visible.js ***!
  \***********************************/
/*! exports provided: initializeAnimateOnVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeAnimateOnVisible\", function() { return initializeAnimateOnVisible; });\n/* harmony import */ var _common_element_visibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/element-visibility.js */ \"./src/common/element-visibility.js\");\n\n/**\r\n * Delay CSS animation until an element is within view\r\n * \r\n * Useful for delaying Animate.css animations which would otherwise play offscreen.\r\n * \r\n * Works by quickly removing and re-adding the object's CSS classes when it\r\n * enters view, thereby triggering a reflow which restarts the animation.\r\n * \r\n * @param {string} targetSelector A CSS selector which identifies the elements to delay animation for\r\n * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false\r\n */\n\nfunction initializeAnimateOnVisible(targetSelector, fullyOnScreen) {\n  var fullyOnScreen = typeof fullyOnScreen === 'boolean' ? fullyOnScreen : true;\n  var elements = document.querySelectorAll(targetSelector);\n  var i = 0;\n  elements.forEach(function (el) {// TOOD: In progress\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5pbWF0ZS1vbi12aXNpYmxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGUtb24tdmlzaWJsZS5qcz8zNzJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVsZW1lbnRWaXNpYmlsaXR5IGZyb20gXCIuL2NvbW1vbi9lbGVtZW50LXZpc2liaWxpdHkuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWxheSBDU1MgYW5pbWF0aW9uIHVudGlsIGFuIGVsZW1lbnQgaXMgd2l0aGluIHZpZXdcclxuICogXHJcbiAqIFVzZWZ1bCBmb3IgZGVsYXlpbmcgQW5pbWF0ZS5jc3MgYW5pbWF0aW9ucyB3aGljaCB3b3VsZCBvdGhlcndpc2UgcGxheSBvZmZzY3JlZW4uXHJcbiAqIFxyXG4gKiBXb3JrcyBieSBxdWlja2x5IHJlbW92aW5nIGFuZCByZS1hZGRpbmcgdGhlIG9iamVjdCdzIENTUyBjbGFzc2VzIHdoZW4gaXRcclxuICogZW50ZXJzIHZpZXcsIHRoZXJlYnkgdHJpZ2dlcmluZyBhIHJlZmxvdyB3aGljaCByZXN0YXJ0cyB0aGUgYW5pbWF0aW9uLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFNlbGVjdG9yIEEgQ1NTIHNlbGVjdG9yIHdoaWNoIGlkZW50aWZpZXMgdGhlIGVsZW1lbnRzIHRvIGRlbGF5IGFuaW1hdGlvbiBmb3JcclxuICogQHBhcmFtIHtib29sZWFufSBmdWxseU9uU2NyZWVuIFRydWUgdG8gY2hlY2sgZm9yIGZ1bGx5IG9uIHNjcmVlbiwgZmFsc2UgdG8gY2hlY2sgZm9yIHBhcnRpYWxseSBvbiBzY3JlZW47IERlZmF1bHQ6IGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFuaW1hdGVPblZpc2libGUodGFyZ2V0U2VsZWN0b3IsIGZ1bGx5T25TY3JlZW4pIHtcclxuXHJcblx0dmFyIGZ1bGx5T25TY3JlZW4gPSB0eXBlb2YoZnVsbHlPblNjcmVlbikgPT09ICdib29sZWFuJyA/IGZ1bGx5T25TY3JlZW4gOiB0cnVlO1xyXG5cdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0U2VsZWN0b3IpO1xyXG5cdFxyXG5cdHZhciBpID0gMDtcclxuXHRlbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0Ly8gVE9PRDogSW4gcHJvZ3Jlc3NcclxuXHR9KTtcclxuXHRcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/animate-on-visible.js\n");

/***/ }),

/***/ "./src/animation-timing.js":
/*!*********************************!*\
  !*** ./src/animation-timing.js ***!
  \*********************************/
/*! exports provided: initializeTimedAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeTimedAttributes\", function() { return initializeTimedAttributes; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\r\n * Finds all elements in the document that are to\r\n * be timed (ie: class name 'delay-100ms' or 'duration-1s').\r\n * \r\n * Parses the timing value (ie: '100ms' or '1s') from any class beginning with classPrefix\r\n * and applies the timing value to the specified target attributes (ie: 'animation-delay').\r\n * \r\n * @param string classPrefix The class prefix which preceds the timing value\r\n * @param string[] targetAttributes An array of CSS attributes to apply the timing value to\r\n */\nfunction initializeTimedAttributes(classPrefix, targetAttributes) {\n  if (typeof classPrefix !== 'string' || _typeof(targetAttributes) !== 'object' || targetAttributes.length < 1) {\n    return;\n  }\n\n  var elements = document.querySelectorAll('[class*=\"' + classPrefix + '\"]');\n  elements.forEach(function (el) {\n    applyDelay(el);\n  });\n\n  function applyDelay(el) {\n    var delay = getDelay(el);\n\n    if (delay) {\n      addStyles(el, delay);\n    }\n\n    ;\n  }\n\n  function getDelay(el) {\n    var regex = new RegExp('^' + classPrefix + '\\\\d+(s|ms)$', 'i');\n    var classArray = el.className.split(\" \");\n\n    for (var i = 0; i < classArray.length; i++) {\n      var className = classArray[i];\n\n      if (regex.test(className) == true) {\n        return className.replace(classPrefix, \"\");\n      }\n    }\n\n    return undefined;\n  }\n\n  function addStyles(el, delay) {\n    var style = el.getAttribute(\"style\") || \"\";\n    targetAttributes.forEach(function (attribute) {\n      style += attribute + \":\" + delay + \";\";\n    });\n    el.setAttribute(\"style\", style);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYW5pbWF0aW9uLXRpbWluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24tdGltaW5nLmpzPzJlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbmRzIGFsbCBlbGVtZW50cyBpbiB0aGUgZG9jdW1lbnQgdGhhdCBhcmUgdG9cclxuICogYmUgdGltZWQgKGllOiBjbGFzcyBuYW1lICdkZWxheS0xMDBtcycgb3IgJ2R1cmF0aW9uLTFzJykuXHJcbiAqIFxyXG4gKiBQYXJzZXMgdGhlIHRpbWluZyB2YWx1ZSAoaWU6ICcxMDBtcycgb3IgJzFzJykgZnJvbSBhbnkgY2xhc3MgYmVnaW5uaW5nIHdpdGggY2xhc3NQcmVmaXhcclxuICogYW5kIGFwcGxpZXMgdGhlIHRpbWluZyB2YWx1ZSB0byB0aGUgc3BlY2lmaWVkIHRhcmdldCBhdHRyaWJ1dGVzIChpZTogJ2FuaW1hdGlvbi1kZWxheScpLlxyXG4gKiBcclxuICogQHBhcmFtIHN0cmluZyBjbGFzc1ByZWZpeCBUaGUgY2xhc3MgcHJlZml4IHdoaWNoIHByZWNlZHMgdGhlIHRpbWluZyB2YWx1ZVxyXG4gKiBAcGFyYW0gc3RyaW5nW10gdGFyZ2V0QXR0cmlidXRlcyBBbiBhcnJheSBvZiBDU1MgYXR0cmlidXRlcyB0byBhcHBseSB0aGUgdGltaW5nIHZhbHVlIHRvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRpbWVkQXR0cmlidXRlcyhjbGFzc1ByZWZpeCwgdGFyZ2V0QXR0cmlidXRlcykge1xyXG5cdFxyXG5cdGlmICh0eXBlb2YgY2xhc3NQcmVmaXggIT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0YXJnZXRBdHRyaWJ1dGVzICE9PSAnb2JqZWN0JyB8fCB0YXJnZXRBdHRyaWJ1dGVzLmxlbmd0aCA8IDEpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0XHJcblx0dmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzKj1cIicgKyBjbGFzc1ByZWZpeCArICdcIl0nKTtcclxuXHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRhcHBseURlbGF5KGVsKTtcclxuXHR9KTtcclxuXHRcclxuXHRmdW5jdGlvbiBhcHBseURlbGF5KGVsKSB7XHJcblx0XHR2YXIgZGVsYXkgPSBnZXREZWxheShlbCk7XHJcblx0XHRpZiAoZGVsYXkpIHtcclxuXHRcdFx0YWRkU3R5bGVzKGVsLCBkZWxheSlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXREZWxheShlbCkge1xyXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXicgKyBjbGFzc1ByZWZpeCArICdcXFxcZCsoc3xtcykkJywgJ2knKTtcclxuXHRcdHZhciBjbGFzc0FycmF5ID0gZWwuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2xhc3NBcnJheVtpXTtcclxuXHRcdFx0aWYgKHJlZ2V4LnRlc3QoY2xhc3NOYW1lKSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzUHJlZml4LCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFN0eWxlcyhlbCwgZGVsYXkpIHtcclxuXHRcdHZhciBzdHlsZSA9IGVsLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCI7XHJcblx0XHR0YXJnZXRBdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKSB7XHJcblx0XHRcdHN0eWxlICs9IGF0dHJpYnV0ZSArIFwiOlwiICsgZGVsYXkgKyBcIjtcIjtcclxuXHRcdH0pO1xyXG5cdFx0ZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xyXG5cdH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/animation-timing.js\n");

/***/ }),

/***/ "./src/common/document-state.js":
/*!**************************************!*\
  !*** ./src/common/document-state.js ***!
  \**************************************/
/*! exports provided: onDocumentInteractive, onDocumentReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDocumentInteractive\", function() { return onDocumentInteractive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDocumentReady\", function() { return onDocumentReady; });\n/**\r\n * Cross-browser, vanilla Javascript method for determining when the document is interactive\r\n * \r\n * Uses readyState !== \"loading\" to detect when when the document is either interactive or complete.\r\n * This may be too early for some cases.  If you need to wait until all resources are loaded (like images),\r\n * use onDocumentReady() instead.\r\n * \r\n * To work with IE8 and earlier, include this script toward the end of the <body> element.\r\n * For IE8 and earlier, there is no \"interactive\" state so the callback will fire immediately.\r\n * \r\n * @param {function} callback \r\n */\nfunction onDocumentInteractive(callback) {\n  if (typeof callback !== \"function\") {\n    console.warn(\"From onDocumentInteractive(): The callback is not a function\");\n    return;\n  }\n\n  if (document.readyState !== \"loading\" || !window.addEventListener) {\n    callback();\n  } else {\n    window.addEventListener(\"DOMContentLoaded\", function () {\n      if (document.readyState !== \"loading\") {\n        callback();\n      }\n    });\n  }\n}\n/**\r\n * Cross-browser, vanilla Javascript method for determining when the document is ready\r\n * \r\n * Uses readyState === \"complete\" to detect when all resources are loaded.\r\n * This may be too late for some cases, but necessary for cases where we need\r\n * to access the boundingclientrect.\r\n * \r\n * @param {function} callback \r\n */\n\nfunction onDocumentReady(callback) {\n  if (typeof callback !== \"function\") {\n    console.warn(\"From onDocumentReady(): The callback is not a function\");\n    return;\n  }\n\n  if (document.readyState === \"complete\") {\n    callback();\n  } else if (document.onreadystatechange) {\n    document.onreadystatechange = function () {\n      if (document.readyState === \"complete\") {\n        callback();\n      }\n    };\n  } else if (window.addEventListener) {\n    window.addEventListener(\"load\", function () {\n      callback();\n    });\n  } else if (window.attachEvent) {\n    window.attachEvent(\"onload\", function () {\n      callback();\n    });\n  } else {\n    setTimeout(function () {\n      callback();\n    }, 250);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2RvY3VtZW50LXN0YXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb2N1bWVudC1zdGF0ZS5qcz9mY2Y3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcm9zcy1icm93c2VyLCB2YW5pbGxhIEphdmFzY3JpcHQgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbnRlcmFjdGl2ZVxyXG4gKiBcclxuICogVXNlcyByZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiB0byBkZXRlY3Qgd2hlbiB3aGVuIHRoZSBkb2N1bWVudCBpcyBlaXRoZXIgaW50ZXJhY3RpdmUgb3IgY29tcGxldGUuXHJcbiAqIFRoaXMgbWF5IGJlIHRvbyBlYXJseSBmb3Igc29tZSBjYXNlcy4gIElmIHlvdSBuZWVkIHRvIHdhaXQgdW50aWwgYWxsIHJlc291cmNlcyBhcmUgbG9hZGVkIChsaWtlIGltYWdlcyksXHJcbiAqIHVzZSBvbkRvY3VtZW50UmVhZHkoKSBpbnN0ZWFkLlxyXG4gKiBcclxuICogVG8gd29yayB3aXRoIElFOCBhbmQgZWFybGllciwgaW5jbHVkZSB0aGlzIHNjcmlwdCB0b3dhcmQgdGhlIGVuZCBvZiB0aGUgPGJvZHk+IGVsZW1lbnQuXHJcbiAqIEZvciBJRTggYW5kIGVhcmxpZXIsIHRoZXJlIGlzIG5vIFwiaW50ZXJhY3RpdmVcIiBzdGF0ZSBzbyB0aGUgY2FsbGJhY2sgd2lsbCBmaXJlIGltbWVkaWF0ZWx5LlxyXG4gKiBcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudEludGVyYWN0aXZlKGNhbGxiYWNrKSB7XHJcblx0aWYgKHR5cGVvZihjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0Y29uc29sZS53YXJuKFwiRnJvbSBvbkRvY3VtZW50SW50ZXJhY3RpdmUoKTogVGhlIGNhbGxiYWNrIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiIHx8ICEgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcm9zcy1icm93c2VyLCB2YW5pbGxhIEphdmFzY3JpcHQgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkeVxyXG4gKiBcclxuICogVXNlcyByZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgdG8gZGV0ZWN0IHdoZW4gYWxsIHJlc291cmNlcyBhcmUgbG9hZGVkLlxyXG4gKiBUaGlzIG1heSBiZSB0b28gbGF0ZSBmb3Igc29tZSBjYXNlcywgYnV0IG5lY2Vzc2FyeSBmb3IgY2FzZXMgd2hlcmUgd2UgbmVlZFxyXG4gKiB0byBhY2Nlc3MgdGhlIGJvdW5kaW5nY2xpZW50cmVjdC5cclxuICogXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnRSZWFkeShjYWxsYmFjaykge1xyXG5cdGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdGNvbnNvbGUud2FybihcIkZyb20gb25Eb2N1bWVudFJlYWR5KCk6IFRoZSBjYWxsYmFjayBpcyBub3QgYSBmdW5jdGlvblwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0fSBlbHNlIGlmIChkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UpIHtcclxuXHRcdGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH0pXHJcblx0fSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcclxuXHRcdHdpbmRvdy5hdHRhY2hFdmVudChcIm9ubG9hZFwiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdH0pXHJcblx0fSBlbHNlIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHR9LCAyNTApXHJcblx0fVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/document-state.js\n");

/***/ }),

/***/ "./src/common/element-visibility.js":
/*!******************************************!*\
  !*** ./src/common/element-visibility.js ***!
  \******************************************/
/*! exports provided: isElementFullyOnScreen, isElementPartiallyOnScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementFullyOnScreen\", function() { return isElementFullyOnScreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isElementPartiallyOnScreen\", function() { return isElementPartiallyOnScreen; });\n/**\r\n * Returns true if the HTMLElement is fully on screen, false otherwise\r\n * \r\n * @param {HTMLElement} el \r\n */\nfunction isElementFullyOnScreen(el) {\n  var rect = el.getBoundingClientRect();\n  var windowHeight = window.innerHeight || document.documentElement.clientHeight;\n  var windowWidth = window.innerWidth || document.documentElement.clientWidth;\n  var fullyOnScreenVert = rect.top >= 0 && rect.bottom <= windowHeight;\n  var fullyOnScreenHoriz = rect.left >= 0 && rect.right <= windowWidth;\n  return fullyOnScreenVert === true && fullyOnScreenHoriz === true;\n}\n/**\r\n * Returns true if the HTMLElement is partially on screen, false otherwise\r\n * \r\n * @param {HTMLElement} el \r\n */\n\nfunction isElementPartiallyOnScreen(el) {\n  var rect = el.getBoundingClientRect();\n  var windowHeight = window.innerHeight || document.documentElement.clientHeight;\n  var windowWidth = window.innerWidth || document.documentElement.clientWidth;\n  var partiallyOnScreenVert = rect.bottom >= 0 && rect.top <= windowHeight;\n  var partiallyOnScreenHoriz = rect.right >= 0 && rect.left <= windowWidth;\n  return partiallyOnScreenVert === true && partiallyOnScreenHoriz === true;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2VsZW1lbnQtdmlzaWJpbGl0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZWxlbWVudC12aXNpYmlsaXR5LmpzPzM3MDUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTEVsZW1lbnQgaXMgZnVsbHkgb24gc2NyZWVuLCBmYWxzZSBvdGhlcndpc2VcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudEZ1bGx5T25TY3JlZW4oZWwpIHtcclxuXHR2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHR2YXIgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHR2YXIgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuXHJcblx0dmFyIGZ1bGx5T25TY3JlZW5WZXJ0ID0gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93SGVpZ2h0KTtcclxuXHR2YXIgZnVsbHlPblNjcmVlbkhvcml6ID0gKHJlY3QubGVmdCA+PSAwICYmIHJlY3QucmlnaHQgPD0gd2luZG93V2lkdGgpO1xyXG5cclxuXHRyZXR1cm4gKGZ1bGx5T25TY3JlZW5WZXJ0ID09PSB0cnVlICYmIGZ1bGx5T25TY3JlZW5Ib3JpeiA9PT0gdHJ1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUxFbGVtZW50IGlzIHBhcnRpYWxseSBvbiBzY3JlZW4sIGZhbHNlIG90aGVyd2lzZVxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50UGFydGlhbGx5T25TY3JlZW4oZWwpIHtcclxuXHR2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHR2YXIgd2luZG93SGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHR2YXIgd2luZG93V2lkdGggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuXHRcclxuXHR2YXIgcGFydGlhbGx5T25TY3JlZW5WZXJ0ID0gKHJlY3QuYm90dG9tID49IDAgJiYgcmVjdC50b3AgPD0gd2luZG93SGVpZ2h0KTtcclxuXHR2YXIgcGFydGlhbGx5T25TY3JlZW5Ib3JpeiA9IChyZWN0LnJpZ2h0ID49IDAgJiYgcmVjdC5sZWZ0IDw9IHdpbmRvd1dpZHRoKTtcclxuXHRcclxuXHRyZXR1cm4gKHBhcnRpYWxseU9uU2NyZWVuVmVydCA9PT0gdHJ1ZSAmJiBwYXJ0aWFsbHlPblNjcmVlbkhvcml6ID09PSB0cnVlKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/element-visibility.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-timing.js */ \"./src/animation-timing.js\");\n/* harmony import */ var _animate_on_visible_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-on-visible.js */ \"./src/animate-on-visible.js\");\n/* harmony import */ var _common_document_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/document-state.js */ \"./src/common/document-state.js\");\n\n\n\n/**\n * Lightweight library providing fine-grained control of CSS animation timing\n * \n * Specify timings on individual elements via CSS classes\n * (ie: delay-100ms, duration-2s, animate-on-visible)\n * \n * By default looks for Animate.css style delay and duration classes.\n * \n * The timing values (ie: 100ms, 2s) can be any valid value in seconds or milliseconds\n */\n\nwindow.animationControl = {\n  /**\n   * Apply custom animation timings based on css class prefix.\n   * \n   * @param {string} classPrefix The class prefix which preceds the timing value\n   * @param {string[]} targetAttributes An array of CSS attributes to apply the timing value to\n   */\n  applyTimingValues: function applyTimingValues(classPrefix, targetAttributes) {\n    _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__[\"initializeTimedAttributes\"](classPrefix, targetAttributes);\n  },\n\n  /**\n   * Delay CSS animation until an element is within view\n   * \n   * @param {string} targetSelector A CSS selector which identifies the element(s) to delay animation for\n   * @param {boolean} fullyOnScreen True to check for fully on screen, false to check for partially on screen; Default: false\n   */\n  animateOnVisible: function animateOnVisible(targetSelector, fullyOnScreen) {\n    _animate_on_visible_js__WEBPACK_IMPORTED_MODULE_1__[\"initializeAnimateOnVisible\"](targetSelector, fullyOnScreen);\n  }\n};\n_common_document_state_js__WEBPACK_IMPORTED_MODULE_2__[\"onDocumentInteractive\"](function () {\n  window.animationControl.applyTimingValues(\"delay-\", [\"animation-delay\", \"-webkit-animation-delay\"]);\n  window.animationControl.applyTimingValues(\"duration-\", [\"animation-duration\", \"-webkit-animation-duration\"]);\n});\n_common_document_state_js__WEBPACK_IMPORTED_MODULE_2__[\"onDocumentReady\"](function () {\n  window.animationControl.animateOnVisible(\".animated\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhbmltYXRpb25UaW1pbmcgZnJvbSBcIi4vYW5pbWF0aW9uLXRpbWluZy5qc1wiO1xuaW1wb3J0ICogYXMgYW5pbWF0ZU9uVmlzaWJsZSBmcm9tIFwiLi9hbmltYXRlLW9uLXZpc2libGUuanNcIjtcbmltcG9ydCAqIGFzIGRvY3VtZW50U3RhdGUgZnJvbSBcIi4vY29tbW9uL2RvY3VtZW50LXN0YXRlLmpzXCI7XG5cbi8qKlxuICogTGlnaHR3ZWlnaHQgbGlicmFyeSBwcm92aWRpbmcgZmluZS1ncmFpbmVkIGNvbnRyb2wgb2YgQ1NTIGFuaW1hdGlvbiB0aW1pbmdcbiAqIFxuICogU3BlY2lmeSB0aW1pbmdzIG9uIGluZGl2aWR1YWwgZWxlbWVudHMgdmlhIENTUyBjbGFzc2VzXG4gKiAoaWU6IGRlbGF5LTEwMG1zLCBkdXJhdGlvbi0ycywgYW5pbWF0ZS1vbi12aXNpYmxlKVxuICogXG4gKiBCeSBkZWZhdWx0IGxvb2tzIGZvciBBbmltYXRlLmNzcyBzdHlsZSBkZWxheSBhbmQgZHVyYXRpb24gY2xhc3Nlcy5cbiAqIFxuICogVGhlIHRpbWluZyB2YWx1ZXMgKGllOiAxMDBtcywgMnMpIGNhbiBiZSBhbnkgdmFsaWQgdmFsdWUgaW4gc2Vjb25kcyBvciBtaWxsaXNlY29uZHNcbiAqL1xud2luZG93LmFuaW1hdGlvbkNvbnRyb2wgPSB7XG5cblx0LyoqXG5cdCAqIEFwcGx5IGN1c3RvbSBhbmltYXRpb24gdGltaW5ncyBiYXNlZCBvbiBjc3MgY2xhc3MgcHJlZml4LlxuXHQgKiBcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzUHJlZml4IFRoZSBjbGFzcyBwcmVmaXggd2hpY2ggcHJlY2VkcyB0aGUgdGltaW5nIHZhbHVlXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHRhcmdldEF0dHJpYnV0ZXMgQW4gYXJyYXkgb2YgQ1NTIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdGhlIHRpbWluZyB2YWx1ZSB0b1xuXHQgKi9cblx0YXBwbHlUaW1pbmdWYWx1ZXM6IGZ1bmN0aW9uKGNsYXNzUHJlZml4LCB0YXJnZXRBdHRyaWJ1dGVzKSB7XG5cdFx0YW5pbWF0aW9uVGltaW5nLmluaXRpYWxpemVUaW1lZEF0dHJpYnV0ZXMoY2xhc3NQcmVmaXgsIHRhcmdldEF0dHJpYnV0ZXMpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZWxheSBDU1MgYW5pbWF0aW9uIHVudGlsIGFuIGVsZW1lbnQgaXMgd2l0aGluIHZpZXdcblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRTZWxlY3RvciBBIENTUyBzZWxlY3RvciB3aGljaCBpZGVudGlmaWVzIHRoZSBlbGVtZW50KHMpIHRvIGRlbGF5IGFuaW1hdGlvbiBmb3Jcblx0ICogQHBhcmFtIHtib29sZWFufSBmdWxseU9uU2NyZWVuIFRydWUgdG8gY2hlY2sgZm9yIGZ1bGx5IG9uIHNjcmVlbiwgZmFsc2UgdG8gY2hlY2sgZm9yIHBhcnRpYWxseSBvbiBzY3JlZW47IERlZmF1bHQ6IGZhbHNlXG5cdCAqL1xuXHRhbmltYXRlT25WaXNpYmxlOiBmdW5jdGlvbih0YXJnZXRTZWxlY3RvciwgZnVsbHlPblNjcmVlbikge1xuXHRcdGFuaW1hdGVPblZpc2libGUuaW5pdGlhbGl6ZUFuaW1hdGVPblZpc2libGUodGFyZ2V0U2VsZWN0b3IsIGZ1bGx5T25TY3JlZW4pO1xuXHR9XG59XG5cbmRvY3VtZW50U3RhdGUub25Eb2N1bWVudEludGVyYWN0aXZlKGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuYW5pbWF0aW9uQ29udHJvbC5hcHBseVRpbWluZ1ZhbHVlcyggXCJkZWxheS1cIiwgWyBcImFuaW1hdGlvbi1kZWxheVwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCIgXSApO1xuXHR3aW5kb3cuYW5pbWF0aW9uQ29udHJvbC5hcHBseVRpbWluZ1ZhbHVlcyggXCJkdXJhdGlvbi1cIiwgWyBcImFuaW1hdGlvbi1kdXJhdGlvblwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uXCIgXSApO1xufSlcblxuZG9jdW1lbnRTdGF0ZS5vbkRvY3VtZW50UmVhZHkoZnVuY3Rpb24oKSB7XG5cdHdpbmRvdy5hbmltYXRpb25Db250cm9sLmFuaW1hdGVPblZpc2libGUoIFwiLmFuaW1hdGVkXCIgKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQXBCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });