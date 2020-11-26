/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/wrapper.js":
/*!************************!*\
  !*** ./src/wrapper.js ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Plugin/Preset files are not allowed to export objects, only functions. In C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\babel-preset-es2015\\\\lib\\\\index.js\\n    at createDescriptor (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:178:11)\\n    at C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:109:50\\n    at Array.map (<anonymous>)\\n    at createDescriptors (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:109:29)\\n    at createPresetDescriptors (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:101:10)\\n    at presets (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:47:19)\\n    at mergeChainOpts (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:416:26)\\n    at C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:374:7\\n    at Generator.next (<anonymous>)\\n    at loadFileChain (C:\\\\Users\\\\15159\\\\Github\\\\expert-octo-winner\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:228:24)\");\n\n//# sourceURL=webpack://$/./src/wrapper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/wrapper.js");
/******/ })()
;
});