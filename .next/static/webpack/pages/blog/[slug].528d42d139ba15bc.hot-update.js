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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Spinner */ \"./components/Spinner.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst blogslug = (param)=>{\n    let { setMetas , metas  } = param;\n    var _dta_query;\n    _s();\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const dta = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    let slug = dta === null || dta === void 0 ? void 0 : (_dta_query = dta.query) === null || _dta_query === void 0 ? void 0 : _dta_query.slug;\n    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setloading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_URL, \"api/single-blog/\").concat(slug, \"?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_KEY)).then((res)=>res.json()).then((json1)=>{\n            var _json_data, _json_data_store, _json_data1, _json_data_store1, _json_data2, _json_data_store2, _json_data3, _json_data_store3, _json_data4, _json_data_store4;\n            setblog(json1);\n            setloading(false);\n            setMetas({\n                ...metas,\n                title: \"\".concat((json1 === null || json1 === void 0 ? void 0 : (_json_data = json1.data) === null || _json_data === void 0 ? void 0 : (_json_data_store = _json_data.store) === null || _json_data_store === void 0 ? void 0 : _json_data_store.name) ? (json1 === null || json1 === void 0 ? void 0 : (_json_data1 = json1.data) === null || _json_data1 === void 0 ? void 0 : (_json_data_store1 = _json_data1.store) === null || _json_data_store1 === void 0 ? void 0 : _json_data_store1.name) + \" Single Bloag\" : \"Single Bloag\"),\n                metaTitle: json1 === null || json1 === void 0 ? void 0 : (_json_data2 = json1.data) === null || _json_data2 === void 0 ? void 0 : (_json_data_store2 = _json_data2.store) === null || _json_data_store2 === void 0 ? void 0 : _json_data_store2.seo_title,\n                metaDescription: json1 === null || json1 === void 0 ? void 0 : (_json_data3 = json1.data) === null || _json_data3 === void 0 ? void 0 : (_json_data_store3 = _json_data3.store) === null || _json_data_store3 === void 0 ? void 0 : _json_data_store3.seo_description,\n                metaKeyword: json1 === null || json1 === void 0 ? void 0 : (_json_data4 = json1.data) === null || _json_data4 === void 0 ? void 0 : (_json_data_store4 = _json_data4.store) === null || _json_data_store4 === void 0 ? void 0 : _json_data_store4.meta_key\n            });\n        // console.log(\"json\", json.data.slug);\n        }).catch((err)=>{\n            var _json_data, _json_data_store, _json_data1, _json_data_store1, _json_data2, _json_data_store2, _json_data3, _json_data_store3, _json_data4, _json_data_store4;\n            setError(\"something went wrong!\");\n            setloading(false);\n            setMetas({\n                ...metas,\n                title: \"\".concat((json === null || json === void 0 ? void 0 : (_json_data = json.data) === null || _json_data === void 0 ? void 0 : (_json_data_store = _json_data.store) === null || _json_data_store === void 0 ? void 0 : _json_data_store.name) ? (json === null || json === void 0 ? void 0 : (_json_data1 = json.data) === null || _json_data1 === void 0 ? void 0 : (_json_data_store1 = _json_data1.store) === null || _json_data_store1 === void 0 ? void 0 : _json_data_store1.name) + \" Coupons & Promo Codes\" : \"Coupon & Promo Codes\"),\n                metaTitle: json === null || json === void 0 ? void 0 : (_json_data2 = json.data) === null || _json_data2 === void 0 ? void 0 : (_json_data_store2 = _json_data2.store) === null || _json_data_store2 === void 0 ? void 0 : _json_data_store2.seo_title,\n                metaDescription: json === null || json === void 0 ? void 0 : (_json_data3 = json.data) === null || _json_data3 === void 0 ? void 0 : (_json_data_store3 = _json_data3.store) === null || _json_data_store3 === void 0 ? void 0 : _json_data_store3.seo_description,\n                metaKeyword: json === null || json === void 0 ? void 0 : (_json_data4 = json.data) === null || _json_data4 === void 0 ? void 0 : (_json_data_store4 = _json_data4.store) === null || _json_data_store4 === void 0 ? void 0 : _json_data_store4.meta_key\n            });\n        });\n    }, [\n        slug\n    ]);\n    console.log(slug);\n    // fetch(`https://creativeitsols.com/system/public/api/single-blog/the-best-deals-going-live-for-amazons-prime-early-access-sale?key=app_c5nsYNIFAhACMAaKYTNEubEwGwr1y9EIov4H405V`).then(res => res.json()).then(json => {\n    // fetch(`${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`).then(res => res.json()).then(json => {\n    console.log(\"aa\", blog);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n            lineNumber: 40,\n            columnNumber: 163\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n        lineNumber: 40,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-5 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card single-bloag-card blog-card h-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header col-md-10 mx-auto\",\n                                    children: (blog === null || blog === void 0 ? void 0 : blog.image) === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 41\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: (blog === null || blog === void 0 ? void 0 : blog.url) + \"/\" + (blog === null || blog === void 0 ? void 0 : blog.data.image),\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 54,\n                                        columnNumber: 41\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-cardtitle text-center mt-4\",\n                                            children: blog === null || blog === void 0 ? void 0 : blog.data.title\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-carddesc mt-5\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: blog === null || blog === void 0 ? void 0 : blog.data.long_description\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 48,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(blogslug, \"9+59hNM68rW0iSkEVdReOXndP5I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogslug);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUMsbURBQUtBO3dDQUFDMkMsS0FBSzdCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTStCLEdBQUcsSUFBRyxPQUFNL0IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYSxJQUFJLENBQUNlLEtBQUs7d0NBQUVFLE1BQU0sSUFBSTs7Ozs7aURBQUk7Ozs7Ozs4Q0FLdEUsOERBQUNMO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBRVYxQixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1hLElBQUksQ0FBQ0QsS0FBSzs7Ozs7O3NEQUVyQiw4REFBQ2E7NENBQUlDLFdBQVU7NENBQXFCTSx5QkFBeUI7Z0RBQUVDLE1BQU0sRUFBRWpDLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWEsSUFBSSxDQUFDcUIsZ0JBQWdCOzRDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdkk7R0FuRU10Qzs7UUFLVUosa0RBQVNBOzs7QUFnRXpCLCtEQUFlSSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9ibG9nL21hbi5qcGcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEFQUF9LRVksIEFQUF9VUkwgfSBmcm9tICdAL3B1YmxpYy9zZXR0aW5ncy90aGVyZV9pc19ub3RoaW5nX2hvbGRpbmdfbWVfYmFjay9jb25maWcnXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ0AvY29tcG9uZW50cy9TcGlubmVyJ1xyXG5cclxuY29uc3QgYmxvZ3NsdWcgPSAoe3NldE1ldGFzLCBtZXRhc30pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW2Jsb2csIHNldGJsb2ddID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGR0YSA9IHVzZVJvdXRlcigpXHJcbiAgICBsZXQgc2x1ZyA9IGR0YT8ucXVlcnk/LnNsdWc7XHJcblxyXG4gICAgY29uc3QgW2Vyciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke0FQUF9VUkx9YXBpL3NpbmdsZS1ibG9nLyR7c2x1Z30/a2V5PSR7QVBQX0tFWX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHNldGJsb2coanNvbik7XHJcbiAgICAgICAgICAgIHNldGxvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldE1ldGFzKHsgLi4ubWV0YXMsIHRpdGxlOiBgJHtqc29uPy5kYXRhPy5zdG9yZT8ubmFtZSA/IGpzb24/LmRhdGE/LnN0b3JlPy5uYW1lICsgJyBTaW5nbGUgQmxvYWcnIDogJ1NpbmdsZSBCbG9hZyd9YCwgbWV0YVRpdGxlOiBqc29uPy5kYXRhPy5zdG9yZT8uc2VvX3RpdGxlLCBtZXRhRGVzY3JpcHRpb246IGpzb24/LmRhdGE/LnN0b3JlPy5zZW9fZGVzY3JpcHRpb24sIG1ldGFLZXl3b3JkOiBqc29uPy5kYXRhPy5zdG9yZT8ubWV0YV9rZXkgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwianNvblwiLCBqc29uLmRhdGEuc2x1Zyk7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcclxuICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldE1ldGFzKHsgLi4ubWV0YXMsIHRpdGxlOiBgJHtqc29uPy5kYXRhPy5zdG9yZT8ubmFtZSA/IGpzb24/LmRhdGE/LnN0b3JlPy5uYW1lICsgJyBDb3Vwb25zICYgUHJvbW8gQ29kZXMnIDogJ0NvdXBvbiAmIFByb21vIENvZGVzJ31gLCBtZXRhVGl0bGU6IGpzb24/LmRhdGE/LnN0b3JlPy5zZW9fdGl0bGUsIG1ldGFEZXNjcmlwdGlvbjoganNvbj8uZGF0YT8uc3RvcmU/LnNlb19kZXNjcmlwdGlvbiwgbWV0YUtleXdvcmQ6IGpzb24/LmRhdGE/LnN0b3JlPy5tZXRhX2tleSB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sIFtzbHVnXSlcclxuICAgIGNvbnNvbGUubG9nKHNsdWcpXHJcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9jcmVhdGl2ZWl0c29scy5jb20vc3lzdGVtL3B1YmxpYy9hcGkvc2luZ2xlLWJsb2cvdGhlLWJlc3QtZGVhbHMtZ29pbmctbGl2ZS1mb3ItYW1hem9ucy1wcmltZS1lYXJseS1hY2Nlc3Mtc2FsZT9rZXk9YXBwX2M1bnNZTklGQWhBQ01BYUtZVE5FdWJFd0d3cjF5OUVJb3Y0SDQwNVZgKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xyXG4gICAgLy8gZmV0Y2goYCR7QVBQX1VSTH1hcGkvc2luZ2xlLWJsb2cvJHtzbHVnfT9rZXk9JHtBUFBfS0VZfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2FhJywgYmxvZyk7XHJcbiAgICBcclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHZoLTEwMCB2dy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1maXhlZCB0b3AtMCBzdGFydC0wIHotMSc+PFNwaW5uZXIgLz48L2Rpdj5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHktNSAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2luZ2xlLWJsb2FnLWNhcmQgYmxvZy1jYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBjb2wtbWQtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZz8uaW1hZ2UgPT09IG51bGwgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gZmlsbD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Jsb2c/LnVybCArIFwiL1wiICsgYmxvZz8uZGF0YS5pbWFnZX0gZmlsbD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2UgY2xhc3NOYW1lPSdzaGFkb3cnIHNyYz17aW1nfSBmaWxsPXt0cnVlfT48L0ltYWdlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNhcmR0aXRsZSB0ZXh0LWNlbnRlciBtdC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2c/LmRhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2FyZGRlc2MgbXQtNVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvZz8uZGF0YS5sb25nX2Rlc2NyaXB0aW9uIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbiA+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2dzbHVnIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImltZyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJBUFBfS0VZIiwiQVBQX1VSTCIsIlNwaW5uZXIiLCJibG9nc2x1ZyIsInNldE1ldGFzIiwibWV0YXMiLCJkdGEiLCJibG9nIiwic2V0YmxvZyIsInNsdWciLCJxdWVyeSIsImVyciIsInNldEVycm9yIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidGl0bGUiLCJkYXRhIiwic3RvcmUiLCJuYW1lIiwibWV0YVRpdGxlIiwic2VvX3RpdGxlIiwibWV0YURlc2NyaXB0aW9uIiwic2VvX2Rlc2NyaXB0aW9uIiwibWV0YUtleXdvcmQiLCJtZXRhX2tleSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJpbWFnZSIsInNyYyIsImZpbGwiLCJ1cmwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImxvbmdfZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n"));

/***/ })

});