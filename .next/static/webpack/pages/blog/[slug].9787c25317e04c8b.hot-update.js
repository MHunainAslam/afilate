"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst blogslug = ()=>{\n    var _dta_query;\n    _s();\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const dta = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    let slug = dta === null || dta === void 0 ? void 0 : (_dta_query = dta.query) === null || _dta_query === void 0 ? void 0 : _dta_query.slug;\n    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setloading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_URL, \"api/single-blog/\").concat(slug, \"?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setblog(json);\n            setloading(true);\n        // console.log(\"json\", json.data.slug);\n        }).catch((err)=>{\n            setError(\"something went wrong!\");\n            setloading(false);\n        });\n    }, [\n        slug\n    ]);\n    console.log(slug);\n    // fetch(`https://creativeitsols.com/system/public/api/single-blog/the-best-deals-going-live-for-amazons-prime-early-access-sale?key=app_c5nsYNIFAhACMAaKYTNEubEwGwr1y9EIov4H405V`).then(res => res.json()).then(json => {\n    // fetch(`${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`).then(res => res.json()).then(json => {\n    console.log(\"aa\", blog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-5 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card single-bloag-card blog-card h-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header col-md-10 mx-auto\",\n                                    children: (blog === null || blog === void 0 ? void 0 : blog.image) === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 46,\n                                        columnNumber: 41\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: (blog === null || blog === void 0 ? void 0 : blog.url) + \"/\" + (blog === null || blog === void 0 ? void 0 : blog.data.image),\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-cardtitle text-center mt-4\",\n                                            children: blog === null || blog === void 0 ? void 0 : blog.data.title\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 54,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-carddesc mt-5 text-center\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: blog === null || blog === void 0 ? void 0 : blog.data.long_description\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 58,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(blogslug, \"9+59hNM68rW0iSkEVdReOXndP5I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogslug);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBQ0E7QUFDdEI7QUFDVztBQUNxRDtBQUU1RixNQUFNUyxXQUFXLElBQU07UUFNUkM7O0lBSFgsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQTtJQUVoQyxNQUFNTyxNQUFNSixzREFBU0E7SUFDckIsSUFBSU8sT0FBT0gsZ0JBQUFBLGlCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxJQUFLSSxLQUFLLGNBQVZKLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZRyxJQUFGO0lBRXJCLE1BQU0sQ0FBQ0UsS0FBS0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1ppQixNQUFNLEdBQTZCTixPQUExQkwsNkZBQU9BLEVBQUMsb0JBQThCRCxPQUFaTSxNQUFLLFNBQWUsT0FBUk4sNkZBQU9BLEdBQUlhLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUMsQ0FBQ0UsT0FBUztZQUM3RlYsUUFBUVU7WUFDUkosV0FBVyxJQUFJO1FBQ2YsdUNBQXVDO1FBRTNDLEdBQUdLLEtBQUssQ0FBQ1IsQ0FBQUEsTUFBTztZQUNaQyxTQUFTO1lBQ1RFLFdBQVcsS0FBSztRQUNwQjtJQUVKLEdBQUc7UUFBQ0w7S0FBSztJQUNUVyxRQUFRQyxHQUFHLENBQUNaO0lBQ1osME5BQTBOO0lBQzFOLG1HQUFtRztJQUVuR1csUUFBUUMsR0FBRyxDQUFDLE1BQU1kO0lBQ2xCLHFCQUNJO2tCQUNJLDRFQUFDZTtZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNWaEIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNa0IsS0FBSyxNQUFLLElBQUksaUJBRWpCLDhEQUFDN0IsbURBQUtBO3dDQUFDOEIsS0FBSzFCLG1FQUFHQTt3Q0FBRTJCLE1BQU0sSUFBSTs7Ozs7a0VBRTNCLDhEQUFDL0IsbURBQUtBO3dDQUFDOEIsS0FBS25CLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTXFCLEdBQUcsSUFBRyxPQUFNckIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNc0IsSUFBSSxDQUFDSixLQUFLO3dDQUFFRSxNQUFNLElBQUk7Ozs7O2lEQUFJOzs7Ozs7OENBS3RFLDhEQUFDSDtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUVWaEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNc0IsSUFBSSxDQUFDQyxLQUFLOzs7Ozs7c0RBRXJCLDhEQUFDTjs0Q0FBSUQsV0FBVTs0Q0FBaUNRLHlCQUF5QjtnREFBRUMsTUFBTSxFQUFFekIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNc0IsSUFBSSxDQUFDSSxnQkFBZ0I7NENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVluSjtHQTlETTVCOztRQUtVSCxrREFBU0E7OztBQTJEekIsK0RBQWVHLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Jsb2cvbWFuLmpwZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgQVBQX0tFWSwgQVBQX1VSTCB9IGZyb20gJ0AvcHVibGljL3NldHRpbmdzL3RoZXJlX2lzX25vdGhpbmdfaG9sZGluZ19tZV9iYWNrL2NvbmZpZydcclxuXHJcbmNvbnN0IGJsb2dzbHVnID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbYmxvZywgc2V0YmxvZ10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgZHRhID0gdXNlUm91dGVyKClcclxuICAgIGxldCBzbHVnID0gZHRhPy5xdWVyeT8uc2x1ZztcclxuXHJcbiAgICBjb25zdCBbZXJyLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7QVBQX1VSTH1hcGkvc2luZ2xlLWJsb2cvJHtzbHVnfT9rZXk9JHtBUFBfS0VZfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgICAgc2V0YmxvZyhqc29uKTtcclxuICAgICAgICAgICAgc2V0bG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImpzb25cIiwganNvbi5kYXRhLnNsdWcpO1xyXG5cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBzZXRFcnJvcignc29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcbiAgICAgICAgICAgIHNldGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSwgW3NsdWddKVxyXG4gICAgY29uc29sZS5sb2coc2x1ZylcclxuICAgIC8vIGZldGNoKGBodHRwczovL2NyZWF0aXZlaXRzb2xzLmNvbS9zeXN0ZW0vcHVibGljL2FwaS9zaW5nbGUtYmxvZy90aGUtYmVzdC1kZWFscy1nb2luZy1saXZlLWZvci1hbWF6b25zLXByaW1lLWVhcmx5LWFjY2Vzcy1zYWxlP2tleT1hcHBfYzVuc1lOSUZBaEFDTUFhS1lUTkV1YkV3R3dyMXk5RUlvdjRINDA1VmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAvLyBmZXRjaChgJHtBUFBfVVJMfWFwaS9zaW5nbGUtYmxvZy8ke3NsdWd9P2tleT0ke0FQUF9LRVl9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnYWEnLCBibG9nKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdweS01ICc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaW5nbGUtYmxvYWctY2FyZCBibG9nLWNhcmQgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nPy5pbWFnZSA9PT0gbnVsbCA/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBmaWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YmxvZz8udXJsICsgXCIvXCIgKyBibG9nPy5kYXRhLmltYWdlfSBmaWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBjbGFzc05hbWU9J3NoYWRvdycgc3JjPXtpbWd9IGZpbGw9e3RydWV9PjwvSW1hZ2U+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2FyZHRpdGxlIHRleHQtY2VudGVyIG10LTRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZz8uZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkZGVzYyBtdC01IHRleHQtY2VudGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBibG9nPy5kYXRhLmxvbmdfZGVzY3JpcHRpb24gfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uID5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmxvZ3NsdWciXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW1nIiwiTGluayIsInVzZVJvdXRlciIsIkFQUF9LRVkiLCJBUFBfVVJMIiwiYmxvZ3NsdWciLCJkdGEiLCJibG9nIiwic2V0YmxvZyIsInNsdWciLCJxdWVyeSIsImVyciIsInNldEVycm9yIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImltYWdlIiwic3JjIiwiZmlsbCIsInVybCIsImRhdGEiLCJ0aXRsZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibG9uZ19kZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n"));

/***/ })

});