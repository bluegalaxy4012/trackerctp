"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* harmony import */ var components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/RouteSelect */ \"(app-pages-browser)/./src/components/RouteSelect.tsx\");\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/FavouriteButton */ \"(app-pages-browser)/./src/components/FavouriteButton.tsx\");\n/* harmony import */ var components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/RouteButtons */ \"(app-pages-browser)/./src/components/RouteButtons.tsx\");\n/* harmony import */ var helpers_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/functions */ \"(app-pages-browser)/./src/helpers/functions.tsx\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const filterByRoute = (routeId)=>{\n        console.log(\"Filtering by route \".concat(routeId));\n    };\n    const toggleBusinesses = ()=>{\n        console.log('Toggling other map elements');\n    };\n    const centerMapOnUser = ()=>{\n        console.log('Centering map on user');\n    };\n    const initiatePrediction = ()=>{\n        console.log('Initiating prediction');\n    };\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route).toSorted(helpers_functions__WEBPACK_IMPORTED_MODULE_7__.numericSort));\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ].toSorted(helpers_functions__WEBPACK_IMPORTED_MODULE_7__.numericSort));\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    async function fetchVehicles() {\n        const response = await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {\n            method: 'GET',\n            headers: {\n                'Accept': 'application/json',\n                'X-API-KEY': \"1v6BK493vzooj5F97rbEcRiuAGwS0VJPPJ7fCI0U\",\n                'X-Agency-Id': '2'\n            }\n        });\n        const data = response.json();\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tracker Bus CTP Cluj-Napoca\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        spacing: 2,\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteButtons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                favouriteRoutes: favourites,\n                                onButtonPress: onRouteChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                routeValue: route,\n                                onRouteChange: onRouteChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_FavouriteButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isRouteFavourite: favourites.includes(route),\n                        addFavourite: addFavourite\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: toggleBusinesses,\n                        children: \"Show/Hide other map elements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: centerMapOnUser,\n                        children: \"Center on you\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn\",\n                        onClick: initiatePrediction,\n                        children: \"Select vehicle/destination for time arrival prediction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_4__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_2__.MapComponent, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-routefetchtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '10px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Last time fetching a route:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bottom-warningtext\",\n                style: {\n                    position: 'fixed',\n                    bottom: '30px',\n                    left: '0',\n                    right: '0',\n                    textAlign: 'center',\n                    fontSize: '12px',\n                    color: 'black'\n                },\n                children: \"Some warning messages will be displayed here.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"7okIuo4wa7FPmo7pRS5pwUrp8OA=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUN3QjtBQUNOO0FBQ0c7QUFDQTtBQUNLO0FBQ047QUFDSDtBQUNSO0FBR3pCLFNBQVNTOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR2IsMkNBQWMsQ0FBUztJQUVqRCxNQUFNYyxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBOEIsT0FBUkY7SUFDdEM7SUFFQSxNQUFNRyxtQkFBbUI7UUFDckJGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1FLGtCQUFrQjtRQUNwQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxTQUFTSTtRQUNMLElBQUdULFNBQVMsSUFBSTtRQUNoQixJQUFHRixXQUFXWSxRQUFRLENBQUNWLFFBQ25CRCxjQUFjLENBQUNZLGlCQUFtQkEsZUFBZUMsTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxTQUFTYixPQUFPYyxRQUFRLENBQUNuQiwwREFBV0E7YUFFcEdJLGNBQWMsQ0FBQ1ksaUJBQW1CO21CQUFJQTtnQkFBZ0JYO2FBQU0sQ0FBQ2MsUUFBUSxDQUFDbkIsMERBQVdBO0lBQ3pGO0lBRUEsZUFBZW9CLGNBQWNDLFFBQWdCO1FBQ3pDZixTQUFTZTtJQUNiO0lBRUEsZUFBZUM7UUFDWCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sOENBQThDO1lBQ3ZFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ0wsVUFBVTtnQkFDVixhQUFhQywwQ0FBc0M7Z0JBQ25ELGVBQWU7WUFDbkI7UUFDSjtRQUNBLE1BQU1HLE9BQU9QLFNBQVNRLElBQUk7UUFDMUJ0QixRQUFRQyxHQUFHLENBQUNvQjtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOztrQ0FDRyw4REFBQy9CLDJEQUFLQTt3QkFBQ2lDLFNBQVM7d0JBQUdDLFdBQVU7OzBDQUN6Qiw4REFBQ3BDLCtEQUFZQTtnQ0FBQ3FDLGlCQUFpQmpDO2dDQUFZa0MsZUFBZWpCOzs7Ozs7MENBQzFELDhEQUFDekIsOERBQVdBO2dDQUFDMkMsWUFBWWpDO2dDQUFPZSxlQUFlQTs7Ozs7Ozs7Ozs7O2tDQUVuRCw4REFBQ3RCLGtFQUFlQTt3QkFBQ3lDLGtCQUFrQnBDLFdBQVdZLFFBQVEsQ0FBQ1Y7d0JBQVFTLGNBQWNBOzs7Ozs7a0NBQzdFLDhEQUFDMEI7d0JBQU9DLFdBQVU7d0JBQU1DLFNBQVMvQjtrQ0FBa0I7Ozs7OztrQ0FHbkQsOERBQUM2Qjt3QkFBT0MsV0FBVTt3QkFBTUMsU0FBUzlCO2tDQUFpQjs7Ozs7O2tDQUdsRCw4REFBQzRCO3dCQUFPQyxXQUFVO3dCQUFNQyxTQUFTN0I7a0NBQW9COzs7Ozs7Ozs7Ozs7MEJBSXpELDhEQUFDakIsOERBQVdBOzBCQUNSLDRFQUFDRixpRUFBWUE7Ozs7Ozs7Ozs7MEJBRWpCLDhEQUFDc0M7Z0JBQUlXLElBQUc7Z0JBQXdCQyxPQUFPO29CQUFFQyxVQUFVO29CQUFTQyxRQUFRO29CQUFRQyxNQUFNO29CQUFLQyxPQUFPO29CQUFLQyxXQUFXO29CQUFVQyxVQUFVO29CQUFRQyxPQUFPO2dCQUFROzBCQUFHOzs7Ozs7MEJBRzVKLDhEQUFDbkI7Z0JBQUlXLElBQUc7Z0JBQXFCQyxPQUFPO29CQUFFQyxVQUFVO29CQUFTQyxRQUFRO29CQUFRQyxNQUFNO29CQUFLQyxPQUFPO29CQUFLQyxXQUFXO29CQUFVQyxVQUFVO29CQUFRQyxPQUFPO2dCQUFROzBCQUFHOzs7Ozs7Ozs7Ozs7QUFLcks7R0EzRXdCakQ7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXhtYWdcXFByb2plY3RzXFx0cmFja2VyY3RwXFxzcmNcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICdjb21wb25lbnRzL01hcENvbXBvbmVudCc7XHJcbmltcG9ydCBSb3V0ZVNlbGVjdCBmcm9tICdjb21wb25lbnRzL1JvdXRlU2VsZWN0JztcclxuaW1wb3J0IHsgTWFwUHJvdmlkZXIgfSBmcm9tICdwcm92aWRlcnMvTWFwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGYXZvdXJpdGVCdXR0b24gZnJvbSAnY29tcG9uZW50cy9GYXZvdXJpdGVCdXR0b24nO1xyXG5pbXBvcnQgUm91dGVCdXR0b25zIGZyb20gJ2NvbXBvbmVudHMvUm91dGVCdXR0b25zJztcclxuaW1wb3J0IHsgbnVtZXJpY1NvcnQgfSBmcm9tICdoZWxwZXJzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgW2Zhdm91cml0ZXMsIHNldEZhdm91cml0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICAgIGNvbnN0IFtyb3V0ZSwgc2V0Um91dGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyQnlSb3V0ZSA9IChyb3V0ZUlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRmlsdGVyaW5nIGJ5IHJvdXRlICR7cm91dGVJZH1gKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlQnVzaW5lc3NlcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9nZ2xpbmcgb3RoZXIgbWFwIGVsZW1lbnRzJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNlbnRlck1hcE9uVXNlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2VudGVyaW5nIG1hcCBvbiB1c2VyJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYXRlUHJlZGljdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhdGluZyBwcmVkaWN0aW9uJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZhdm91cml0ZSgpIHtcclxuICAgICAgICBpZihyb3V0ZSA9PSAnJykgcmV0dXJuO1xyXG4gICAgICAgIGlmKGZhdm91cml0ZXMuaW5jbHVkZXMocm91dGUpKSBcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlcygocHJldkZhdm91cml0ZXMpID0+IHByZXZGYXZvdXJpdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdXRlKS50b1NvcnRlZChudW1lcmljU29ydCkpOyBcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICBzZXRGYXZvdXJpdGVzKChwcmV2RmF2b3VyaXRlcykgPT4gWy4uLnByZXZGYXZvdXJpdGVzLCByb3V0ZV0udG9Tb3J0ZWQobnVtZXJpY1NvcnQpKTsgXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Sb3V0ZUNoYW5nZShuZXdSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0Um91dGUobmV3Um91dGUpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hWZWhpY2xlcygpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50cmFuenkuYWkvdjEvb3BlbmRhdGEvdmVoaWNsZXMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVFJBTlpZX0FQSV9LRVkgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgJ1gtQWdlbmN5LUlkJzogJzInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlRyYWNrZXIgQnVzIENUUCBDbHVqLU5hcG9jYTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlQnV0dG9ucyBmYXZvdXJpdGVSb3V0ZXM9e2Zhdm91cml0ZXN9IG9uQnV0dG9uUHJlc3M9e29uUm91dGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlU2VsZWN0IHJvdXRlVmFsdWU9e3JvdXRlfSBvblJvdXRlQ2hhbmdlPXtvblJvdXRlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPEZhdm91cml0ZUJ1dHRvbiBpc1JvdXRlRmF2b3VyaXRlPXtmYXZvdXJpdGVzLmluY2x1ZGVzKHJvdXRlKX0gYWRkRmF2b3VyaXRlPXthZGRGYXZvdXJpdGV9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dG9nZ2xlQnVzaW5lc3Nlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvdy9IaWRlIG90aGVyIG1hcCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2NlbnRlck1hcE9uVXNlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VudGVyIG9uIHlvdVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e2luaXRpYXRlUHJlZGljdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHZlaGljbGUvZGVzdGluYXRpb24gZm9yIHRpbWUgYXJyaXZhbCBwcmVkaWN0aW9uXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxNYXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxNYXBDb21wb25lbnQvPlxyXG4gICAgICAgICAgICA8L01hcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXJvdXRlZmV0Y2h0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzEwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgTGFzdCB0aW1lIGZldGNoaW5nIGEgcm91dGU6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXdhcm5pbmd0ZXh0XCIgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogJzMwcHgnLCBsZWZ0OiAnMCcsIHJpZ2h0OiAnMCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgU29tZSB3YXJuaW5nIG1lc3NhZ2VzIHdpbGwgYmUgZGlzcGxheWVkIGhlcmUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBDb21wb25lbnQiLCJSb3V0ZVNlbGVjdCIsIk1hcFByb3ZpZGVyIiwidXNlU3RhdGUiLCJGYXZvdXJpdGVCdXR0b24iLCJSb3V0ZUJ1dHRvbnMiLCJudW1lcmljU29ydCIsIlN0YWNrIiwiUGFnZSIsImZhdm91cml0ZXMiLCJzZXRGYXZvdXJpdGVzIiwicm91dGUiLCJzZXRSb3V0ZSIsImZpbHRlckJ5Um91dGUiLCJyb3V0ZUlkIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZUJ1c2luZXNzZXMiLCJjZW50ZXJNYXBPblVzZXIiLCJpbml0aWF0ZVByZWRpY3Rpb24iLCJhZGRGYXZvdXJpdGUiLCJpbmNsdWRlcyIsInByZXZGYXZvdXJpdGVzIiwiZmlsdGVyIiwiaXRlbSIsInRvU29ydGVkIiwib25Sb3V0ZUNoYW5nZSIsIm5ld1JvdXRlIiwiZmV0Y2hWZWhpY2xlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1RSQU5aWV9BUElfS0VZIiwiZGF0YSIsImpzb24iLCJkaXYiLCJoMSIsInNwYWNpbmciLCJkaXJlY3Rpb24iLCJmYXZvdXJpdGVSb3V0ZXMiLCJvbkJ1dHRvblByZXNzIiwicm91dGVWYWx1ZSIsImlzUm91dGVGYXZvdXJpdGUiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJzdHlsZSIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJjb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});