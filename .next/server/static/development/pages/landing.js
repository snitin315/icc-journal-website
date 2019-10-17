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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/faces/avatar.jpg":
/*!*************************************!*\
  !*** ./assets/img/faces/avatar.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/avatar-f1d71f777331fd7e3de116edf4ee3b67.jpg";

/***/ }),

/***/ "./assets/img/faces/christian.jpg":
/*!****************************************!*\
  !*** ./assets/img/faces/christian.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/christian-56633ed3f62f39d71f571374a6409e65.jpg";

/***/ }),

/***/ "./assets/img/faces/kendall.jpg":
/*!**************************************!*\
  !*** ./assets/img/faces/kendall.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/kendall-e0508cc923eb0b5e68ca6783c53d0f1d.jpg";

/***/ }),

/***/ "./assets/img/landing-bg.jpg":
/*!***********************************!*\
  !*** ./assets/img/landing-bg.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landing-bg-df8fd3efcd662b64b44de07f351c838b.jpg";

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

/***/ "./assets/jss/nextjs-material-kit/components/infoStyle.js":
/*!****************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/infoStyle.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden"
  },
  title: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  description: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

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

/***/ "./assets/jss/nextjs-material-kit/pages/landingPage.js":
/*!*************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPage.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const landingPageStyle = {
  container: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    zIndex: "12",
    color: "#FFFFFF"
  }, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"]),
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }),
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (landingPageStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js":
/*!**********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  description: {
    color: "#999"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (productStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js":
/*!*******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ "./assets/jss/nextjs-material-kit/imagesStyles.js");




const teamStyle = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["cardTitle"],
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (teamStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js":
/*!*******************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  }),
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (workStyle);

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

/***/ "./components/InfoArea/InfoArea.js":
/*!*****************************************!*\
  !*** ./components/InfoArea/InfoArea.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/infoStyle.js */ "./assets/jss/nextjs-material-kit/components/infoStyle.js");
var _jsxFileName = "/root/icc-journal-website/components/InfoArea/InfoArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function InfoArea(props) {
  const classes = useStyles();
  const {
    title,
    description,
    iconColor,
    vertical
  } = props;
  const iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return __jsx("div", {
    className: classes.infoArea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: iconWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(props.icon, {
    className: iconClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: classes.descriptionWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h4", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, title), __jsx("p", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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

/***/ "./pages-sections/LandingPage-Sections/ProductSection.js":
/*!***************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/ProductSection.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Chat */ "@material-ui/icons/Chat");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "@material-ui/icons/VerifiedUser");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "@material-ui/icons/Fingerprint");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/InfoArea/InfoArea.js */ "./components/InfoArea/InfoArea.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/LandingPage-Sections/ProductSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons



 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function ProductSection() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Let", "'", "s talk product"), __jsx("h5", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn", "'", "t scroll to get here. Add a button if you want the user to see more."))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default.a,
    iconColor: "info",
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconColor: "success",
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconColor: "danger",
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/TeamSection.js":
/*!************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/TeamSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/kendall.jpg */ "./assets/img/faces/kendall.jpg");
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/root/icc-journal-website/pages-sections/LandingPage-Sections/TeamSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function TeamSection() {
  const classes = useStyles();
  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Here is our team"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "...",
    className: imageClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("h4", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Gigi Hadid", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("small", {
    className: classes.smallTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Model")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("p", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "...",
    className: imageClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("h4", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Christian Louboutin", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("small", {
    className: classes.smallTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Designer")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))))), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("img", {
    src: assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: imageClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx("h4", {
    className: classes.cardTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Kendall Jenner", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("small", {
    className: classes.smallTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Model")), __jsx(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("p", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", __jsx("a", {
    href: "#pablo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "links"), " for people to be able to follow them outside the site.")), __jsx(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("i", {
    className: classes.socials + " fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }))))))));
}

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/WorkSection.js":
/*!************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/WorkSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js");
var _jsxFileName = "/root/icc-journal-website/pages-sections/LandingPage-Sections/WorkSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function WorkSection() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Work with us"), __jsx("h4", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Email",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Message",
    id: "message",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    inputProps: {
      multiline: true,
      rows: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.textCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Send Message")))))));
}

/***/ }),

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPage.js */ "./assets/jss/nextjs-material-kit/pages/landingPage.js");
/* harmony import */ var pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/TeamSection.js */ "./pages-sections/LandingPage-Sections/TeamSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");


var _jsxFileName = "/root/icc-journal-website/pages/landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








 // Sections for this page




const dashboardRoutes = [];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function LandingPage(props) {
  const classes = useStyles();

  const rest = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, props);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    filter: true,
    responsive: true,
    image: __webpack_require__(/*! assets/img/landing-bg.jpg */ "./assets/img/landing-bg.jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Your Story Starts With Us."), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Every landing page needs a small description after the big bold title, that", "'", "s why we added this text here. Add here all the information that can make you or your product create the first impression."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "danger",
    size: "lg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), "Watch video"))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main, classes.mainRaised),
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
  }, __jsx(pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }));
}

/***/ }),

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/landing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/icc-journal-website/pages/landing.js */"./pages/landing.js");


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

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

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

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

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

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

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

/***/ "@material-ui/icons/Chat":
/*!******************************************!*\
  !*** external "@material-ui/icons/Chat" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/Fingerprint":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Fingerprint" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/VerifiedUser":
/*!**************************************************!*\
  !*** external "@material-ui/icons/VerifiedUser" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=landing.js.map