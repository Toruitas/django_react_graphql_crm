(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./frontend/src/features/dashboard/createCustomer/CreateCustomer.js":
/*!**************************************************************************!*\
  !*** ./frontend/src/features/dashboard/createCustomer/CreateCustomer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateCustomer; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _CreateCustomer_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateCustomer.module.scss */ \"./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss\");\n/* harmony import */ var _CreateCustomer_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CreateCustomer_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()([\"\\nmutation CreateCustomerMutation($name: String!,  $businessName: String, $phoneNumber: String, $email:String, $website:String, $description:String) {\\n  createCustomer(name: $name, businessName:$businessName, phoneNumber: $phoneNumber, email: $email, website:$website, description:$description) {\\n    customer{\\n        name,\\n        businessName,\\n        phoneNumber,\\n        email,\\n        website,\\n        description,\\n        lookupId,\\n        createdAt,\\n        createdBy{\\n          username\\n        }\\n      }\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\nvar CREATE_CUSTOMER_MUTATION = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"gql\"])(_templateObject());\n\nvar CreateCustomerForm = function CreateCustomerForm() {\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__[\"useMutation\"])(CREATE_CUSTOMER_MUTATION, {\n    errorPolicy: 'all'\n  }),\n      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),\n      createCustomerMut = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"useHistory\"])();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"])();\n  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_5__[\"useFormik\"])({\n    initialValues: {\n      name: '',\n      businessName: '',\n      phoneNumber: '',\n      email: '',\n      website: '',\n      description: ''\n    },\n    validationSchema: yup__WEBPACK_IMPORTED_MODULE_6__[\"object\"]({\n      name: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().min(2, 'Must be longer than 1 character').required('Required'),\n      email: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().email('Invalid email address')\n    }),\n    onSubmit: function onSubmit(values) {\n      createCustomerMut({\n        variables: {\n          name: values.name,\n          businessName: values.businessName,\n          phoneNumber: values.phoneNumber,\n          email: values.email,\n          website: values.website,\n          description: values.description\n        }\n      }).then(function (data) {\n        if (!data.errors) {\n          // redirect to the new customer's page\n          history.push(\"/customer/\" + data.data.createCustomer.customer.lookupId + \"/\");\n        }\n      });\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"form\", {\n    onSubmit: formik.handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"name\",\n    name: \"name\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.name\n  })), formik.touched.name && formik.errors.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.name) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"businessName\"\n  }, \"Business Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"businessName\",\n    name: \"businessName\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.businessName\n  })), formik.touched.businessName && formik.errors.businessName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.businessName) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"phoneNumber\"\n  }, \"Phone Number\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"phoneNumber\",\n    name: \"phoneNumber\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.phoneNumber\n  })), formik.touched.phoneNumber && formik.errors.phoneNumber ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.phoneNumber) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"email\",\n    name: \"email\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.email\n  })), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.email) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"website\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"website\",\n    name: \"website\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.website\n  })), formik.touched.website && formik.errors.website ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.website) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"label\", {\n    htmlFor: \"description\"\n  }, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    className: \"input\",\n    id: \"description\",\n    name: \"description\",\n    type: \"text\",\n    onChange: formik.handleChange,\n    onBlur: formik.handleBlur,\n    value: formik.values.description\n  })), formik.touched.description && formik.errors.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, formik.errors.description) : null), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"pre\", null, error.graphQLErrors.map(function (_ref, i) {\n    var message = _ref.message;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n      key: i\n    }, message);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    className: \"button is-link\",\n    type: \"submit\"\n  }, \"Submit\"))));\n};\n\nfunction CreateCustomer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CreateCustomerForm, null)));\n}\n\n//# sourceURL=webpack:///./frontend/src/features/dashboard/createCustomer/CreateCustomer.js?");

/***/ }),

/***/ "./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss":
/*!***********************************************************************************!*\
  !*** ./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./CreateCustomer.module.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./frontend/src/features/dashboard/createCustomer/CreateCustomer.module.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ })

}]);