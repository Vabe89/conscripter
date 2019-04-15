webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/reducers/list.js":
/*!********************************!*\
  !*** ./state/reducers/list.js ***!
  \********************************/
/*! exports provided: fonts, substitution, share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts */ "./state/reducers/fonts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fonts", function() { return _fonts__WEBPACK_IMPORTED_MODULE_0__["fonts"]; });

/* harmony import */ var _substitution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substitution */ "./state/reducers/substitution.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "substitution", function() { return _substitution__WEBPACK_IMPORTED_MODULE_1__["substitution"]; });

/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share */ "./state/reducers/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "share", function() { return _share__WEBPACK_IMPORTED_MODULE_2__["share"]; });





/***/ }),

/***/ "./state/reducers/share.js":
/*!*********************************!*\
  !*** ./state/reducers/share.js ***!
  \*********************************/
/*! exports provided: share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./state/actionTypes.js");

var defaultState = {
  encoded: null
};
function share() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action && action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHARE"]) {
    console.log(action.encoded);
    return {
      encoded: action.encoded
    };
  }

  return state;
}

/***/ })

})
//# sourceMappingURL=index.js.204265808fb6c6a9bb35.hot-update.js.map