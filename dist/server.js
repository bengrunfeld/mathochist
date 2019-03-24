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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find module '@babel/core'\\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:571:15)\\n    at Function.Module._load (internal/modules/cjs/loader.js:497:25)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/Users/ben/Desktop/Work/code/jest-test/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at Object.<anonymous> (/Users/ben/Desktop/Work/code/jest-test/node_modules/babel-loader/lib/index.js:10:11)\\n    at Module._compile (/Users/ben/Desktop/Work/code/jest-test/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)\\n    at Module.load (internal/modules/cjs/loader.js:589:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:528:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:520:3)\\n    at Module.require (internal/modules/cjs/loader.js:626:17)\\n    at require (/Users/ben/Desktop/Work/code/jest-test/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at loadLoader (/Users/ben/Desktop/Work/code/jest-test/node_modules/loader-runner/lib/loadLoader.js:18:17)\\n    at iteratePitchingLoaders (/Users/ben/Desktop/Work/code/jest-test/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/Users/ben/Desktop/Work/code/jest-test/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\\n    at NormalModule.doBuild (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModule.js:280:3)\\n    at NormalModule.build (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModule.js:427:15)\\n    at Compilation.buildModule (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/Compilation.js:635:10)\\n    at moduleFactory.create (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/Compilation.js:1021:12)\\n    at factory (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModuleFactory.js:405:6)\\n    at hooks.afterResolve.callAsync (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/Users/ben/Desktop/Work/code/jest-test/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (/Users/ben/Desktop/Work/code/jest-test/node_modules/tapable/lib/Hook.js:154:20)\\n    at resolver (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModuleFactory.js:138:29)\\n    at process.nextTick (/Users/ben/Desktop/Work/code/jest-test/node_modules/webpack/lib/NormalModuleFactory.js:342:9)\\n    at process._tickCallback (internal/process/next_tick.js:172:11)\");\n\n//# sourceURL=webpack:///./server.js?");

/***/ })

/******/ });