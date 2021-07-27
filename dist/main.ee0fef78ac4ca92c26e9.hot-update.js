/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepetshion"]("main",{

/***/ "./src/sidebar/SideBarButton.js":
/*!**************************************!*\
  !*** ./src/sidebar/SideBarButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _public_sidebar_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/sidebar/logo.png */ \"./public/sidebar/logo.png\");\n/* harmony import */ var _public_sidebar_profile_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/sidebar/profile.png */ \"./public/sidebar/profile.png\");\n/* harmony import */ var _public_sidebar_closet_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/sidebar/closet.png */ \"./public/sidebar/closet.png\");\n/* harmony import */ var _SideBarButton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideBarButton.css */ \"./src/sidebar/SideBarButton.css\");\n\n\n\n\n\n\nfunction SideBarButton(props) {\n  var imgSrc;\n  var cName = 'btn-div ';\n  console.log(window.location.origin);\n\n  switch (props.image) {\n    case 'logo':\n      imgSrc = _public_sidebar_logo_png__WEBPACK_IMPORTED_MODULE_1__.default;\n      cName += props.image;\n      break;\n\n    case 'profile':\n      imgSrc = _public_sidebar_profile_png__WEBPACK_IMPORTED_MODULE_2__.default;\n      break;\n\n    case 'closet':\n      imgSrc = _public_sidebar_closet_png__WEBPACK_IMPORTED_MODULE_3__.default;\n      break;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"btn-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: props.title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"symbol\",\n    src: imgSrc\n  }), \" \", props.title));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarButton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2lkZWJhci9TaWRlQmFyQnV0dG9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGV0c2hpb24vLi9zcmMvc2lkZWJhci9TaWRlQmFyQnV0dG9uLmpzP2ZkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvc2lkZWJhci9sb2dvLnBuZyc7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi8uLi9wdWJsaWMvc2lkZWJhci9wcm9maWxlLnBuZyc7XG5pbXBvcnQgY2xvc2V0IGZyb20gJy4uLy4uL3B1YmxpYy9zaWRlYmFyL2Nsb3NldC5wbmcnO1xuaW1wb3J0ICcuL1NpZGVCYXJCdXR0b24uY3NzJztcblxuZnVuY3Rpb24gU2lkZUJhckJ1dHRvbihwcm9wcykge1xuICB2YXIgaW1nU3JjO1xuICB2YXIgY05hbWUgPSAnYnRuLWRpdiAnO1xuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcblxuICBzd2l0Y2ggKHByb3BzLmltYWdlKSB7XG4gICAgY2FzZSAnbG9nbyc6XG4gICAgICBpbWdTcmMgPSBsb2dvO1xuICAgICAgY05hbWUgKz0gcHJvcHMuaW1hZ2U7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3Byb2ZpbGUnOlxuICAgICAgaW1nU3JjID0gcHJvZmlsZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2xvc2V0JzpcbiAgICAgIGltZ1NyYyA9IGNsb3NldDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiYnRuLWRpdlwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzc05hbWU6IHByb3BzLnRpdGxlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgc3JjOiBpbWdTcmNcbiAgfSksIFwiIFwiLCBwcm9wcy50aXRsZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyQnV0dG9uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sidebar/SideBarButton.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd610038f79a5f3461c4")
/******/ })();
/******/ 
/******/ }
);