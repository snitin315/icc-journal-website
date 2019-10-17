module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/bg.jpg":
/*!***************************!*\
  !*** ./assets/img/bg.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg-e52419719dd0c4c8b172136f0b625008.jpg";

/***/ }),

/***/ "./assets/img/bg2.jpg":
/*!****************************!*\
  !*** ./assets/img/bg2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg2-843781834b1db2908f08d921c6460c81.jpg";

/***/ }),

/***/ "./assets/img/bg3.jpg":
/*!****************************!*\
  !*** ./assets/img/bg3.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg3-e76de24b6d8ab5e920bb4d49241ad15f.jpg";

/***/ }),

/***/ "./assets/img/faces/avatar.jpg":
/*!*************************************!*\
  !*** ./assets/img/faces/avatar.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/avatar-f1d71f777331fd7e3de116edf4ee3b67.jpg";

/***/ }),

/***/ "./assets/img/landing.jpg":
/*!********************************!*\
  !*** ./assets/img/landing.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landing-08e18cb904f0f3c6dd9e3d4ed72e0eca.jpg";

/***/ }),

/***/ "./assets/img/nextjs_header.jpg":
/*!**************************************!*\
  !*** ./assets/img/nextjs_header.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjs_header-5b5bdd5947add66de4b99db16abe8b22.jpg";

/***/ }),

/***/ "./assets/img/profile.jpg":
/*!********************************!*\
  !*** ./assets/img/profile.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-090a5aabae505f67ee0981613d02ee05.jpg";

/***/ }),

/***/ "./assets/img/sign.jpg":
/*!*****************************!*\
  !*** ./assets/img/sign.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sign-cf8b686b294041d0925f4e745b1fabb9.jpg";

/***/ }),

/***/ "./assets/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./assets/jss/nextjs-material-kit.js ***!
  \*******************************************/
/*! exports provided: drawerWidth, transition, container, conatinerFluid, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conatinerFluid", function() { return conatinerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


/*!

 =========================================================
 * NextJS Material Kit - v1.0.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, conatinerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = "#9c27b0";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
const infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

const warningCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

const successCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

const dangerCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

const infoCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

const primaryCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

const roseCardHeader = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

const cardActions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
  marginTop: ".625rem"
});

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/badgeStyle.js":
/*!*****************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/badgeStyle.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (badgeStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/buttonStyle.js":
/*!******************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/buttonStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    boxShadow: "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    boxShadow: "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    boxShadow: "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    boxShadow: "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    boxShadow: "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardBodyStyle.js":
/*!********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardBodyStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardFooterStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardFooterStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardHeaderStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardHeaderStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"],
  successCardHeader: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"],
  dangerCardHeader: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"],
  infoCardHeader: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"],
  primaryCardHeader: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"]
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/cardStyle.js":
/*!****************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/cardStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/customDropdownStyle.js":
/*!**************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/customDropdownStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");



const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none"
  },
  pooperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "5px !important",
        padding: "0px !important"
      }
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "0"
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static !important",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  },
  dropdownItem: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap",
    minHeight: "unset"
  }),
  blackHover: {
    "&:hover": {
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
      backgroundColor: "#212121",
      color: "#fff"
    }
  },
  primaryHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryBoxShadow"])
  },
  infoHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoBoxShadow"])
  },
  successHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successBoxShadow"])
  },
  warningHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningBoxShadow"])
  },
  dangerHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerBoxShadow"])
  },
  roseHover: {
    "&:hover": Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["roseColor"],
      color: "#FFFFFF"
    }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["roseBoxShadow"])
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: "#777",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "unset",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (customDropdownStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/customInputStyle.js":
/*!***********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/customInputStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"] + " !important"
  },
  labelRootSuccess: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/customLinearProgressStyle.js":
/*!********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/customLinearProgressStyle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customLinearProgressStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/customTabsStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/customTabsStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important"
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customTabsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/footerStyle.js":
/*!******************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/footerStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/headerLinksStyle.js":
/*!***********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/headerLinksStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/tooltipsStyle.js */ "./assets/jss/nextjs-material-kit/tooltipsStyle.js");




const headerLinksStyle = theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  list: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  }),
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px"
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  }
}, assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  marginRight5: {
    marginRight: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/headerStyle.js":
/*!******************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/headerStyle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  flex: {
    flex: 1
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  }),
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["roseColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["drawerWidth"]
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["transition"])
};
/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/navPillsStyle.js":
/*!********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/navPillsStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px"
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (navPillsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/paginationStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/paginationStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (paginationStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/parallaxStyle.js":
/*!********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/parallaxStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const parallaxStyle = theme => ({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px"
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/snackbarContentStyle.js":
/*!***************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/snackbarContentStyle.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const snackbarContentStyle = {
  root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoBoxShadow"]),
  success: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successBoxShadow"]),
  warning: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningBoxShadow"]),
  danger: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerBoxShadow"]),
  primary: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryBoxShadow"]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    position: "relative"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/typographyStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/typographyStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const typographyStyle = {
  defaultFontStyle: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
  },
  infoText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
  },
  successText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"]
  },
  warningText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
  },
  dangerText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js":
/*!*********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      float: "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  radio: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      "& > span:first-child": {
        borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    }
  },
  iconCheckboxChecked: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    "& > span:first-child": {
      borderColor: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    },
    "& $switchIcon": {
      borderColor: "#9c27b0"
    }
  },
  switchRoot: {
    height: "48px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customCheckboxRadioSwitch);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/imagesStyles.js":
/*!********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/imagesStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/modalStyle.js":
/*!******************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/modalStyle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalStyle = {
  modal: {
    borderRadius: "6px"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143"
  },
  modalCloseButton: {
    color: "#999999",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (modalStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/components.js":
/*!************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/components.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const componentsStyle = {
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (componentsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js":
/*!********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js */ "./assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js");




