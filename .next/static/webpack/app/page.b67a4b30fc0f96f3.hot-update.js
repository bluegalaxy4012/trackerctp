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

/***/ "(app-pages-browser)/./src/helpers/drawingUtil.tsx":
/*!*************************************!*\
  !*** ./src/helpers/drawingUtil.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStopPositions: () => (/* binding */ getStopPositions)\n/* harmony export */ });\nfunction getStopPositions(tripId, tripStops, stopLocations) {\n    if (!tripId) return [];\n    const stops = [];\n    const tripStopsForId = tripStops.filter((tripStop)=>tripStop.trip_id === tripId);\n    tripStopsForId.forEach((tripStop)=>{\n        const stopLocation = stopLocations.find((stop)=>stop.stop_id === tripStop.stop_id);\n        if (stopLocation) {\n            stops.push({\n                position: {\n                    lat: stopLocation.stop_lat,\n                    lng: stopLocation.stop_lon\n                },\n                color: tripId.endsWith('_0') ? 'red' : 'green'\n            });\n        }\n    });\n    return stops;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJzL2RyYXdpbmdVdGlsLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBUU8sU0FBU0EsaUJBQWlCQyxNQUFjLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtJQUNyRSxJQUFHLENBQUNGLFFBQVEsT0FBTyxFQUFFO0lBRXJCLE1BQU1HLFFBQXlCLEVBQUU7SUFDakMsTUFBTUMsaUJBQWlCSCxVQUFVSSxNQUFNLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLE9BQU8sS0FBS1A7SUFDekVJLGVBQWVJLE9BQU8sQ0FBQ0YsQ0FBQUE7UUFDbkIsTUFBTUcsZUFBZVAsY0FBY1EsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLQyxPQUFPLEtBQUtOLFNBQVNNLE9BQU87UUFDakYsSUFBSUgsY0FBYztZQUNkTixNQUFNVSxJQUFJLENBQUM7Z0JBQ1BDLFVBQVU7b0JBQ05DLEtBQUtOLGFBQWFPLFFBQVE7b0JBQzFCQyxLQUFLUixhQUFhUyxRQUFRO2dCQUMxQjtnQkFDSkMsT0FBT25CLE9BQU9vQixRQUFRLENBQUMsUUFBUSxRQUFRO1lBQzNDO1FBQ0o7SUFDSjtJQUVBLE9BQU9qQjtBQUNYIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGF4bWFnXFxQcm9qZWN0c1xcdHJhY2tlcmN0cFxcc3JjXFxoZWxwZXJzXFxkcmF3aW5nVXRpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTdG9wUG9zaXRpb24ge1xyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgICBsYXQ6IG51bWJlcixcclxuICAgICAgICBsbmc6IG51bWJlclxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3BQb3NpdGlvbnModHJpcElkOiBzdHJpbmcsIHRyaXBTdG9wcywgc3RvcExvY2F0aW9ucykge1xyXG4gICAgaWYoIXRyaXBJZCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHN0b3BzIDogU3RvcFBvc2l0aW9uW10gPSBbXVxyXG4gICAgY29uc3QgdHJpcFN0b3BzRm9ySWQgPSB0cmlwU3RvcHMuZmlsdGVyKHRyaXBTdG9wID0+IHRyaXBTdG9wLnRyaXBfaWQgPT09IHRyaXBJZCk7XHJcbiAgICB0cmlwU3RvcHNGb3JJZC5mb3JFYWNoKHRyaXBTdG9wID0+IHtcclxuICAgICAgICBjb25zdCBzdG9wTG9jYXRpb24gPSBzdG9wTG9jYXRpb25zLmZpbmQoc3RvcCA9PiBzdG9wLnN0b3BfaWQgPT09IHRyaXBTdG9wLnN0b3BfaWQpO1xyXG4gICAgICAgIGlmIChzdG9wTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgc3RvcHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc3RvcExvY2F0aW9uLnN0b3BfbGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc3RvcExvY2F0aW9uLnN0b3BfbG9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmlwSWQuZW5kc1dpdGgoJ18wJykgPyAncmVkJyA6ICdncmVlbidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3BzO1xyXG59Il0sIm5hbWVzIjpbImdldFN0b3BQb3NpdGlvbnMiLCJ0cmlwSWQiLCJ0cmlwU3RvcHMiLCJzdG9wTG9jYXRpb25zIiwic3RvcHMiLCJ0cmlwU3RvcHNGb3JJZCIsImZpbHRlciIsInRyaXBTdG9wIiwidHJpcF9pZCIsImZvckVhY2giLCJzdG9wTG9jYXRpb24iLCJmaW5kIiwic3RvcCIsInN0b3BfaWQiLCJwdXNoIiwicG9zaXRpb24iLCJsYXQiLCJzdG9wX2xhdCIsImxuZyIsInN0b3BfbG9uIiwiY29sb3IiLCJlbmRzV2l0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helpers/drawingUtil.tsx\n"));

/***/ })

});