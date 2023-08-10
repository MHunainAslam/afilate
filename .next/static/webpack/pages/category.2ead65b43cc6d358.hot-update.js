"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category",{

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Spinner */ \"./components/Spinner.jsx\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ \"./pages/Layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst categories = (param)=>{\n    let { data , metas , setMetas  } = param;\n    _s();\n    const [favcat, setfavcat] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [err, setError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [loading, setloading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setMetas({\n            ...metas,\n            title: \"Category \".concat((data === null || data === void 0 ? void 0 : data.siteTitle) ? \"- \" + (data === null || data === void 0 ? void 0 : data.siteTitle) : \"\")\n        });\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_2__.APP_URL, \"api/category?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_2__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setloading(false);\n            setfavcat(json);\n        }).catch((err)=>{\n            setloading(false);\n            setError(err.message);\n            setfavcat({});\n        });\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n            lineNumber: 34,\n            columnNumber: 163\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container my-5\",\n        children: [\n            data.Style === 3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"theme3-heading\",\n                children: \"Latest Discounts By CATEGORIES\"\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"\",\n                children: \"CODES FOR YOUR FAVOURITE CATEGORIES\"\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row bg-white py-3 px-2\",\n                children: favcat === null || favcat === void 0 ? void 0 : favcat.map((item)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4 col-6  favcat\",\n                        children: [\n                            data.S,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: \"as\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/category/\".concat(item.slug),\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 28\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\coupon 3\\\\pages\\\\category\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(categories, \"73D9Q2YEGVMIWpvDXvauZydmLcs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQytFO0FBQzdGO0FBQ3FCO0FBQ25CO0FBTy9CLE1BQU1VLGFBQWEsU0FBK0I7UUFBOUIsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRTs7SUFFekMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDUSxLQUFLQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFHM0NELGdEQUFTQSxDQUFDLElBQU07UUFFWk0sU0FBUztZQUFFLEdBQUdELEtBQUs7WUFBRVEsT0FBTyxZQUEwRCxPQUE5Q1QsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxTQUFTLElBQUcsT0FBT1YsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxTQUFTLElBQUcsRUFBRTtRQUFHO1FBR3hGQyxNQUFNLEdBQThCckIsT0FBM0JDLDZGQUFPQSxFQUFDLHFCQUEyQixPQUFSRCw2RkFBT0EsR0FBSXNCLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUNFLENBQUFBLE9BQVE7WUFDaEZOLFdBQVcsS0FBSztZQUNoQkosVUFBVVU7UUFDZCxHQUFHQyxLQUFLLENBQUNWLENBQUFBLE1BQU87WUFDWkcsV0FBVyxLQUFLO1lBQ2hCRixTQUFTRCxJQUFJVyxPQUFPO1lBQ3BCWixVQUFVLENBQUM7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVMLElBQUlHLFNBQVMscUJBQU8sOERBQUNVO1FBQUlDLFdBQVU7a0JBQTJILDRFQUFDN0IsMkRBQU9BOzs7Ozs7Ozs7O0lBRXRLLHFCQUdJLDhEQUFDNEI7UUFBSUMsV0FBVTs7WUFDVmxCLEtBQUttQixLQUFLLEtBQUssa0JBRVosOERBQUNDO2dCQUFHRixXQUFVOzBCQUFpQjs7Ozs7MENBRy9CLDhEQUFDRTtnQkFBR0YsV0FBVTswQkFBRzs7Ozs7eUJBQXdDOzBCQUc3RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVZmLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUWtCLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO29CQUNuQixxQkFBTyw4REFBQ0w7d0JBQUlDLFdBQVU7OzRCQUN6Q2xCLEtBQUt1QixDQUFDOzBDQUNpQiw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDtrREFBSTs7Ozs7O2tEQUNMLDhEQUFDdkIsa0RBQUlBO3dDQUFDOEIsTUFBTSxhQUF1QixPQUFWRixLQUFLRyxJQUFJO2tEQUFLSCxLQUFLSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRzVEOzs7Ozs7Ozs7Ozs7QUFLaEI7R0FuRE0zQjtBQXFETiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcz8yYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGlubmVyIGZyb20gJ0AvY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCB7IEFQUF9LRVksIEFQUF9VUkwsIERFRkFVTFRfREVTQywgREVGQVVMVF9USVRMRSB9IGZyb20gJ0AvcHVibGljL3NldHRpbmdzL3RoZXJlX2lzX25vdGhpbmdfaG9sZGluZ19tZV9iYWNrL2NvbmZpZyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcblxuXG5cblxuXG5cbmNvbnN0IGNhdGVnb3JpZXMgPSAoeyBkYXRhLCBtZXRhcywgc2V0TWV0YXMgfSkgPT4ge1xuXG4gICAgY29uc3QgW2ZhdmNhdCwgc2V0ZmF2Y2F0XSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFtlcnIsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldE1ldGFzKHsgLi4ubWV0YXMsIHRpdGxlOiBgQ2F0ZWdvcnkgJHtkYXRhPy5zaXRlVGl0bGUgPyAnLSAnICsgZGF0YT8uc2l0ZVRpdGxlIDogJyd9YCB9KVxuXG5cbiAgICAgICAgZmV0Y2goYCR7QVBQX1VSTH1hcGkvY2F0ZWdvcnk/a2V5PSR7QVBQX0tFWX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRmYXZjYXQoanNvbilcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHNldGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgICBzZXRmYXZjYXQoe30pXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSB2aC0xMDAgdnctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tZml4ZWQgdG9wLTAgc3RhcnQtMCB6LTEnPjxTcGlubmVyIC8+PC9kaXY+XG5cbiAgICByZXR1cm4gKFxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteS01Jz5cbiAgICAgICAgICAgIHtkYXRhLlN0eWxlID09PSAzID9cblxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RoZW1lMy1oZWFkaW5nJz5MYXRlc3QgRGlzY291bnRzIEJ5IENBVEVHT1JJRVNcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPScnPkNPREVTIEZPUiBZT1VSIEZBVk9VUklURSBDQVRFR09SSUVTPC9oMz5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYmctd2hpdGUgcHktMyBweC0yXCI+XG5cbiAgICAgICAgICAgICAgICB7ZmF2Y2F0Py5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLTYgIGZhdmNhdFwiPlxue2RhdGEuU31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5hczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtpdGVtLnNsdWd9YH0+e2l0ZW0ubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3JpZXMiXSwibmFtZXMiOlsiU3Bpbm5lciIsIkFQUF9LRVkiLCJBUFBfVVJMIiwiREVGQVVMVF9ERVNDIiwiREVGQVVMVF9USVRMRSIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiY2F0ZWdvcmllcyIsImRhdGEiLCJtZXRhcyIsInNldE1ldGFzIiwiZmF2Y2F0Iiwic2V0ZmF2Y2F0IiwiZXJyIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0bG9hZGluZyIsInRpdGxlIiwic2l0ZVRpdGxlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsIlN0eWxlIiwiaDMiLCJtYXAiLCJpdGVtIiwiUyIsImhyZWYiLCJzbHVnIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n"));

/***/ })

});