const basicsStyle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  sections: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
}, assets_jss_nextjs_material_kit_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (basicsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js":
/*!**********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (carouselStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js":
/*!***********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    textAlign: "center !important"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (completedStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js":
/*!**********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (downloadStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js":
/*!*********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ "./assets/jss/nextjs-material-kit/imagesStyles.js");




const exampleStyle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0"
  },
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["conatinerFluid"], {
    textAlign: "center !important"
  })
}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  link: {
    textDecoration: "none"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (exampleStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js":
/*!*************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_modalStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/modalStyle.js */ "./assets/jss/nextjs-material-kit/modalStyle.js");
/* harmony import */ var assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/tooltipsStyle.js */ "./assets/jss/nextjs-material-kit/tooltipsStyle.js");
/* harmony import */ var assets_jss_nextjs_material_kit_popoverStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/popoverStyles.js */ "./assets/jss/nextjs-material-kit/popoverStyles.js");






const javascriptStyles = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, assets_jss_nextjs_material_kit_modalStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  }
}, assets_jss_nextjs_material_kit_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"], assets_jss_nextjs_material_kit_popoverStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (javascriptStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js":
/*!*******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/img/sign.jpg */ "./assets/img/sign.jpg");
/* harmony import */ var assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1__);


const loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1___default.a + ")"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (loginStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js":
/*!*********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/headerLinksStyle.js */ "./assets/jss/nextjs-material-kit/components/headerLinksStyle.js");




const navbarsStyle = theme => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    [theme.breakpoints.down("md")]: {
      margin: "10px 0 0 15px !important",
      color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["grayColor"]
    },
    margin: "10px 0 0 0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  }
}, Object(assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(theme), {
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px"
    },
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (navbarsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js":
/*!****************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"]
};
/* harmony default export */ __webpack_exports__["default"] = (notificationsStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js":
/*!*******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (pillsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js":
/*!******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const tabsStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tabsStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js":
/*!************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ "./assets/jss/nextjs-material-kit/imagesStyles.js");




const typographyStyle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  space50: {
    height: "50px",
    display: "block"
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/popoverStyles.js":
/*!*********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/popoverStyles.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    backgroundColor: "#fff",
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#555",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#555"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (popoverStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/tooltipsStyle.js":
/*!*********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/tooltipsStyle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltipsStyle);

/***/ }),

/***/ "./components/Badge/Badge.js":
/*!***********************************!*\
  !*** ./components/Badge/Badge.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Badge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_badgeStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/badgeStyle.js */ "./assets/jss/nextjs-material-kit/components/badgeStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Badge/Badge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_badgeStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Badge(props) {
  const classes = useStyles();
  const {
    color,
    children
  } = props;
  return __jsx("span", {
    className: classes.badge + " " + classes[color],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children);
}
Badge.defaultProps = {
  color: "gray"
};
Badge.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/cardStyle.js */ "./assets/jss/nextjs-material-kit/components/cardStyle.js");


var _jsxFileName = "/root/icc-journal-website/components/Card/Card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function Card(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    carousel
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "plain", "carousel"]);

  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cardClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), children);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./components/Card/CardBody.js":
/*!*************************************!*\
  !*** ./components/Card/CardBody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/cardBodyStyle.js */ "./assets/jss/nextjs-material-kit/components/cardBodyStyle.js");


var _jsxFileName = "/root/icc-journal-website/components/Card/CardBody.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardBody(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children"]);

  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cardBodyClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), children);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./components/Card/CardFooter.js":
/*!***************************************!*\
  !*** ./components/Card/CardFooter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/cardFooterStyle.js */ "./assets/jss/nextjs-material-kit/components/cardFooterStyle.js");


var _jsxFileName = "/root/icc-journal-website/components/Card/CardFooter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardFooter(props) {
  const classes = useStyles();

  const {
    className,
    children
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children"]);

  const cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cardFooterClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), children);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./components/Card/CardHeader.js":
/*!***************************************!*\
  !*** ./components/Card/CardHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/cardHeaderStyle.js */ "./assets/jss/nextjs-material-kit/components/cardHeaderStyle.js");


var _jsxFileName = "/root/icc-journal-website/components/Card/CardHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardHeader(props) {
  const classes = useStyles();

  const {
    className,
    children,
    color,
    plain
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "color", "plain"]);

  const cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cardHeaderClasses
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), children);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./components/Clearfix/Clearfix.js":
/*!*****************************************!*\
  !*** ./components/Clearfix/Clearfix.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clearfix; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/root/icc-journal-website/components/Clearfix/Clearfix.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // mterial-ui components


const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function Clearfix() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.clearfix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}
Clearfix.propTypes = {};

/***/ }),

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/buttonStyle.js */ "./assets/jss/nextjs-material-kit/components/buttonStyle.js");



