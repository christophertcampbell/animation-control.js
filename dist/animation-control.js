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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-timing.js */ \"./src/animation-timing.js\");\n\n/**\n * Lightweight library providing fine-grained control of CSS animation timing\n * \n * Specify timings on individual elements via CSS classes\n * (ie: delay-100ms, duration-2s, animate-on-visible)\n * \n * By default looks for Animate.css style delay and duration classes.\n * \n * The timing values (ie: 100ms, 2s) can be any valid value in seconds or milliseconds\n */\n\nwindow.animationControl = {\n  /**\n   * Apply custom animation timings based on css class prefix.\n   * \n   * @param {string} classPrefix The class prefix which preceds the timing value\n   * @param {string[]} targetAttributes An array of CSS attributes to apply the timing value to\n   */\n  applyTimingValues: function applyTimingValues(classPrefix, targetAttributes) {\n    _animation_timing_js__WEBPACK_IMPORTED_MODULE_0__[\"initializeTimedAttributes\"](classPrefix, targetAttributes);\n  }\n};\nwindow.animationControl.applyTimingValues(\"delay-\", [\"animation-delay\", \"-webkit-animation-delay\"]);\nwindow.animationControl.applyTimingValues(\"duration-\", [\"animation-duration\", \"-webkit-animation-duration\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhbmltYXRpb25UaW1pbmcgZnJvbSBcIi4vYW5pbWF0aW9uLXRpbWluZy5qc1wiO1xuXG4vKipcbiAqIExpZ2h0d2VpZ2h0IGxpYnJhcnkgcHJvdmlkaW5nIGZpbmUtZ3JhaW5lZCBjb250cm9sIG9mIENTUyBhbmltYXRpb24gdGltaW5nXG4gKiBcbiAqIFNwZWNpZnkgdGltaW5ncyBvbiBpbmRpdmlkdWFsIGVsZW1lbnRzIHZpYSBDU1MgY2xhc3Nlc1xuICogKGllOiBkZWxheS0xMDBtcywgZHVyYXRpb24tMnMsIGFuaW1hdGUtb24tdmlzaWJsZSlcbiAqIFxuICogQnkgZGVmYXVsdCBsb29rcyBmb3IgQW5pbWF0ZS5jc3Mgc3R5bGUgZGVsYXkgYW5kIGR1cmF0aW9uIGNsYXNzZXMuXG4gKiBcbiAqIFRoZSB0aW1pbmcgdmFsdWVzIChpZTogMTAwbXMsIDJzKSBjYW4gYmUgYW55IHZhbGlkIHZhbHVlIGluIHNlY29uZHMgb3IgbWlsbGlzZWNvbmRzXG4gKi9cbndpbmRvdy5hbmltYXRpb25Db250cm9sID0ge1xuXG5cdC8qKlxuXHQgKiBBcHBseSBjdXN0b20gYW5pbWF0aW9uIHRpbWluZ3MgYmFzZWQgb24gY3NzIGNsYXNzIHByZWZpeC5cblx0ICogXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc1ByZWZpeCBUaGUgY2xhc3MgcHJlZml4IHdoaWNoIHByZWNlZHMgdGhlIHRpbWluZyB2YWx1ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YXJnZXRBdHRyaWJ1dGVzIEFuIGFycmF5IG9mIENTUyBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRoZSB0aW1pbmcgdmFsdWUgdG9cblx0ICovXG5cdGFwcGx5VGltaW5nVmFsdWVzOiBmdW5jdGlvbihjbGFzc1ByZWZpeCwgdGFyZ2V0QXR0cmlidXRlcykge1xuXHRcdGFuaW1hdGlvblRpbWluZy5pbml0aWFsaXplVGltZWRBdHRyaWJ1dGVzKGNsYXNzUHJlZml4LCB0YXJnZXRBdHRyaWJ1dGVzKTtcblx0fSxcbn1cblxud2luZG93LmFuaW1hdGlvbkNvbnRyb2wuYXBwbHlUaW1pbmdWYWx1ZXMoIFwiZGVsYXktXCIsIFsgXCJhbmltYXRpb24tZGVsYXlcIiwgXCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiIF0gKTtcbndpbmRvdy5hbmltYXRpb25Db250cm9sLmFwcGx5VGltaW5nVmFsdWVzKCBcImR1cmF0aW9uLVwiLCBbIFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsIFwiLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb25cIiBdICk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });