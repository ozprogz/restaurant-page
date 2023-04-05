/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Cheeseburger.jpg */ "./src/images/Cheeseburger.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lobster);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Lobster\", sans-serif;\r\n}\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nnav {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  gap: 8px;\r\n  padding-right: 2em;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n  text-align: center;\r\n  padding: 0.8em;\r\n}\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 0.1px solid #553939;\r\n}\r\n.header {\r\n  font-size: 40px;\r\n  padding: 0.5em 2em;\r\n  font-family: \"Lobster\", sans-serif;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #f9cf93;\r\n  color: #553939;\r\n  width: 100%;\r\n}\r\nfooter {\r\n  text-align: center;\r\n  padding: 1em 0;\r\n  border-top: 0.1px solid #553939;\r\n}\r\nnav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\nnav li {\r\n  display: inline-block;\r\n  font-family: \"Lobster\", sans-serif;\r\n  position: relative;\r\n}\r\nnav a:hover {\r\n  text-decoration: underline;\r\n}\r\n#content::before {\r\n  content: \"\";\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  opacity: 0.5;\r\n}\r\n\r\n#text,\r\n#notfound,\r\n#menu,\r\n#about,\r\n#contact {\r\n  width: 80%;\r\n  color: #553939;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n#box {\r\n  background-color: rgb(249, 207, 147, 0.8);\r\n  width: 65%;\r\n  border: 0.5px solid #553939;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menubox {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.menu-picture {\r\n  border-radius: 50%;\r\n}\r\nh3,\r\nh2 {\r\n  margin: 0.8%;\r\n  text-align: center;\r\n}\r\n\r\n.ul-menu {\r\n  margin: 5px;\r\n}\r\n\r\n.init,\r\n.about,\r\n.contact {\r\n  font-size: 1.4rem;\r\n  padding: 1%;\r\n}\r\n\r\n.iframe-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 50px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.not-found {\r\n  font-size: 5rem;\r\n  text-align: center;\r\n  padding: 40%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;;EAEE,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,wBAAwB;EACxB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;AACpC;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,kCAAkC;AACpC;AACA;;EAEE,yBAAyB;EACzB,cAAc;EACd,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,+BAA+B;AACjC;AACA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;EACX,yDAAkD;EAClD,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;;;;;EAKE,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,UAAU;EACV,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;;;EAGE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=Lobster\");\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Lobster\", sans-serif;\r\n}\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100%;\r\n}\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nnav {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  gap: 8px;\r\n  padding-right: 2em;\r\n}\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n  text-align: center;\r\n  padding: 0.8em;\r\n}\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 0.1px solid #553939;\r\n}\r\n.header {\r\n  font-size: 40px;\r\n  padding: 0.5em 2em;\r\n  font-family: \"Lobster\", sans-serif;\r\n}\r\nheader,\r\nfooter {\r\n  background-color: #f9cf93;\r\n  color: #553939;\r\n  width: 100%;\r\n}\r\nfooter {\r\n  text-align: center;\r\n  padding: 1em 0;\r\n  border-top: 0.1px solid #553939;\r\n}\r\nnav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\nnav li {\r\n  display: inline-block;\r\n  font-family: \"Lobster\", sans-serif;\r\n  position: relative;\r\n}\r\nnav a:hover {\r\n  text-decoration: underline;\r\n}\r\n#content::before {\r\n  content: \"\";\r\n  background-image: url(\"./images/Cheeseburger.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  opacity: 0.5;\r\n}\r\n\r\n#text,\r\n#notfound,\r\n#menu,\r\n#about,\r\n#contact {\r\n  width: 80%;\r\n  color: #553939;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n#box {\r\n  background-color: rgb(249, 207, 147, 0.8);\r\n  width: 65%;\r\n  border: 0.5px solid #553939;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menubox {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.menu-picture {\r\n  border-radius: 50%;\r\n}\r\nh3,\r\nh2 {\r\n  margin: 0.8%;\r\n  text-align: center;\r\n}\r\n\r\n.ul-menu {\r\n  margin: 5px;\r\n}\r\n\r\n.init,\r\n.about,\r\n.contact {\r\n  font-size: 1.4rem;\r\n  padding: 1%;\r\n}\r\n\r\n.iframe-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 50px;\r\n  margin-top: 40px;\r\n}\r\n\r\n.not-found {\r\n  font-size: 5rem;\r\n  text-align: center;\r\n  padding: 40%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadAboutPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("about");
  const text = document.createElement("div");
  text.id = "about";
  text.innerHTML = `<p>Welcome to Guilty Pleasures, a one-of-a-kind restaurant that brings together the best of comfort food and guilty indulgences. Our restaurant is dedicated to creating a warm and inviting atmosphere that allows our customers to unwind, relax and indulge in their favourite guilty pleasures.</p>
    <p>At Guilty Pleasures, we pride ourselves on our menu, which is filled with an array of dishes that are sure to satisfy any craving. From classic comfort foods like macaroni and cheese and fried chicken to decadent desserts like molten chocolate lava cake and caramel apple pie, our menu has something for everyone.</p>
    <p>Our team of experienced chefs are passionate about food and are committed to using only the freshest ingredients in all our dishes. We believe that the secret to creating great food is using the best ingredients, and we work hard to ensure that every dish we serve is bursting with flavour.</p>
    <p>In addition to our delicious menu, Guilty Pleasures also offers a wide range of drinks, including classic cocktails, craft beers and a selection of wines. Our bar is stocked with premium spirits and our bartenders are skilled at mixing up the perfect drink to complement your meal.</p>
    <p>We understand that dining out is about more than just great food and drinks. That's why we've created a warm and inviting atmosphere that makes you feel right at home. Whether you're looking for a romantic dinner for two, a night out with friends or a family gathering, Guilty Pleasures is the perfect spot.</p>
    <p>Thank you for considering Guilty Pleasures for your next dining experience. We can't wait to welcome you to our restaurant and indulge your guilty pleasures.</p>`;
  box.append(text);
  content.append(box);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAboutPage);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContactPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("contact");
  const text = document.createElement("div");
  text.id = "contact";
  text.innerHTML = `Contact Us

  We'd love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to get in touch.
  
  You can reach us by phone at (555) 123-4567, or by email at info@guiltypleasures.com.
  
  Our restaurant is located at 123 Main Street in the heart of downtown. If you'd like to visit us in person, please see our map and directions below.
  
  We're open Monday through Saturday from 11am to 10pm, and on Sundays from 12pm to 9pm. Reservations are recommended, but not required.
  
  Thank you for considering Guilty Pleasures for your dining experience. We can't wait to hear from you and welcome you to our restaurant!
  <div class="iframe-wrapper">
    <iframe width="700" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-96.81406617164613%2C32.77546709763724%2C-96.79614901542665%2C32.783423077838954&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small></small>
  </div>
  `;
  box.append(text);
  content.append(box);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);


/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadInitPage": () => (/* binding */ loadInitPage),
/* harmony export */   "renderInit": () => (/* binding */ renderInit)
/* harmony export */ });
const loadInitPage = () => {
  renderContent();
};

const renderInit = () => {
  const body = document.getElementById("body");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  footer.innerHTML = `Made by Zaro`;
  header.innerHTML = `<a class="header">Guilty Pleasures</a>
        <nav> 
            <ul>
                <li><a>Home</a></li>
                <li><a>Menu</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>`;
  body.prepend(header);
  body.append(footer);

  const routes = ["#home", "#home", "#menu", "#about", "#contact"];
  const routing = document.querySelectorAll("a");
  routing.forEach((link, i) => {
    link.addEventListener("click", () => {
      window.location.hash = routes[i];
    });
  });
};

const renderContent = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("init");
  const text = document.createElement("div");
  text.id = "text";
  text.innerHTML = `<h1>Welcome to Guilty Pleasures</h1>

  <p>Indulge in your favorite comfort foods and guilty pleasures at our one-of-a-kind restaurant. We're dedicated to providing a warm and inviting atmosphere where you can relax, unwind, and enjoy a delicious meal.</p>
  
  <p>Our menu features an array of classic comfort foods, like mac and cheese, fried chicken, and burgers, as well as decadent desserts, like molten chocolate lava cake and apple pie. We use only the freshest ingredients and our experienced chefs are passionate about creating dishes that are bursting with flavor.</p>
  
  <p>We also offer a wide selection of drinks, including classic cocktails, craft beers, and a selection of wines. Our bartenders are skilled at mixing up the perfect drink to complement your meal.</p>
  
  <p>Whether you're looking for a romantic dinner for two, a night out with friends, or a family gathering, Guilty Pleasures is the perfect spot. Come and indulge your guilty pleasures with us!</p>
  
  <h4>Make a reservation or stop by and see us today. We can't wait to welcome you to our restaurant!</h4>
  `;
  box.append(text);
  content.append(box);
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_loaded_nachos_1590072354_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/loaded-nachos-1590072354.jpg */ "./src/images/loaded-nachos-1590072354.jpg");
/* harmony import */ var _images_chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/chicken.jpg */ "./src/images/chicken.jpg");
/* harmony import */ var _images_molten_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/molten-chocolate-cake.jpg */ "./src/images/molten-chocolate-cake.jpg");
/* harmony import */ var _images_margarita_new_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/margarita-new.jpg */ "./src/images/margarita-new.jpg");





const loadMenuPage = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  const text = document.createElement("div");
  text.id = "menu";
  text.innerHTML = `<h3>Appetizers:</h3>
        <div class="menubox">
          <ul class="ul-menu">
            <li><strong>Loaded Nachos:</strong> crispy tortilla chips topped with melted cheddar cheese, jalapenos, diced tomatoes, green onions, sour
            cream and guacamole.</li>
            <li><strong>Fried Mac and Cheese Bites:</strong> crispy fried bites of mac and cheese served with a spicy aioli dipping sauce.</li>
            <li><strong>Bacon-wrapped Jalapeno Poppers:</strong> fresh jalapenos stuffed with cream cheese, wrapped in bacon and baked to perfection.</li>
          </ul>
          <img class="menu-picture" src="${_images_loaded_nachos_1590072354_jpg__WEBPACK_IMPORTED_MODULE_0__}" width="20%" height="5%">
        </div>
        <h3>Entrees:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Southern Fried Chicken:</strong> crispy fried chicken served with a side of creamy mashed potatoes and gravy.</li>
              <li><strong>Grilled Cheese Sandwich:</strong> classic grilled cheese made with melted cheddar cheese and served with a side of tomato soup
              for dipping.
              </li>
              <li><strong>Classic Cheeseburger:</strong> juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion and pickles served with
              a side of fries.</li>
          </ul>
          <img class="menu-picture" src="${_images_chicken_jpg__WEBPACK_IMPORTED_MODULE_1__}" width="20%" height="5%">
        </div>
        <h3>Desserts:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Molten Chocolate Lava Cake:</strong> warm chocolate cake with a gooey chocolate center served with a scoop of vanilla ice cream.</li>
              <li><strong>Caramel Apple Pie:</strong> warm apple pie with a drizzle of caramel sauce and a scoop of vanilla ice cream.</li>
              <li><strong>Brownie Sundae:</strong> warm chocolate brownie served with a scoop of vanilla ice cream, chocolate sauce and whipped cream.</li>
          </ul>
          <img class="menu-picture" src="${_images_molten_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_2__}" width="20%" height="5%">
        </div>
        <h3>Drinks:</h3>
        <div class="menubox">
          <ul class="ul-menu">
              <li><strong>Classic Margarita:</strong> tequila, lime juice and triple sec served over ice with a salt rim.</li>
              <li><strong>Old Fashioned:</strong> bourbon, sugar, bitters and orange peel served over ice.</li>
          </ul>
          <img class="menu-picture" src="${_images_margarita_new_jpg__WEBPACK_IMPORTED_MODULE_3__}" width="20%" height="5%">
        </div>
        <h2>We hope you enjoy your meal at Guilty Pleasures!</h2>`;
  box.append(text);
  content.append(box);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);


/***/ }),

/***/ "./src/notfound.js":
/*!*************************!*\
  !*** ./src/notfound.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadNotFound = () => {
  renderNotFound();
};

const renderNotFound = () => {
  const content = document.getElementById("content");
  const box = document.getElementById("box");
  box.classList.add("not-found");
  const text = document.createElement("div");
  text.id = "notfound";
  text.innerHTML = `404 - Page not found!`;
  box.append(text);
  content.append(box);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNotFound);


/***/ }),

/***/ "./src/images/Cheeseburger.jpg":
/*!*************************************!*\
  !*** ./src/images/Cheeseburger.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb1edc76366b0de40d3c.jpg";

/***/ }),

/***/ "./src/images/chicken.jpg":
/*!********************************!*\
  !*** ./src/images/chicken.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b186a7f208f74f39103a.jpg";

/***/ }),

/***/ "./src/images/loaded-nachos-1590072354.jpg":
/*!*************************************************!*\
  !*** ./src/images/loaded-nachos-1590072354.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59ad1f90ec7d58f76f22.jpg";

/***/ }),

/***/ "./src/images/margarita-new.jpg":
/*!**************************************!*\
  !*** ./src/images/margarita-new.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93fde3e62233da052ed5.jpg";

/***/ }),

/***/ "./src/images/molten-chocolate-cake.jpg":
/*!**********************************************!*\
  !*** ./src/images/molten-chocolate-cake.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8933a65fed8d100513d3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _notfound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound */ "./src/notfound.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







(0,_init__WEBPACK_IMPORTED_MODULE_0__.renderInit)();
(0,_init__WEBPACK_IMPORTED_MODULE_0__.loadInitPage)();
window.onhashchange = () => {
  clearContent();
  navigate();
};