var _jsxFileName = "/root/icc-journal-website/components/CustomButtons/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components


 // core components


const makeComponentStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default()(() => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, assets_jss_nextjs_material_kit_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]));
const RegularButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  const classes = makeComponentStyles();
  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    ref: ref,
    classes: {
      root: btnClasses
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), children);
});
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RegularButton);

/***/ }),

/***/ "./components/CustomDropdown/CustomDropdown.js":
/*!*****************************************************!*\
  !*** ./components/CustomDropdown/CustomDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDropdown; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/customDropdownStyle.js */ "./assets/jss/nextjs-material-kit/components/customDropdownStyle.js");

var _jsxFileName = "/root/icc-journal-website/components/CustomDropdown/CustomDropdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components









 // core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
    navDropdown
  } = props;
  const caretClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = __jsx(props.buttonIcon, {
        className: classes.buttonIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
      break;

    case "string":
      icon = __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.buttonIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), icon, buttonText !== undefined ? buttonText : null, caret ? __jsx("b", {
    className: caretClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }) : null)), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_12___default.a, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true,
      [classes.pooperNav]: Boolean(anchorEl) && navDropdown
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, () => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9___default.a, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.dropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClickAway: handleCloseAway,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_6___default.a, {
    role: "menu",
    className: classes.menuList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, dropdownHeader !== undefined ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: () => handleClose(dropdownHeader),
    className: classes.dropdownHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        key: key,
        onClick: () => handleClose("divider"),
        className: classes.dropdownDividerItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      });
    }

    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: key,
      onClick: () => handleClose(prop),
      className: dropdownItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, prop);
  })))))));
}
CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  buttonIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),
  dropdownList: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  buttonProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  dropup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  dropdownHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  caret: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  noLiPadding: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  navDropdown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // function that retuns the selected item
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

/***/ }),

/***/ "./components/CustomInput/CustomInput.js":
/*!***********************************************!*\
  !*** ./components/CustomInput/CustomInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/customInputStyle.js */ "./assets/jss/nextjs-material-kit/components/customInputStyle.js");

var _jsxFileName = "/root/icc-journal-website/components/CustomInput/CustomInput.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;
  const labelClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formControlProps, {
    className: formControlClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), labelText !== undefined ? __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), labelText) : null, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })));
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./components/CustomLinearProgress/CustomLinearProgress.js":
/*!*****************************************************************!*\
  !*** ./components/CustomLinearProgress/CustomLinearProgress.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomLinearProgress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_customLinearProgressStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/customLinearProgressStyle.js */ "./assets/jss/nextjs-material-kit/components/customLinearProgressStyle.js");


var _jsxFileName = "/root/icc-journal-website/components/CustomLinearProgress/CustomLinearProgress.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components


 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_customLinearProgressStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CustomLinearProgress(props) {
  const classes = useStyles();

  const {
    color
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["color"]);

  return __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}
CustomLinearProgress.defaultProps = {
  color: "gray"
};
CustomLinearProgress.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

/***/ }),

/***/ "./components/CustomTabs/CustomTabs.js":
/*!*********************************************!*\
  !*** ./components/CustomTabs/CustomTabs.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomTabs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_customTabsStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/customTabsStyle.js */ "./assets/jss/nextjs-material-kit/components/customTabsStyle.js");

var _jsxFileName = "/root/icc-journal-website/components/CustomTabs/CustomTabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components




 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_customTabsStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function CustomTabs(props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const classes = useStyles();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive
  } = props;
  const cardTitle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  return __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    plain: plainTabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: headerColor,
    plain: plainTabs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, title !== undefined ? __jsx("div", {
    className: cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, title) : null, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, prop.tabIcon) : __jsx(prop.tabIcon, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })
      };
    }

    return __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }));
  }))), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, tabs.map((prop, key) => {
    if (key === value) {
      return __jsx("div", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, prop.tabContent);
    }

    return null;
  })));
}
CustomTabs.propTypes = {
  headerColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    tabName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    tabIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    tabContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
  })),
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  plainTabs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/footerStyle.js */ "./assets/jss/nextjs-material-kit/components/footerStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Footer/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // material-ui core components


 // @material-ui/icons



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function Footer(props) {
  const classes = useStyles();
  const {
    whiteFont
  } = props;
  const footerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return __jsx("footer", {
    className: footerClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: classes.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.creative-tim.com/?ref=njsmk-footer",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Creative Tim")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.creative-tim.com/presentation?ref=njsmk-footer",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "About us")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    href: "http://blog.creative-tim.com/?ref=njsmk-footer",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Blog")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    className: classes.inlineBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.creative-tim.com/license?ref=njsmk-footer",
    className: classes.block,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Licenses")))), __jsx("div", {
    className: classes.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), " by", " ", __jsx("a", {
    href: "https://www.creative-tim.com?ref=njsmk-footer",
    className: aClasses,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Creative Tim"), " ", "for a better web.")));
}
Footer.propTypes = {
  whiteFont: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./components/Grid/GridContainer.js":
/*!******************************************!*\
  !*** ./components/Grid/GridContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/root/icc-journal-website/components/Grid/GridContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(styles);
function GridContainer(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className"]);

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: true
  }, rest, {
    className: classes.grid + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ }),

/***/ "./components/Grid/GridItem.js":
/*!*************************************!*\
  !*** ./components/Grid/GridItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/root/icc-journal-website/components/Grid/GridItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(styles);
function GridItem(props) {
  const classes = useStyles();

  const {
    children,
    className
  } = props,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className"]);

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    item: true
  }, rest, {
    className: classes.grid + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), children);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/headerStyle.js */ "./assets/jss/nextjs-material-kit/components/headerStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Header/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components







 // @material-ui/icons

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/components",
    as: "/components",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, brand));

  return __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: appBarClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, leftLinks !== undefined ? brandComponent : null, __jsx("div", {
    className: classes.flex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, leftLinks !== undefined ? __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, leftLinks) : brandComponent), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    smDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, rightLinks), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
    mdUp: true,
    implementation: "js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: classes.appResponsive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, leftLinks, rightLinks))));
}
Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  leftLinks: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};

/***/ }),

/***/ "./components/Header/HeaderLinks.js":
/*!******************************************!*\
  !*** ./components/Header/HeaderLinks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/headerLinksStyle.js */ "./assets/jss/nextjs-material-kit/components/headerLinksStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Header/HeaderLinks.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/

 // @material-ui/core components




 // @material-ui/icons



 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function HeaderLinks(props) {
  const classes = useStyles();
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noLiPadding: true,
    navDropdown: true,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Apps"],
    dropdownList: [__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/components",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      className: classes.dropdownLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "All components")), __jsx("a", {
      href: "https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar",
      target: "_blank",
      className: classes.dropdownLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Documentation")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar",
    color: "transparent",
    target: "_blank",
    className: classes.navLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["CloudDownload"], {
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), " Download")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-twitter",
    title: "Follow us on twitter",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "https://twitter.com/CreativeTim?ref=creativetim",
    target: "_blank",
    color: "transparent",
    className: classes.navLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "transparent",
    href: "https://www.facebook.com/CreativeTim?ref=creativetim",
    target: "_blank",
    className: classes.navLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.listItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "transparent",
    href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
    target: "_blank",
    className: classes.navLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./components/NavPills/NavPills.js":
/*!*****************************************!*\
  !*** ./components/NavPills/NavPills.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavPills; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_navPillsStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/navPillsStyle.js */ "./assets/jss/nextjs-material-kit/components/navPillsStyle.js");

var _jsxFileName = "/root/icc-journal-website/components/NavPills/NavPills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components


 // @material-ui/core components



 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_components_navPillsStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
function NavPills(props) {
  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.active);

  const handleChange = (event, active) => {
    setActive(active);
  };

  const handleChangeIndex = index => {
    setActive(index);
  };

  const classes = useStyles();
  const {
    tabs,
    direction,
    color,
    horizontal,
    alignCenter
  } = props;
  const flexContainerClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });

  const tabButtons = __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = __jsx(prop.tabIcon, {
        className: classes.tabIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });
    }

    const pillsClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [classes.pills]: true,
      [classes.horizontalPills]: horizontal !== undefined,
      [classes.pillsWithIcons]: prop.tabIcon !== undefined
    });
    return __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }));
  }));

  const tabContent = __jsx("div", {
    className: classes.contentWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default.a, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, tabs.map((prop, key) => {
    return __jsx("div", {
      className: classes.tabContent,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, prop.tabContent);
  })));

  return horizontal !== undefined ? __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, horizontal.tabsGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), tabButtons), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, horizontal.contentGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), tabContent)) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, tabButtons, tabContent);
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  // index of the default active pill
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    tabButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    tabIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    tabContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    tabsGrid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    contentGrid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  }),
  alignCenter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/paginationStyle.js */ "./assets/jss/nextjs-material-kit/components/paginationStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Pagination/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Pagination(props) {
  const classes = useStyles();
  const {
    pages,
    color
  } = props;
  return __jsx("ul", {
    className: classes.pagination,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, pages.map((prop, key) => {
    const paginationLink = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [classes.paginationLink]: true,
      [classes[color]]: prop.active,
      [classes.disabled]: prop.disabled
    });
    return __jsx("li", {
      className: classes.paginationItem,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, prop.onClick !== undefined ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: prop.onClick,
      className: paginationLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, prop.text) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: () => alert("you've clicked " + prop.text),
      className: paginationLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, prop.text));
  }));
}
Pagination.defaultProps = {
  color: "primary"
};
Pagination.propTypes = {
  pages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "info", "success", "warning", "danger"])
};

/***/ }),

/***/ "./components/Parallax/Parallax.js":
/*!*****************************************!*\
  !*** ./components/Parallax/Parallax.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/parallaxStyle.js */ "./assets/jss/nextjs-material-kit/components/parallaxStyle.js");

