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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-timing.js */ \"./src/animation-timing.js\");\n/* harmony import */ var _common_document_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/document-state.js */ \"./src/common/document-state.js\");\n\n\n/**\n * Lightweight library providing fine-grained control of CSS animation timing\n * \n * Specify timings on individual elements via CSS classes\n * (ie: delay-100ms, duration-2s, animate-on-visible)\n * \n * By default looks for Animate.css style delay and duration classes.\n * \n * The timing values (ie: 100ms, 2s) can be any valid value in seconds or milliseconds\n */\n\nwindow.animationControl = {\n  /**\n   * Apply custom animation timings based on css class prefix.\n   * \n   * @param {string} classPrefix The class prefix which preceds the timing value\n   * @param {string[]} targetAttributes An array of CSS attributes to apply the timing value to\n   */\n  applyTimingValues: function applyTimingValues(classPrefix, targetAttributes) {\n    _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__[\"initializeTimedAttributes\"](classPrefix, targetAttributes);\n  }\n};\n_common_document_state_js__WEBPACK_IMPORTED_MODULE_1__[\"onDocumentInteractive\"](function () {\n  window.animationControl.applyTimingValues(\"delay-\", [\"animation-delay\", \"-webkit-animation-delay\"]);\n  window.animationControl.applyTimingValues(\"duration-\", [\"animation-duration\", \"-webkit-animation-duration\"]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhbmltYXRpb25UaW1pbmcgZnJvbSBcIi4vYW5pbWF0aW9uLXRpbWluZy5qc1wiO1xuaW1wb3J0ICogYXMgZG9jdW1lbnRTdGF0ZSBmcm9tIFwiLi9jb21tb24vZG9jdW1lbnQtc3RhdGUuanNcIjtcblxuLyoqXG4gKiBMaWdodHdlaWdodCBsaWJyYXJ5IHByb3ZpZGluZyBmaW5lLWdyYWluZWQgY29udHJvbCBvZiBDU1MgYW5pbWF0aW9uIHRpbWluZ1xuICogXG4gKiBTcGVjaWZ5IHRpbWluZ3Mgb24gaW5kaXZpZHVhbCBlbGVtZW50cyB2aWEgQ1NTIGNsYXNzZXNcbiAqIChpZTogZGVsYXktMTAwbXMsIGR1cmF0aW9uLTJzLCBhbmltYXRlLW9uLXZpc2libGUpXG4gKiBcbiAqIEJ5IGRlZmF1bHQgbG9va3MgZm9yIEFuaW1hdGUuY3NzIHN0eWxlIGRlbGF5IGFuZCBkdXJhdGlvbiBjbGFzc2VzLlxuICogXG4gKiBUaGUgdGltaW5nIHZhbHVlcyAoaWU6IDEwMG1zLCAycykgY2FuIGJlIGFueSB2YWxpZCB2YWx1ZSBpbiBzZWNvbmRzIG9yIG1pbGxpc2Vjb25kc1xuICovXG53aW5kb3cuYW5pbWF0aW9uQ29udHJvbCA9IHtcblxuXHQvKipcblx0ICogQXBwbHkgY3VzdG9tIGFuaW1hdGlvbiB0aW1pbmdzIGJhc2VkIG9uIGNzcyBjbGFzcyBwcmVmaXguXG5cdCAqIFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NQcmVmaXggVGhlIGNsYXNzIHByZWZpeCB3aGljaCBwcmVjZWRzIHRoZSB0aW1pbmcgdmFsdWVcblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gdGFyZ2V0QXR0cmlidXRlcyBBbiBhcnJheSBvZiBDU1MgYXR0cmlidXRlcyB0byBhcHBseSB0aGUgdGltaW5nIHZhbHVlIHRvXG5cdCAqL1xuXHRhcHBseVRpbWluZ1ZhbHVlczogZnVuY3Rpb24oY2xhc3NQcmVmaXgsIHRhcmdldEF0dHJpYnV0ZXMpIHtcblx0XHRhbmltYXRpb25UaW1pbmcuaW5pdGlhbGl6ZVRpbWVkQXR0cmlidXRlcyhjbGFzc1ByZWZpeCwgdGFyZ2V0QXR0cmlidXRlcyk7XG5cdH0sXG59XG5cbmRvY3VtZW50U3RhdGUub25Eb2N1bWVudEludGVyYWN0aXZlKGZ1bmN0aW9uKCkge1xuXHR3aW5kb3cuYW5pbWF0aW9uQ29udHJvbC5hcHBseVRpbWluZ1ZhbHVlcyggXCJkZWxheS1cIiwgWyBcImFuaW1hdGlvbi1kZWxheVwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCIgXSApO1xuXHR3aW5kb3cuYW5pbWF0aW9uQ29udHJvbC5hcHBseVRpbWluZ1ZhbHVlcyggXCJkdXJhdGlvbi1cIiwgWyBcImFuaW1hdGlvbi1kdXJhdGlvblwiLCBcIi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uXCIgXSApO1xufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });