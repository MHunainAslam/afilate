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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst index = ()=>{\n    var _blog_data;\n    _s();\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__.APP_URL, \"api/allblogs?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_5__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setblog(json);\n        }).catch((err)=>{});\n    }, []);\n    console.log(\"setbloga\", blog.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"my-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: blog === null || blog === void 0 ? void 0 : (_blog_data = blog.data) === null || _blog_data === void 0 ? void 0 : _blog_data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/blog/\".concat(item.id),\n                                className: \"card blog-card h-100\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-header\",\n                                        children: [\n                                            item,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                src: blog.url + \"/\" + item.image,\n                                                fill: true\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 37\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"blog-cardtitle\",\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 41\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"blog-carddesc\",\n                                                children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus fugiat beatae facere debitis esse dolore, omnis, animi mollitia veritatis ipsa aut libero quidem. Iste voluptatem possimus nemo ut earum!.\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 33\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 29\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(index, \"tgPlEe+xN1hyleYrM4dZ5nMYyxQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBQ0E7QUFDdEI7QUFDZ0U7QUFFNUYsTUFBTVEsUUFBUSxJQUFNO1FBdUJLQzs7SUF0QnJCLE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ1EsS0FBS0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBR1pXLE1BQU0sR0FBOEJQLE9BQTNCQyw2RkFBT0EsRUFBQyxxQkFBMkIsT0FBUkQsNkZBQU9BLEdBQUlRLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUNFLENBQUFBLE9BQVE7WUFDaEZOLFFBQVFNO1FBRVosR0FBR0MsS0FBSyxDQUFDTixDQUFBQSxNQUFPLENBQ2hCO0lBS0osR0FBRyxFQUFFO0lBQ0xPLFFBQVFDLEdBQUcsQ0FBQyxZQUFZVixLQUFLVyxJQUFJO0lBQ2pDLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1ZiLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTVcsSUFBSSxjQUFWWCx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWWUsSUFBSSxDQUFDQyxNQUFNakIsc0JBQ3BCLDhEQUFDZTs0QkFBSUQsV0FBVTtzQ0FDWCw0RUFBQ2pCLGtEQUFJQTtnQ0FBQ3FCLE1BQU0sU0FBaUIsT0FBUkQsS0FBS0UsRUFBRTtnQ0FBSUwsV0FBVTs7a0RBQ3RDLDhEQUFDQzt3Q0FBSUQsV0FBVTs7NENBQ1ZHOzBEQUNELDhEQUFDekIsbURBQUtBO2dEQUFDNEIsS0FBS25CLEtBQUtvQixHQUFHLEdBQUUsTUFBS0osS0FBS0ssS0FBSztnREFBRUMsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs7a0RBRXJELDhEQUFDUjt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNDO2dEQUFJRCxXQUFVOzBEQUFrQkcsS0FBS08sS0FBSzs7Ozs7OzBEQUMzQyw4REFBQ1Q7Z0RBQUlELFdBQVU7MERBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBUlpkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QjNEO0dBaERNQTtBQWtETiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL2luZGV4LmpzPzExYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9ibG9nL21hbi5qcGcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQVBQX0tFWSwgQVBQX1VSTCB9IGZyb20gJ0AvcHVibGljL3NldHRpbmdzL3RoZXJlX2lzX25vdGhpbmdfaG9sZGluZ19tZV9iYWNrL2NvbmZpZydcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Jsb2csIHNldGJsb2ddID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICBmZXRjaChgJHtBUFBfVVJMfWFwaS9hbGxibG9ncz9rZXk9JHtBUFBfS0VZfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgIHNldGJsb2coanNvbik7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNldGJsb2dhXCIsIGJsb2cuZGF0YSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdteS01Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2c/LmRhdGE/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cImNhcmQgYmxvZy1jYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YmxvZy51cmwgK1wiL1wiKyBpdGVtLmltYWdlfSBmaWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkdGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWxsZW5kdXMgZnVnaWF0IGJlYXRhZSBmYWNlcmUgZGViaXRpcyBlc3NlIGRvbG9yZSwgb21uaXMsIGFuaW1pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9sbGl0aWEgdmVyaXRhdGlzIGlwc2EgYXV0IGxpYmVybyBxdWlkZW0uIElzdGUgdm9sdXB0YXRlbSBwb3NzaW11c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lbW8gdXQgZWFydW0hLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWciLCJMaW5rIiwiQVBQX0tFWSIsIkFQUF9VUkwiLCJpbmRleCIsImJsb2ciLCJzZXRibG9nIiwiZXJyIiwic2V0RXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaHJlZiIsImlkIiwic3JjIiwidXJsIiwiaW1hZ2UiLCJmaWxsIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n"));

/***/ })

});