var _jsxFileName = "/root/icc-journal-website/components/Parallax/Parallax.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Parallax(props) {
  let windowScrollTop; // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }

  const [transform, setTransform] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("translate3d(0,0px,0)");
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  const {
    filter,
    className,
    children,
    style,
    image,
    small,
    responsive
  } = props;
  const classes = useStyles();
  const parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined
  });
  return __jsx("div", {
    className: parallaxClasses,
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // this will add a min-height of 660px on small screens
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./components/Snackbar/SnackbarContent.js":
/*!************************************************!*\
  !*** ./components/Snackbar/SnackbarContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnackbarContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "@material-ui/core/SnackbarContent");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/snackbarContentStyle.js */ "./assets/jss/nextjs-material-kit/components/snackbarContentStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Snackbar/SnackbarContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [__jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = __jsx(props.icon, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      });
      break;

    case "string":
      snackIcon = __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(__jsx(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    message: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};

/***/ }),

/***/ "./components/Typography/Danger.js":
/*!*****************************************!*\
  !*** ./components/Typography/Danger.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Danger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Danger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Danger(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Danger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Info.js":
/*!***************************************!*\
  !*** ./components/Typography/Info.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Info(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.infoText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Info.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Muted.js":
/*!****************************************!*\
  !*** ./components/Typography/Muted.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Muted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Muted.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Muted(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.mutedText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Muted.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Primary.js":
/*!******************************************!*\
  !*** ./components/Typography/Primary.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Primary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Primary(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Primary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Quote.js":
/*!****************************************!*\
  !*** ./components/Typography/Quote.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Quote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Quote(props) {
  const {
    text,
    author
  } = props;
  const classes = useStyles();
  return __jsx("blockquote", {
    className: classes.defaultFontStyle + " " + classes.quote,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    className: classes.quoteText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, text), __jsx("small", {
    className: classes.quoteAuthor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, author));
}
Quote.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Small.js":
/*!****************************************!*\
  !*** ./components/Typography/Small.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Small; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Small.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Small(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.smallText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Small.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Success.js":
/*!******************************************!*\
  !*** ./components/Typography/Success.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Success.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Success(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.successText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Success.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Warning.js":
/*!******************************************!*\
  !*** ./components/Typography/Warning.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/Typography/Warning.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Warning(props) {
  const classes = useStyles();
  const {
    children
  } = props;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.warningText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children);
}
Warning.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages-sections/Components-Sections/SectionBasics.js":
/*!*************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionBasics.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBasics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "nouislider");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ "@material-ui/icons/FiberManualRecord");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomLinearProgress/CustomLinearProgress.js */ "./components/CustomLinearProgress/CustomLinearProgress.js");
/* harmony import */ var components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Pagination/Pagination.js */ "./components/Pagination/Pagination.js");
/* harmony import */ var components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Badge/Badge.js */ "./components/Badge/Badge.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_basicsStyle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionBasics.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // plugin that creates slider

 // @material-ui/core components






 // @material-ui/icons




 // core components









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_basicsStyle_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("b");
  const [checkedA, setCheckedA] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [checkedB, setCheckedB] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return __jsx("div", {
    className: classes.sections,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Basic Elements")), __jsx("div", {
    id: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Buttons", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Pick your style"))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Default"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "round"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), " with icon"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    justIcon: true,
    round: true,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "simple"))), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Pick your size"))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    size: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Small"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Regular"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Large"))), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Pick your color"))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Default"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Primary"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Info"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Success"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Warning"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Danger"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    color: "rose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Rose")))), __jsx("div", {
    className: classes.space50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx("div", {
    id: "inputs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Inputs")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "With floating label",
    id: "float",
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Success input",
    id: "success",
    success: true,
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Error input",
    id: "error",
    error: true,
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "With material Icons",
    id: "material",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "With Font Awesome Icons",
    id: "font-awesome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("i", {
        className: "fas fa-users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })))), __jsx("div", {
    className: classes.space70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), __jsx("div", {
    id: "checkRadios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Checkboxes")), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(21),
      checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.checkedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }),
      icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.uncheckedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      tabIndex: -1,
      onClick: () => handleToggle(22),
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.checkedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }),
      icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.uncheckedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: true,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      tabIndex: -1,
      checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.checkedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }),
      icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.uncheckedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: true,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.checkedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }),
      icon: __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.uncheckedIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "Radio Buttons")), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6___default.a, {
      checked: selectedEnabled === "a",
      onChange: () => setSelectedEnabled("a"),
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioUnchecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioChecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6___default.a, {
      checked: selectedEnabled === "b",
      onChange: () => setSelectedEnabled("b"),
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioUnchecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioChecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: true,
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6___default.a, {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioUnchecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioChecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  })), __jsx("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: true,
    control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6___default.a, {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioUnchecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }),
      checkedIcon: __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.radioChecked,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, "Toggle Buttons")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: checkedA,
      onChange: event => setCheckedA(event.target.checked),
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is on",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
      checked: checkedB,
      onChange: event => setCheckedB(event.target.checked),
      value: "checkedB",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497
      },
      __self: this
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }))))), __jsx("div", {
    className: classes.space70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }), __jsx("div", {
    id: "progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, "Progress Bars")), __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "determinate",
    color: "primary",
    value: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }), __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "determinate",
    color: "info",
    value: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }), __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "determinate",
    color: "success",
    value: 100,
    style: {
      width: "35%",
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }), __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "determinate",
    color: "warning",
    value: 100,
    style: {
      width: "20%",
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }), __jsx(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "determinate",
    color: "danger",
    value: 25,
    style: {
      width: "45%",
      display: "inline-block"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }, "Pagination")), __jsx(components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    pages: [{
      text: 1
    }, {
      text: "..."
    }, {
      text: 5
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: 9
    }, {
      text: "..."
    }, {
      text: 12
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }), __jsx(components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    pages: [{
      text: "PREV"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "NEXT"
    }],
    color: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571
    },
    __self: this
  })))), __jsx("div", {
    id: "sliders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "Sliders")), __jsx("div", {
    id: "sliderRegular",
    className: "slider-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }), __jsx("div", {
    id: "sliderDouble",
    className: "slider-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }, "Badges")), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, "default"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }, "primary"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, "info"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603
    },
    __self: this
  }, "success"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, "warning"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605
    },
    __self: this
  }, "danger"), __jsx(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "rose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, "rose"))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionCarousel.js":
/*!***************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionCarousel.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionCarousel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/bg.jpg */ "./assets/img/bg.jpg");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/bg2.jpg */ "./assets/img/bg2.jpg");
/* harmony import */ var assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/bg3.jpg */ "./assets/img/bg3.jpg");
/* harmony import */ var assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js");

