"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst index = ()=>{\n    _s();\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__.APP_URL, \"api/allblogs?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setblog(json);\n        }).catch((err)=>{});\n    }, []);\n    console.log(\"setbloga\", blog.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"my-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: blog.data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/blog/\".concat(item.id),\n                                className: \"card blog-card h-100\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-header\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: item.img,\n                                            fill: true\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"blog-cardtitle\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"blog-carddesc\",\n                                                children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 33\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(index, \"tgPlEe+xN1hyleYrM4dZ5nMYyxQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBQ0E7QUFDdEI7QUFDZ0U7QUFFNUYsTUFBTVEsUUFBUSxJQUFNOztJQUNoQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNRLEtBQUtDLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUV0Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUdaVyxNQUFNLEdBQThCUCxPQUEzQkMsNkZBQU9BLEVBQUMscUJBQTJCLE9BQVJELDZGQUFPQSxHQUFJUSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFBSUYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRO1lBQ2hGTixRQUFRTTtRQUVaLEdBQUdDLEtBQUssQ0FBQ04sQ0FBQUEsTUFBTyxDQUNoQjtJQUtKLEdBQUcsRUFBRTtJQUNMTyxRQUFRQyxHQUFHLENBQUMsWUFBWVYsS0FBS1csSUFBSTtJQUNqQyxxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBUUMsV0FBVTtzQkFDZiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNWYixLQUFLVyxJQUFJLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNakIsc0JBQ2xCLDhEQUFDZTs0QkFBSUQsV0FBVTtzQ0FDWCw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ3FCLE1BQU0sU0FBaUIsT0FBUkQsS0FBS0UsRUFBRTtnQ0FBSUwsV0FBVTs7a0RBQ3RDLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWCw0RUFBQ3RCLG1EQUFLQTs0Q0FBQzRCLEtBQUtILEtBQUtyQixHQUFHOzRDQUFFeUIsTUFBTSxJQUFJOzs7Ozs7Ozs7OztrREFFcEMsOERBQUNOO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ0M7Z0RBQUlELFdBQVU7MERBQWtCRyxLQUFLSyxLQUFLOzs7Ozs7MERBQzNDLDhEQUFDUDtnREFBSUQsV0FBVTswREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFQWmQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCM0Q7R0EvQ01BO0FBaUROLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvaW5kZXguanM/MTFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Jsb2cvbWFuLmpwZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBBUFBfS0VZLCBBUFBfVVJMIH0gZnJvbSAnQC9wdWJsaWMvc2V0dGluZ3MvdGhlcmVfaXNfbm90aGluZ19ob2xkaW5nX21lX2JhY2svY29uZmlnJ1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYmxvZywgc2V0YmxvZ10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZXJyLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIGZldGNoKGAke0FQUF9VUkx9YXBpL2FsbGJsb2dzP2tleT0ke0FQUF9LRVl9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgc2V0YmxvZyhqc29uKTtcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0YmxvZ2FcIiwgYmxvZy5kYXRhKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J215LTUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmxvZy5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQgYmxvZy1jYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nfSBmaWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkdGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWxsZW5kdXMgZnVnaWF0IGJlYXRhZSBmYWNlcmUgZGViaXRpcyBlc3NlIGRvbG9yZSwgb21uaXMsIGFuaW1pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sbGl0aWEgdmVyaXRhdGlzIGlwc2EgYXV0IGxpYmVybyBxdWlkZW0uIElzdGUgdm9sdXB0YXRlbSBwb3NzaW11c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lbW8gdXQgZWFydW0hLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWciLCJMaW5rIiwiQVBQX0tFWSIsIkFQUF9VUkwiLCJpbmRleCIsImJsb2ciLCJzZXRibG9nIiwiZXJyIiwic2V0RXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaHJlZiIsImlkIiwic3JjIiwiZmlsbCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n"));

/***/ })

});