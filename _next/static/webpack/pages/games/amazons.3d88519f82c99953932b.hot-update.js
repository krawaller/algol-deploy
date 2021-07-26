webpackHotUpdate_N_E("pages/games/amazons",{

/***/ "../ui/src/components/SessionList/SessionList.Item.tsx":
/*!*************************************************************!*\
  !*** ../ui/src/components/SessionList/SessionList.Item.tsx ***!
  \*************************************************************/
/*! exports provided: SessionListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SessionListItem\", function() { return SessionListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_sprites_sprite_sprites2board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/sprites/sprite.sprites2board */ \"../common/sprites/sprite.sprites2board.ts\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Board */ \"../ui/src/components/Board/index.ts\");\n/* harmony import */ var _SessionList_ItemInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SessionList.ItemInfo */ \"../ui/src/components/SessionList/SessionList.ItemInfo.tsx\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../List */ \"../ui/src/components/List/index.ts\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ \"../ui/src/contexts/index.ts\");\nvar _jsxFileName = \"/Users/davidwaller/gitreps/mine/algol5/modules/ui/src/components/SessionList/SessionList.Item.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar EMPTYARR = [];\nvar SessionListItem = function SessionListItem(props) {\n  _s();\n\n  var session = props.session,\n      graphics = props.graphics,\n      variant = props.variant,\n      error = props.error;\n  var localBattleActions = Object(_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useLocalBattleActions\"])();\n  var board = Object(_common_sprites_sprite_sprites2board__WEBPACK_IMPORTED_MODULE_1__[\"sprites2board\"])(session.sprites);\n\n  var pic = __jsx(_Board__WEBPACK_IMPORTED_MODULE_2__[\"Board\"], {\n    graphics: graphics,\n    potentialMarks: EMPTYARR,\n    marks: board.marks,\n    units: board.units,\n    name: variant.board,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  });\n\n  var content = __jsx(_SessionList_ItemInfo__WEBPACK_IMPORTED_MODULE_3__[\"SessionItemInfo\"], {\n    session: session,\n    variant: variant,\n    corrupt: error === null || error === void 0 ? void 0 : error.message,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  });\n\n  var onClick = function onClick() {\n    localBattleActions.loadLocalSession(session.id);\n  };\n\n  return __jsx(_List__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n    pic: pic,\n    content: content,\n    onClick: onClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(SessionListItem, \"h5e7iq3N71dwz5OUM+n6SGHZlnw=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_5__[\"useLocalBattleActions\"]];\n});\n\n_c = SessionListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SessionListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../next/node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3VpL3NyYy9jb21wb25lbnRzL1Nlc3Npb25MaXN0L1Nlc3Npb25MaXN0Lkl0ZW0udHN4P2M1ODUiXSwibmFtZXMiOlsiRU1QVFlBUlIiLCJTZXNzaW9uTGlzdEl0ZW0iLCJwcm9wcyIsInNlc3Npb24iLCJncmFwaGljcyIsInZhcmlhbnQiLCJlcnJvciIsImxvY2FsQmF0dGxlQWN0aW9ucyIsInVzZUxvY2FsQmF0dGxlQWN0aW9ucyIsImJvYXJkIiwic3ByaXRlczJib2FyZCIsInNwcml0ZXMiLCJwaWMiLCJtYXJrcyIsInVuaXRzIiwiY29udGVudCIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwibG9hZExvY2FsU2Vzc2lvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLElBQU1BLFFBQWtCLEdBQUcsRUFBM0I7QUFFTyxJQUFNQyxlQUF3RCxHQUFHLFNBQTNEQSxlQUEyRCxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxNQUN2RUMsT0FEdUUsR0FDakNELEtBRGlDLENBQ3ZFQyxPQUR1RTtBQUFBLE1BQzlEQyxRQUQ4RCxHQUNqQ0YsS0FEaUMsQ0FDOURFLFFBRDhEO0FBQUEsTUFDcERDLE9BRG9ELEdBQ2pDSCxLQURpQyxDQUNwREcsT0FEb0Q7QUFBQSxNQUMzQ0MsS0FEMkMsR0FDakNKLEtBRGlDLENBQzNDSSxLQUQyQztBQUUvRSxNQUFNQyxrQkFBa0IsR0FBR0MsdUVBQXFCLEVBQWhEO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQywwRkFBYSxDQUFDUCxPQUFPLENBQUNRLE9BQVQsQ0FBM0I7O0FBQ0EsTUFBTUMsR0FBRyxHQUNQLE1BQUMsNENBQUQ7QUFDRSxZQUFRLEVBQUVSLFFBRFo7QUFFRSxrQkFBYyxFQUFFSixRQUZsQjtBQUdFLFNBQUssRUFBRVMsS0FBSyxDQUFDSSxLQUhmO0FBSUUsU0FBSyxFQUFFSixLQUFLLENBQUNLLEtBSmY7QUFLRSxRQUFJLEVBQUVULE9BQU8sQ0FBQ0ksS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQVNBLE1BQU1NLE9BQU8sR0FDWCxNQUFDLHFFQUFEO0FBQ0UsV0FBTyxFQUFFWixPQURYO0FBRUUsV0FBTyxFQUFFRSxPQUZYO0FBR0UsV0FBTyxFQUFFQyxLQUFGLGFBQUVBLEtBQUYsdUJBQUVBLEtBQUssQ0FBRVUsT0FIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGOztBQU9BLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJWLHNCQUFrQixDQUFDVyxnQkFBbkIsQ0FBb0NmLE9BQU8sQ0FBQ2dCLEVBQTVDO0FBQ0QsR0FGRDs7QUFHQSxTQUFPLE1BQUMsOENBQUQ7QUFBVSxPQUFHLEVBQUVQLEdBQWY7QUFBb0IsV0FBTyxFQUFFRyxPQUE3QjtBQUFzQyxXQUFPLEVBQUVFLE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBeEJNOztHQUFNaEIsZTtVQUVnQk8sK0Q7OztLQUZoQlAsZSIsImZpbGUiOiIuLi91aS9zcmMvY29tcG9uZW50cy9TZXNzaW9uTGlzdC9TZXNzaW9uTGlzdC5JdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBzcHJpdGVzMmJvYXJkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zcHJpdGVzL3Nwcml0ZS5zcHJpdGVzMmJvYXJkXCI7XG5pbXBvcnQge1xuICBBbGdvbFNlc3Npb24sXG4gIEFsZ29sR2FtZUdyYXBoaWNzLFxuICBBbGdvbFZhcmlhbnRBbm9uLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSBcIi4uL0JvYXJkXCI7XG5pbXBvcnQgeyBTZXNzaW9uSXRlbUluZm8gfSBmcm9tIFwiLi9TZXNzaW9uTGlzdC5JdGVtSW5mb1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vTGlzdFwiO1xuaW1wb3J0IHsgdXNlTG9jYWxCYXR0bGVBY3Rpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzXCI7XG5cbnR5cGUgU2Vzc2lvbkxpc3RJdGVtUHJvcHMgPSB7XG4gIHNlc3Npb246IEFsZ29sU2Vzc2lvbjtcbiAgZ3JhcGhpY3M6IEFsZ29sR2FtZUdyYXBoaWNzO1xuICB2YXJpYW50OiBBbGdvbFZhcmlhbnRBbm9uO1xuICBlcnJvcj86IEVycm9yIHwgbnVsbDtcbn07XG5cbmNvbnN0IEVNUFRZQVJSOiBzdHJpbmdbXSA9IFtdO1xuXG5leHBvcnQgY29uc3QgU2Vzc2lvbkxpc3RJdGVtOiBGdW5jdGlvbkNvbXBvbmVudDxTZXNzaW9uTGlzdEl0ZW1Qcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgc2Vzc2lvbiwgZ3JhcGhpY3MsIHZhcmlhbnQsIGVycm9yIH0gPSBwcm9wcztcbiAgY29uc3QgbG9jYWxCYXR0bGVBY3Rpb25zID0gdXNlTG9jYWxCYXR0bGVBY3Rpb25zKCk7XG4gIGNvbnN0IGJvYXJkID0gc3ByaXRlczJib2FyZChzZXNzaW9uLnNwcml0ZXMpO1xuICBjb25zdCBwaWMgPSAoXG4gICAgPEJvYXJkXG4gICAgICBncmFwaGljcz17Z3JhcGhpY3N9XG4gICAgICBwb3RlbnRpYWxNYXJrcz17RU1QVFlBUlJ9XG4gICAgICBtYXJrcz17Ym9hcmQubWFya3N9XG4gICAgICB1bml0cz17Ym9hcmQudW5pdHN9XG4gICAgICBuYW1lPXt2YXJpYW50LmJvYXJkfVxuICAgIC8+XG4gICk7XG4gIGNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPFNlc3Npb25JdGVtSW5mb1xuICAgICAgc2Vzc2lvbj17c2Vzc2lvbn1cbiAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICBjb3JydXB0PXtlcnJvcj8ubWVzc2FnZX1cbiAgICAvPlxuICApO1xuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGxvY2FsQmF0dGxlQWN0aW9ucy5sb2FkTG9jYWxTZXNzaW9uKHNlc3Npb24uaWQpO1xuICB9O1xuICByZXR1cm4gPExpc3RJdGVtIHBpYz17cGljfSBjb250ZW50PXtjb250ZW50fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/src/components/SessionList/SessionList.Item.tsx\n");

/***/ })

})