var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // react component for creating beautiful carousel

 // @material-ui/core components

 // @material-ui/icons

 // core components








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.marginAuto,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    carousel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "First slide",
    className: "slick-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("div", {
    className: "slick-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "slick-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "Yellowstone National Park, United States"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Second slide",
    className: "slick-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "slick-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "slick-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "Somewhere Beyond, United States"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Third slide",
    className: "slick-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    className: "slick-caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "slick-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Yellowstone National Park, United States")))))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionCompletedExamples.js":
/*!************************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionCompletedExamples.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionCompletedExamples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_completedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionCompletedExamples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_completedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function SectionCompletedExamples() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Completed with examples"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you", "'", "re good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit.")))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionDownload.js":
/*!***************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionDownload.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionDownload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_downloadStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionDownload.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*eslint-disable*/
 // @material-ui/core components

 // @material-ui/icons



 // core components


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_downloadStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function SectionDownload() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textCenter,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Do you love this UI Kit?"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 8,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-download-section",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Free NextJS Download"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-react?ref=njsmk-download-section",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Free React Downoad"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textCenter,
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Want more?"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Comming soon", " ", __jsx("a", {
    href: "#pablo",
    onClick: e => e.preventDefault(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "NextJS Material Kit PRO", " "), ".It will have a huge number of components, sections and example pages. You Could Start Your Development With A Badass Material-UI and NexJS inspired by Material Design.")), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 8,
    md: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "rose",
    size: "lg",
    disabled: true,
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "NextJS Material Kit PRO"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=njsmk-download-section",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Material Kit PRO React"))), __jsx("div", {
    className: classes.textCenter + " " + classes.sharingArea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Thank you for supporting us!")), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), " Tweet"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-facebook-square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), " Share"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-google-plus-g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), "Share"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), " Star"))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionExamples.js":
/*!***************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionExamples.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionExamples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/img/landing.jpg */ "./assets/img/landing.jpg");
/* harmony import */ var assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/profile.jpg */ "./assets/img/profile.jpg");
/* harmony import */ var assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_exampleStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionExamples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_exampleStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionExamples() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/landing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "View landing page")))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "View profile page")))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionJavascript.js":
/*!*****************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionJavascript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionJavascript; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime */ "react-datetime");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ "@material-ui/icons/LibraryBooks");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_javascriptStyles_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js");

var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionJavascript.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // react plugin for creating date-time-picker

 // @material-ui/core components











 // @material-ui/icons


 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_javascriptStyles_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
