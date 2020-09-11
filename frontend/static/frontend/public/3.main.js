(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./frontend/src/features/auth/Auth.module.scss":
/*!*****************************************************!*\
  !*** ./frontend/src/features/auth/Auth.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Auth.module.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/auth/Auth.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/features/auth/Auth.module.scss?");

/***/ }),

/***/ "./frontend/src/features/auth/Login.js":
/*!*********************************************!*\
  !*** ./frontend/src/features/auth/Login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _generic_logo_lg_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generic_logo_lg.png */ \"./frontend/src/features/auth/generic_logo_lg.png\");\n/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Auth.module.scss */ \"./frontend/src/features/auth/Auth.module.scss\");\n/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Auth_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authSlice */ \"./frontend/src/features/auth/authSlice.js\");\n\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()([\"\\nmutation TokenAuthMutation($username: String!,  $password: String!) {\\n  tokenAuth(username: $username, password:$password) {\\n    token\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar LOGIN_MUTATION = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"gql\"])(_templateObject());\n\nvar LoginForm = function LoginForm() {\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])(LOGIN_MUTATION, {\n    errorPolicy: 'all'\n  }),\n      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),\n      loginMut = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"])();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__[\"useFormik\"])({\n    initialValues: {\n      username: '',\n      password: ''\n    },\n    validationSchema: yup__WEBPACK_IMPORTED_MODULE_4__[\"object\"]({\n      username: yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"]().min(5, 'Must be 5 characters or more').required('Required'),\n      password: yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"]().min(8, 'Must be 8 characters or more').required('Required')\n    }),\n    onSubmit: function onSubmit(values) {\n      var refresh_token = loginMut({\n        variables: {\n          username: values.username,\n          password: values.password\n        }\n      });\n      localStorage.setItem('refresh_token', refresh_token);\n      dispatch(Object(_authSlice__WEBPACK_IMPORTED_MODULE_10__[\"loginAsync\"])(loginMut, values, history));\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"form\", {\n    onSubmit: formik.handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"username\",\n    name: \"username\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.username\n  })), formik.touched.username && formik.errors.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.username) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"password\",\n    name: \"password\",\n    type: \"password\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.password\n  })), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.password) : null), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"pre\", null, error.graphQLErrors.map(function (_ref, i) {\n    var message = _ref.message;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      key: i\n    }, message);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    className: \"button is-link\",\n    type: \"submit\"\n  }, \"Submit\"))));\n};\n\nfunction Login() {\n  var loggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(_authSlice__WEBPACK_IMPORTED_MODULE_10__[\"selectLoggedIn\"]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: _Auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.authContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n    src: _generic_logo_lg_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    alt: \"2-day CRM\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: _Auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.authFormUpper\n  }, \"Login to return to your CRM dashboard.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: _Auth_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.authForm\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LoginForm, null), \"If you're not already signed up, please \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"NavLink\"], {\n    to: \"/signup/\"\n  }, \"signup\"), \" to gain access to the least-powerful CRM in existence!\"));\n}\n\n//# sourceURL=webpack:///./frontend/src/features/auth/Login.js?");

/***/ }),

/***/ "./frontend/src/features/auth/generic_logo_lg.png":
/*!********************************************************!*\
  !*** ./frontend/src/features/auth/generic_logo_lg.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"475415e61ce4d5afb90fc69324bb069b.png\");\n\n//# sourceURL=webpack:///./frontend/src/features/auth/generic_logo_lg.png?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/auth/Auth.module.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/auth/Auth.module.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"._2iflZHD9HryTCum-VsnztV {\\n  max-width: 400px;\\n  margin: 0 auto;\\n}\\n\\n._2UavT7Nav0uMj7CbO_wsDL {\\n  margin-top: 2rem;\\n}\\n\\n._2485_b20-w1K5B_50Lt2CL {\\n  margin-bottom: 1rem;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"authContainer\": \"_2iflZHD9HryTCum-VsnztV\",\n\t\"authForm\": \"_2UavT7Nav0uMj7CbO_wsDL\",\n\t\"authFormUpper\": \"_2485_b20-w1K5B_50Lt2CL\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./frontend/src/features/auth/Auth.module.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

}]);