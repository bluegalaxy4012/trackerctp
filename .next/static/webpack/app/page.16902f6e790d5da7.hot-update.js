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

/***/ "(app-pages-browser)/./src/components/MainComponent.tsx":
/*!******************************************!*\
  !*** ./src/components/MainComponent.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! providers/MapProvider */ \"(app-pages-browser)/./src/providers/MapProvider.tsx\");\n/* harmony import */ var helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/utils */ \"(app-pages-browser)/./src/helpers/utils.tsx\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Stack */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RouteSelection */ \"(app-pages-browser)/./src/components/RouteSelection.tsx\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var components_MapComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MapComponent */ \"(app-pages-browser)/./src/components/MapComponent.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainComponent(param) {\n    let { stopLocationsPromise, tripStopsPromise, shapesPromise } = param;\n    _s();\n    const [favourites, setFavourites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [route, setRoute] = react__WEBPACK_IMPORTED_MODULE_1__.useState('');\n    const [stopLocations, setStopLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tripStops, setTripStops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [shapes, setShapes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MainComponent.useEffect\": ()=>{\n            shapesPromise.then({\n                \"MainComponent.useEffect\": (data)=>setShapes(data)\n            }[\"MainComponent.useEffect\"]);\n            stopLocationsPromise.then({\n                \"MainComponent.useEffect\": (data)=>setStopLocations(data)\n            }[\"MainComponent.useEffect\"]);\n            tripStopsPromise.then({\n                \"MainComponent.useEffect\": (data)=>setTripStops(data)\n            }[\"MainComponent.useEffect\"]);\n        }\n    }[\"MainComponent.useEffect\"], [\n        stopLocationsPromise,\n        tripStopsPromise\n    ]);\n    const filterByRoute = (routeId)=>{\n        console.log(\"Filtering by route \".concat(routeId));\n    };\n    const toggleBusinesses = ()=>{\n        console.log('Toggling other map elements');\n    };\n    const centerMapOnUser = ()=>{\n        console.log('Centering map on user');\n    };\n    const initiatePrediction = ()=>{\n        console.log('Initiating prediction');\n    };\n    function addFavourite() {\n        if (route == '') return;\n        if (favourites.includes(route)) setFavourites((prevFavourites)=>prevFavourites.filter((item)=>item !== route).toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.numericSort));\n        else setFavourites((prevFavourites)=>[\n                ...prevFavourites,\n                route\n            ].toSorted(helpers_utils__WEBPACK_IMPORTED_MODULE_3__.numericSort));\n    }\n    async function onRouteChange(newRoute) {\n        setRoute(newRoute);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_RouteSelection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                route: route,\n                favourites: favourites,\n                onRouteChange: onRouteChange,\n                addFavourite: addFavourite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                spacing: 2,\n                direction: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: toggleBusinesses,\n                        children: \"Show/Hide other map elements\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: centerMapOnUser,\n                        children: \"Center on you\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        variant: \"outlined\",\n                        onClick: initiatePrediction,\n                        children: \"Select vehicle/destination for time arrival prediction\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(providers_MapProvider__WEBPACK_IMPORTED_MODULE_2__.MapProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MapComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    route: route,\n                    stopLocations: stopLocations,\n                    tripStops: tripStops\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\axmag\\\\Projects\\\\trackerctp\\\\src\\\\components\\\\MainComponent.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainComponent, \"0swRMLQW4BYB1Y41EfUGBd8G178=\");\n_c = MainComponent;\nvar _c;\n$RefreshReg$(_c, \"MainComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNxQjtBQUNBO0FBQ1I7QUFDSjtBQUNlO0FBQ2hCO0FBRVk7QUFRcEMsU0FBU1MsY0FBYyxLQUE2RTtRQUE3RSxFQUFFQyxvQkFBb0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBc0IsR0FBN0U7O0lBQ2xDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3pELE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHaEIsMkNBQWMsQ0FBUztJQUVqRCxNQUFNLENBQUNpQixlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBO0lBQ2xELE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQTtJQUMxQyxNQUFNLENBQUNrQixRQUFRQyxVQUFVLEdBQUduQiwrQ0FBUUE7SUFFcENELGdEQUFTQTttQ0FBQztZQUNOVSxjQUFjVyxJQUFJOzJDQUFDLENBQUNDLE9BQVNGLFVBQVVFOztZQUN2Q2QscUJBQXFCYSxJQUFJOzJDQUFDLENBQUNDLE9BQVNOLGlCQUFpQk07O1lBQ3JEYixpQkFBaUJZLElBQUk7MkNBQUMsQ0FBQ0MsT0FBU0osYUFBYUk7O1FBQ2pEO2tDQUFHO1FBQUNkO1FBQXNCQztLQUFpQjtJQUUzQyxNQUFNYyxnQkFBZ0IsQ0FBQ0M7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQyxzQkFBOEIsT0FBUkY7SUFDdEM7SUFFQSxNQUFNRyxtQkFBbUI7UUFDckJGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLE1BQU1FLGtCQUFrQjtRQUNwQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEsTUFBTUcscUJBQXFCO1FBQ3ZCSixRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxTQUFTSTtRQUNMLElBQUdqQixTQUFTLElBQUk7UUFDaEIsSUFBR0YsV0FBV29CLFFBQVEsQ0FBQ2xCLFFBQ25CRCxjQUFjLENBQUNvQixpQkFBbUJBLGVBQWVDLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsU0FBU3JCLE9BQU9zQixRQUFRLENBQUNqQyxzREFBV0E7YUFFcEdVLGNBQWMsQ0FBQ29CLGlCQUFtQjttQkFBSUE7Z0JBQWdCbkI7YUFBTSxDQUFDc0IsUUFBUSxDQUFDakMsc0RBQVdBO0lBQ3pGO0lBRUEsZUFBZWtDLGNBQWNDLFFBQWdCO1FBQ3pDdkIsU0FBU3VCO0lBQ2I7SUFFQSxxQkFDSTs7MEJBQ0EsOERBQUNqQyxpRUFBY0E7Z0JBQUNTLE9BQU9BO2dCQUFPRixZQUFZQTtnQkFBWXlCLGVBQWVBO2dCQUFlTixjQUFjQTs7Ozs7OzBCQUNsRyw4REFBQzNCLDJEQUFLQTtnQkFBQ21DLFNBQVM7Z0JBQUdDLFdBQVU7O2tDQUN6Qiw4REFBQ2xDLGtGQUFNQTt3QkFBQ21DLFNBQVE7d0JBQVdDLFNBQVNkO2tDQUFrQjs7Ozs7O2tDQUd0RCw4REFBQ3RCLGtGQUFNQTt3QkFBQ21DLFNBQVE7d0JBQVdDLFNBQVNiO2tDQUFpQjs7Ozs7O2tDQUdyRCw4REFBQ3ZCLGtGQUFNQTt3QkFBQ21DLFNBQVE7d0JBQVdDLFNBQVNaO2tDQUFvQjs7Ozs7Ozs7Ozs7OzBCQUk1RCw4REFBQzlCLDhEQUFXQTswQkFDUiw0RUFBQ08sK0RBQVlBO29CQUFDTyxPQUFPQTtvQkFBT0UsZUFBZUE7b0JBQWVFLFdBQVdBOzs7Ozs7Ozs7Ozs7O0FBSWpGO0dBN0R3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYXhtYWdcXFByb2plY3RzXFx0cmFja2VyY3RwXFxzcmNcXGNvbXBvbmVudHNcXE1haW5Db21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFwUHJvdmlkZXIgfSBmcm9tICdwcm92aWRlcnMvTWFwUHJvdmlkZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG51bWVyaWNTb3J0IH0gZnJvbSAnaGVscGVycy91dGlscyc7XHJcbmltcG9ydCBTdGFjayBmcm9tICdAbXVpL21hdGVyaWFsL1N0YWNrJztcclxuaW1wb3J0IFJvdXRlU2VsZWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvUm91dGVTZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgcm91dGVEaWN0aW9uYXJ5IH0gZnJvbSAnaGVscGVycy9yb3V0ZWRhdGEnO1xyXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJ2NvbXBvbmVudHMvTWFwQ29tcG9uZW50JztcclxuXHJcbmludGVyZmFjZSBNYWluQ29tcG9uZW50UHJvcHMge1xyXG4gICAgc2hhcGVzUHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG4gICAgc3RvcExvY2F0aW9uc1Byb21pc2U6IFByb21pc2U8YW55PjtcclxuICAgIHRyaXBTdG9wc1Byb21pc2U6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCh7IHN0b3BMb2NhdGlvbnNQcm9taXNlLCB0cmlwU3RvcHNQcm9taXNlLCBzaGFwZXNQcm9taXNlIH06IE1haW5Db21wb25lbnRQcm9wcykge1xyXG4gICAgY29uc3QgW2Zhdm91cml0ZXMsIHNldEZhdm91cml0ZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICAgIGNvbnN0IFtyb3V0ZSwgc2V0Um91dGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtzdG9wTG9jYXRpb25zLCBzZXRTdG9wTG9jYXRpb25zXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIGNvbnN0IFt0cmlwU3RvcHMsIHNldFRyaXBTdG9wc10gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCBbc2hhcGVzLCBzZXRTaGFwZXNdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2hhcGVzUHJvbWlzZS50aGVuKChkYXRhKSA9PiBzZXRTaGFwZXMoZGF0YSkpXHJcbiAgICAgICAgc3RvcExvY2F0aW9uc1Byb21pc2UudGhlbigoZGF0YSkgPT4gc2V0U3RvcExvY2F0aW9ucyhkYXRhKSlcclxuICAgICAgICB0cmlwU3RvcHNQcm9taXNlLnRoZW4oKGRhdGEpID0+IHNldFRyaXBTdG9wcyhkYXRhKSlcclxuICAgIH0sIFtzdG9wTG9jYXRpb25zUHJvbWlzZSwgdHJpcFN0b3BzUHJvbWlzZV0pO1xyXG5cclxuICAgIGNvbnN0IGZpbHRlckJ5Um91dGUgPSAocm91dGVJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEZpbHRlcmluZyBieSByb3V0ZSAke3JvdXRlSWR9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUJ1c2luZXNzZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZ2dsaW5nIG90aGVyIG1hcCBlbGVtZW50cycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjZW50ZXJNYXBPblVzZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NlbnRlcmluZyBtYXAgb24gdXNlcicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0aWF0ZVByZWRpY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYXRpbmcgcHJlZGljdGlvbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRGYXZvdXJpdGUoKSB7XHJcbiAgICAgICAgaWYocm91dGUgPT0gJycpIHJldHVybjtcclxuICAgICAgICBpZihmYXZvdXJpdGVzLmluY2x1ZGVzKHJvdXRlKSkgXHJcbiAgICAgICAgICAgIHNldEZhdm91cml0ZXMoKHByZXZGYXZvdXJpdGVzKSA9PiBwcmV2RmF2b3VyaXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3V0ZSkudG9Tb3J0ZWQobnVtZXJpY1NvcnQpKTsgXHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlcygocHJldkZhdm91cml0ZXMpID0+IFsuLi5wcmV2RmF2b3VyaXRlcywgcm91dGVdLnRvU29ydGVkKG51bWVyaWNTb3J0KSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uUm91dGVDaGFuZ2UobmV3Um91dGU6IHN0cmluZykge1xyXG4gICAgICAgIHNldFJvdXRlKG5ld1JvdXRlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Um91dGVTZWxlY3Rpb24gcm91dGU9e3JvdXRlfSBmYXZvdXJpdGVzPXtmYXZvdXJpdGVzfSBvblJvdXRlQ2hhbmdlPXtvblJvdXRlQ2hhbmdlfSBhZGRGYXZvdXJpdGU9e2FkZEZhdm91cml0ZX0vPlxyXG4gICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfSBkaXJlY3Rpb249XCJyb3dcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXt0b2dnbGVCdXNpbmVzc2VzfT5cclxuICAgICAgICAgICAgICAgIFNob3cvSGlkZSBvdGhlciBtYXAgZWxlbWVudHNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17Y2VudGVyTWFwT25Vc2VyfT5cclxuICAgICAgICAgICAgICAgIENlbnRlciBvbiB5b3VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17aW5pdGlhdGVQcmVkaWN0aW9ufT5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCB2ZWhpY2xlL2Rlc3RpbmF0aW9uIGZvciB0aW1lIGFycml2YWwgcHJlZGljdGlvblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDxNYXBQcm92aWRlcj5cclxuICAgICAgICAgICAgPE1hcENvbXBvbmVudCByb3V0ZT17cm91dGV9IHN0b3BMb2NhdGlvbnM9e3N0b3BMb2NhdGlvbnN9IHRyaXBTdG9wcz17dHJpcFN0b3BzfS8+XHJcbiAgICAgICAgPC9NYXBQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibnVtZXJpY1NvcnQiLCJTdGFjayIsIlJvdXRlU2VsZWN0aW9uIiwiQnV0dG9uIiwiTWFwQ29tcG9uZW50IiwiTWFpbkNvbXBvbmVudCIsInN0b3BMb2NhdGlvbnNQcm9taXNlIiwidHJpcFN0b3BzUHJvbWlzZSIsInNoYXBlc1Byb21pc2UiLCJmYXZvdXJpdGVzIiwic2V0RmF2b3VyaXRlcyIsInJvdXRlIiwic2V0Um91dGUiLCJzdG9wTG9jYXRpb25zIiwic2V0U3RvcExvY2F0aW9ucyIsInRyaXBTdG9wcyIsInNldFRyaXBTdG9wcyIsInNoYXBlcyIsInNldFNoYXBlcyIsInRoZW4iLCJkYXRhIiwiZmlsdGVyQnlSb3V0ZSIsInJvdXRlSWQiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlQnVzaW5lc3NlcyIsImNlbnRlck1hcE9uVXNlciIsImluaXRpYXRlUHJlZGljdGlvbiIsImFkZEZhdm91cml0ZSIsImluY2x1ZGVzIiwicHJldkZhdm91cml0ZXMiLCJmaWx0ZXIiLCJpdGVtIiwidG9Tb3J0ZWQiLCJvblJvdXRlQ2hhbmdlIiwibmV3Um91dGUiLCJzcGFjaW5nIiwiZGlyZWN0aW9uIiwidmFyaWFudCIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainComponent.tsx\n"));

/***/ })

});