const Transition = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Transition(props, ref) {
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: "down",
    ref: ref
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
});
Transition.displayName = "Transition";
function SectionJavascript() {
  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [anchorElTop, setAnchorElTop] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [anchorElBottom, setAnchorElBottom] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [anchorElRight, setAnchorElRight] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [classicModal, setClassicModal] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Javascript components")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Modal")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "primary",
    block: true,
    onClick: () => setClassicModal(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "Classic"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
    classes: {
      root: classes.center,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: () => setClassicModal(false),
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: () => setClassicModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.modalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("h4", {
    className: classes.modalTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Modal title")), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "classic-modal-slide-description",
    className: classes.modalBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.modalFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "transparent",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Nice Button"), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: () => setClassicModal(false),
    color: "danger",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Close"))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Datetime Picker")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Datetime Picker"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(react_datetime__WEBPACK_IMPORTED_MODULE_2___default.a, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Popovers")), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: event => setAnchorElLeft(event.currentTarget),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "On left"), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElLeft),
    anchorEl: anchorElLeft,
    onClose: () => setAnchorElLeft(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("h3", {
    className: classes.popoverHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Popover on left"), __jsx("div", {
    className: classes.popoverBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: event => setAnchorElTop(event.currentTarget),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "On top"), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElTop),
    anchorEl: anchorElTop,
    onClose: () => setAnchorElTop(null),
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("h3", {
    className: classes.popoverHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "Popover on top"), __jsx("div", {
    className: classes.popoverBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Here will be some very useful information about his popover.")), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: event => setAnchorElBottom(event.currentTarget),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "On bottom"), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElBottom),
    anchorEl: anchorElBottom,
    onClose: () => setAnchorElBottom(null),
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("h3", {
    className: classes.popoverHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Popover on bottom"), __jsx("div", {
    className: classes.popoverBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Here will be some very useful information about his popover.")), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: event => setAnchorElRight(event.currentTarget),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "On right"), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default.a, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElRight),
    anchorEl: anchorElRight,
    onClose: () => setAnchorElRight(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("h3", {
    className: classes.popoverHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Popover on right"), __jsx("div", {
    className: classes.popoverBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Here will be some very useful information about his popover.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Tooltips")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "On left")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "On top")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "On bottom")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    classes: {
      tooltip: classes.tooltip
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "On right")))), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Carousel"))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionLogin.js":
/*!************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionLogin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_loginStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components



 // @material-ui/icons


 // core components










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_loginStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
function SectionLogin() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("form", {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "primary",
    className: classes.cardHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Login"), __jsx("div", {
    className: classes.socialLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("i", {
    className: classes.socialIcons + " fab fa-google-plus-g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))), __jsx("p", {
    className: classes.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Or Be Classical"), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2___default.a, {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: classes.inputIconsColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "lock_outline")),
      autoComplete: "off"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.cardFooter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Get started"))))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionNavbars.js":
/*!**************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionNavbars.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionNavbars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Face */ "@material-ui/icons/Face");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Explore */ "@material-ui/icons/Explore");
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/bg.jpg */ "./assets/img/bg.jpg");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionNavbars.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components




 // @material-ui/icons





 // core components










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
function SectionNavbars() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Menu")), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Menu",
    color: "primary",
    leftLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Link")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Link")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      navDropdown: true,
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Menu with Icons")), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Icons",
    color: "info",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      left: true,
      navDropdown: true,
      hoverColor: "info",
      dropdownHeader: "Dropdown Header",
      buttonIcon: "settings",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Navigation"))), __jsx("div", {
    id: "navbar",
    className: classes.navbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default.a + ")"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Brand",
    color: "rose",
    leftLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Link")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Link"))),
    rightLinks: __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      round: true,
      color: "white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.searchIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Info Color",
    color: "info",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Discover")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Profile")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Settings"))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Primary Color",
    color: "primary",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, __jsx(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }), " Discover")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }), " Profile")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "settings"), " Settings"))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Navbar with notifications",
    color: "dark",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "Discover")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "Wishlist")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      round: true,
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: e => e.preventDefault(),
      color: "rose",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, __jsx(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      left: true,
      caret: false,
      hoverColor: "black",
      dropdownHeader: "Dropdown Header",
      buttonText: __jsx("img", {
        src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
        className: classes.img,
        alt: "profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Navbar with profile",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, "Discover")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "Wishlist")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: e => e.preventDefault(),
      color: "rose",
      round: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, "Register"))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }), __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Transparent",
    color: "transparent",
    rightLinks: __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.list,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, __jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }), " ", "Twitter")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, __jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }), " ", "Facebook")), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, __jsx("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }), " ", "Instagram"))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionNotifications.js":
/*!********************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionNotifications.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionNotifications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Warning */ "@material-ui/icons/Warning");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Snackbar/SnackbarContent.js */ "./components/Snackbar/SnackbarContent.js");
/* harmony import */ var components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Clearfix/Clearfix.js */ "./components/Clearfix/Clearfix.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_notificationsStyles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionNotifications.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons


 // core components




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_notificationsStyles_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function SectionNotifications() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    id: "notifications",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Notifications"))), __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: "info_outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: "info_outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionPills.js":
/*!************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionPills.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionPills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Schedule */ "@material-ui/icons/Schedule");
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/List */ "@material-ui/icons/List");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_pillsStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionPills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_pillsStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionPills() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    id: "navigation-pills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Navigation Pills")), __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "With Icons"))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Tasks",
      tabIcon: _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4___default.a,
      tabContent: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "rose",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionTabs.js":
/*!***********************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionTabs.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Face */ "@material-ui/icons/Face");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Build */ "@material-ui/icons/Build");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomTabs/CustomTabs.js */ "./components/CustomTabs/CustomTabs.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_tabsStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionTabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_tabsStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionTabs() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    id: "nav-tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Navigation Tabs"), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Tabs with Icons on Card")), __jsx(components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    headerColor: "primary",
    tabs: [{
      tabName: "Profile",
      tabIcon: _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Messages",
      tabIcon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Settings",
      tabIcon: _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default.a,
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Tabs on Plain Card")), __jsx(components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    plainTabs: true,
    headerColor: "danger",
    tabs: [{
      tabName: "Home",
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Updates",
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "History",
      tabContent: __jsx("p", {
        className: classes.textCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./pages-sections/Components-Sections/SectionTypography.js":
/*!*****************************************************************!*\
  !*** ./pages-sections/Components-Sections/SectionTypography.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTypography; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Typography_Small_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Typography/Small.js */ "./components/Typography/Small.js");
/* harmony import */ var components_Typography_Danger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Typography/Danger.js */ "./components/Typography/Danger.js");
/* harmony import */ var components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Typography/Warning.js */ "./components/Typography/Warning.js");
/* harmony import */ var components_Typography_Success_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Typography/Success.js */ "./components/Typography/Success.js");
/* harmony import */ var components_Typography_Info_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Typography/Info.js */ "./components/Typography/Info.js");
/* harmony import */ var components_Typography_Primary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Typography/Primary.js */ "./components/Typography/Primary.js");
/* harmony import */ var components_Typography_Muted_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Typography/Muted.js */ "./components/Typography/Muted.js");
/* harmony import */ var components_Typography_Quote_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Typography/Quote.js */ "./components/Typography/Quote.js");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/Components-Sections/SectionTypography.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function SectionTypography() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    id: "typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Typography")), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Header 1"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Header 2"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Header 3"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Header 4"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Header 5"), __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Header 6"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Header 1"), __jsx("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Header 2"), __jsx("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Header 3"), __jsx("h3", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Header 4"), __jsx("h4", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "The Life of Material Kit")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Paragraph"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Quote"), __jsx(components_Typography_Quote_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    author: " Kanye West, Musician",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Muted Text"), __jsx(components_Typography_Muted_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Primary Text"), __jsx(components_Typography_Primary_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Info Text"), __jsx(components_Typography_Info_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Success Text"), __jsx(components_Typography_Success_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Warning Text"), __jsx(components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Danger Text"), __jsx(components_Typography_Danger_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), __jsx("div", {
    className: classes.typo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: classes.note,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Small Tag"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Header with small subtitle", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx(components_Typography_Small_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Use ", '"Small"', " tag for the headers"))))), __jsx("div", {
    className: classes.space50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("div", {
    id: "images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Images")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Rounded Image"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Circle Image"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Rounded Raised"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Circle Raised"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  })), __jsx("div", {
    className: classes.space50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })));
}

