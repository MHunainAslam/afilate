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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/assets/blog/man.jpg */ \"./public/assets/blog/man.jpg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/public/settings/there_is_nothing_holding_me_back/config */ \"./public/settings/there_is_nothing_holding_me_back/config.js\");\n/* harmony import */ var _public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst blogslug = ()=>{\n    _s();\n    const [blog, setblog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [slug, setSlug] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const pathSegments = window.location.pathname.split(\"/\").filter((segment)=>segment !== \"\");\n        const lastSegment = pathSegments[pathSegments.length - 1];\n        setSlug(lastSegment);\n    }, []);\n    console.log(slug);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // fetch(`https://creativeitsols.com/system/public/api/single-blog/the-best-deals-going-live-for-amazons-prime-early-access-sale?key=app_c5nsYNIFAhACMAaKYTNEubEwGwr1y9EIov4H405V`).then(res => res.json()).then(json => {\n        fetch(\"\".concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_URL, \"api/single-blog/\").concat(slug, \"?key=\").concat(_public_settings_there_is_nothing_holding_me_back_config__WEBPACK_IMPORTED_MODULE_6__.APP_KEY)).then((res)=>res.json()).then((json)=>{\n            setblog(json);\n        }).catch((err)=>{});\n    }, [\n        slug\n    ]);\n    console.log(\"aa\", blog.data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"py-5 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card single-bloag-card blog-card h-100\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-header col-md-10 mx-auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"shadow\",\n                                        src: _public_assets_blog_man_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        fill: true\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 42,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 41,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-cardtitle text-center mt-4\",\n                                            children: \"Lorem ipsum dolor sit amet, consectetur adipisicing.\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"blog-carddesc mt-5 text-center\",\n                                            children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos labore hic pariatur quisquam, accusantium placeat voluptate commodi aperiam autem tenetur sunt, illum fuga sequi dolorem sint nostrum beatae assumenda possimus officia consequatur temporibus doloribus, rerum ab. Voluptas incidunt tenetur minima ducimus rerum harum placeat animi porro a. Incidunt, nihil repellat! Excepturi, sapiente dolorem ducimus perferendis nihil veritatis rem earum voluptatem, natus ipsa neque! Dicta pariatur consequatur odit exercitationem accusantium incidunt non beatae! Possimus suscipit natus dolore repellat debitis, in temporibus soluta veniam incidunt qui consequatur quam dolor mollitia itaque, et sunt magnam quae illo vel necessitatibus accusantium tempore? Vitae ab ipsa laudantium fugiat sit facere distinctio dolor cum impedit, eos ratione aliquid, labore, illum odio quis. Ratione repudiandae ex perferendis dolor maxime magnam quasi deleniti tempora sit quis eos iusto deserunt est dolores quam enim sint, ipsum praesentium libero, quibusdam quas! Molestiae placeat dolorem fugiat? Rerum voluptatibus enim sequi ut, dignissimos eum illo quos ab asperiores beatae quibusdam nesciunt, placeat perspiciatis? Exercitationem alias repellat repellendus qui eveniet quis placeat aspernatur consequatur ea vel itaque ullam animi, necessitatibus facilis ex veniam, nesciunt deserunt blanditiis labore sequi soluta, sapiente rerum consectetur! Harum enim temporibus voluptatum iste dicta nihil praesentium repellendus, aspernatur quas nulla accusantium molestiae rerum asperiores natus ad inventore officiis nam! Repudiandae cum hic dicta quis ad molestias aspernatur laudantium? Architecto voluptate soluta nisi, officiis animi, eius id sit eos delectus sunt repudiandae corrupti odit exercitationem dolores numquam quisquam quia mollitia. Voluptatibus tempora ipsum illum animi quis, consectetur, voluptates rem voluptate dolores repellendus esse, doloremque repellat aut magnam perferendis cupiditate aspernatur magni facere suscipit dignissimos qui expedita minima fugit. Aliquam alias mollitia ex accusantium reprehenderit consectetur saepe, tempora quos odio ipsa! Laudantium adipisci non beatae minima, ipsum voluptas similique quia vel iure magni. Expedita debitis cumque perspiciatis vero totam? Magni, voluptates quas. Possimus quia culpa in perferendis dolores optio nihil officia, rerum consequatur, dignissimos voluptatum aspernatur libero error eius est tempora aut voluptas qui quam laudantium. Repellendus placeat earum illo eaque laudantium libero deleniti quod dolore! Eum eligendi nulla voluptatem quam blanditiis sint harum quas in itaque deleniti voluptatum debitis praesentium explicabo quaerat, consequuntur beatae quia ad nobis tenetur nisi nostrum! Quas, alias. Cupiditate harum sint assumenda, dolor recusandae, sunt eius reprehenderit temporibus itaque provident nihil ullam! Pariatur itaque autem ullam obcaecati. Pariatur libero temporibus molestias, soluta sapiente laudantium molestiae, laboriosam mollitia saepe dolor deleniti! Quam, magni. Sapiente odio esse magnam corrupti itaque, est cum, obcaecati unde, provident deleniti dolorem doloribus eaque voluptate! Tenetur aperiam itaque labore repellat, nostrum et officia temporibus, iure eligendi cupiditate voluptatum unde porro, quasi fugit excepturi! Nesciunt commodi aliquid minus saepe aut iusto nobis magnam. Quis in corrupti ipsum sint nulla dolorem eius, enim dolorum corporis incidunt voluptatum nobis explicabo nihil quos sequi qui libero officia tempora ipsam. Labore saepe eaque dolor aperiam sed laboriosam asperiores, quis incidunt veritatis at voluptatem itaque alias minus fugiat distinctio reprehenderit. Repellat nobis possimus tempore at natus quibusdam tenetur harum alias maxime expedita eius hic dolorem incidunt, rerum, soluta iure, unde dolor deleniti veritatis enim quae! Ducimus dolorum vitae rerum sunt, quam quis ad expedita nobis cum doloribus earum facere officiis itaque possimus tenetur sapiente! Culpa beatae magnam neque optio officia odio nemo dolorum quaerat. Veritatis voluptatibus voluptate inventore debitis et. Accusamus debitis aliquid facilis, sequi eius nisi id molestias ut ullam accusantium! Nisi dignissimos expedita enim illo maiores nobis, laboriosam optio excepturi neque obcaecati. Laborum porro ipsum expedita dolores. Culpa, adipisci earum ipsum asperiores accusamus nulla nihil eos accusantium unde? Voluptatibus iure deleniti minima nesciunt, veniam est, modi delectus officiis magnam animi quas culpa reiciendis iste quibusdam neque a, dolorem assumenda recusandae molestiae porro nulla labore aliquam nostrum optio! Consequuntur fuga, dolor sed velit accusantium exercitationem sapiente. Culpa illo possimus rem, inventore fugit, quis quas provident fugiat aliquid velit qui accusamus dicta tempora itaque officiis similique perspiciatis est! Numquam nemo voluptatibus consectetur ipsa amet corrupti officiis quaerat, nihil quae explicabo aperiam quia, nostrum mollitia eum, repudiandae voluptates facere repellat sint quod fugit labore eligendi! Animi numquam mollitia fugit optio quos amet nulla! Quisquam ad delectus nemo incidunt et ut necessitatibus nulla alias earum iste commodi nostrum dicta fuga reprehenderit, assumenda maxime quidem adipisci optio. Animi necessitatibus dolore possimus quod earum quidem optio, esse ad velit sit praesentium! Voluptate optio quam dolore fuga iste fugit alias illo aut maiores porro similique enim obcaecati explicabo dignissimos odit nam quibusdam libero placeat, nisi quo incidunt animi natus vitae quos. Vero doloribus excepturi tenetur esse id facere perferendis voluptatibus eligendi aut maxime temporibus, aperiam veniam sunt praesentium libero ea distinctio. Soluta maxime minus quas deserunt tenetur rerum molestias odit incidunt praesentium tempora, eligendi, ipsum delectus asperiores architecto enim, reprehenderit itaque perspiciatis fugiat deleniti error iure expedita? Esse quo, assumenda labore repellat explicabo cumque recusandae culpa sapiente fugit sunt! Voluptatum quisquam asperiores saepe molestiae provident ratione iste qui pariatur corporis debitis ipsa repellendus alias repellat accusamus, eligendi veniam tempore maxime. Maxime repellendus qui pariatur in sapiente, architecto cum totam atque tempore aliquid fugiat aperiam voluptate accusamus, possimus sed quisquam laboriosam vel reprehenderit labore consectetur mollitia? Numquam commodi voluptate aperiam a harum ipsum, nesciunt sit rerum eum culpa atque iure perferendis? Odio sequi quis consequatur obcaecati est at, ut non debitis a, tenetur asperiores iure commodi sunt placeat laudantium dolor reprehenderit quaerat, mollitia corrupti ipsa voluptates repellat fugit? Repudiandae nulla eum natus nostrum impedit quod nisi debitis! Voluptate, voluptatibus officia voluptas quas adipisci, quibusdam ullam quidem consectetur modi veniam maxime! Accusantium aliquid, blanditiis soluta recusandae praesentium porro doloremque excepturi repellat fuga, magni doloribus perspiciatis delectus quae dolores sit voluptas, laudantium velit reiciendis quas ad odio nemo aut numquam. Non id officiis amet ex a saepe. Voluptate, sed excepturi maxime autem harum facilis accusamus id sequi repudiandae, praesentium vel exercitationem. Expedita modi hic atque labore ut ratione nostrum quae natus eos dolor delectus incidunt, tempora magni minus consequatur ea sit voluptate voluptates adipisci cupiditate. Excepturi omnis cumque explicabo dolorem earum, minus aliquam, ipsam mollitia distinctio reprehenderit vitae. Doloribus harum rem mollitia, voluptates praesentium saepe dicta?\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                            lineNumber: 49,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 44,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 40,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\coupon 3\\\\pages\\\\blog\\\\[slug].js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(blogslug, \"z18gITrpsyCxpGAuiRFEXhEeDnU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (blogslug);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29CO0FBQ0E7QUFDdEI7QUFDVztBQUNxRDtBQUU1RixNQUFNUyxXQUFXLElBQU07O0lBRW5CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTVksZUFBZUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFLQyxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFlBQVk7UUFDdkYsTUFBTUMsY0FBY1AsWUFBWSxDQUFDQSxhQUFhUSxNQUFNLEdBQUcsRUFBRTtRQUN6RFQsUUFBUVE7SUFDWixHQUFHLEVBQUU7SUFDTEUsUUFBUUMsR0FBRyxDQUFDWjtJQUVaVixnREFBU0EsQ0FBQyxJQUFNO1FBR1osME5BQTBOO1FBQzFOdUIsTUFBTSxHQUE2QmIsT0FBMUJKLDZGQUFPQSxFQUFDLG9CQUE4QkQsT0FBWkssTUFBSyxTQUFlLE9BQVJMLDZGQUFPQSxHQUFJbUIsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQUlGLElBQUksQ0FBQ0UsQ0FBQUEsT0FBUTtZQUMzRmpCLFFBQVFpQjtRQUVaLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTyxDQUNoQjtJQUtKLEdBQUc7UUFBQ2xCO0tBQUs7SUFDVFcsUUFBUUMsR0FBRyxDQUFDLE1BQU1kLEtBQUtxQixJQUFJO0lBQzNCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFRQyxXQUFVO3NCQUNmLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBSUQsV0FBVTs7OENBQ1gsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNYLDRFQUFDakMsbURBQUtBO3dDQUFDaUMsV0FBVTt3Q0FBU0UsS0FBSy9CLG1FQUFHQTt3Q0FBRWdDLE1BQU0sSUFBSTs7Ozs7Ozs7Ozs7OENBRWxELDhEQUFDRjtvQ0FBSUQsV0FBVTs7c0RBQ1gsOERBQUNDOzRDQUFJRCxXQUFVO3NEQUNhOzs7Ozs7c0RBRzVCLDhEQUFDQzs0Q0FBSUQsV0FBVTtzREFBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdwRjtHQXBETXhCO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9ibG9nL21hbi5qcGcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEFQUF9LRVksIEFQUF9VUkwgfSBmcm9tICdAL3B1YmxpYy9zZXR0aW5ncy90aGVyZV9pc19ub3RoaW5nX2hvbGRpbmdfbWVfYmFjay9jb25maWcnXHJcblxyXG5jb25zdCBibG9nc2x1ZyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbYmxvZywgc2V0YmxvZ10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50ICE9PSAnJyk7XHJcbiAgICAgICAgY29uc3QgbGFzdFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldFNsdWcobGFzdFNlZ21lbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc29sZS5sb2coc2x1Zyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgIC8vIGZldGNoKGBodHRwczovL2NyZWF0aXZlaXRzb2xzLmNvbS9zeXN0ZW0vcHVibGljL2FwaS9zaW5nbGUtYmxvZy90aGUtYmVzdC1kZWFscy1nb2luZy1saXZlLWZvci1hbWF6b25zLXByaW1lLWVhcmx5LWFjY2Vzcy1zYWxlP2tleT1hcHBfYzVuc1lOSUZBaEFDTUFhS1lUTkV1YkV3R3dyMXk5RUlvdjRINDA1VmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgZmV0Y2goYCR7QVBQX1VSTH1hcGkvc2luZ2xlLWJsb2cvJHtzbHVnfT9rZXk9JHtBUFBfS0VZfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgIHNldGJsb2coanNvbik7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICB9LCBbc2x1Z10pO1xyXG4gICAgY29uc29sZS5sb2coJ2FhJywgYmxvZy5kYXRhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdweS01ICc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaW5nbGUtYmxvYWctY2FyZCBibG9nLWNhcmQgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J3NoYWRvdycgc3JjPXtpbWd9IGZpbGw9e3RydWV9PjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNhcmR0aXRsZSB0ZXh0LWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2Jsb2cuZGF0YS5zbHVnfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jYXJkZGVzYyBtdC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPbW5pcyBxdW9zIGxhYm9yZSBoaWMgcGFyaWF0dXIgcXVpc3F1YW0sIGFjY3VzYW50aXVtIHBsYWNlYXQgdm9sdXB0YXRlIGNvbW1vZGkgYXBlcmlhbSBhdXRlbSB0ZW5ldHVyIHN1bnQsIGlsbHVtIGZ1Z2Egc2VxdWkgZG9sb3JlbSBzaW50IG5vc3RydW0gYmVhdGFlIGFzc3VtZW5kYSBwb3NzaW11cyBvZmZpY2lhIGNvbnNlcXVhdHVyIHRlbXBvcmlidXMgZG9sb3JpYnVzLCByZXJ1bSBhYi4gVm9sdXB0YXMgaW5jaWR1bnQgdGVuZXR1ciBtaW5pbWEgZHVjaW11cyByZXJ1bSBoYXJ1bSBwbGFjZWF0IGFuaW1pIHBvcnJvIGEuIEluY2lkdW50LCBuaWhpbCByZXBlbGxhdCEgRXhjZXB0dXJpLCBzYXBpZW50ZSBkb2xvcmVtIGR1Y2ltdXMgcGVyZmVyZW5kaXMgbmloaWwgdmVyaXRhdGlzIHJlbSBlYXJ1bSB2b2x1cHRhdGVtLCBuYXR1cyBpcHNhIG5lcXVlISBEaWN0YSBwYXJpYXR1ciBjb25zZXF1YXR1ciBvZGl0IGV4ZXJjaXRhdGlvbmVtIGFjY3VzYW50aXVtIGluY2lkdW50IG5vbiBiZWF0YWUhIFBvc3NpbXVzIHN1c2NpcGl0IG5hdHVzIGRvbG9yZSByZXBlbGxhdCBkZWJpdGlzLCBpbiB0ZW1wb3JpYnVzIHNvbHV0YSB2ZW5pYW0gaW5jaWR1bnQgcXVpIGNvbnNlcXVhdHVyIHF1YW0gZG9sb3IgbW9sbGl0aWEgaXRhcXVlLCBldCBzdW50IG1hZ25hbSBxdWFlIGlsbG8gdmVsIG5lY2Vzc2l0YXRpYnVzIGFjY3VzYW50aXVtIHRlbXBvcmU/IFZpdGFlIGFiIGlwc2EgbGF1ZGFudGl1bSBmdWdpYXQgc2l0IGZhY2VyZSBkaXN0aW5jdGlvIGRvbG9yIGN1bSBpbXBlZGl0LCBlb3MgcmF0aW9uZSBhbGlxdWlkLCBsYWJvcmUsIGlsbHVtIG9kaW8gcXVpcy4gUmF0aW9uZSByZXB1ZGlhbmRhZSBleCBwZXJmZXJlbmRpcyBkb2xvciBtYXhpbWUgbWFnbmFtIHF1YXNpIGRlbGVuaXRpIHRlbXBvcmEgc2l0IHF1aXMgZW9zIGl1c3RvIGRlc2VydW50IGVzdCBkb2xvcmVzIHF1YW0gZW5pbSBzaW50LCBpcHN1bSBwcmFlc2VudGl1bSBsaWJlcm8sIHF1aWJ1c2RhbSBxdWFzISBNb2xlc3RpYWUgcGxhY2VhdCBkb2xvcmVtIGZ1Z2lhdD8gUmVydW0gdm9sdXB0YXRpYnVzIGVuaW0gc2VxdWkgdXQsIGRpZ25pc3NpbW9zIGV1bSBpbGxvIHF1b3MgYWIgYXNwZXJpb3JlcyBiZWF0YWUgcXVpYnVzZGFtIG5lc2NpdW50LCBwbGFjZWF0IHBlcnNwaWNpYXRpcz8gRXhlcmNpdGF0aW9uZW0gYWxpYXMgcmVwZWxsYXQgcmVwZWxsZW5kdXMgcXVpIGV2ZW5pZXQgcXVpcyBwbGFjZWF0IGFzcGVybmF0dXIgY29uc2VxdWF0dXIgZWEgdmVsIGl0YXF1ZSB1bGxhbSBhbmltaSwgbmVjZXNzaXRhdGlidXMgZmFjaWxpcyBleCB2ZW5pYW0sIG5lc2NpdW50IGRlc2VydW50IGJsYW5kaXRpaXMgbGFib3JlIHNlcXVpIHNvbHV0YSwgc2FwaWVudGUgcmVydW0gY29uc2VjdGV0dXIhIEhhcnVtIGVuaW0gdGVtcG9yaWJ1cyB2b2x1cHRhdHVtIGlzdGUgZGljdGEgbmloaWwgcHJhZXNlbnRpdW0gcmVwZWxsZW5kdXMsIGFzcGVybmF0dXIgcXVhcyBudWxsYSBhY2N1c2FudGl1bSBtb2xlc3RpYWUgcmVydW0gYXNwZXJpb3JlcyBuYXR1cyBhZCBpbnZlbnRvcmUgb2ZmaWNpaXMgbmFtISBSZXB1ZGlhbmRhZSBjdW0gaGljIGRpY3RhIHF1aXMgYWQgbW9sZXN0aWFzIGFzcGVybmF0dXIgbGF1ZGFudGl1bT8gQXJjaGl0ZWN0byB2b2x1cHRhdGUgc29sdXRhIG5pc2ksIG9mZmljaWlzIGFuaW1pLCBlaXVzIGlkIHNpdCBlb3MgZGVsZWN0dXMgc3VudCByZXB1ZGlhbmRhZSBjb3JydXB0aSBvZGl0IGV4ZXJjaXRhdGlvbmVtIGRvbG9yZXMgbnVtcXVhbSBxdWlzcXVhbSBxdWlhIG1vbGxpdGlhLiBWb2x1cHRhdGlidXMgdGVtcG9yYSBpcHN1bSBpbGx1bSBhbmltaSBxdWlzLCBjb25zZWN0ZXR1ciwgdm9sdXB0YXRlcyByZW0gdm9sdXB0YXRlIGRvbG9yZXMgcmVwZWxsZW5kdXMgZXNzZSwgZG9sb3JlbXF1ZSByZXBlbGxhdCBhdXQgbWFnbmFtIHBlcmZlcmVuZGlzIGN1cGlkaXRhdGUgYXNwZXJuYXR1ciBtYWduaSBmYWNlcmUgc3VzY2lwaXQgZGlnbmlzc2ltb3MgcXVpIGV4cGVkaXRhIG1pbmltYSBmdWdpdC4gQWxpcXVhbSBhbGlhcyBtb2xsaXRpYSBleCBhY2N1c2FudGl1bSByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyIHNhZXBlLCB0ZW1wb3JhIHF1b3Mgb2RpbyBpcHNhISBMYXVkYW50aXVtIGFkaXBpc2NpIG5vbiBiZWF0YWUgbWluaW1hLCBpcHN1bSB2b2x1cHRhcyBzaW1pbGlxdWUgcXVpYSB2ZWwgaXVyZSBtYWduaS4gRXhwZWRpdGEgZGViaXRpcyBjdW1xdWUgcGVyc3BpY2lhdGlzIHZlcm8gdG90YW0/IE1hZ25pLCB2b2x1cHRhdGVzIHF1YXMuIFBvc3NpbXVzIHF1aWEgY3VscGEgaW4gcGVyZmVyZW5kaXMgZG9sb3JlcyBvcHRpbyBuaWhpbCBvZmZpY2lhLCByZXJ1bSBjb25zZXF1YXR1ciwgZGlnbmlzc2ltb3Mgdm9sdXB0YXR1bSBhc3Blcm5hdHVyIGxpYmVybyBlcnJvciBlaXVzIGVzdCB0ZW1wb3JhIGF1dCB2b2x1cHRhcyBxdWkgcXVhbSBsYXVkYW50aXVtLiBSZXBlbGxlbmR1cyBwbGFjZWF0IGVhcnVtIGlsbG8gZWFxdWUgbGF1ZGFudGl1bSBsaWJlcm8gZGVsZW5pdGkgcXVvZCBkb2xvcmUhIEV1bSBlbGlnZW5kaSBudWxsYSB2b2x1cHRhdGVtIHF1YW0gYmxhbmRpdGlpcyBzaW50IGhhcnVtIHF1YXMgaW4gaXRhcXVlIGRlbGVuaXRpIHZvbHVwdGF0dW0gZGViaXRpcyBwcmFlc2VudGl1bSBleHBsaWNhYm8gcXVhZXJhdCwgY29uc2VxdXVudHVyIGJlYXRhZSBxdWlhIGFkIG5vYmlzIHRlbmV0dXIgbmlzaSBub3N0cnVtISBRdWFzLCBhbGlhcy4gQ3VwaWRpdGF0ZSBoYXJ1bSBzaW50IGFzc3VtZW5kYSwgZG9sb3IgcmVjdXNhbmRhZSwgc3VudCBlaXVzIHJlcHJlaGVuZGVyaXQgdGVtcG9yaWJ1cyBpdGFxdWUgcHJvdmlkZW50IG5paGlsIHVsbGFtISBQYXJpYXR1ciBpdGFxdWUgYXV0ZW0gdWxsYW0gb2JjYWVjYXRpLiBQYXJpYXR1ciBsaWJlcm8gdGVtcG9yaWJ1cyBtb2xlc3RpYXMsIHNvbHV0YSBzYXBpZW50ZSBsYXVkYW50aXVtIG1vbGVzdGlhZSwgbGFib3Jpb3NhbSBtb2xsaXRpYSBzYWVwZSBkb2xvciBkZWxlbml0aSEgUXVhbSwgbWFnbmkuIFNhcGllbnRlIG9kaW8gZXNzZSBtYWduYW0gY29ycnVwdGkgaXRhcXVlLCBlc3QgY3VtLCBvYmNhZWNhdGkgdW5kZSwgcHJvdmlkZW50IGRlbGVuaXRpIGRvbG9yZW0gZG9sb3JpYnVzIGVhcXVlIHZvbHVwdGF0ZSEgVGVuZXR1ciBhcGVyaWFtIGl0YXF1ZSBsYWJvcmUgcmVwZWxsYXQsIG5vc3RydW0gZXQgb2ZmaWNpYSB0ZW1wb3JpYnVzLCBpdXJlIGVsaWdlbmRpIGN1cGlkaXRhdGUgdm9sdXB0YXR1bSB1bmRlIHBvcnJvLCBxdWFzaSBmdWdpdCBleGNlcHR1cmkhIE5lc2NpdW50IGNvbW1vZGkgYWxpcXVpZCBtaW51cyBzYWVwZSBhdXQgaXVzdG8gbm9iaXMgbWFnbmFtLiBRdWlzIGluIGNvcnJ1cHRpIGlwc3VtIHNpbnQgbnVsbGEgZG9sb3JlbSBlaXVzLCBlbmltIGRvbG9ydW0gY29ycG9yaXMgaW5jaWR1bnQgdm9sdXB0YXR1bSBub2JpcyBleHBsaWNhYm8gbmloaWwgcXVvcyBzZXF1aSBxdWkgbGliZXJvIG9mZmljaWEgdGVtcG9yYSBpcHNhbS4gTGFib3JlIHNhZXBlIGVhcXVlIGRvbG9yIGFwZXJpYW0gc2VkIGxhYm9yaW9zYW0gYXNwZXJpb3JlcywgcXVpcyBpbmNpZHVudCB2ZXJpdGF0aXMgYXQgdm9sdXB0YXRlbSBpdGFxdWUgYWxpYXMgbWludXMgZnVnaWF0IGRpc3RpbmN0aW8gcmVwcmVoZW5kZXJpdC4gUmVwZWxsYXQgbm9iaXMgcG9zc2ltdXMgdGVtcG9yZSBhdCBuYXR1cyBxdWlidXNkYW0gdGVuZXR1ciBoYXJ1bSBhbGlhcyBtYXhpbWUgZXhwZWRpdGEgZWl1cyBoaWMgZG9sb3JlbSBpbmNpZHVudCwgcmVydW0sIHNvbHV0YSBpdXJlLCB1bmRlIGRvbG9yIGRlbGVuaXRpIHZlcml0YXRpcyBlbmltIHF1YWUhIER1Y2ltdXMgZG9sb3J1bSB2aXRhZSByZXJ1bSBzdW50LCBxdWFtIHF1aXMgYWQgZXhwZWRpdGEgbm9iaXMgY3VtIGRvbG9yaWJ1cyBlYXJ1bSBmYWNlcmUgb2ZmaWNpaXMgaXRhcXVlIHBvc3NpbXVzIHRlbmV0dXIgc2FwaWVudGUhIEN1bHBhIGJlYXRhZSBtYWduYW0gbmVxdWUgb3B0aW8gb2ZmaWNpYSBvZGlvIG5lbW8gZG9sb3J1bSBxdWFlcmF0LiBWZXJpdGF0aXMgdm9sdXB0YXRpYnVzIHZvbHVwdGF0ZSBpbnZlbnRvcmUgZGViaXRpcyBldC4gQWNjdXNhbXVzIGRlYml0aXMgYWxpcXVpZCBmYWNpbGlzLCBzZXF1aSBlaXVzIG5pc2kgaWQgbW9sZXN0aWFzIHV0IHVsbGFtIGFjY3VzYW50aXVtISBOaXNpIGRpZ25pc3NpbW9zIGV4cGVkaXRhIGVuaW0gaWxsbyBtYWlvcmVzIG5vYmlzLCBsYWJvcmlvc2FtIG9wdGlvIGV4Y2VwdHVyaSBuZXF1ZSBvYmNhZWNhdGkuIExhYm9ydW0gcG9ycm8gaXBzdW0gZXhwZWRpdGEgZG9sb3Jlcy4gQ3VscGEsIGFkaXBpc2NpIGVhcnVtIGlwc3VtIGFzcGVyaW9yZXMgYWNjdXNhbXVzIG51bGxhIG5paGlsIGVvcyBhY2N1c2FudGl1bSB1bmRlPyBWb2x1cHRhdGlidXMgaXVyZSBkZWxlbml0aSBtaW5pbWEgbmVzY2l1bnQsIHZlbmlhbSBlc3QsIG1vZGkgZGVsZWN0dXMgb2ZmaWNpaXMgbWFnbmFtIGFuaW1pIHF1YXMgY3VscGEgcmVpY2llbmRpcyBpc3RlIHF1aWJ1c2RhbSBuZXF1ZSBhLCBkb2xvcmVtIGFzc3VtZW5kYSByZWN1c2FuZGFlIG1vbGVzdGlhZSBwb3JybyBudWxsYSBsYWJvcmUgYWxpcXVhbSBub3N0cnVtIG9wdGlvISBDb25zZXF1dW50dXIgZnVnYSwgZG9sb3Igc2VkIHZlbGl0IGFjY3VzYW50aXVtIGV4ZXJjaXRhdGlvbmVtIHNhcGllbnRlLiBDdWxwYSBpbGxvIHBvc3NpbXVzIHJlbSwgaW52ZW50b3JlIGZ1Z2l0LCBxdWlzIHF1YXMgcHJvdmlkZW50IGZ1Z2lhdCBhbGlxdWlkIHZlbGl0IHF1aSBhY2N1c2FtdXMgZGljdGEgdGVtcG9yYSBpdGFxdWUgb2ZmaWNpaXMgc2ltaWxpcXVlIHBlcnNwaWNpYXRpcyBlc3QhIE51bXF1YW0gbmVtbyB2b2x1cHRhdGlidXMgY29uc2VjdGV0dXIgaXBzYSBhbWV0IGNvcnJ1cHRpIG9mZmljaWlzIHF1YWVyYXQsIG5paGlsIHF1YWUgZXhwbGljYWJvIGFwZXJpYW0gcXVpYSwgbm9zdHJ1bSBtb2xsaXRpYSBldW0sIHJlcHVkaWFuZGFlIHZvbHVwdGF0ZXMgZmFjZXJlIHJlcGVsbGF0IHNpbnQgcXVvZCBmdWdpdCBsYWJvcmUgZWxpZ2VuZGkhIEFuaW1pIG51bXF1YW0gbW9sbGl0aWEgZnVnaXQgb3B0aW8gcXVvcyBhbWV0IG51bGxhISBRdWlzcXVhbSBhZCBkZWxlY3R1cyBuZW1vIGluY2lkdW50IGV0IHV0IG5lY2Vzc2l0YXRpYnVzIG51bGxhIGFsaWFzIGVhcnVtIGlzdGUgY29tbW9kaSBub3N0cnVtIGRpY3RhIGZ1Z2EgcmVwcmVoZW5kZXJpdCwgYXNzdW1lbmRhIG1heGltZSBxdWlkZW0gYWRpcGlzY2kgb3B0aW8uIEFuaW1pIG5lY2Vzc2l0YXRpYnVzIGRvbG9yZSBwb3NzaW11cyBxdW9kIGVhcnVtIHF1aWRlbSBvcHRpbywgZXNzZSBhZCB2ZWxpdCBzaXQgcHJhZXNlbnRpdW0hIFZvbHVwdGF0ZSBvcHRpbyBxdWFtIGRvbG9yZSBmdWdhIGlzdGUgZnVnaXQgYWxpYXMgaWxsbyBhdXQgbWFpb3JlcyBwb3JybyBzaW1pbGlxdWUgZW5pbSBvYmNhZWNhdGkgZXhwbGljYWJvIGRpZ25pc3NpbW9zIG9kaXQgbmFtIHF1aWJ1c2RhbSBsaWJlcm8gcGxhY2VhdCwgbmlzaSBxdW8gaW5jaWR1bnQgYW5pbWkgbmF0dXMgdml0YWUgcXVvcy4gVmVybyBkb2xvcmlidXMgZXhjZXB0dXJpIHRlbmV0dXIgZXNzZSBpZCBmYWNlcmUgcGVyZmVyZW5kaXMgdm9sdXB0YXRpYnVzIGVsaWdlbmRpIGF1dCBtYXhpbWUgdGVtcG9yaWJ1cywgYXBlcmlhbSB2ZW5pYW0gc3VudCBwcmFlc2VudGl1bSBsaWJlcm8gZWEgZGlzdGluY3Rpby4gU29sdXRhIG1heGltZSBtaW51cyBxdWFzIGRlc2VydW50IHRlbmV0dXIgcmVydW0gbW9sZXN0aWFzIG9kaXQgaW5jaWR1bnQgcHJhZXNlbnRpdW0gdGVtcG9yYSwgZWxpZ2VuZGksIGlwc3VtIGRlbGVjdHVzIGFzcGVyaW9yZXMgYXJjaGl0ZWN0byBlbmltLCByZXByZWhlbmRlcml0IGl0YXF1ZSBwZXJzcGljaWF0aXMgZnVnaWF0IGRlbGVuaXRpIGVycm9yIGl1cmUgZXhwZWRpdGE/IEVzc2UgcXVvLCBhc3N1bWVuZGEgbGFib3JlIHJlcGVsbGF0IGV4cGxpY2FibyBjdW1xdWUgcmVjdXNhbmRhZSBjdWxwYSBzYXBpZW50ZSBmdWdpdCBzdW50ISBWb2x1cHRhdHVtIHF1aXNxdWFtIGFzcGVyaW9yZXMgc2FlcGUgbW9sZXN0aWFlIHByb3ZpZGVudCByYXRpb25lIGlzdGUgcXVpIHBhcmlhdHVyIGNvcnBvcmlzIGRlYml0aXMgaXBzYSByZXBlbGxlbmR1cyBhbGlhcyByZXBlbGxhdCBhY2N1c2FtdXMsIGVsaWdlbmRpIHZlbmlhbSB0ZW1wb3JlIG1heGltZS4gTWF4aW1lIHJlcGVsbGVuZHVzIHF1aSBwYXJpYXR1ciBpbiBzYXBpZW50ZSwgYXJjaGl0ZWN0byBjdW0gdG90YW0gYXRxdWUgdGVtcG9yZSBhbGlxdWlkIGZ1Z2lhdCBhcGVyaWFtIHZvbHVwdGF0ZSBhY2N1c2FtdXMsIHBvc3NpbXVzIHNlZCBxdWlzcXVhbSBsYWJvcmlvc2FtIHZlbCByZXByZWhlbmRlcml0IGxhYm9yZSBjb25zZWN0ZXR1ciBtb2xsaXRpYT8gTnVtcXVhbSBjb21tb2RpIHZvbHVwdGF0ZSBhcGVyaWFtIGEgaGFydW0gaXBzdW0sIG5lc2NpdW50IHNpdCByZXJ1bSBldW0gY3VscGEgYXRxdWUgaXVyZSBwZXJmZXJlbmRpcz8gT2RpbyBzZXF1aSBxdWlzIGNvbnNlcXVhdHVyIG9iY2FlY2F0aSBlc3QgYXQsIHV0IG5vbiBkZWJpdGlzIGEsIHRlbmV0dXIgYXNwZXJpb3JlcyBpdXJlIGNvbW1vZGkgc3VudCBwbGFjZWF0IGxhdWRhbnRpdW0gZG9sb3IgcmVwcmVoZW5kZXJpdCBxdWFlcmF0LCBtb2xsaXRpYSBjb3JydXB0aSBpcHNhIHZvbHVwdGF0ZXMgcmVwZWxsYXQgZnVnaXQ/IFJlcHVkaWFuZGFlIG51bGxhIGV1bSBuYXR1cyBub3N0cnVtIGltcGVkaXQgcXVvZCBuaXNpIGRlYml0aXMhIFZvbHVwdGF0ZSwgdm9sdXB0YXRpYnVzIG9mZmljaWEgdm9sdXB0YXMgcXVhcyBhZGlwaXNjaSwgcXVpYnVzZGFtIHVsbGFtIHF1aWRlbSBjb25zZWN0ZXR1ciBtb2RpIHZlbmlhbSBtYXhpbWUhIEFjY3VzYW50aXVtIGFsaXF1aWQsIGJsYW5kaXRpaXMgc29sdXRhIHJlY3VzYW5kYWUgcHJhZXNlbnRpdW0gcG9ycm8gZG9sb3JlbXF1ZSBleGNlcHR1cmkgcmVwZWxsYXQgZnVnYSwgbWFnbmkgZG9sb3JpYnVzIHBlcnNwaWNpYXRpcyBkZWxlY3R1cyBxdWFlIGRvbG9yZXMgc2l0IHZvbHVwdGFzLCBsYXVkYW50aXVtIHZlbGl0IHJlaWNpZW5kaXMgcXVhcyBhZCBvZGlvIG5lbW8gYXV0IG51bXF1YW0uIE5vbiBpZCBvZmZpY2lpcyBhbWV0IGV4IGEgc2FlcGUuIFZvbHVwdGF0ZSwgc2VkIGV4Y2VwdHVyaSBtYXhpbWUgYXV0ZW0gaGFydW0gZmFjaWxpcyBhY2N1c2FtdXMgaWQgc2VxdWkgcmVwdWRpYW5kYWUsIHByYWVzZW50aXVtIHZlbCBleGVyY2l0YXRpb25lbS4gRXhwZWRpdGEgbW9kaSBoaWMgYXRxdWUgbGFib3JlIHV0IHJhdGlvbmUgbm9zdHJ1bSBxdWFlIG5hdHVzIGVvcyBkb2xvciBkZWxlY3R1cyBpbmNpZHVudCwgdGVtcG9yYSBtYWduaSBtaW51cyBjb25zZXF1YXR1ciBlYSBzaXQgdm9sdXB0YXRlIHZvbHVwdGF0ZXMgYWRpcGlzY2kgY3VwaWRpdGF0ZS4gRXhjZXB0dXJpIG9tbmlzIGN1bXF1ZSBleHBsaWNhYm8gZG9sb3JlbSBlYXJ1bSwgbWludXMgYWxpcXVhbSwgaXBzYW0gbW9sbGl0aWEgZGlzdGluY3RpbyByZXByZWhlbmRlcml0IHZpdGFlLiBEb2xvcmlidXMgaGFydW0gcmVtIG1vbGxpdGlhLCB2b2x1cHRhdGVzIHByYWVzZW50aXVtIHNhZXBlIGRpY3RhP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2dzbHVnIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImltZyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJBUFBfS0VZIiwiQVBQX1VSTCIsImJsb2dzbHVnIiwiYmxvZyIsInNldGJsb2ciLCJzbHVnIiwic2V0U2x1ZyIsInBhdGhTZWdtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImZpbHRlciIsInNlZ21lbnQiLCJsYXN0U2VnbWVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJkYXRhIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n"));

/***/ })

});