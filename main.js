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
/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg");


const loadInitPage = () => {
  renderContent();
};

const renderInit = () => {
  const body = document.getElementById("body");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  footer.innerHTML = `Made by Zaro`;
  header.innerHTML = `<a href ="http://localhost:8080/#home" class="header">Guilty Pleasures</a>
        <nav> 
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>`;
  body.prepend(header);
  body.append(footer);
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

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a60369ac6f1b855abb3.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNaO0FBQ0Y7QUFDSTtBQUNOO0FBQ1o7QUFDdEI7QUFDQSxpREFBVTtBQUNWLG1EQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBO0FBQ0EsTUFBTSxrREFBYTtBQUNuQjtBQUNBO0FBQ0EsTUFBTSxpREFBWTtBQUNsQjtBQUNBO0FBQ0EsTUFBTSxvREFBZTtBQUNyQjtBQUNBO0FBQ0EsTUFBTSxxREFBWTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbm90Zm91bmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL0NoZWVzZWJ1cmdlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TG9ic3Rlcik7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICM1NTM5Mzk7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuaGVhZGVyLFxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZjkzO1xcclxcbiAgY29sb3I6ICM1NTM5Mzk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbiAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgIzU1MzkzOTtcXHJcXG59XFxyXFxubmF2IHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5uYXYgbGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxubmF2IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcbiNjb250ZW50OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHQsXFxyXFxuI25vdGZvdW5kLFxcclxcbiNtZW51LFxcclxcbiNhYm91dCxcXHJcXG4jY29udGFjdCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICM1NTM5Mzk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIwNywgMTQ3LCAwLjgpO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG4gIGJvcmRlcjogMC41cHggc29saWQgIzU1MzkzOTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51Ym94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LXBpY3R1cmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5oMyxcXHJcXG5oMiB7XFxyXFxuICBtYXJnaW46IDAuOCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bC1tZW51IHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5pdCxcXHJcXG4uYWJvdXQsXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlmcmFtZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWZvdW5kIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDQwJTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE9BQU87RUFDUCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDO0FBQ0E7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlEQUFrRDtFQUNsRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7Ozs7RUFLRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Mb2JzdGVyXFxcIik7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxyXFxufVxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjNTUzOTM5O1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbmhlYWRlcixcXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2Y5MztcXHJcXG4gIGNvbG9yOiAjNTUzOTM5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkICM1NTM5Mzk7XFxyXFxufVxcclxcbm5hdiB1bCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxubmF2IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbm5hdiBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG4jY29udGVudDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9DaGVlc2VidXJnZXIuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dCxcXHJcXG4jbm90Zm91bmQsXFxyXFxuI21lbnUsXFxyXFxuI2Fib3V0LFxcclxcbiNjb250YWN0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBjb2xvcjogIzU1MzkzOTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjA3LCAxNDcsIDAuOCk7XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTUzOTM5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtcGljdHVyZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcbmgzLFxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbjogMC44JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnVsLW1lbnUge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbml0LFxcclxcbi5hYm91dCxcXHJcXG4uY29udGFjdCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4uaWZyYW1lLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub3QtZm91bmQge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBsb2FkQWJvdXRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3hcIik7XHJcbiAgYm94LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJhYm91dFwiO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gYDxwPldlbGNvbWUgdG8gR3VpbHR5IFBsZWFzdXJlcywgYSBvbmUtb2YtYS1raW5kIHJlc3RhdXJhbnQgdGhhdCBicmluZ3MgdG9nZXRoZXIgdGhlIGJlc3Qgb2YgY29tZm9ydCBmb29kIGFuZCBndWlsdHkgaW5kdWxnZW5jZXMuIE91ciByZXN0YXVyYW50IGlzIGRlZGljYXRlZCB0byBjcmVhdGluZyBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgdGhhdCBhbGxvd3Mgb3VyIGN1c3RvbWVycyB0byB1bndpbmQsIHJlbGF4IGFuZCBpbmR1bGdlIGluIHRoZWlyIGZhdm91cml0ZSBndWlsdHkgcGxlYXN1cmVzLjwvcD5cclxuICAgIDxwPkF0IEd1aWx0eSBQbGVhc3VyZXMsIHdlIHByaWRlIG91cnNlbHZlcyBvbiBvdXIgbWVudSwgd2hpY2ggaXMgZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZGlzaGVzIHRoYXQgYXJlIHN1cmUgdG8gc2F0aXNmeSBhbnkgY3JhdmluZy4gRnJvbSBjbGFzc2ljIGNvbWZvcnQgZm9vZHMgbGlrZSBtYWNhcm9uaSBhbmQgY2hlZXNlIGFuZCBmcmllZCBjaGlja2VuIHRvIGRlY2FkZW50IGRlc3NlcnRzIGxpa2UgbW9sdGVuIGNob2NvbGF0ZSBsYXZhIGNha2UgYW5kIGNhcmFtZWwgYXBwbGUgcGllLCBvdXIgbWVudSBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZS48L3A+XHJcbiAgICA8cD5PdXIgdGVhbSBvZiBleHBlcmllbmNlZCBjaGVmcyBhcmUgcGFzc2lvbmF0ZSBhYm91dCBmb29kIGFuZCBhcmUgY29tbWl0dGVkIHRvIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGluIGFsbCBvdXIgZGlzaGVzLiBXZSBiZWxpZXZlIHRoYXQgdGhlIHNlY3JldCB0byBjcmVhdGluZyBncmVhdCBmb29kIGlzIHVzaW5nIHRoZSBiZXN0IGluZ3JlZGllbnRzLCBhbmQgd2Ugd29yayBoYXJkIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5IGRpc2ggd2Ugc2VydmUgaXMgYnVyc3Rpbmcgd2l0aCBmbGF2b3VyLjwvcD5cclxuICAgIDxwPkluIGFkZGl0aW9uIHRvIG91ciBkZWxpY2lvdXMgbWVudSwgR3VpbHR5IFBsZWFzdXJlcyBhbHNvIG9mZmVycyBhIHdpZGUgcmFuZ2Ugb2YgZHJpbmtzLCBpbmNsdWRpbmcgY2xhc3NpYyBjb2NrdGFpbHMsIGNyYWZ0IGJlZXJzIGFuZCBhIHNlbGVjdGlvbiBvZiB3aW5lcy4gT3VyIGJhciBpcyBzdG9ja2VkIHdpdGggcHJlbWl1bSBzcGlyaXRzIGFuZCBvdXIgYmFydGVuZGVycyBhcmUgc2tpbGxlZCBhdCBtaXhpbmcgdXAgdGhlIHBlcmZlY3QgZHJpbmsgdG8gY29tcGxlbWVudCB5b3VyIG1lYWwuPC9wPlxyXG4gICAgPHA+V2UgdW5kZXJzdGFuZCB0aGF0IGRpbmluZyBvdXQgaXMgYWJvdXQgbW9yZSB0aGFuIGp1c3QgZ3JlYXQgZm9vZCBhbmQgZHJpbmtzLiBUaGF0J3Mgd2h5IHdlJ3ZlIGNyZWF0ZWQgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHRoYXQgbWFrZXMgeW91IGZlZWwgcmlnaHQgYXQgaG9tZS4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3bywgYSBuaWdodCBvdXQgd2l0aCBmcmllbmRzIG9yIGEgZmFtaWx5IGdhdGhlcmluZywgR3VpbHR5IFBsZWFzdXJlcyBpcyB0aGUgcGVyZmVjdCBzcG90LjwvcD5cclxuICAgIDxwPlRoYW5rIHlvdSBmb3IgY29uc2lkZXJpbmcgR3VpbHR5IFBsZWFzdXJlcyBmb3IgeW91ciBuZXh0IGRpbmluZyBleHBlcmllbmNlLiBXZSBjYW4ndCB3YWl0IHRvIHdlbGNvbWUgeW91IHRvIG91ciByZXN0YXVyYW50IGFuZCBpbmR1bGdlIHlvdXIgZ3VpbHR5IHBsZWFzdXJlcy48L3A+YDtcclxuICBib3guYXBwZW5kKHRleHQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGJveCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXRQYWdlO1xyXG4iLCJjb25zdCBsb2FkQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBib3guY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dC5pZCA9IFwiY29udGFjdFwiO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gYENvbnRhY3QgVXNcclxuXHJcbiAgV2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UhIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIGNvbW1lbnRzLCBvciBmZWVkYmFjaywgcGxlYXNlIGRvbid0IGhlc2l0YXRlIHRvIGdldCBpbiB0b3VjaC5cclxuICBcclxuICBZb3UgY2FuIHJlYWNoIHVzIGJ5IHBob25lIGF0ICg1NTUpIDEyMy00NTY3LCBvciBieSBlbWFpbCBhdCBpbmZvQGd1aWx0eXBsZWFzdXJlcy5jb20uXHJcbiAgXHJcbiAgT3VyIHJlc3RhdXJhbnQgaXMgbG9jYXRlZCBhdCAxMjMgTWFpbiBTdHJlZXQgaW4gdGhlIGhlYXJ0IG9mIGRvd250b3duLiBJZiB5b3UnZCBsaWtlIHRvIHZpc2l0IHVzIGluIHBlcnNvbiwgcGxlYXNlIHNlZSBvdXIgbWFwIGFuZCBkaXJlY3Rpb25zIGJlbG93LlxyXG4gIFxyXG4gIFdlJ3JlIG9wZW4gTW9uZGF5IHRocm91Z2ggU2F0dXJkYXkgZnJvbSAxMWFtIHRvIDEwcG0sIGFuZCBvbiBTdW5kYXlzIGZyb20gMTJwbSB0byA5cG0uIFJlc2VydmF0aW9ucyBhcmUgcmVjb21tZW5kZWQsIGJ1dCBub3QgcmVxdWlyZWQuXHJcbiAgXHJcbiAgVGhhbmsgeW91IGZvciBjb25zaWRlcmluZyBHdWlsdHkgUGxlYXN1cmVzIGZvciB5b3VyIGRpbmluZyBleHBlcmllbmNlLiBXZSBjYW4ndCB3YWl0IHRvIGhlYXIgZnJvbSB5b3UgYW5kIHdlbGNvbWUgeW91IHRvIG91ciByZXN0YXVyYW50IVxyXG4gIDxkaXYgY2xhc3M9XCJpZnJhbWUtd3JhcHBlclwiPlxyXG4gICAgPGlmcmFtZSB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjQ1MFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNjcm9sbGluZz1cIm5vXCIgbWFyZ2luaGVpZ2h0PVwiMFwiIG1hcmdpbndpZHRoPVwiMFwiIHNyYz1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2V4cG9ydC9lbWJlZC5odG1sP2Jib3g9LTk2LjgxNDA2NjE3MTY0NjEzJTJDMzIuNzc1NDY3MDk3NjM3MjQlMkMtOTYuNzk2MTQ5MDE1NDI2NjUlMkMzMi43ODM0MjMwNzc4Mzg5NTQmYW1wO2xheWVyPW1hcG5pa1wiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgYmxhY2tcIj48L2lmcmFtZT48YnIvPjxzbWFsbD48L3NtYWxsPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgYm94LmFwcGVuZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZChib3gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlO1xyXG4iLCJpbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9pbWFnZXMvcmVzdGF1cmFudC5qcGdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkSW5pdFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmVuZGVyQ29udGVudCgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckluaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgZm9vdGVyLmlubmVySFRNTCA9IGBNYWRlIGJ5IFphcm9gO1xyXG4gIGhlYWRlci5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvI2hvbWVcIiBjbGFzcz1cImhlYWRlclwiPkd1aWx0eSBQbGVhc3VyZXM8L2E+XHJcbiAgICAgICAgPG5hdj4gXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiLyNob21lXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvI21lbnVcIj5NZW51PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi8jYWJvdXRcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvI2NvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+YDtcclxuICBib2R5LnByZXBlbmQoaGVhZGVyKTtcclxuICBib2R5LmFwcGVuZChmb290ZXIpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm94XCIpO1xyXG4gIGJveC5jbGFzc0xpc3QuYWRkKFwiaW5pdFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJ0ZXh0XCI7XHJcbiAgdGV4dC5pbm5lckhUTUwgPSBgPGgxPldlbGNvbWUgdG8gR3VpbHR5IFBsZWFzdXJlczwvaDE+XHJcblxyXG4gIDxwPkluZHVsZ2UgaW4geW91ciBmYXZvcml0ZSBjb21mb3J0IGZvb2RzIGFuZCBndWlsdHkgcGxlYXN1cmVzIGF0IG91ciBvbmUtb2YtYS1raW5kIHJlc3RhdXJhbnQuIFdlJ3JlIGRlZGljYXRlZCB0byBwcm92aWRpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIHdoZXJlIHlvdSBjYW4gcmVsYXgsIHVud2luZCwgYW5kIGVuam95IGEgZGVsaWNpb3VzIG1lYWwuPC9wPlxyXG4gIFxyXG4gIDxwPk91ciBtZW51IGZlYXR1cmVzIGFuIGFycmF5IG9mIGNsYXNzaWMgY29tZm9ydCBmb29kcywgbGlrZSBtYWMgYW5kIGNoZWVzZSwgZnJpZWQgY2hpY2tlbiwgYW5kIGJ1cmdlcnMsIGFzIHdlbGwgYXMgZGVjYWRlbnQgZGVzc2VydHMsIGxpa2UgbW9sdGVuIGNob2NvbGF0ZSBsYXZhIGNha2UgYW5kIGFwcGxlIHBpZS4gV2UgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGFuZCBvdXIgZXhwZXJpZW5jZWQgY2hlZnMgYXJlIHBhc3Npb25hdGUgYWJvdXQgY3JlYXRpbmcgZGlzaGVzIHRoYXQgYXJlIGJ1cnN0aW5nIHdpdGggZmxhdm9yLjwvcD5cclxuICBcclxuICA8cD5XZSBhbHNvIG9mZmVyIGEgd2lkZSBzZWxlY3Rpb24gb2YgZHJpbmtzLCBpbmNsdWRpbmcgY2xhc3NpYyBjb2NrdGFpbHMsIGNyYWZ0IGJlZXJzLCBhbmQgYSBzZWxlY3Rpb24gb2Ygd2luZXMuIE91ciBiYXJ0ZW5kZXJzIGFyZSBza2lsbGVkIGF0IG1peGluZyB1cCB0aGUgcGVyZmVjdCBkcmluayB0byBjb21wbGVtZW50IHlvdXIgbWVhbC48L3A+XHJcbiAgXHJcbiAgPHA+V2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSByb21hbnRpYyBkaW5uZXIgZm9yIHR3bywgYSBuaWdodCBvdXQgd2l0aCBmcmllbmRzLCBvciBhIGZhbWlseSBnYXRoZXJpbmcsIEd1aWx0eSBQbGVhc3VyZXMgaXMgdGhlIHBlcmZlY3Qgc3BvdC4gQ29tZSBhbmQgaW5kdWxnZSB5b3VyIGd1aWx0eSBwbGVhc3VyZXMgd2l0aCB1cyE8L3A+XHJcbiAgXHJcbiAgPGg0Pk1ha2UgYSByZXNlcnZhdGlvbiBvciBzdG9wIGJ5IGFuZCBzZWUgdXMgdG9kYXkuIFdlIGNhbid0IHdhaXQgdG8gd2VsY29tZSB5b3UgdG8gb3VyIHJlc3RhdXJhbnQhPC9oND5cclxuICBgO1xyXG4gIGJveC5hcHBlbmQodGV4dCk7XHJcbiAgY29udGVudC5hcHBlbmQoYm94KTtcclxufTtcclxuIiwiaW1wb3J0IG5hY2hvIGZyb20gXCIuL2ltYWdlcy9sb2FkZWQtbmFjaG9zLTE1OTAwNzIzNTQuanBnXCI7XHJcbmltcG9ydCBjaGlja2VuIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuLmpwZ1wiO1xyXG5pbXBvcnQgY2FrZSBmcm9tIFwiLi9pbWFnZXMvbW9sdGVuLWNob2NvbGF0ZS1jYWtlLmpwZ1wiO1xyXG5pbXBvcnQgZHJpbmsgZnJvbSBcIi4vaW1hZ2VzL21hcmdhcml0YS1uZXcuanBnXCI7XHJcblxyXG5jb25zdCBsb2FkTWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJtZW51XCI7XHJcbiAgdGV4dC5pbm5lckhUTUwgPSBgPGgzPkFwcGV0aXplcnM6PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudWJveFwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwidWwtbWVudVwiPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5Mb2FkZWQgTmFjaG9zOjwvc3Ryb25nPiBjcmlzcHkgdG9ydGlsbGEgY2hpcHMgdG9wcGVkIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBqYWxhcGVub3MsIGRpY2VkIHRvbWF0b2VzLCBncmVlbiBvbmlvbnMsIHNvdXJcclxuICAgICAgICAgICAgY3JlYW0gYW5kIGd1YWNhbW9sZS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5GcmllZCBNYWMgYW5kIENoZWVzZSBCaXRlczo8L3N0cm9uZz4gY3Jpc3B5IGZyaWVkIGJpdGVzIG9mIG1hYyBhbmQgY2hlZXNlIHNlcnZlZCB3aXRoIGEgc3BpY3kgYWlvbGkgZGlwcGluZyBzYXVjZS48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PHN0cm9uZz5CYWNvbi13cmFwcGVkIEphbGFwZW5vIFBvcHBlcnM6PC9zdHJvbmc+IGZyZXNoIGphbGFwZW5vcyBzdHVmZmVkIHdpdGggY3JlYW0gY2hlZXNlLCB3cmFwcGVkIGluIGJhY29uIGFuZCBiYWtlZCB0byBwZXJmZWN0aW9uLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cIm1lbnUtcGljdHVyZVwiIHNyYz1cIiR7bmFjaG99XCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCI1JVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMz5FbnRyZWVzOjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVib3hcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cInVsLW1lbnVcIj5cclxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Tb3V0aGVybiBGcmllZCBDaGlja2VuOjwvc3Ryb25nPiBjcmlzcHkgZnJpZWQgY2hpY2tlbiBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgY3JlYW15IG1hc2hlZCBwb3RhdG9lcyBhbmQgZ3JhdnkuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5HcmlsbGVkIENoZWVzZSBTYW5kd2ljaDo8L3N0cm9uZz4gY2xhc3NpYyBncmlsbGVkIGNoZWVzZSBtYWRlIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgdG9tYXRvIHNvdXBcclxuICAgICAgICAgICAgICBmb3IgZGlwcGluZy5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNsYXNzaWMgQ2hlZXNlYnVyZ2VyOjwvc3Ryb25nPiBqdWljeSBiZWVmIHBhdHR5IHRvcHBlZCB3aXRoIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBvbmlvbiBhbmQgcGlja2xlcyBzZXJ2ZWQgd2l0aFxyXG4gICAgICAgICAgICAgIGEgc2lkZSBvZiBmcmllcy48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZW51LXBpY3R1cmVcIiBzcmM9XCIke2NoaWNrZW59XCIgd2lkdGg9XCIyMCVcIiBoZWlnaHQ9XCI1JVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMz5EZXNzZXJ0czo8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51Ym94XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+TW9sdGVuIENob2NvbGF0ZSBMYXZhIENha2U6PC9zdHJvbmc+IHdhcm0gY2hvY29sYXRlIGNha2Ugd2l0aCBhIGdvb2V5IGNob2NvbGF0ZSBjZW50ZXIgc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkNhcmFtZWwgQXBwbGUgUGllOjwvc3Ryb25nPiB3YXJtIGFwcGxlIHBpZSB3aXRoIGEgZHJpenpsZSBvZiBjYXJhbWVsIHNhdWNlIGFuZCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+QnJvd25pZSBTdW5kYWU6PC9zdHJvbmc+IHdhcm0gY2hvY29sYXRlIGJyb3duaWUgc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbSwgY2hvY29sYXRlIHNhdWNlIGFuZCB3aGlwcGVkIGNyZWFtLjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGltZyBjbGFzcz1cIm1lbnUtcGljdHVyZVwiIHNyYz1cIiR7Y2FrZX1cIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjUlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgzPkRyaW5rczo8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51Ym94XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJ1bC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+Q2xhc3NpYyBNYXJnYXJpdGE6PC9zdHJvbmc+IHRlcXVpbGEsIGxpbWUganVpY2UgYW5kIHRyaXBsZSBzZWMgc2VydmVkIG92ZXIgaWNlIHdpdGggYSBzYWx0IHJpbS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPk9sZCBGYXNoaW9uZWQ6PC9zdHJvbmc+IGJvdXJib24sIHN1Z2FyLCBiaXR0ZXJzIGFuZCBvcmFuZ2UgcGVlbCBzZXJ2ZWQgb3ZlciBpY2UuPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwibWVudS1waWN0dXJlXCIgc3JjPVwiJHtkcmlua31cIiB3aWR0aD1cIjIwJVwiIGhlaWdodD1cIjUlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGgyPldlIGhvcGUgeW91IGVuam95IHlvdXIgbWVhbCBhdCBHdWlsdHkgUGxlYXN1cmVzITwvaDI+YDtcclxuICBib3guYXBwZW5kKHRleHQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGJveCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVBhZ2U7XHJcbiIsImNvbnN0IGxvYWROb3RGb3VuZCA9ICgpID0+IHtcclxuICByZW5kZXJOb3RGb3VuZCgpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyTm90Rm91bmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBib3guY2xhc3NMaXN0LmFkZChcIm5vdC1mb3VuZFwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZXh0LmlkID0gXCJub3Rmb3VuZFwiO1xyXG4gIHRleHQuaW5uZXJIVE1MID0gYDQwNCAtIFBhZ2Ugbm90IGZvdW5kIWA7XHJcbiAgYm94LmFwcGVuZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZChib3gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE5vdEZvdW5kO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZEluaXRQYWdlLCByZW5kZXJJbml0IH0gZnJvbSBcIi4vaW5pdFwiO1xyXG5pbXBvcnQgbG9hZE5vdEZvdW5kIGZyb20gXCIuL25vdGZvdW5kXCI7XHJcbmltcG9ydCBsb2FkQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcblxyXG5yZW5kZXJJbml0KCk7XHJcbmxvYWRJbml0UGFnZSgpO1xyXG53aW5kb3cub25oYXNoY2hhbmdlID0gKCkgPT4ge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIG5hdmlnYXRlKCk7XHJcbn07XHJcblxyXG5jb25zdCBuYXZpZ2F0ZSA9ICgpID0+IHtcclxuICBjb25zdCBoYXNoID0gbG9jYXRpb24uaGFzaDtcclxuICBzd2l0Y2ggKGhhc2gpIHtcclxuICAgIGNhc2UgXCJcIjpcclxuICAgICAgbG9hZEluaXRQYWdlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIiNob21lXCI6XHJcbiAgICAgIGxvYWRJbml0UGFnZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIjYWJvdXRcIjpcclxuICAgICAgbG9hZEFib3V0UGFnZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIjbWVudVwiOlxyXG4gICAgICBsb2FkTWVudVBhZ2UoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiI2NvbnRhY3RcIjpcclxuICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgbG9hZE5vdEZvdW5kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJveFwiKTtcclxuICBib3guY2xhc3NOYW1lID0gXCJcIjtcclxuICBib3guaW5uZXJIVE1MID0gXCJcIjtcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9