/***/ }),

/***/ "./pages/components.js":
/*!*****************************!*\
  !*** ./pages/components.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Components; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var pages_sections_Components_Sections_SectionBasics_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionBasics.js */ "./pages-sections/Components-Sections/SectionBasics.js");
/* harmony import */ var pages_sections_Components_Sections_SectionNavbars_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionNavbars.js */ "./pages-sections/Components-Sections/SectionNavbars.js");
/* harmony import */ var pages_sections_Components_Sections_SectionTabs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionTabs.js */ "./pages-sections/Components-Sections/SectionTabs.js");
/* harmony import */ var pages_sections_Components_Sections_SectionPills_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionPills.js */ "./pages-sections/Components-Sections/SectionPills.js");
/* harmony import */ var pages_sections_Components_Sections_SectionNotifications_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionNotifications.js */ "./pages-sections/Components-Sections/SectionNotifications.js");
/* harmony import */ var pages_sections_Components_Sections_SectionTypography_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionTypography.js */ "./pages-sections/Components-Sections/SectionTypography.js");
/* harmony import */ var pages_sections_Components_Sections_SectionJavascript_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionJavascript.js */ "./pages-sections/Components-Sections/SectionJavascript.js");
/* harmony import */ var pages_sections_Components_Sections_SectionCarousel_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionCarousel.js */ "./pages-sections/Components-Sections/SectionCarousel.js");
/* harmony import */ var pages_sections_Components_Sections_SectionCompletedExamples_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionCompletedExamples.js */ "./pages-sections/Components-Sections/SectionCompletedExamples.js");
/* harmony import */ var pages_sections_Components_Sections_SectionLogin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionLogin.js */ "./pages-sections/Components-Sections/SectionLogin.js");
/* harmony import */ var pages_sections_Components_Sections_SectionExamples_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionExamples.js */ "./pages-sections/Components-Sections/SectionExamples.js");
/* harmony import */ var pages_sections_Components_Sections_SectionDownload_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! pages-sections/Components-Sections/SectionDownload.js */ "./pages-sections/Components-Sections/SectionDownload.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/components.js */ "./assets/jss/nextjs-material-kit/pages/components.js");


var _jsxFileName = "/root/icc-journal-website/pages/components.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







 // sections for this page














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_kit_pages_components_js__WEBPACK_IMPORTED_MODULE_25__["default"]);
function Components(props) {
  const classes = useStyles();

  const rest = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, props);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    image: __webpack_require__(/*! assets/img/nextjs_header.jpg */ "./assets/img/nextjs_header.jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: classes.brand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "NextJS Material Kit."), __jsx("h3", {
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "A Badass Material Kit based on Material-UI and NextJS.")))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main, classes.mainRaised),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(pages_sections_Components_Sections_SectionBasics_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionNavbars_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionTabs_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionPills_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionNotifications_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionTypography_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionJavascript_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionCarousel_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionCompletedExamples_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionLogin_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    md: 12,
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    className: classes.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "View Login Page")))), __jsx(pages_sections_Components_Sections_SectionExamples_js__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(pages_sections_Components_Sections_SectionDownload_js__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }));
}

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/components.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/icc-journal-website/pages/components.js */"./pages/components.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/SnackbarContent":
/*!****************************************************!*\
  !*** external "@material-ui/core/SnackbarContent" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Build":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Build" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/Explore":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Explore" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Explore");

/***/ }),

/***/ "@material-ui/icons/Face":
/*!******************************************!*\
  !*** external "@material-ui/icons/Face" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/FiberManualRecord":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/FiberManualRecord" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FiberManualRecord");

/***/ }),

/***/ "@material-ui/icons/LibraryBooks":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LibraryBooks" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "@material-ui/icons/List":
/*!******************************************!*\
  !*** external "@material-ui/icons/List" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/Schedule":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Schedule" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Schedule");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Warning":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Warning" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Warning");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "nouislider":
/*!*****************************!*\
  !*** external "nouislider" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nouislider");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datetime":
/*!*********************************!*\
  !*** external "react-datetime" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datetime");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=components.js.map