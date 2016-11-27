(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Notifier"] = factory();
	else
		root["Notifier"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
	    if (typeof module === 'object' && typeof module.exports === 'object') {
	        var v = factory(__webpack_require__(1), exports); if (v !== undefined) module.exports = v;
	    }
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	})(function (require, exports) {
	    "use strict";
	    require("./style.scss");
	    var Notifications = [];
	    var Notifier = (function () {
	        function Notifier(options) {
	            this.baseOptions = {
	                theme: Notifier.checkOptions(options, "theme") ? options.theme : "default",
	                position: Notifier.checkOptions(options, "position") ? options.position : "top-right"
	            };
	            var container = document.createElement("div");
	            container.classList.add("js-notifier");
	            container.innerHTML = "<div id=\"js-notifier-list\" class=\"notifier__list notifier__list--position-" + this.baseOptions.position + " notifier__list--theme-" + this.baseOptions.theme + "\"></div>";
	            document.body.appendChild(container);
	            this.list = document.getElementById("js-notifier-list");
	            return this;
	        }
	        Notifier.checkOptions = function (o, k) {
	            if (typeof o != "undefined") {
	                return o.hasOwnProperty(k);
	            }
	            else {
	                return false;
	            }
	        };
	        ;
	        Notifier.prototype.post = function (message, options) {
	            this.notices = Notifications;
	            this.message = message;
	            this.itemOptions = {
	                type: Notifier.checkOptions(options, "type") ? options.type : "default",
	                delay: Notifier.checkOptions(options, "delay") ? options.delay : 3000,
	                animationShowClass: Notifier.checkOptions(options, "animationShowClass") ? options.animationShowClass : "notifier__item--animation-show",
	                animationHideClass: Notifier.checkOptions(options, "animationHideClass") ? options.animationHideClass : "notifier__item--animation-hide"
	            };
	            var itemID = this.notices.length;
	            this.setAction("show", itemID);
	            this.setAction("activate", itemID);
	            this.setAction("hide", itemID);
	            return itemID;
	        };
	        Notifier.prototype.setAction = function (action, itemID) {
	            var _this = this;
	            var commands = {
	                activate: function () {
	                    _this.activateClose(itemID);
	                },
	                show: function () {
	                    _this.addNotification();
	                    _this.renderNotification(itemID);
	                },
	                hide: function () {
	                    setTimeout(function () {
	                        _this.removeNotification(itemID);
	                    }, _this.itemOptions.delay);
	                }
	            };
	            return commands[action]();
	        };
	        Notifier.prototype.addNotification = function () {
	            return this.notices.push({ message: this.message, options: this.itemOptions });
	        };
	        Notifier.prototype.removeNotification = function (itemID) {
	            if (typeof this.notices[itemID] != "undefined") {
	                var item_1 = this.list.querySelector("div[data-notice-id='" + itemID + "']");
	                if (typeof item_1 != "undefined") {
	                    item_1.classList.remove(this.itemOptions.animationShowClass);
	                    item_1.classList.add(this.itemOptions.animationHideClass);
	                    setTimeout(function () {
	                        item_1.parentNode.removeChild(item_1);
	                    }, 500);
	                }
	                delete this.notices[itemID];
	            }
	        };
	        Notifier.prototype.renderNotification = function (itemID) {
	            var item = document.createElement("div");
	            item.classList.add("notifier__item", "notifier__item--type-" + this.itemOptions.type, this.itemOptions.animationShowClass);
	            item.setAttribute("data-notice-id", itemID.toString());
	            item.innerHTML = "<p class=\"notifier__text\">" + this.message + "</p>";
	            return this.list.insertBefore(item, this.list.firstChild);
	        };
	        Notifier.prototype.activateClose = function (itemID) {
	            var _this = this;
	            var item = this.list.querySelector("div[data-notice-id='" + itemID + "']");
	            item.addEventListener("click", function () {
	                return _this.removeNotification(itemID);
	            });
	        };
	        return Notifier;
	    }());
	    exports.__esModule = true;
	    exports["default"] = Notifier;
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./style.scss": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./../node_modules/postcss-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./../node_modules/postcss-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".notifier__list{position:fixed;z-index:1000;top:20px;left:auto;right:20px;bottom:auto}.notifier__list--position-top-left{top:20px;left:20px;right:auto;bottom:auto}.notifier__list--position-top-right{top:20px;left:auto;right:20px;bottom:auto}.notifier__list--position-bottom-left{top:auto;left:20px;right:auto;bottom:20px}.notifier__list--position-bottom-right{top:auto;left:auto;right:20px;bottom:20px}.notifier__item{width:200px;padding:15px 25px;margin-bottom:10px;border:1px solid;line-height:1.5;cursor:pointer;border-radius:2px}.notifier__item,.notifier__item--type-default{background:#bbcde5;color:#426fab}.notifier__item--type-warning{background:#e9d4b6;color:#b78036}.notifier__item--type-error{background:#fde8e6;color:#f24a3f}.notifier__item--type-success{background:#cce9b6;color:#6db736}.notifier__item--animation-show{animation:notifier-show .18s cubic-bezier(.175,.885,.32,1.27499),notification-shrink .25s .25s cubic-bezier(.5,0,0,1)}.notifier__item--animation-hide{animation:notifier-hide .25s cubic-bezier(.33859,-.42,1,-.22),notifier-shrink .25s .25s cubic-bezier(.5,0,0,1);animation-fill-mode:forwards}.notifier__text{margin:0;padding:0}@keyframes notifier-shrink{0%{opacity:0;max-height:200px;transform:scale(.8)}to{opacity:0;max-height:0;transform:scale(.8)}}@keyframes notifier-show{0%{opacity:0;transform:perspective(450px) translateY(-30px) rotateX(90deg)}to{opacity:1;transform:perspective(450px) translate(0) rotateX(0deg)}}@keyframes notifier-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;