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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst blogslug = ()=>{\n    var _dta_query;\n    _s();\n    const dta = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    let slug = dta === null || dta === void 0 ? void 0 : (_dta_query = dta.query) === null || _dta_query === void 0 ? void 0 : _dta_query.slug;\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_URL, \"api/single-blog/\").concat(slug, \"/?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setblog(json);\n        }).catch((err)=>{});\n    }, []);\n    console.log(slug);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-5 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card single-bloag-card blog-card h-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header col-md-10 mx-auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"shadow\",\n                                        src: _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 36,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 35,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-cardtitle text-center mt-4\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 39,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-carddesc mt-5 text-center\",\n                                            children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos labore hic pariatur quisquam, accusantium placeat voluptate commodi aperiam autem tenetur sunt, illum fuga sequi dolorem sint nostrum beatae assumenda possimus officia consequatur temporibus doloribus, rerum ab. Voluptas incidunt tenetur minima ducimus rerum harum placeat animi porro a. Incidunt, nihil repellat! Excepturi, sapiente dolorem ducimus perferendis nihil veritatis rem earum voluptatem, natus ipsa neque! Dicta pariatur consequatur odit exercitationem accusantium incidunt non beatae! Possimus suscipit natus dolore repellat debitis, in temporibus soluta veniam incidunt qui consequatur quam dolor mollitia itaque, et sunt magnam quae illo vel necessitatibus accusantium tempore? Vitae ab ipsa laudantium fugiat sit facere distinctio dolor cum impedit, eos ratione aliquid, labore, illum odio quis. Ratione repudiandae ex perferendis dolor maxime magnam quasi deleniti tempora sit quis eos iusto deserunt est dolores quam enim sint, ipsum praesentium libero, quibusdam quas! Molestiae placeat dolorem fugiat? Rerum voluptatibus enim sequi ut, dignissimos eum illo quos ab asperiores beatae quibusdam nesciunt, placeat perspiciatis? Exercitationem alias repellat repellendus qui eveniet quis placeat aspernatur consequatur ea vel itaque ullam animi, necessitatibus facilis ex veniam, nesciunt deserunt blanditiis labore sequi soluta, sapiente rerum consectetur! Harum enim temporibus voluptatum iste dicta nihil praesentium repellendus, aspernatur quas nulla accusantium molestiae rerum asperiores natus ad inventore officiis nam! Repudiandae cum hic dicta quis ad molestias aspernatur laudantium? Architecto voluptate soluta nisi, officiis animi, eius id sit eos delectus sunt repudiandae corrupti odit exercitationem dolores numquam quisquam quia mollitia. Voluptatibus tempora ipsum illum animi quis, consectetur, voluptates rem voluptate dolores repellendus esse, doloremque repellat aut magnam perferendis cupiditate aspernatur magni facere suscipit dignissimos qui expedita minima fugit. Aliquam alias mollitia ex accusantium reprehenderit consectetur saepe, tempora quos odio ipsa! Laudantium adipisci non beatae minima, ipsum voluptas similique quia vel iure magni. Expedita debitis cumque perspiciatis vero totam? Magni, voluptates quas. Possimus quia culpa in perferendis dolores optio nihil officia, rerum consequatur, dignissimos voluptatum aspernatur libero error eius est tempora aut voluptas qui quam laudantium. Repellendus placeat earum illo eaque laudantium libero deleniti quod dolore! Eum eligendi nulla voluptatem quam blanditiis sint harum quas in itaque deleniti voluptatum debitis praesentium explicabo quaerat, consequuntur beatae quia ad nobis tenetur nisi nostrum! Quas, alias. Cupiditate harum sint assumenda, dolor recusandae, sunt eius reprehenderit temporibus itaque provident nihil ullam! Pariatur itaque autem ullam obcaecati. Pariatur libero temporibus molestias, soluta sapiente laudantium molestiae, laboriosam mollitia saepe dolor deleniti! Quam, magni. Sapiente odio esse magnam corrupti itaque, est cum, obcaecati unde, provident deleniti dolorem doloribus eaque voluptate! Tenetur aperiam itaque labore repellat, nostrum et officia temporibus, iure eligendi cupiditate voluptatum unde porro, quasi fugit excepturi! Nesciunt commodi aliquid minus saepe aut iusto nobis magnam. Quis in corrupti ipsum sint nulla dolorem eius, enim dolorum corporis incidunt voluptatum nobis explicabo nihil quos sequi qui libero officia tempora ipsam. Labore saepe eaque dolor aperiam sed laboriosam asperiores, quis incidunt veritatis at voluptatem itaque alias minus fugiat distinctio reprehenderit. Repellat nobis possimus tempore at natus quibusdam tenetur harum alias maxime expedita eius hic dolorem incidunt, rerum, soluta iure, unde dolor deleniti veritatis enim quae! Ducimus dolorum vitae rerum sunt, quam quis ad expedita nobis cum doloribus earum facere officiis itaque possimus tenetur sapiente! Culpa beatae magnam neque optio officia odio nemo dolorum quaerat. Veritatis voluptatibus voluptate inventore debitis et. Accusamus debitis aliquid facilis, sequi eius nisi id molestias ut ullam accusantium! Nisi dignissimos expedita enim illo maiores nobis, laboriosam optio excepturi neque obcaecati. Laborum porro ipsum expedita dolores. Culpa, adipisci earum ipsum asperiores accusamus nulla nihil eos accusantium unde? Voluptatibus iure deleniti minima nesciunt, veniam est, modi delectus officiis magnam animi quas culpa reiciendis iste quibusdam neque a, dolorem assumenda recusandae molestiae porro nulla labore aliquam nostrum optio! Consequuntur fuga, dolor sed velit accusantium exercitationem sapiente. Culpa illo possimus rem, inventore fugit, quis quas provident fugiat aliquid velit qui accusamus dicta tempora itaque officiis similique perspiciatis est! Numquam nemo voluptatibus consectetur ipsa amet corrupti officiis quaerat, nihil quae explicabo aperiam quia, nostrum mollitia eum, repudiandae voluptates facere repellat sint quod fugit labore eligendi! Animi numquam mollitia fugit optio quos amet nulla! Quisquam ad delectus nemo incidunt et ut necessitatibus nulla alias earum iste commodi nostrum dicta fuga reprehenderit, assumenda maxime quidem adipisci optio. Animi necessitatibus dolore possimus quod earum quidem optio, esse ad velit sit praesentium! Voluptate optio quam dolore fuga iste fugit alias illo aut maiores porro similique enim obcaecati explicabo dignissimos odit nam quibusdam libero placeat, nisi quo incidunt animi natus vitae quos. Vero doloribus excepturi tenetur esse id facere perferendis voluptatibus eligendi aut maxime temporibus, aperiam veniam sunt praesentium libero ea distinctio. Soluta maxime minus quas deserunt tenetur rerum molestias odit incidunt praesentium tempora, eligendi, ipsum delectus asperiores architecto enim, reprehenderit itaque perspiciatis fugiat deleniti error iure expedita? Esse quo, assumenda labore repellat explicabo cumque recusandae culpa sapiente fugit sunt! Voluptatum quisquam asperiores saepe molestiae provident ratione iste qui pariatur corporis debitis ipsa repellendus alias repellat accusamus, eligendi veniam tempore maxime. Maxime repellendus qui pariatur in sapiente, architecto cum totam atque tempore aliquid fugiat aperiam voluptate accusamus, possimus sed quisquam laboriosam vel reprehenderit labore consectetur mollitia? Numquam commodi voluptate aperiam a harum ipsum, nesciunt sit rerum eum culpa atque iure perferendis? Odio sequi quis consequatur obcaecati est at, ut non debitis a, tenetur asperiores iure commodi sunt placeat laudantium dolor reprehenderit quaerat, mollitia corrupti ipsa voluptates repellat fugit? Repudiandae nulla eum natus nostrum impedit quod nisi debitis! Voluptate, voluptatibus officia voluptas quas adipisci, quibusdam ullam quidem consectetur modi veniam maxime! Accusantium aliquid, blanditiis soluta recusandae praesentium porro doloremque excepturi repellat fuga, magni doloribus perspiciatis delectus quae dolores sit voluptas, laudantium velit reiciendis quas ad odio nemo aut numquam. Non id officiis amet ex a saepe. Voluptate, sed excepturi maxime autem harum facilis accusamus id sequi repudiandae, praesentium vel exercitationem. Expedita modi hic atque labore ut ratione nostrum quae natus eos dolor delectus incidunt, tempora magni minus consequatur ea sit voluptate voluptates adipisci cupiditate. Excepturi omnis cumque explicabo dolorem earum, minus aliquam, ipsam mollitia distinctio reprehenderit vitae. Doloribus harum rem mollitia, voluptates praesentium saepe dicta?\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 42,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 38,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 34,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 33,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(blogslug, \"w0eZwI/RsHaawCMlc1QW4gpALTU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogslug);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBQ0E7QUFDdEI7QUFDVztBQUNxRDtBQUU1RixNQUFNUyxXQUFXLElBQU07UUFFUkM7O0lBRFgsTUFBTUEsTUFBTUosc0RBQVNBO0lBQ3JCLElBQUlLLE9BQU9ELGdCQUFBQSxpQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsSUFBS0UsS0FBSyxjQUFWRix3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWUMsSUFBRjtJQUNyQixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUVsQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUdaYSxNQUFNLEdBQTZCSixPQUExQkgsNkZBQU9BLEVBQUMsb0JBQStCRCxPQUFiSSxNQUFLLFVBQWdCLE9BQVJKLDZGQUFPQSxHQUFJUyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFBSUYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRO1lBQzVGSixRQUFRSTtRQUVaLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTyxDQUNoQjtJQUtKLEdBQUcsRUFBRTtJQUVMQyxRQUFRQyxHQUFHLENBQUNYO0lBQ1oscUJBQ0k7a0JBQ0ksNEVBQUNZO1lBQVFDLFdBQVU7c0JBQ2YsNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDWCw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUN4QixtREFBS0E7d0NBQUN3QixXQUFVO3dDQUFTRSxLQUFLdEIsbUVBQUdBO3dDQUFFdUIsTUFBTSxJQUFJOzs7Ozs7Ozs7Ozs4Q0FFbEQsOERBQUNGO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ0M7NENBQUlELFdBQVU7Ozs7OztzREFHZiw4REFBQ0M7NENBQUlELFdBQVU7c0RBQWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXcEY7R0E3Q01mOztRQUNVSCxrREFBU0E7OztBQThDekIsK0RBQWVHLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Jsb2cvbWFuLmpwZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgQVBQX0tFWSwgQVBQX1VSTCB9IGZyb20gJ0AvcHVibGljL3NldHRpbmdzL3RoZXJlX2lzX25vdGhpbmdfaG9sZGluZ19tZV9iYWNrL2NvbmZpZydcclxuXHJcbmNvbnN0IGJsb2dzbHVnID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZHRhID0gdXNlUm91dGVyKClcclxuICAgIGxldCBzbHVnID0gZHRhPy5xdWVyeT8uc2x1ZztcclxuICAgIGNvbnN0IFtibG9nLCBzZXRibG9nXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgZmV0Y2goYCR7QVBQX1VSTH1hcGkvc2luZ2xlLWJsb2cvJHtzbHVnfS8/a2V5PSR7QVBQX0tFWX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICBzZXRibG9nKGpzb24pO1xyXG5cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNsdWcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3B5LTUgJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNpbmdsZS1ibG9hZy1jYXJkIGJsb2ctY2FyZCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgY29sLW1kLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT0nc2hhZG93JyBzcmM9e2ltZ30gZmlsbD17dHJ1ZX0+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY2FyZHRpdGxlIHRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7YmxvZy5kYXRhLmRhdGEudGl0bGV9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNhcmRkZXNjIG10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9tbmlzIHF1b3MgbGFib3JlIGhpYyBwYXJpYXR1ciBxdWlzcXVhbSwgYWNjdXNhbnRpdW0gcGxhY2VhdCB2b2x1cHRhdGUgY29tbW9kaSBhcGVyaWFtIGF1dGVtIHRlbmV0dXIgc3VudCwgaWxsdW0gZnVnYSBzZXF1aSBkb2xvcmVtIHNpbnQgbm9zdHJ1bSBiZWF0YWUgYXNzdW1lbmRhIHBvc3NpbXVzIG9mZmljaWEgY29uc2VxdWF0dXIgdGVtcG9yaWJ1cyBkb2xvcmlidXMsIHJlcnVtIGFiLiBWb2x1cHRhcyBpbmNpZHVudCB0ZW5ldHVyIG1pbmltYSBkdWNpbXVzIHJlcnVtIGhhcnVtIHBsYWNlYXQgYW5pbWkgcG9ycm8gYS4gSW5jaWR1bnQsIG5paGlsIHJlcGVsbGF0ISBFeGNlcHR1cmksIHNhcGllbnRlIGRvbG9yZW0gZHVjaW11cyBwZXJmZXJlbmRpcyBuaWhpbCB2ZXJpdGF0aXMgcmVtIGVhcnVtIHZvbHVwdGF0ZW0sIG5hdHVzIGlwc2EgbmVxdWUhIERpY3RhIHBhcmlhdHVyIGNvbnNlcXVhdHVyIG9kaXQgZXhlcmNpdGF0aW9uZW0gYWNjdXNhbnRpdW0gaW5jaWR1bnQgbm9uIGJlYXRhZSEgUG9zc2ltdXMgc3VzY2lwaXQgbmF0dXMgZG9sb3JlIHJlcGVsbGF0IGRlYml0aXMsIGluIHRlbXBvcmlidXMgc29sdXRhIHZlbmlhbSBpbmNpZHVudCBxdWkgY29uc2VxdWF0dXIgcXVhbSBkb2xvciBtb2xsaXRpYSBpdGFxdWUsIGV0IHN1bnQgbWFnbmFtIHF1YWUgaWxsbyB2ZWwgbmVjZXNzaXRhdGlidXMgYWNjdXNhbnRpdW0gdGVtcG9yZT8gVml0YWUgYWIgaXBzYSBsYXVkYW50aXVtIGZ1Z2lhdCBzaXQgZmFjZXJlIGRpc3RpbmN0aW8gZG9sb3IgY3VtIGltcGVkaXQsIGVvcyByYXRpb25lIGFsaXF1aWQsIGxhYm9yZSwgaWxsdW0gb2RpbyBxdWlzLiBSYXRpb25lIHJlcHVkaWFuZGFlIGV4IHBlcmZlcmVuZGlzIGRvbG9yIG1heGltZSBtYWduYW0gcXVhc2kgZGVsZW5pdGkgdGVtcG9yYSBzaXQgcXVpcyBlb3MgaXVzdG8gZGVzZXJ1bnQgZXN0IGRvbG9yZXMgcXVhbSBlbmltIHNpbnQsIGlwc3VtIHByYWVzZW50aXVtIGxpYmVybywgcXVpYnVzZGFtIHF1YXMhIE1vbGVzdGlhZSBwbGFjZWF0IGRvbG9yZW0gZnVnaWF0PyBSZXJ1bSB2b2x1cHRhdGlidXMgZW5pbSBzZXF1aSB1dCwgZGlnbmlzc2ltb3MgZXVtIGlsbG8gcXVvcyBhYiBhc3BlcmlvcmVzIGJlYXRhZSBxdWlidXNkYW0gbmVzY2l1bnQsIHBsYWNlYXQgcGVyc3BpY2lhdGlzPyBFeGVyY2l0YXRpb25lbSBhbGlhcyByZXBlbGxhdCByZXBlbGxlbmR1cyBxdWkgZXZlbmlldCBxdWlzIHBsYWNlYXQgYXNwZXJuYXR1ciBjb25zZXF1YXR1ciBlYSB2ZWwgaXRhcXVlIHVsbGFtIGFuaW1pLCBuZWNlc3NpdGF0aWJ1cyBmYWNpbGlzIGV4IHZlbmlhbSwgbmVzY2l1bnQgZGVzZXJ1bnQgYmxhbmRpdGlpcyBsYWJvcmUgc2VxdWkgc29sdXRhLCBzYXBpZW50ZSByZXJ1bSBjb25zZWN0ZXR1ciEgSGFydW0gZW5pbSB0ZW1wb3JpYnVzIHZvbHVwdGF0dW0gaXN0ZSBkaWN0YSBuaWhpbCBwcmFlc2VudGl1bSByZXBlbGxlbmR1cywgYXNwZXJuYXR1ciBxdWFzIG51bGxhIGFjY3VzYW50aXVtIG1vbGVzdGlhZSByZXJ1bSBhc3BlcmlvcmVzIG5hdHVzIGFkIGludmVudG9yZSBvZmZpY2lpcyBuYW0hIFJlcHVkaWFuZGFlIGN1bSBoaWMgZGljdGEgcXVpcyBhZCBtb2xlc3RpYXMgYXNwZXJuYXR1ciBsYXVkYW50aXVtPyBBcmNoaXRlY3RvIHZvbHVwdGF0ZSBzb2x1dGEgbmlzaSwgb2ZmaWNpaXMgYW5pbWksIGVpdXMgaWQgc2l0IGVvcyBkZWxlY3R1cyBzdW50IHJlcHVkaWFuZGFlIGNvcnJ1cHRpIG9kaXQgZXhlcmNpdGF0aW9uZW0gZG9sb3JlcyBudW1xdWFtIHF1aXNxdWFtIHF1aWEgbW9sbGl0aWEuIFZvbHVwdGF0aWJ1cyB0ZW1wb3JhIGlwc3VtIGlsbHVtIGFuaW1pIHF1aXMsIGNvbnNlY3RldHVyLCB2b2x1cHRhdGVzIHJlbSB2b2x1cHRhdGUgZG9sb3JlcyByZXBlbGxlbmR1cyBlc3NlLCBkb2xvcmVtcXVlIHJlcGVsbGF0IGF1dCBtYWduYW0gcGVyZmVyZW5kaXMgY3VwaWRpdGF0ZSBhc3Blcm5hdHVyIG1hZ25pIGZhY2VyZSBzdXNjaXBpdCBkaWduaXNzaW1vcyBxdWkgZXhwZWRpdGEgbWluaW1hIGZ1Z2l0LiBBbGlxdWFtIGFsaWFzIG1vbGxpdGlhIGV4IGFjY3VzYW50aXVtIHJlcHJlaGVuZGVyaXQgY29uc2VjdGV0dXIgc2FlcGUsIHRlbXBvcmEgcXVvcyBvZGlvIGlwc2EhIExhdWRhbnRpdW0gYWRpcGlzY2kgbm9uIGJlYXRhZSBtaW5pbWEsIGlwc3VtIHZvbHVwdGFzIHNpbWlsaXF1ZSBxdWlhIHZlbCBpdXJlIG1hZ25pLiBFeHBlZGl0YSBkZWJpdGlzIGN1bXF1ZSBwZXJzcGljaWF0aXMgdmVybyB0b3RhbT8gTWFnbmksIHZvbHVwdGF0ZXMgcXVhcy4gUG9zc2ltdXMgcXVpYSBjdWxwYSBpbiBwZXJmZXJlbmRpcyBkb2xvcmVzIG9wdGlvIG5paGlsIG9mZmljaWEsIHJlcnVtIGNvbnNlcXVhdHVyLCBkaWduaXNzaW1vcyB2b2x1cHRhdHVtIGFzcGVybmF0dXIgbGliZXJvIGVycm9yIGVpdXMgZXN0IHRlbXBvcmEgYXV0IHZvbHVwdGFzIHF1aSBxdWFtIGxhdWRhbnRpdW0uIFJlcGVsbGVuZHVzIHBsYWNlYXQgZWFydW0gaWxsbyBlYXF1ZSBsYXVkYW50aXVtIGxpYmVybyBkZWxlbml0aSBxdW9kIGRvbG9yZSEgRXVtIGVsaWdlbmRpIG51bGxhIHZvbHVwdGF0ZW0gcXVhbSBibGFuZGl0aWlzIHNpbnQgaGFydW0gcXVhcyBpbiBpdGFxdWUgZGVsZW5pdGkgdm9sdXB0YXR1bSBkZWJpdGlzIHByYWVzZW50aXVtIGV4cGxpY2FibyBxdWFlcmF0LCBjb25zZXF1dW50dXIgYmVhdGFlIHF1aWEgYWQgbm9iaXMgdGVuZXR1ciBuaXNpIG5vc3RydW0hIFF1YXMsIGFsaWFzLiBDdXBpZGl0YXRlIGhhcnVtIHNpbnQgYXNzdW1lbmRhLCBkb2xvciByZWN1c2FuZGFlLCBzdW50IGVpdXMgcmVwcmVoZW5kZXJpdCB0ZW1wb3JpYnVzIGl0YXF1ZSBwcm92aWRlbnQgbmloaWwgdWxsYW0hIFBhcmlhdHVyIGl0YXF1ZSBhdXRlbSB1bGxhbSBvYmNhZWNhdGkuIFBhcmlhdHVyIGxpYmVybyB0ZW1wb3JpYnVzIG1vbGVzdGlhcywgc29sdXRhIHNhcGllbnRlIGxhdWRhbnRpdW0gbW9sZXN0aWFlLCBsYWJvcmlvc2FtIG1vbGxpdGlhIHNhZXBlIGRvbG9yIGRlbGVuaXRpISBRdWFtLCBtYWduaS4gU2FwaWVudGUgb2RpbyBlc3NlIG1hZ25hbSBjb3JydXB0aSBpdGFxdWUsIGVzdCBjdW0sIG9iY2FlY2F0aSB1bmRlLCBwcm92aWRlbnQgZGVsZW5pdGkgZG9sb3JlbSBkb2xvcmlidXMgZWFxdWUgdm9sdXB0YXRlISBUZW5ldHVyIGFwZXJpYW0gaXRhcXVlIGxhYm9yZSByZXBlbGxhdCwgbm9zdHJ1bSBldCBvZmZpY2lhIHRlbXBvcmlidXMsIGl1cmUgZWxpZ2VuZGkgY3VwaWRpdGF0ZSB2b2x1cHRhdHVtIHVuZGUgcG9ycm8sIHF1YXNpIGZ1Z2l0IGV4Y2VwdHVyaSEgTmVzY2l1bnQgY29tbW9kaSBhbGlxdWlkIG1pbnVzIHNhZXBlIGF1dCBpdXN0byBub2JpcyBtYWduYW0uIFF1aXMgaW4gY29ycnVwdGkgaXBzdW0gc2ludCBudWxsYSBkb2xvcmVtIGVpdXMsIGVuaW0gZG9sb3J1bSBjb3Jwb3JpcyBpbmNpZHVudCB2b2x1cHRhdHVtIG5vYmlzIGV4cGxpY2FibyBuaWhpbCBxdW9zIHNlcXVpIHF1aSBsaWJlcm8gb2ZmaWNpYSB0ZW1wb3JhIGlwc2FtLiBMYWJvcmUgc2FlcGUgZWFxdWUgZG9sb3IgYXBlcmlhbSBzZWQgbGFib3Jpb3NhbSBhc3BlcmlvcmVzLCBxdWlzIGluY2lkdW50IHZlcml0YXRpcyBhdCB2b2x1cHRhdGVtIGl0YXF1ZSBhbGlhcyBtaW51cyBmdWdpYXQgZGlzdGluY3RpbyByZXByZWhlbmRlcml0LiBSZXBlbGxhdCBub2JpcyBwb3NzaW11cyB0ZW1wb3JlIGF0IG5hdHVzIHF1aWJ1c2RhbSB0ZW5ldHVyIGhhcnVtIGFsaWFzIG1heGltZSBleHBlZGl0YSBlaXVzIGhpYyBkb2xvcmVtIGluY2lkdW50LCByZXJ1bSwgc29sdXRhIGl1cmUsIHVuZGUgZG9sb3IgZGVsZW5pdGkgdmVyaXRhdGlzIGVuaW0gcXVhZSEgRHVjaW11cyBkb2xvcnVtIHZpdGFlIHJlcnVtIHN1bnQsIHF1YW0gcXVpcyBhZCBleHBlZGl0YSBub2JpcyBjdW0gZG9sb3JpYnVzIGVhcnVtIGZhY2VyZSBvZmZpY2lpcyBpdGFxdWUgcG9zc2ltdXMgdGVuZXR1ciBzYXBpZW50ZSEgQ3VscGEgYmVhdGFlIG1hZ25hbSBuZXF1ZSBvcHRpbyBvZmZpY2lhIG9kaW8gbmVtbyBkb2xvcnVtIHF1YWVyYXQuIFZlcml0YXRpcyB2b2x1cHRhdGlidXMgdm9sdXB0YXRlIGludmVudG9yZSBkZWJpdGlzIGV0LiBBY2N1c2FtdXMgZGViaXRpcyBhbGlxdWlkIGZhY2lsaXMsIHNlcXVpIGVpdXMgbmlzaSBpZCBtb2xlc3RpYXMgdXQgdWxsYW0gYWNjdXNhbnRpdW0hIE5pc2kgZGlnbmlzc2ltb3MgZXhwZWRpdGEgZW5pbSBpbGxvIG1haW9yZXMgbm9iaXMsIGxhYm9yaW9zYW0gb3B0aW8gZXhjZXB0dXJpIG5lcXVlIG9iY2FlY2F0aS4gTGFib3J1bSBwb3JybyBpcHN1bSBleHBlZGl0YSBkb2xvcmVzLiBDdWxwYSwgYWRpcGlzY2kgZWFydW0gaXBzdW0gYXNwZXJpb3JlcyBhY2N1c2FtdXMgbnVsbGEgbmloaWwgZW9zIGFjY3VzYW50aXVtIHVuZGU/IFZvbHVwdGF0aWJ1cyBpdXJlIGRlbGVuaXRpIG1pbmltYSBuZXNjaXVudCwgdmVuaWFtIGVzdCwgbW9kaSBkZWxlY3R1cyBvZmZpY2lpcyBtYWduYW0gYW5pbWkgcXVhcyBjdWxwYSByZWljaWVuZGlzIGlzdGUgcXVpYnVzZGFtIG5lcXVlIGEsIGRvbG9yZW0gYXNzdW1lbmRhIHJlY3VzYW5kYWUgbW9sZXN0aWFlIHBvcnJvIG51bGxhIGxhYm9yZSBhbGlxdWFtIG5vc3RydW0gb3B0aW8hIENvbnNlcXV1bnR1ciBmdWdhLCBkb2xvciBzZWQgdmVsaXQgYWNjdXNhbnRpdW0gZXhlcmNpdGF0aW9uZW0gc2FwaWVudGUuIEN1bHBhIGlsbG8gcG9zc2ltdXMgcmVtLCBpbnZlbnRvcmUgZnVnaXQsIHF1aXMgcXVhcyBwcm92aWRlbnQgZnVnaWF0IGFsaXF1aWQgdmVsaXQgcXVpIGFjY3VzYW11cyBkaWN0YSB0ZW1wb3JhIGl0YXF1ZSBvZmZpY2lpcyBzaW1pbGlxdWUgcGVyc3BpY2lhdGlzIGVzdCEgTnVtcXVhbSBuZW1vIHZvbHVwdGF0aWJ1cyBjb25zZWN0ZXR1ciBpcHNhIGFtZXQgY29ycnVwdGkgb2ZmaWNpaXMgcXVhZXJhdCwgbmloaWwgcXVhZSBleHBsaWNhYm8gYXBlcmlhbSBxdWlhLCBub3N0cnVtIG1vbGxpdGlhIGV1bSwgcmVwdWRpYW5kYWUgdm9sdXB0YXRlcyBmYWNlcmUgcmVwZWxsYXQgc2ludCBxdW9kIGZ1Z2l0IGxhYm9yZSBlbGlnZW5kaSEgQW5pbWkgbnVtcXVhbSBtb2xsaXRpYSBmdWdpdCBvcHRpbyBxdW9zIGFtZXQgbnVsbGEhIFF1aXNxdWFtIGFkIGRlbGVjdHVzIG5lbW8gaW5jaWR1bnQgZXQgdXQgbmVjZXNzaXRhdGlidXMgbnVsbGEgYWxpYXMgZWFydW0gaXN0ZSBjb21tb2RpIG5vc3RydW0gZGljdGEgZnVnYSByZXByZWhlbmRlcml0LCBhc3N1bWVuZGEgbWF4aW1lIHF1aWRlbSBhZGlwaXNjaSBvcHRpby4gQW5pbWkgbmVjZXNzaXRhdGlidXMgZG9sb3JlIHBvc3NpbXVzIHF1b2QgZWFydW0gcXVpZGVtIG9wdGlvLCBlc3NlIGFkIHZlbGl0IHNpdCBwcmFlc2VudGl1bSEgVm9sdXB0YXRlIG9wdGlvIHF1YW0gZG9sb3JlIGZ1Z2EgaXN0ZSBmdWdpdCBhbGlhcyBpbGxvIGF1dCBtYWlvcmVzIHBvcnJvIHNpbWlsaXF1ZSBlbmltIG9iY2FlY2F0aSBleHBsaWNhYm8gZGlnbmlzc2ltb3Mgb2RpdCBuYW0gcXVpYnVzZGFtIGxpYmVybyBwbGFjZWF0LCBuaXNpIHF1byBpbmNpZHVudCBhbmltaSBuYXR1cyB2aXRhZSBxdW9zLiBWZXJvIGRvbG9yaWJ1cyBleGNlcHR1cmkgdGVuZXR1ciBlc3NlIGlkIGZhY2VyZSBwZXJmZXJlbmRpcyB2b2x1cHRhdGlidXMgZWxpZ2VuZGkgYXV0IG1heGltZSB0ZW1wb3JpYnVzLCBhcGVyaWFtIHZlbmlhbSBzdW50IHByYWVzZW50aXVtIGxpYmVybyBlYSBkaXN0aW5jdGlvLiBTb2x1dGEgbWF4aW1lIG1pbnVzIHF1YXMgZGVzZXJ1bnQgdGVuZXR1ciByZXJ1bSBtb2xlc3RpYXMgb2RpdCBpbmNpZHVudCBwcmFlc2VudGl1bSB0ZW1wb3JhLCBlbGlnZW5kaSwgaXBzdW0gZGVsZWN0dXMgYXNwZXJpb3JlcyBhcmNoaXRlY3RvIGVuaW0sIHJlcHJlaGVuZGVyaXQgaXRhcXVlIHBlcnNwaWNpYXRpcyBmdWdpYXQgZGVsZW5pdGkgZXJyb3IgaXVyZSBleHBlZGl0YT8gRXNzZSBxdW8sIGFzc3VtZW5kYSBsYWJvcmUgcmVwZWxsYXQgZXhwbGljYWJvIGN1bXF1ZSByZWN1c2FuZGFlIGN1bHBhIHNhcGllbnRlIGZ1Z2l0IHN1bnQhIFZvbHVwdGF0dW0gcXVpc3F1YW0gYXNwZXJpb3JlcyBzYWVwZSBtb2xlc3RpYWUgcHJvdmlkZW50IHJhdGlvbmUgaXN0ZSBxdWkgcGFyaWF0dXIgY29ycG9yaXMgZGViaXRpcyBpcHNhIHJlcGVsbGVuZHVzIGFsaWFzIHJlcGVsbGF0IGFjY3VzYW11cywgZWxpZ2VuZGkgdmVuaWFtIHRlbXBvcmUgbWF4aW1lLiBNYXhpbWUgcmVwZWxsZW5kdXMgcXVpIHBhcmlhdHVyIGluIHNhcGllbnRlLCBhcmNoaXRlY3RvIGN1bSB0b3RhbSBhdHF1ZSB0ZW1wb3JlIGFsaXF1aWQgZnVnaWF0IGFwZXJpYW0gdm9sdXB0YXRlIGFjY3VzYW11cywgcG9zc2ltdXMgc2VkIHF1aXNxdWFtIGxhYm9yaW9zYW0gdmVsIHJlcHJlaGVuZGVyaXQgbGFib3JlIGNvbnNlY3RldHVyIG1vbGxpdGlhPyBOdW1xdWFtIGNvbW1vZGkgdm9sdXB0YXRlIGFwZXJpYW0gYSBoYXJ1bSBpcHN1bSwgbmVzY2l1bnQgc2l0IHJlcnVtIGV1bSBjdWxwYSBhdHF1ZSBpdXJlIHBlcmZlcmVuZGlzPyBPZGlvIHNlcXVpIHF1aXMgY29uc2VxdWF0dXIgb2JjYWVjYXRpIGVzdCBhdCwgdXQgbm9uIGRlYml0aXMgYSwgdGVuZXR1ciBhc3BlcmlvcmVzIGl1cmUgY29tbW9kaSBzdW50IHBsYWNlYXQgbGF1ZGFudGl1bSBkb2xvciByZXByZWhlbmRlcml0IHF1YWVyYXQsIG1vbGxpdGlhIGNvcnJ1cHRpIGlwc2Egdm9sdXB0YXRlcyByZXBlbGxhdCBmdWdpdD8gUmVwdWRpYW5kYWUgbnVsbGEgZXVtIG5hdHVzIG5vc3RydW0gaW1wZWRpdCBxdW9kIG5pc2kgZGViaXRpcyEgVm9sdXB0YXRlLCB2b2x1cHRhdGlidXMgb2ZmaWNpYSB2b2x1cHRhcyBxdWFzIGFkaXBpc2NpLCBxdWlidXNkYW0gdWxsYW0gcXVpZGVtIGNvbnNlY3RldHVyIG1vZGkgdmVuaWFtIG1heGltZSEgQWNjdXNhbnRpdW0gYWxpcXVpZCwgYmxhbmRpdGlpcyBzb2x1dGEgcmVjdXNhbmRhZSBwcmFlc2VudGl1bSBwb3JybyBkb2xvcmVtcXVlIGV4Y2VwdHVyaSByZXBlbGxhdCBmdWdhLCBtYWduaSBkb2xvcmlidXMgcGVyc3BpY2lhdGlzIGRlbGVjdHVzIHF1YWUgZG9sb3JlcyBzaXQgdm9sdXB0YXMsIGxhdWRhbnRpdW0gdmVsaXQgcmVpY2llbmRpcyBxdWFzIGFkIG9kaW8gbmVtbyBhdXQgbnVtcXVhbS4gTm9uIGlkIG9mZmljaWlzIGFtZXQgZXggYSBzYWVwZS4gVm9sdXB0YXRlLCBzZWQgZXhjZXB0dXJpIG1heGltZSBhdXRlbSBoYXJ1bSBmYWNpbGlzIGFjY3VzYW11cyBpZCBzZXF1aSByZXB1ZGlhbmRhZSwgcHJhZXNlbnRpdW0gdmVsIGV4ZXJjaXRhdGlvbmVtLiBFeHBlZGl0YSBtb2RpIGhpYyBhdHF1ZSBsYWJvcmUgdXQgcmF0aW9uZSBub3N0cnVtIHF1YWUgbmF0dXMgZW9zIGRvbG9yIGRlbGVjdHVzIGluY2lkdW50LCB0ZW1wb3JhIG1hZ25pIG1pbnVzIGNvbnNlcXVhdHVyIGVhIHNpdCB2b2x1cHRhdGUgdm9sdXB0YXRlcyBhZGlwaXNjaSBjdXBpZGl0YXRlLiBFeGNlcHR1cmkgb21uaXMgY3VtcXVlIGV4cGxpY2FibyBkb2xvcmVtIGVhcnVtLCBtaW51cyBhbGlxdWFtLCBpcHNhbSBtb2xsaXRpYSBkaXN0aW5jdGlvIHJlcHJlaGVuZGVyaXQgdml0YWUuIERvbG9yaWJ1cyBoYXJ1bSByZW0gbW9sbGl0aWEsIHZvbHVwdGF0ZXMgcHJhZXNlbnRpdW0gc2FlcGUgZGljdGE/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmxvZ3NsdWciXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW1nIiwiTGluayIsInVzZVJvdXRlciIsIkFQUF9LRVkiLCJBUFBfVVJMIiwiYmxvZ3NsdWciLCJkdGEiLCJzbHVnIiwicXVlcnkiLCJibG9nIiwic2V0YmxvZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n"));

/***/ })

});