const navigate = () => {
  const hash = location.hash;
  switch (hash) {
    case "":
      (0,_init__WEBPACK_IMPORTED_MODULE_0__.loadInitPage)();
      break;
    case "#home":
      (0,_init__WEBPACK_IMPORTED_MODULE_0__.loadInitPage)();
      break;
    case "#about":
      (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
      break;
    case "#menu":
      (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
      break;
    case "#contact":
      (0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
      break;
    default:
      (0,_notfound__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
  }
};

const clearContent = () => {
  const box = document.getElementById("box");
  box.className = "";
  box.innerHTML = "";
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDWjtBQUNGO0FBQ0k7QUFDTjtBQUNaO0FBQ3RCO0FBQ0EsaURBQVU7QUFDVixtREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVk7QUFDbEI7QUFDQTtBQUNBLE1BQU0sbURBQVk7QUFDbEI7QUFDQTtBQUNBLE1BQU0sa0RBQWE7QUFDbkI7QUFDQTtBQUNBLE1BQU0saURBQVk7QUFDbEI7QUFDQTtBQUNBLE1BQU0sb0RBQWU7QUFDckI7QUFDQTtBQUNBLE1BQU0scURBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25vdGZvdW5kLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9DaGVlc2VidXJnZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxvYnN0ZXIpO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxyXFxufVxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjNTUzOTM5O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2Y5MztcXHJcXG4gIGNvbG9yOiAjNTUzOTM5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkICM1NTM5Mzk7XFxyXFxufVxcclxcbm5hdiB1bCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxubmF2IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4jY29udGVudDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0LFxcclxcbiNub3Rmb3VuZCxcXHJcXG4jbWVudSxcXHJcXG4jYWJvdXQsXFxyXFxuI2NvbnRhY3Qge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGNvbG9yOiAjNTUzOTM5O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2JveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMDcsIDE0NywgMC44KTtcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICM1NTM5Mzk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWJveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1waWN0dXJlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuaDMsXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luOiAwLjglO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udWwtbWVudSB7XFxyXFxuICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmluaXQsXFxyXFxuLmFib3V0LFxcclxcbi5jb250YWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbi5pZnJhbWUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1mb3VuZCB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA0MCU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5REFBa0Q7RUFDbEQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7Ozs7O0VBS0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3RlclxcXCIpO1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4OiAxO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgIzU1MzkzOTtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5oZWFkZXIsXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWNmOTM7XFxyXFxuICBjb2xvcjogIzU1MzkzOTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjNTUzOTM5O1xcclxcbn1cXHJcXG5uYXYgdWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbm5hdiBsaSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5uYXYgYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuI2NvbnRlbnQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvQ2hlZXNlYnVyZ2VyLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHQsXFxyXFxuI25vdGZvdW5kLFxcclxcbiNtZW51LFxcclxcbiNhYm91dCxcXHJcXG4jY29udGFjdCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICM1NTM5Mzk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIwNywgMTQ3LCAwLjgpO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzU1MzkzOTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51Ym94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LXBpY3R1cmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5oMyxcXHJcXG5oMiB7XFxyXFxuICBtYXJnaW46IDAuOCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bC1tZW51IHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5pdCxcXHJcXG4uYWJvdXQsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlmcmFtZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWZvdW5kIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDQwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbG9hZEFib3V0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIpO1xyXG4gIGJveC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dC5pZCA9IFwiYWJvdXRcIjtcclxuICB0ZXh0LmlubmVySFRNTCA9IGA8cD5XZWxjb21lIHRvIEd1aWx0eSBQbGVhc3VyZXMsIGEgb25lLW9mLWEta2luZCByZXN0YXVyYW50IHRoYXQgYnJpbmdzIHRvZ2V0aGVyIHRoZSBiZXN0IG9mIGNvbWZvcnQgZm9vZCBhbmQgZ3VpbHR5IGluZHVsZ2VuY2VzLiBPdXIgcmVzdGF1cmFudCBpcyBkZWRpY2F0ZWQgdG8gY3JlYXRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHRoYXQgYWxsb3dzIG91ciBjdXN0b21lcnMgdG8gdW53aW5kLCByZWxheCBhbmQgaW5kdWxnZSBpbiB0aGVpciBmYXZvdXJpdGUgZ3VpbHR5IHBsZWFzdXJlcy48L3A+XHJcbiAgICA8cD5BdCBHdWlsdHkgUGxlYXN1cmVzLCB3ZSBwcmlkZSBvdXJzZWx2ZXMgb24gb3VyIG1lbnUsIHdoaWNoIGlzIGZpbGxlZCB3aXRoIGFuIGFycmF5IG9mIGRpc2hlcyB0aGF0IGFyZSBzdXJlIHRvIHNhdGlzZnkgYW55IGNyYXZpbmcuIEZyb20gY2xhc3NpYyBjb21mb3J0IGZvb2RzIGxpa2UgbWFjYXJvbmkgYW5kIGNoZWVzZSBhbmQgZnJpZWQgY2hpY2tlbiB0byBkZWNhZGVudCBkZXNzZXJ0cyBsaWtlIG1vbHRlbiBjaG9jb2xhdGUgbGF2YSBjYWtlIGFuZCBjYXJhbWVsIGFwcGxlIHBpZSwgb3VyIG1lbnUgaGFzIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuPC9wPlxyXG4gICAgPHA+T3VyIHRlYW0gb2YgZXhwZXJpZW5jZWQgY2hlZnMgYXJlIHBhc3Npb25hdGUgYWJvdXQgZm9vZCBhbmQgYXJlIGNvbW1pdHRlZCB0byB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyBpbiBhbGwgb3VyIGRpc2hlcy4gV2UgYmVsaWV2ZSB0aGF0IHRoZSBzZWNyZXQgdG8gY3JlYXRpbmcgZ3JlYXQgZm9vZCBpcyB1c2luZyB0aGUgYmVzdCBpbmdyZWRpZW50cywgYW5kIHdlIHdvcmsgaGFyZCB0byBlbnN1cmUgdGhhdCBldmVyeSBkaXNoIHdlIHNlcnZlIGlzIGJ1cnN0aW5nIHdpdGggZmxhdm91ci48L3A+XHJcbiAgICA8cD5JbiBhZGRpdGlvbiB0byBvdXIgZGVsaWNpb3VzIG1lbnUsIEd1aWx0eSBQbGVhc3VyZXMgYWxzbyBvZmZlcnMgYSB3aWRlIHJhbmdlIG9mIGRyaW5rcywgaW5jbHVkaW5nIGNsYXNzaWMgY29ja3RhaWxzLCBjcmFmdCBiZWVycyBhbmQgYSBzZWxlY3Rpb24gb2Ygd2luZXMuIE91ciBiYXIgaXMgc3RvY2tlZCB3aXRoIHByZW1pdW0gc3Bpcml0cyBhbmQgb3VyIGJhcnRlbmRlcnMgYXJlIHNraWxsZWQgYXQgbWl4aW5nIHVwIHRoZSBwZXJmZWN0IGRyaW5rIHRvIGNvbXBsZW1lbnQgeW91ciBtZWFsLjwvcD5cclxuICAgIDxwPldlIHVuZGVyc3RhbmQgdGhhdCBkaW5pbmcgb3V0IGlzIGFib3V0IG1vcmUgdGhhbiBqdXN0IGdyZWF0IGZvb2QgYW5kIGRyaW5rcy4gVGhhdCdzIHdoeSB3ZSd2ZSBjcmVhdGVkIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSB0aGF0IG1ha2VzIHlvdSBmZWVsIHJpZ2h0IGF0IGhvbWUuIFdoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGEgcm9tYW50aWMgZGlubmVyIGZvciB0d28sIGEgbmlnaHQgb3V0IHdpdGggZnJpZW5kcyBvciBhIGZhbWlseSBnYXRoZXJpbmcsIEd1aWx0eSBQbGVhc3VyZXMgaXMgdGhlIHBlcmZlY3Qgc3BvdC48L3A+XHJcbiAgICA8cD5UaGFuayB5b3UgZm9yIGNvbnNpZGVyaW5nIEd1aWx0eSBQbGVhc3VyZXMgZm9yIHlvdXIgbmV4dCBkaW5pbmcgZXhwZXJpZW5jZS4gV2UgY2FuJ3Qgd2FpdCB0byB3ZWxjb21lIHlvdSB0byBvdXIgcmVzdGF1cmFudCBhbmQgaW5kdWxnZSB5b3VyIGd1aWx0eSBwbGVhc3VyZXMuPC9wPmA7XHJcbiAgYm94LmFwcGVuZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZChib3gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEFib3V0UGFnZTtcclxuIiwiY29uc3QgbG9hZENvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3hcIik7XHJcbiAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRleHQuaWQgPSBcImNvbnRhY3RcIjtcclxuICB0ZXh0LmlubmVySFRNTCA9IGBDb250YWN0IFVzXHJcblxyXG4gIFdlJ2QgbG92ZSB0byBoZWFyIGZyb20geW91ISBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLCBjb21tZW50cywgb3IgZmVlZGJhY2ssIHBsZWFzZSBkb24ndCBoZXNpdGF0ZSB0byBnZXQgaW4gdG91Y2guXHJcbiAgXHJcbiAgWW91IGNhbiByZWFjaCB1cyBieSBwaG9uZSBhdCAoNTU1KSAxMjMtNDU2Nywgb3IgYnkgZW1haWwgYXQgaW5mb0BndWlsdHlwbGVhc3VyZXMuY29tLlxyXG4gIFxyXG4gIE91ciByZXN0YXVyYW50IGlzIGxvY2F0ZWQgYXQgMTIzIE1haW4gU3RyZWV0IGluIHRoZSBoZWFydCBvZiBkb3dudG93bi4gSWYgeW91J2QgbGlrZSB0byB2aXNpdCB1cyBpbiBwZXJzb24sIHBsZWFzZSBzZWUgb3VyIG1hcCBhbmQgZGlyZWN0aW9ucyBiZWxvdy5cclxuICBcclxuICBXZSdyZSBvcGVuIE1vbmRheSB0aHJvdWdoIFNhdHVyZGF5IGZyb20gMTFhbSB0byAxMHBtLCBhbmQgb24gU3VuZGF5cyBmcm9tIDEycG0gdG8gOXBtLiBSZXNlcnZhdGlvbnMgYXJlIHJlY29tbWVuZGVkLCBidXQgbm90IHJlcXVpcmVkLlxyXG4gIFxyXG4gIFRoYW5rIHlvdSBmb3IgY29uc2lkZXJpbmcgR3VpbHR5IFBsZWFzdXJlcyBmb3IgeW91ciBkaW5pbmcgZXhwZXJpZW5jZS4gV2UgY2FuJ3Qgd2FpdCB0byBoZWFyIGZyb20geW91IGFuZCB3ZWxjb21lIHlvdSB0byBvdXIgcmVzdGF1cmFudCFcclxuICA8ZGl2IGNsYXNzPVwiaWZyYW1lLXdyYXBwZXJcIj5cclxuICAgIDxpZnJhbWUgd2lkdGg9XCI3MDBcIiBoZWlnaHQ9XCI0NTBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiBzcmM9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9leHBvcnQvZW1iZWQuaHRtbD9iYm94PS05Ni44MTQwNjYxNzE2NDYxMyUyQzMyLjc3NTQ2NzA5NzYzNzI0JTJDLTk2Ljc5NjE0OTAxNTQyNjY1JTJDMzIuNzgzNDIzMDc3ODM4OTU0JmFtcDtsYXllcj1tYXBuaWtcIiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXCI+PC9pZnJhbWU+PGJyLz48c21hbGw+PC9zbWFsbD5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIGJveC5hcHBlbmQodGV4dCk7XHJcbiAgY29udGVudC5hcHBlbmQoYm94KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTtcclxuIiwiZXhwb3J0IGNvbnN0IGxvYWRJbml0UGFnZSA9ICgpID0+IHtcclxuICByZW5kZXJDb250ZW50KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVySW5pdCA9ICgpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gYE1hZGUgYnkgWmFyb2A7XHJcbiAgaGVhZGVyLmlubmVySFRNTCA9IGA8YSBjbGFzcz1cImhlYWRlclwiPkd1aWx0eSBQbGVhc3VyZXM8L2E+XHJcbiAgICAgICAgPG5hdj4gXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48YT5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGE+TWVudTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGE+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PmA7XHJcbiAgYm9keS5wcmVwZW5kKGhlYWRlcik7XHJcbiAgYm9keS5hcHBlbmQoZm9vdGVyKTtcclxuXHJcbiAgY29uc3Qgcm91dGVzID0gW1wiI2hvbWVcIiwgXCIjaG9tZVwiLCBcIiNtZW51XCIsIFwiI2Fib3V0XCIsIFwiI2NvbnRhY3RcIl07XHJcbiAgY29uc3Qgcm91dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xyXG4gIHJvdXRpbmcuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHJvdXRlc1tpXTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIpO1xyXG4gIGJveC5jbGFzc0xpc3QuYWRkKFwiaW5pdFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJ0ZXh0XCI7XHJcbiAgdGV4dC5pbm5lckhUTUwgPSBgPGgxPldlbGNvbWUgdG8gR3VpbHR5IFBsZWFzdXJlczwvaDE+XHJcblxyXG4gIDxwPkluZHVsZ2UgaW4geW91ciBmYXZvcml0ZSBjb21mb3J0IGZvb2RzIGFuZCBndWlsdHkgcGxlYXN1cmVzIGF0IG91ciBvbmUtb2YtYS1raW5kIHJlc3RhdXJhbnQuIFdlJ3JlIGRlZGljYXRlZCB0byBwcm92aWRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIHlvdSBjYW4gcmVsYXgsIHVud2luZCwgYW5kIGVuam95IGEgZGVsaWNpb3VzIG1lYWwuPC9wPlxyXG4gIFxyXG4gIDxwPk91ciBtZW51IGZlYXR1cmVzIGFuIGFycmF5IG9mIGNsYXNzaWMgY29tZm9ydCBmb29kcywgbGlrZSBtYWMgYW5kIGNoZWVzZSwgZnJpZWQgY2hpY2tlbiwgYW5kIGJ1cmdlcnMsIGFzIHdlbGwgYXMgZGVjYWRlbnQgZGVzc2VydHMsIGxpa2UgbW9sdGVuIGNob2NvbGF0ZSBsYXZhIGNha2UgYW5kIGFwcGxlIHBpZS4gV2UgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGFuZCBvdXIgZXhwZXJpZW5jZWQgY2hlZnMgYXJlIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgZGlzaGVzIHRoYXQgYXJlIGJ1cnN0aW5nIHdpdGggZmxhdm9yLjwvcD5cclxuICBcclxuICA8cD5XZSBhbHNvIG9mZmVyIGEgd2lkZSBzZWxlY3Rpb24gb2YgZHJpbmtzLCBpbmNsdWRpbmcgY2xhc3NpYyBjb2NrdGFpbHMsIGNyYWZ0IGJlZXJzLCBhbmQgYSBzZWxlY3Rpb24gb2Ygd2luZXMuIE91ciBiYXJ0ZW5kZXJzIGFyZSBza2lsbGVkIGF0IG1peGluZyB1cCB0aGUgcGVyZmVjdCBkcmluayB0byBjb21wbGVtZW50IHlvdXIgbWVhbC48L3A+XHJcbiAgXHJcbiAgPHA+V2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3bywgYSBuaWdodCBvdXQgd2l0aCBmcmllbmRzLCBvciBhIGZhbWlseSBnYXRoZXJpbmcsIEd1aWx0eSBQbGVhc3VyZXMgaXMgdGhlIHBlcmZlY3Qgc3BvdC4gQ29tZSBhbmQgaW5kdWxnZSB5b3VyIGd1aWx0eSBwbGVhc3VyZXMgd2l0aCB1cyE8L3A+XHJcbiAgXHJcbiAgPGg0Pk1ha2UgYSByZXNlcnZhdGlvbiBvciBzdG9wIGJ5IGFuZCBzZWUgdXMgdG9kYXkuIFdlIGNhbid0IHdhaXQgdG8gd2VsY29tZSB5b3UgdG8gb3VyIHJlc3RhdXJhbnQhPC9oND5cclxuICBgO1xyXG4gIGJveC5hcHBlbmQodGV4dCk7XHJcbiAgY29udGVudC5hcHBlbmQoYm94KTtcclxufTtcclxuIiwiaW1wb3J0IG5hY2hvIGZyb20gXCIuL2ltYWdlcy9sb2FkZWQtbmFjaG9zLTE1OTAwNzIzNTQuanBnXCI7XHJcbmltcG9ydCBjaGlja2VuIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuLmpwZ1wiO1xyXG5pbXBvcnQgY2FrZSBmcm9tIFwiLi9pbWFnZXMvbW9sdGVuLWNob2NvbGF0ZS1jYWtlLmpwZ1wiO1xyXG5pbXBvcnQgZHJpbmsgZnJvbSBcIi4vaW1hZ2VzL21hcmdhcml0YS1uZXcuanBnXCI7XHJcblxyXG5jb25zdCBsb2FkTWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJtZW51XCI7XHJcbiAgdGV4dC5pbm5lckhUTUwgPSBgPGgzPkFwcGV0aXplcnM6PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudWJveFwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwidWwtbWVudVwiPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5Mb2FkZWQgTmFjaG9zOjwvc3Ryb25nPiBjcmlzcHkgdG9ydGlsbGEgY2hpcHMgdG9wcGVkIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBqYWxhcGVub3MsIGRpY2VkIHRvbWF0b2VzLCBncmVlbiBvbmlvbnMsIHNvdXJcclxuICAgICAgICAgICAgY3JlYW0gYW5kIGd1YWNhbW9sZS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5GcmllZCBNYWMgYW5kIENoZWVzZSBCaXRlczo8L3N0cm9uZz4gY3Jpc3B5IGZyaWVkIGJpdGVzIG9mIG1hYyBhbmQgY2hlZXNlIHNlcnZlZCB3aXRoIGEgc3BpY3kgYWlvbGkgZGlwcGluZyBzYXVjZS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5CYWNvbi13cmFwcGVkIEphbGFwZW5vIFBvcHBlcnM6PC9zdHJvbmc+IGZyZXNoIGphbGFwZW5vcyBzdHVmZmVkIHdpdGggY3JlYW0gY2hlZXNlLCB3cmFwcGVkIGluIGJhY29uIGFuZCBiYWtlZCB0byBwZXJmZWN0aW9uLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cIm1lbnUtcGljdHVyZVwiIHNyYz1cIiR7bmFjaG99XCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCI1JVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMz5FbnRyZWVzOjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVib3hcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cInVsLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Tb3V0aGVybiBGcmllZCBDaGlja2VuOjwvc3Ryb25nPiBjcmlzcHkgZnJpZWQgY2hpY2tlbiBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgY3JlYW15IG1hc2hlZCBwb3RhdG9lcyBhbmQgZ3JhdnkuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5HcmlsbGVkIENoZWVzZSBTYW5kd2ljaDo8L3N0cm9uZz4gY2xhc3NpYyBncmlsbGVkIGNoZWVzZSBtYWRlIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgdG9tYXRvIHNvdXBcclxuICAgICAgICAgICAgICBmb3IgZGlwcGluZy5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNsYXNzaWMgQ2hlZXNlYnVyZ2VyOjwvc3Ryb25nPiBqdWljeSBiZWVmIHBhdHR5IHRvcHBlZCB3aXRoIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBvbmlvbiBhbmQgcGlja2xlcyBzZXJ2ZWQgd2l0aFxyXG4gICAgICAgICAgICAgIGEgc2lkZSBvZiBmcmllcy48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZW51LXBpY3R1cmVcIiBzcmM9XCIke2NoaWNrZW59XCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCI1JVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMz5EZXNzZXJ0czo8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51Ym94XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+TW9sdGVuIENob2NvbGF0ZSBMYXZhIENha2U6PC9zdHJvbmc+IHdhcm0gY2hvY29sYXRlIGNha2Ugd2l0aCBhIGdvb2V5IGNob2NvbGF0ZSBjZW50ZXIgc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNhcmFtZWwgQXBwbGUgUGllOjwvc3Ryb25nPiB3YXJtIGFwcGxlIHBpZSB3aXRoIGEgZHJpenpsZSBvZiBjYXJhbWVsIHNhdWNlIGFuZCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+QnJvd25pZSBTdW5kYWU6PC9zdHJvbmc+IHdhcm0gY2hvY29sYXRlIGJyb3duaWUgc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbSwgY2hvY29sYXRlIHNhdWNlIGFuZCB3aGlwcGVkIGNyZWFtLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cIm1lbnUtcGljdHVyZVwiIHNyYz1cIiR7Y2FrZX1cIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjUlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzPkRyaW5rczo8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51Ym94XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q2xhc3NpYyBNYXJnYXJpdGE6PC9zdHJvbmc+IHRlcXVpbGEsIGxpbWUganVpY2UgYW5kIHRyaXBsZSBzZWMgc2VydmVkIG92ZXIgaWNlIHdpdGggYSBzYWx0IHJpbS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPk9sZCBGYXNoaW9uZWQ6PC9zdHJvbmc+IGJvdXJib24sIHN1Z2FyLCBiaXR0ZXJzIGFuZCBvcmFuZ2UgcGVlbCBzZXJ2ZWQgb3ZlciBpY2UuPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwibWVudS1waWN0dXJlXCIgc3JjPVwiJHtkcmlua31cIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjUlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyPldlIGhvcGUgeW91IGVuam95IHlvdXIgbWVhbCBhdCBHdWlsdHkgUGxlYXN1cmVzITwvaDI+YDtcclxuICBib3guYXBwZW5kKHRleHQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGJveCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVBhZ2U7XHJcbiIsImNvbnN0IGxvYWROb3RGb3VuZCA9ICgpID0+IHtcclxuICByZW5kZXJOb3RGb3VuZCgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyTm90Rm91bmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBib3guY2xhc3NMaXN0LmFkZChcIm5vdC1mb3VuZFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJub3Rmb3VuZFwiO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gYDQwNCAtIFBhZ2Ugbm90IGZvdW5kIWA7XHJcbiAgYm94LmFwcGVuZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZChib3gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE5vdEZvdW5kO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZEluaXRQYWdlLCByZW5kZXJJbml0IH0gZnJvbSBcIi4vaW5pdFwiO1xyXG5pbXBvcnQgbG9hZE5vdEZvdW5kIGZyb20gXCIuL25vdGZvdW5kXCI7XHJcbmltcG9ydCBsb2FkQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5yZW5kZXJJbml0KCk7XHJcbmxvYWRJbml0UGFnZSgpO1xyXG53aW5kb3cub25oYXNoY2hhbmdlID0gKCkgPT4ge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIG5hdmlnYXRlKCk7XHJcbn07XHJcblxyXG5jb25zdCBuYXZpZ2F0ZSA9ICgpID0+IHtcclxuICBjb25zdCBoYXNoID0gbG9jYXRpb24uaGFzaDtcclxuICBzd2l0Y2ggKGhhc2gpIHtcclxuICAgIGNhc2UgXCJcIjpcclxuICAgICAgbG9hZEluaXRQYWdlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIiNob21lXCI6XHJcbiAgICAgIGxvYWRJbml0UGFnZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIjYWJvdXRcIjpcclxuICAgICAgbG9hZEFib3V0UGFnZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIjbWVudVwiOlxyXG4gICAgICBsb2FkTWVudVBhZ2UoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiI2NvbnRhY3RcIjpcclxuICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgbG9hZE5vdEZvdW5kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBib3guY2xhc3NOYW1lID0gXCJcIjtcclxuICBib3guaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9