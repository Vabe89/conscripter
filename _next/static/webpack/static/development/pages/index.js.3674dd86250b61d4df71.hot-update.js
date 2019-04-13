webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/images.js":
/*!******************************!*\
  !*** ./components/images.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/git/fonts/conscripter/components/images.js";


function Image(src, alt, size) {
  return function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "" + src + size + '.png',
      style: {
        width: size / 2,
        height: size / 2
      },
      alt: alt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  };
}

var Images = {
  Logo: Image('favicon', 'Conscripter Logo', 96)
};
/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/typography.js":
/*!**********************************!*\
  !*** ./components/typography.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typography_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.scss */ "./components/typography.scss");
/* harmony import */ var _typography_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typography_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./components/images.js");
var _jsxFileName = "/git/fonts/conscripter/components/typography.js";



console.log(_typography_scss__WEBPACK_IMPORTED_MODULE_1___default.a);
var Typography = {
  Header: {
    Display: function Display() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _typography_scss__WEBPACK_IMPORTED_MODULE_1___default.a.display,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images__WEBPACK_IMPORTED_MODULE_2__["default"].Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }), "Conscripter");
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ })

})
//# sourceMappingURL=index.js.3674dd86250b61d4df71.hot-update.js.map