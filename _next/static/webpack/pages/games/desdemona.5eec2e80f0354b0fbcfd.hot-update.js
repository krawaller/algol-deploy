webpackHotUpdate_N_E("pages/games/desdemona",{

/***/ "../ui/src/components/SessionList/SessionList.tsx":
/*!********************************************************!*\
  !*** ../ui/src/components/SessionList/SessionList.tsx ***!
  \********************************************************/
/*! exports provided: SessionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SessionList\", function() { return SessionList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SessionList_cssProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionList.cssProxy */ \"../ui/src/components/SessionList/SessionList.cssProxy.js\");\n/* harmony import */ var _local_expose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../local/expose */ \"../local/expose/index.ts\");\n/* harmony import */ var _SessionList_FullError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SessionList.FullError */ \"../ui/src/components/SessionList/SessionList.FullError.tsx\");\n/* harmony import */ var _SessionList_LineError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SessionList.LineError */ \"../ui/src/components/SessionList/SessionList.LineError.tsx\");\n/* harmony import */ var _SessionList_Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SessionList.Item */ \"../ui/src/components/SessionList/SessionList.Item.tsx\");\n/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonGroup */ \"../ui/src/components/ButtonGroup/index.ts\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ \"../ui/src/components/Button/index.ts\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts */ \"../ui/src/contexts/index.ts\");\nvar _jsxFileName = \"/Users/davidwaller/gitreps/mine/algol5/modules/ui/src/components/SessionList/SessionList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar SessionList = function SessionList(props) {\n  _s();\n\n  var _useGamePayload = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__[\"useGamePayload\"])(),\n      api = _useGamePayload.api,\n      meta = _useGamePayload.meta,\n      graphics = _useGamePayload.graphics;\n\n  var sessionInfo = props.sessionInfo; // TODO - act different if remote\n\n  var wipe = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return _local_expose__WEBPACK_IMPORTED_MODULE_2__[\"localSessionActions\"].deleteGameSessions(api.gameId);\n  }, [api]);\n\n  if (!sessionInfo || sessionInfo.retrieved === false) {\n    return null;\n  }\n\n  if (sessionInfo.retrieved instanceof Error) {\n    return __jsx(_SessionList_FullError__WEBPACK_IMPORTED_MODULE_3__[\"SessionListFullError\"], {\n      meta: meta,\n      wipe: wipe,\n      error: sessionInfo.retrieved,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    });\n  }\n\n  var hasErrorLines = false;\n  var containers = Object.values(sessionInfo.containers);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, containers.length === 0 ? __jsx(\"div\", {\n    className: _SessionList_cssProxy__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sessionListEmpty,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"No saved sessions found\") : containers.map(function (container) {\n    var variant = api.variants.find(function (v) {\n      return v.code === container.session.variantCode;\n    });\n\n    if (!container.session || !variant) {\n      hasErrorLines = true;\n      return __jsx(_SessionList_LineError__WEBPACK_IMPORTED_MODULE_4__[\"SessionListLineError\"], {\n        key: container.id,\n        graphics: graphics,\n        fail: container,\n        meta: meta,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      });\n    }\n\n    if (container.error) {\n      hasErrorLines = true;\n    }\n\n    return __jsx(_SessionList_Item__WEBPACK_IMPORTED_MODULE_5__[\"SessionListItem\"], {\n      key: container.id,\n      session: container.session,\n      graphics: graphics,\n      variant: api.variants.find(function (v) {\n        return v.code === container.session.variantCode;\n      }),\n      error: container.error,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }\n    });\n  }), hasErrorLines && __jsx(_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__[\"ButtonGroup\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    onClick: wipe,\n    controlId: \"session-list-remove-error-lines-btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, \"Remove corruped session saves\")));\n};\n\n_s(SessionList, \"YVDEkoR7GKXg6G/fnGn/RCO+qak=\", false, function () {\n  return [_contexts__WEBPACK_IMPORTED_MODULE_8__[\"useGamePayload\"]];\n});\n\n_c = SessionList;\n\nvar _c;\n\n$RefreshReg$(_c, \"SessionList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../next/node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3VpL3NyYy9jb21wb25lbnRzL1Nlc3Npb25MaXN0L1Nlc3Npb25MaXN0LnRzeD9mNjBhIl0sIm5hbWVzIjpbIlNlc3Npb25MaXN0IiwicHJvcHMiLCJ1c2VHYW1lUGF5bG9hZCIsImFwaSIsIm1ldGEiLCJncmFwaGljcyIsInNlc3Npb25JbmZvIiwid2lwZSIsInVzZUNhbGxiYWNrIiwibG9jYWxTZXNzaW9uQWN0aW9ucyIsImRlbGV0ZUdhbWVTZXNzaW9ucyIsImdhbWVJZCIsInJldHJpZXZlZCIsIkVycm9yIiwiaGFzRXJyb3JMaW5lcyIsImNvbnRhaW5lcnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJjc3MiLCJzZXNzaW9uTGlzdEVtcHR5IiwibWFwIiwiY29udGFpbmVyIiwidmFyaWFudCIsInZhcmlhbnRzIiwiZmluZCIsInYiLCJjb2RlIiwic2Vzc2lvbiIsInZhcmlhbnRDb2RlIiwiaWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQTZCO0FBQUE7O0FBQUEsd0JBQ3RCQyxnRUFBYyxFQURRO0FBQUEsTUFDOUNDLEdBRDhDLG1CQUM5Q0EsR0FEOEM7QUFBQSxNQUN6Q0MsSUFEeUMsbUJBQ3pDQSxJQUR5QztBQUFBLE1BQ25DQyxRQURtQyxtQkFDbkNBLFFBRG1DOztBQUFBLE1BRTlDQyxXQUY4QyxHQUU5QkwsS0FGOEIsQ0FFOUNLLFdBRjhDLEVBSXREOztBQUNBLE1BQU1DLElBQUksR0FBR0MseURBQVcsQ0FDdEI7QUFBQSxXQUFNQyxpRUFBbUIsQ0FBQ0Msa0JBQXBCLENBQXVDUCxHQUFHLENBQUNRLE1BQTNDLENBQU47QUFBQSxHQURzQixFQUV0QixDQUFDUixHQUFELENBRnNCLENBQXhCOztBQUtBLE1BQUksQ0FBQ0csV0FBRCxJQUFnQkEsV0FBVyxDQUFDTSxTQUFaLEtBQTBCLEtBQTlDLEVBQXFEO0FBQ25ELFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQUlOLFdBQVcsQ0FBQ00sU0FBWixZQUFpQ0MsS0FBckMsRUFBNEM7QUFDMUMsV0FDRSxNQUFDLDJFQUFEO0FBQ0UsVUFBSSxFQUFFVCxJQURSO0FBRUUsVUFBSSxFQUFFRyxJQUZSO0FBR0UsV0FBSyxFQUFFRCxXQUFXLENBQUNNLFNBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQU9EOztBQUVELE1BQUlFLGFBQWEsR0FBRyxLQUFwQjtBQUVBLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNYLFdBQVcsQ0FBQ1MsVUFBMUIsQ0FBbkI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsVUFBVSxDQUFDRyxNQUFYLEtBQXNCLENBQXRCLEdBQ0M7QUFBSyxhQUFTLEVBQUVDLDZEQUFHLENBQUNDLGdCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELEdBR0NMLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUFDLFNBQVMsRUFBSTtBQUMxQixRQUFNQyxPQUFPLEdBQUdwQixHQUFHLENBQUNxQixRQUFKLENBQWFDLElBQWIsQ0FDZCxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVdMLFNBQVMsQ0FBQ00sT0FBVixDQUFtQkMsV0FBbEM7QUFBQSxLQURhLENBQWhCOztBQUdBLFFBQUksQ0FBQ1AsU0FBUyxDQUFDTSxPQUFYLElBQXNCLENBQUNMLE9BQTNCLEVBQW9DO0FBQ2xDVCxtQkFBYSxHQUFHLElBQWhCO0FBQ0EsYUFDRSxNQUFDLDJFQUFEO0FBQ0UsV0FBRyxFQUFFUSxTQUFTLENBQUNRLEVBRGpCO0FBRUUsZ0JBQVEsRUFBRXpCLFFBRlo7QUFHRSxZQUFJLEVBQUVpQixTQUhSO0FBSUUsWUFBSSxFQUFFbEIsSUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFRRDs7QUFDRCxRQUFJa0IsU0FBUyxDQUFDUyxLQUFkLEVBQXFCO0FBQ25CakIsbUJBQWEsR0FBRyxJQUFoQjtBQUNEOztBQUNELFdBQ0UsTUFBQyxpRUFBRDtBQUNFLFNBQUcsRUFBRVEsU0FBUyxDQUFDUSxFQURqQjtBQUVFLGFBQU8sRUFBRVIsU0FBUyxDQUFDTSxPQUZyQjtBQUdFLGNBQVEsRUFBRXZCLFFBSFo7QUFJRSxhQUFPLEVBQ0xGLEdBQUcsQ0FBQ3FCLFFBQUosQ0FBYUMsSUFBYixDQUNFLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBV0wsU0FBUyxDQUFDTSxPQUFWLENBQW1CQyxXQUFsQztBQUFBLE9BREgsQ0FMSjtBQVNFLFdBQUssRUFBRVAsU0FBUyxDQUFDUyxLQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFhRCxHQS9CRCxDQUpKLEVBcUNHakIsYUFBYSxJQUNaLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFDRSxXQUFPLEVBQUVQLElBRFg7QUFFRSxhQUFTLEVBQUMscUNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FERixDQXRDSixDQURGO0FBa0RELENBN0VNOztHQUFNUCxXO1VBQ3FCRSx3RDs7O0tBRHJCRixXIiwiZmlsZSI6Ii4uL3VpL3NyYy9jb21wb25lbnRzL1Nlc3Npb25MaXN0L1Nlc3Npb25MaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi9TZXNzaW9uTGlzdC5jc3NQcm94eVwiO1xuXG5pbXBvcnQgeyBHYW1lU2Vzc2lvbnMsIGxvY2FsU2Vzc2lvbkFjdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbG9jYWwvZXhwb3NlXCI7XG5pbXBvcnQgeyBTZXNzaW9uTGlzdEZ1bGxFcnJvciB9IGZyb20gXCIuL1Nlc3Npb25MaXN0LkZ1bGxFcnJvclwiO1xuaW1wb3J0IHsgU2Vzc2lvbkxpc3RMaW5lRXJyb3IgfSBmcm9tIFwiLi9TZXNzaW9uTGlzdC5MaW5lRXJyb3JcIjtcbmltcG9ydCB7IFNlc3Npb25MaXN0SXRlbSB9IGZyb20gXCIuL1Nlc3Npb25MaXN0Lkl0ZW1cIjtcbmltcG9ydCB7IEJ1dHRvbkdyb3VwIH0gZnJvbSBcIi4uL0J1dHRvbkdyb3VwXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vQnV0dG9uXCI7XG5pbXBvcnQgeyB1c2VHYW1lUGF5bG9hZCB9IGZyb20gXCIuLi8uLi9jb250ZXh0c1wiO1xuXG50eXBlIFNlc3Npb25MaXN0UHJvcHMgPSB7XG4gIHNlc3Npb25JbmZvOiBHYW1lU2Vzc2lvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgU2Vzc2lvbkxpc3QgPSAocHJvcHM6IFNlc3Npb25MaXN0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBhcGksIG1ldGEsIGdyYXBoaWNzIH0gPSB1c2VHYW1lUGF5bG9hZCgpO1xuICBjb25zdCB7IHNlc3Npb25JbmZvIH0gPSBwcm9wcztcblxuICAvLyBUT0RPIC0gYWN0IGRpZmZlcmVudCBpZiByZW1vdGVcbiAgY29uc3Qgd2lwZSA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IGxvY2FsU2Vzc2lvbkFjdGlvbnMuZGVsZXRlR2FtZVNlc3Npb25zKGFwaS5nYW1lSWQpLFxuICAgIFthcGldXG4gICk7XG5cbiAgaWYgKCFzZXNzaW9uSW5mbyB8fCBzZXNzaW9uSW5mby5yZXRyaWV2ZWQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHNlc3Npb25JbmZvLnJldHJpZXZlZCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZXNzaW9uTGlzdEZ1bGxFcnJvclxuICAgICAgICBtZXRhPXttZXRhfVxuICAgICAgICB3aXBlPXt3aXBlfVxuICAgICAgICBlcnJvcj17c2Vzc2lvbkluZm8ucmV0cmlldmVkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgbGV0IGhhc0Vycm9yTGluZXMgPSBmYWxzZTtcblxuICBjb25zdCBjb250YWluZXJzID0gT2JqZWN0LnZhbHVlcyhzZXNzaW9uSW5mby5jb250YWluZXJzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Y29udGFpbmVycy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2Vzc2lvbkxpc3RFbXB0eX0+Tm8gc2F2ZWQgc2Vzc2lvbnMgZm91bmQ8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIGNvbnRhaW5lcnMubWFwKGNvbnRhaW5lciA9PiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFudCA9IGFwaS52YXJpYW50cy5maW5kKFxuICAgICAgICAgICAgdiA9PiB2LmNvZGUgPT09IGNvbnRhaW5lci5zZXNzaW9uIS52YXJpYW50Q29kZVxuICAgICAgICAgICkhO1xuICAgICAgICAgIGlmICghY29udGFpbmVyLnNlc3Npb24gfHwgIXZhcmlhbnQpIHtcbiAgICAgICAgICAgIGhhc0Vycm9yTGluZXMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNlc3Npb25MaXN0TGluZUVycm9yXG4gICAgICAgICAgICAgICAga2V5PXtjb250YWluZXIuaWR9XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3M9e2dyYXBoaWNzfVxuICAgICAgICAgICAgICAgIGZhaWw9e2NvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICBtZXRhPXttZXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbnRhaW5lci5lcnJvcikge1xuICAgICAgICAgICAgaGFzRXJyb3JMaW5lcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2Vzc2lvbkxpc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17Y29udGFpbmVyLmlkfVxuICAgICAgICAgICAgICBzZXNzaW9uPXtjb250YWluZXIuc2Vzc2lvbn1cbiAgICAgICAgICAgICAgZ3JhcGhpY3M9e2dyYXBoaWNzfVxuICAgICAgICAgICAgICB2YXJpYW50PXtcbiAgICAgICAgICAgICAgICBhcGkudmFyaWFudHMuZmluZChcbiAgICAgICAgICAgICAgICAgIHYgPT4gdi5jb2RlID09PSBjb250YWluZXIuc2Vzc2lvbiEudmFyaWFudENvZGVcbiAgICAgICAgICAgICAgICApIVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVycm9yPXtjb250YWluZXIuZXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApfVxuICAgICAge2hhc0Vycm9yTGluZXMgJiYgKFxuICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17d2lwZX1cbiAgICAgICAgICAgIGNvbnRyb2xJZD1cInNlc3Npb24tbGlzdC1yZW1vdmUtZXJyb3ItbGluZXMtYnRuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZW1vdmUgY29ycnVwZWQgc2Vzc2lvbiBzYXZlc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/src/components/SessionList/SessionList.tsx\n");

/***/ })

})