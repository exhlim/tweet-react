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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/.babelrc: Error while parsing config - JSON5: invalid character '\\\"' at 6:3\n    at syntaxError (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:1083:17)\n    at invalidChar (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:1028:12)\n    at Object.afterPropertyValue (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:654:15)\n    at Object.default (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:146:37)\n    at lex (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:78:42)\n    at Object.parse (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/json5/lib/parse.js:25:17)\n    at /Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/files/configuration.js:242:31\n    at /Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/files/utils.js:36:12\n    at Generator.next (<anonymous>)\n    at Function.<anonymous> (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/gensync-utils/async.js:26:3)\n    at Generator.next (<anonymous>)\n    at evaluateSync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:244:28)\n    at Function.sync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:84:14)\n    at sync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/gensync-utils/async.js:66:25)\n    at sync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:177:19)\n    at onFirstPause (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:204:19)\n    at Generator.next (<anonymous>)\n    at cachedFunction (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/caching.js:68:46)\n    at cachedFunction.next (<anonymous>)\n    at evaluateSync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:244:28)\n    at /Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:31:34\n    at Array.map (<anonymous>)\n    at Function.sync (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:31:22)\n    at Function.all (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/gensync/index.js:204:19)\n    at Generator.next (<anonymous>)\n    at loadOneConfig (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/files/configuration.js:133:45)\n    at loadOneConfig.next (<anonymous>)\n    at findRelativeConfig (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/files/configuration.js:108:23)\n    at findRelativeConfig.next (<anonymous>)\n    at buildRootChain (/Users/eugenelim/Desktop/wdi/lab/week4/jsx-intro/node_modules/@babel/core/lib/config/config-chain.js:120:46)");

/***/ })
/******/ ]);