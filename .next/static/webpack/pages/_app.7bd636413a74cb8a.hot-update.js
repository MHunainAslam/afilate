"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Categorycard.js":
/*!************************************!*\
  !*** ./components/Categorycard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Categorycrad = (param)=>{\n    let { item , img , data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card h-100 border-0 rounded-0\",\n        children: data.Style === 3 ? \"\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-12 my-auto d-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-6 px-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: img + \"/\" + item.logo,\n                        fill: 100,\n                        alt: item.name,\n                        className: \"position-relative cat-page-img object-fit-contain\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\coupon 3\\\\components\\\\Categorycard.js\",\n                        lineNumber: 11,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\components\\\\Categorycard.js\",\n                    lineNumber: 10,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-6 my-auto cat-page-title px-1\",\n                    children: item.name\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\components\\\\Categorycard.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\coupon 3\\\\components\\\\Categorycard.js\",\n            lineNumber: 9,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\coupon 3\\\\components\\\\Categorycard.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Categorycrad;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categorycrad);\nvar _c;\n$RefreshReg$(_c, \"Categorycrad\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Y2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUNMO0FBRXpCLE1BQU1FLGVBQWUsU0FBeUI7UUFBeEIsRUFBRUMsS0FBSSxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRTtJQUNyQyxxQkFFSSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDVkYsS0FBS0csS0FBSyxLQUFLLElBQUksbUJBQ2hCLDhEQUFDRjtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNQLG1EQUFLQTt3QkFBQ1MsS0FBS0wsTUFBTSxNQUFNRCxLQUFLTyxJQUFJO3dCQUFFQyxNQUFNO3dCQUFLQyxLQUFLVCxLQUFLVSxJQUFJO3dCQUFFTixXQUFVOzs7Ozs7Ozs7Ozs4QkFFNUUsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNWSixLQUFLVSxJQUFJOzs7Ozs7Ozs7OztxQkFFWjs7Ozs7O0FBSXRCO0tBaEJNWDtBQWtCTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhdGVnb3J5Y2FyZC5qcz80Mzk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDYXRlZ29yeWNyYWQgPSAoeyBpdGVtLCBpbWcsIGRhdGEgfSkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwIGJvcmRlci0wIHJvdW5kZWQtMFwiPlxuICAgICAgICAgICAge2RhdGEuU3R5bGUgPT09IDMgPyBcIlwiIDpcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBteS1hdXRvIGQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZyArIFwiL1wiICsgaXRlbS5sb2dvfSBmaWxsPXsxMDB9IGFsdD17aXRlbS5uYW1lfSBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBjYXQtcGFnZS1pbWcgb2JqZWN0LWZpdC1jb250YWluXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgbXktYXV0byBjYXQtcGFnZS10aXRsZSBweC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeWNyYWQiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkNhdGVnb3J5Y3JhZCIsIml0ZW0iLCJpbWciLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiU3R5bGUiLCJzcmMiLCJsb2dvIiwiZmlsbCIsImFsdCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Categorycard.js\n"));

/***/ })

});