webpackHotUpdate_N_E("pages/games/ambivalente",{

/***/ "../ui/src/components/GamePage/GamePage.Body.tsx":
/*!*******************************************************!*\
  !*** ../ui/src/components/GamePage/GamePage.Body.tsx ***!
  \*******************************************************/
/*! exports provided: GamePageBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GamePageBody\", function() { return GamePageBody; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BattleLanding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BattleLanding */ \"../ui/src/components/BattleLanding/index.ts\");\n/* harmony import */ var _GameLanding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameLanding */ \"../ui/src/components/GameLanding/index.ts\");\n/* harmony import */ var _BattleHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BattleHistory */ \"../ui/src/components/BattleHistory/index.tsx\");\n/* harmony import */ var _BattleMove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BattleMove */ \"../ui/src/components/BattleMove/index.ts\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common */ \"../common/index.ts\");\n/* harmony import */ var _local_expose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../local/expose */ \"../local/expose/index.ts\");\n/* harmony import */ var _GamePage_cssProxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GamePage.cssProxy */ \"../ui/src/components/GamePage/GamePage.cssProxy.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Content */ \"../ui/src/components/Content/index.ts\");\nvar _jsxFileName = \"/Users/davidwaller/gitreps/mine/algol5/modules/ui/src/components/GamePage/GamePage.Body.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar GamePageBody = function GamePageBody(props) {\n  var mode = props.mode,\n      ui = props.ui,\n      battleActions = props.battleActions,\n      gamePayload = props.gamePayload,\n      battleState = props.battleState;\n  var frame = battleState.frame,\n      battle = battleState.battle,\n      session = battleState.session;\n  var api = gamePayload.api,\n      graphics = gamePayload.graphics,\n      meta = gamePayload.meta,\n      rules = gamePayload.rules; // TODO - maybe not read this on every render? move to state somewhere?\n\n  var previousSessionId = Object(_local_expose__WEBPACK_IMPORTED_MODULE_6__[\"getLatestSessionIdForGame\"])(api.gameId);\n\n  if (battleState.loading === \"session\") {\n    return __jsx(\"div\", {\n      className: _GamePage_cssProxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"].centerBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 12\n      }\n    }, \"...loading...\");\n  }\n\n  if (battleState.loading === \"endTurn\") {\n    return __jsx(\"div\", {\n      className: _GamePage_cssProxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"].centerBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 12\n      }\n    }, \"...submitting...\");\n  }\n\n  if (mode === \"history\") {\n    // We are currently watching the history of a battle\n    return __jsx(_BattleHistory__WEBPACK_IMPORTED_MODULE_3__[\"BattleHistory\"], {\n      content: ui.instruction,\n      frame: Math.max(0, frame),\n      toFrame: battleActions.toFrame,\n      battle: battle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }\n    });\n  } else if (mode === \"battlelobby\") {\n    // we are on the landing page for a created/loaded session\n    return __jsx(_BattleLanding__WEBPACK_IMPORTED_MODULE_1__[\"BattleLanding\"], {\n      battle: battle,\n      session: session,\n      meta: meta,\n      manyVariants: api.variants.length > 1,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 7\n      }\n    });\n  } else if (mode === \"playing\") {\n    if (Object(_common__WEBPACK_IMPORTED_MODULE_5__[\"isWaitingForRemote\"])(session) && ui.winner === undefined) {\n      var content = {\n        line: [{\n          text: \"...waiting for \"\n        }, {\n          player: session.player\n        }, {\n          text: \"...\"\n        }]\n      };\n      return __jsx(\"div\", {\n        className: _GamePage_cssProxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"].centerBox,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 9\n        }\n      }, __jsx(_Content__WEBPACK_IMPORTED_MODULE_8__[\"Content\"], {\n        content: content,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }\n      }));\n    } // We are actively playing an ongoing battle, or it has ended\n\n\n    return __jsx(_BattleMove__WEBPACK_IMPORTED_MODULE_4__[\"BattleMove\"], {\n      actions: battleActions,\n      ui: ui,\n      rules: rules,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 12\n      }\n    });\n  } else {\n    // No battle active, we're just at the game landing page\n    return __jsx(_GameLanding__WEBPACK_IMPORTED_MODULE_2__[\"GameLanding\"], {\n      meta: meta,\n      graphics: graphics,\n      previousSessionId: previousSessionId,\n      variants: api.variants,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }\n    });\n  }\n};\n_c = GamePageBody;\n\nvar _c;\n\n$RefreshReg$(_c, \"GamePageBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../next/node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3VpL3NyYy9jb21wb25lbnRzL0dhbWVQYWdlL0dhbWVQYWdlLkJvZHkudHN4PzA2MjAiXSwibmFtZXMiOlsiR2FtZVBhZ2VCb2R5IiwicHJvcHMiLCJtb2RlIiwidWkiLCJiYXR0bGVBY3Rpb25zIiwiZ2FtZVBheWxvYWQiLCJiYXR0bGVTdGF0ZSIsImZyYW1lIiwiYmF0dGxlIiwic2Vzc2lvbiIsImFwaSIsImdyYXBoaWNzIiwibWV0YSIsInJ1bGVzIiwicHJldmlvdXNTZXNzaW9uSWQiLCJnZXRMYXRlc3RTZXNzaW9uSWRGb3JHYW1lIiwiZ2FtZUlkIiwibG9hZGluZyIsImNzcyIsImNlbnRlckJveCIsImluc3RydWN0aW9uIiwiTWF0aCIsIm1heCIsInRvRnJhbWUiLCJ2YXJpYW50cyIsImxlbmd0aCIsImlzV2FpdGluZ0ZvclJlbW90ZSIsIndpbm5lciIsInVuZGVmaW5lZCIsImNvbnRlbnQiLCJsaW5lIiwidGV4dCIsInBsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQVVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBOEI7QUFBQSxNQUNoREMsSUFEZ0QsR0FDTUQsS0FETixDQUNoREMsSUFEZ0Q7QUFBQSxNQUMxQ0MsRUFEMEMsR0FDTUYsS0FETixDQUMxQ0UsRUFEMEM7QUFBQSxNQUN0Q0MsYUFEc0MsR0FDTUgsS0FETixDQUN0Q0csYUFEc0M7QUFBQSxNQUN2QkMsV0FEdUIsR0FDTUosS0FETixDQUN2QkksV0FEdUI7QUFBQSxNQUNWQyxXQURVLEdBQ01MLEtBRE4sQ0FDVkssV0FEVTtBQUFBLE1BRWhEQyxLQUZnRCxHQUVyQkQsV0FGcUIsQ0FFaERDLEtBRmdEO0FBQUEsTUFFekNDLE1BRnlDLEdBRXJCRixXQUZxQixDQUV6Q0UsTUFGeUM7QUFBQSxNQUVqQ0MsT0FGaUMsR0FFckJILFdBRnFCLENBRWpDRyxPQUZpQztBQUFBLE1BR2hEQyxHQUhnRCxHQUdqQkwsV0FIaUIsQ0FHaERLLEdBSGdEO0FBQUEsTUFHM0NDLFFBSDJDLEdBR2pCTixXQUhpQixDQUczQ00sUUFIMkM7QUFBQSxNQUdqQ0MsSUFIaUMsR0FHakJQLFdBSGlCLENBR2pDTyxJQUhpQztBQUFBLE1BRzNCQyxLQUgyQixHQUdqQlIsV0FIaUIsQ0FHM0JRLEtBSDJCLEVBS3hEOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQywrRUFBeUIsQ0FBQ0wsR0FBRyxDQUFDTSxNQUFMLENBQW5EOztBQUVBLE1BQUlWLFdBQVcsQ0FBQ1csT0FBWixLQUF3QixTQUE1QixFQUF1QztBQUNyQyxXQUFPO0FBQUssZUFBUyxFQUFFQywwREFBRyxDQUFDQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFQO0FBQ0Q7O0FBRUQsTUFBSWIsV0FBVyxDQUFDVyxPQUFaLEtBQXdCLFNBQTVCLEVBQXVDO0FBQ3JDLFdBQU87QUFBSyxlQUFTLEVBQUVDLDBEQUFHLENBQUNDLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQVA7QUFDRDs7QUFFRCxNQUFJakIsSUFBSSxLQUFLLFNBQWIsRUFBd0I7QUFDdEI7QUFDQSxXQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFPLEVBQUVDLEVBQUUsQ0FBQ2lCLFdBRGQ7QUFFRSxXQUFLLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWWYsS0FBWixDQUZUO0FBR0UsYUFBTyxFQUFFSCxhQUFhLENBQUNtQixPQUh6QjtBQUlFLFlBQU0sRUFBRWYsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRCxHQVZELE1BVU8sSUFBSU4sSUFBSSxLQUFLLGFBQWIsRUFBNEI7QUFDakM7QUFDQSxXQUNFLE1BQUMsNERBQUQ7QUFDRSxZQUFNLEVBQUVNLE1BRFY7QUFFRSxhQUFPLEVBQUVDLE9BRlg7QUFHRSxVQUFJLEVBQUVHLElBSFI7QUFJRSxrQkFBWSxFQUFFRixHQUFHLENBQUNjLFFBQUosQ0FBYUMsTUFBYixHQUFzQixDQUp0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRCxHQVZNLE1BVUEsSUFBSXZCLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQzdCLFFBQUl3QixrRUFBa0IsQ0FBQ2pCLE9BQUQsQ0FBbEIsSUFBK0JOLEVBQUUsQ0FBQ3dCLE1BQUgsS0FBY0MsU0FBakQsRUFBNEQ7QUFDMUQsVUFBTUMsT0FBeUIsR0FBRztBQUNoQ0MsWUFBSSxFQUFFLENBQ0o7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FESSxFQUVKO0FBQUVDLGdCQUFNLEVBQUV2QixPQUFPLENBQUV1QjtBQUFuQixTQUZJLEVBR0o7QUFBRUQsY0FBSSxFQUFFO0FBQVIsU0FISTtBQUQwQixPQUFsQztBQU9BLGFBQ0U7QUFBSyxpQkFBUyxFQUFFYiwwREFBRyxDQUFDQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFTLGVBQU8sRUFBRVUsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFLRCxLQWQ0QixDQWdCN0I7OztBQUNBLFdBQU8sTUFBQyxzREFBRDtBQUFZLGFBQU8sRUFBRXpCLGFBQXJCO0FBQW9DLFFBQUUsRUFBRUQsRUFBeEM7QUFBNEMsV0FBSyxFQUFFVSxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQWxCTSxNQWtCQTtBQUNMO0FBQ0EsV0FDRSxNQUFDLHdEQUFEO0FBQ0UsVUFBSSxFQUFFRCxJQURSO0FBRUUsY0FBUSxFQUFFRCxRQUZaO0FBR0UsdUJBQWlCLEVBQUVHLGlCQUhyQjtBQUlFLGNBQVEsRUFBRUosR0FBRyxDQUFDYyxRQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFRRDtBQUNGLENBakVNO0tBQU14QixZIiwiZmlsZSI6Ii4uL3VpL3NyYy9jb21wb25lbnRzL0dhbWVQYWdlL0dhbWVQYWdlLkJvZHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmF0dGxlTGFuZGluZyB9IGZyb20gXCIuLi9CYXR0bGVMYW5kaW5nXCI7XG5pbXBvcnQgeyBHYW1lTGFuZGluZyB9IGZyb20gXCIuLi9HYW1lTGFuZGluZ1wiO1xuaW1wb3J0IHsgQmF0dGxlSGlzdG9yeSB9IGZyb20gXCIuLi9CYXR0bGVIaXN0b3J5XCI7XG5pbXBvcnQgeyBCYXR0bGVNb3ZlIH0gZnJvbSBcIi4uL0JhdHRsZU1vdmVcIjtcbmltcG9ydCB7IGlzV2FpdGluZ0ZvclJlbW90ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb25cIjtcbmltcG9ydCB7IGdldExhdGVzdFNlc3Npb25JZEZvckdhbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbG9jYWwvZXhwb3NlXCI7XG5pbXBvcnQgeyBCYXR0bGVNb2RlIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzXCI7XG5pbXBvcnQge1xuICBCYXR0bGVBY3Rpb25zLFxuICBCYXR0bGVIb29rU3RhdGUsXG59IGZyb20gXCIuL0dhbWVQYWdlLnVzZUJhdHRsZUFjdGlvbnNBbmRTdGF0ZVwiO1xuaW1wb3J0IHtcbiAgQWxnb2xCYXR0bGVVSSxcbiAgQWxnb2xDb250ZW50QW5vbixcbiAgQWxnb2xHYW1lUGF5bG9hZCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL0dhbWVQYWdlLmNzc1Byb3h5XCI7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSBcIi4uL0NvbnRlbnRcIjtcblxudHlwZSBHYW1lUGFnZUJvZHlQcm9wcyA9IHtcbiAgbW9kZTogQmF0dGxlTW9kZTtcbiAgdWk6IEFsZ29sQmF0dGxlVUk7XG4gIGJhdHRsZUFjdGlvbnM6IEJhdHRsZUFjdGlvbnM7XG4gIGdhbWVQYXlsb2FkOiBBbGdvbEdhbWVQYXlsb2FkO1xuICBiYXR0bGVTdGF0ZTogQmF0dGxlSG9va1N0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IEdhbWVQYWdlQm9keSA9IChwcm9wczogR2FtZVBhZ2VCb2R5UHJvcHMpID0+IHtcbiAgY29uc3QgeyBtb2RlLCB1aSwgYmF0dGxlQWN0aW9ucywgZ2FtZVBheWxvYWQsIGJhdHRsZVN0YXRlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBmcmFtZSwgYmF0dGxlLCBzZXNzaW9uIH0gPSBiYXR0bGVTdGF0ZTtcbiAgY29uc3QgeyBhcGksIGdyYXBoaWNzLCBtZXRhLCBydWxlcyB9ID0gZ2FtZVBheWxvYWQ7XG5cbiAgLy8gVE9ETyAtIG1heWJlIG5vdCByZWFkIHRoaXMgb24gZXZlcnkgcmVuZGVyPyBtb3ZlIHRvIHN0YXRlIHNvbWV3aGVyZT9cbiAgY29uc3QgcHJldmlvdXNTZXNzaW9uSWQgPSBnZXRMYXRlc3RTZXNzaW9uSWRGb3JHYW1lKGFwaS5nYW1lSWQpO1xuXG4gIGlmIChiYXR0bGVTdGF0ZS5sb2FkaW5nID09PSBcInNlc3Npb25cIikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNlbnRlckJveH0+Li4ubG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChiYXR0bGVTdGF0ZS5sb2FkaW5nID09PSBcImVuZFR1cm5cIikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNlbnRlckJveH0+Li4uc3VibWl0dGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChtb2RlID09PSBcImhpc3RvcnlcIikge1xuICAgIC8vIFdlIGFyZSBjdXJyZW50bHkgd2F0Y2hpbmcgdGhlIGhpc3Rvcnkgb2YgYSBiYXR0bGVcbiAgICByZXR1cm4gKFxuICAgICAgPEJhdHRsZUhpc3RvcnlcbiAgICAgICAgY29udGVudD17dWkuaW5zdHJ1Y3Rpb259XG4gICAgICAgIGZyYW1lPXtNYXRoLm1heCgwLCBmcmFtZSl9XG4gICAgICAgIHRvRnJhbWU9e2JhdHRsZUFjdGlvbnMudG9GcmFtZX1cbiAgICAgICAgYmF0dGxlPXtiYXR0bGUhfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiYmF0dGxlbG9iYnlcIikge1xuICAgIC8vIHdlIGFyZSBvbiB0aGUgbGFuZGluZyBwYWdlIGZvciBhIGNyZWF0ZWQvbG9hZGVkIHNlc3Npb25cbiAgICByZXR1cm4gKFxuICAgICAgPEJhdHRsZUxhbmRpbmdcbiAgICAgICAgYmF0dGxlPXtiYXR0bGUhfVxuICAgICAgICBzZXNzaW9uPXtzZXNzaW9uIX1cbiAgICAgICAgbWV0YT17bWV0YX1cbiAgICAgICAgbWFueVZhcmlhbnRzPXthcGkudmFyaWFudHMubGVuZ3RoID4gMX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcInBsYXlpbmdcIikge1xuICAgIGlmIChpc1dhaXRpbmdGb3JSZW1vdGUoc2Vzc2lvbikgJiYgdWkud2lubmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQ6IEFsZ29sQ29udGVudEFub24gPSB7XG4gICAgICAgIGxpbmU6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiLi4ud2FpdGluZyBmb3IgXCIgfSxcbiAgICAgICAgICB7IHBsYXllcjogc2Vzc2lvbiEucGxheWVyISB9LFxuICAgICAgICAgIHsgdGV4dDogXCIuLi5cIiB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY2VudGVyQm94fT5cbiAgICAgICAgICA8Q29udGVudCBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIGFjdGl2ZWx5IHBsYXlpbmcgYW4gb25nb2luZyBiYXR0bGUsIG9yIGl0IGhhcyBlbmRlZFxuICAgIHJldHVybiA8QmF0dGxlTW92ZSBhY3Rpb25zPXtiYXR0bGVBY3Rpb25zfSB1aT17dWl9IHJ1bGVzPXtydWxlc30gLz47XG4gIH0gZWxzZSB7XG4gICAgLy8gTm8gYmF0dGxlIGFjdGl2ZSwgd2UncmUganVzdCBhdCB0aGUgZ2FtZSBsYW5kaW5nIHBhZ2VcbiAgICByZXR1cm4gKFxuICAgICAgPEdhbWVMYW5kaW5nXG4gICAgICAgIG1ldGE9e21ldGF9XG4gICAgICAgIGdyYXBoaWNzPXtncmFwaGljc31cbiAgICAgICAgcHJldmlvdXNTZXNzaW9uSWQ9e3ByZXZpb3VzU2Vzc2lvbklkfVxuICAgICAgICB2YXJpYW50cz17YXBpLnZhcmlhbnRzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/src/components/GamePage/GamePage.Body.tsx\n");

/***/ })

})