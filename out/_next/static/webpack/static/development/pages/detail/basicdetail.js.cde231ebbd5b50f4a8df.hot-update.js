webpackHotUpdate("static/development/pages/detail/basicdetail.js",{

/***/ "./node_modules/fast-deep-equal/index.js":
false,

/***/ "./node_modules/swr/esm/cache.js":
false,

/***/ "./node_modules/swr/esm/config.js":
false,

/***/ "./node_modules/swr/esm/index.js":
false,

/***/ "./node_modules/swr/esm/libs/hash.js":
false,

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
false,

/***/ "./node_modules/swr/esm/libs/is-online.js":
false,

/***/ "./node_modules/swr/esm/libs/throttle.js":
false,

/***/ "./node_modules/swr/esm/swr-config-context.js":
false,

/***/ "./node_modules/swr/esm/use-swr-pages.js":
false,

/***/ "./node_modules/swr/esm/use-swr.js":
false,

/***/ "./pages/detail/basicdetail.jsx":
/*!**************************************!*\
  !*** ./pages/detail/basicdetail.jsx ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BasicDetail; });\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ \"./node_modules/antd/lib/table/style/index.js\");\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider/style */ \"./node_modules/antd/lib/divider/style/index.js\");\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/descriptions/style */ \"./node_modules/antd/lib/descriptions/style/index.js\");\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/descriptions */ \"./node_modules/antd/lib/descriptions/index.js\");\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/side-menu-layout */ \"./layouts/side-menu-layout/index.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\nvar __N_SSG = true;\nfunction BasicDetail(_ref) {\n  var detail = _ref.detail;\n  var refund = detail.refund,\n      user = detail.user,\n      refundList = detail.refundList;\n  var pickUpOrderId = refund.pickUpOrderId,\n      state = refund.state,\n      saleOrderId = refund.saleOrderId,\n      subOrderId = refund.subOrderId;\n  var name = user.name,\n      tel = user.tel,\n      express = user.express,\n      address = user.address,\n      remarks = user.remarks;\n\n  var refundListResult = function () {\n    var count = 0;\n    var amount = 0;\n    refundList.forEach(function (goods) {\n      count += goods.count;\n      amount += goods.amount;\n    });\n    return refundList.concat([{\n      goodsId: '总计',\n      count: count,\n      amount: amount\n    }]);\n  }();\n\n  var columns = [{\n    key: 'goodsId',\n    title: '商品编号',\n    dataIndex: 'goodsId',\n    render: function render(text) {\n      if (text === '总计') {\n        return text;\n      } else {\n        return __jsx(\"a\", null, text);\n      }\n    }\n  }, {\n    key: 'goodsName',\n    title: '商品名称',\n    dataIndex: 'goodsName'\n  }, {\n    key: 'goodsBarCode',\n    title: '商品条码',\n    dataIndex: 'goodsBarCode'\n  }, {\n    key: 'price',\n    title: '单价',\n    dataIndex: 'price'\n  }, {\n    key: 'count',\n    title: '数量（件）',\n    dataIndex: 'count'\n  }, {\n    key: 'amount',\n    title: '金额',\n    dataIndex: 'amount'\n  }];\n  return __jsx(_layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    title: \"\\u57FA\\u7840\\u8BE6\\u60C5\",\n    menuKey: \"detail/basicdetail\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u9000\\u6B3E\\u7533\\u8BF7\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5355\\u53F7\"\n  }, pickUpOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u72B6\\u6001\"\n  }, state), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u9500\\u552E\\u5355\\u53F7\"\n  }, saleOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5B50\\u8BA2\\u5355\"\n  }, subOrderId)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u7528\\u6237\\u4FE1\\u606F\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u7528\\u6237\\u59D3\\u540D\"\n  }, name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u8054\\u7CFB\\u7535\\u8BDD\"\n  }, tel), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5E38\\u7528\\u5FEB\\u9012\"\n  }, express), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5730\\u5740\"\n  }, address), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5907\\u6CE8\"\n  }, remarks)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    columns: columns,\n    dataSource: refundListResult,\n    rowKey: \"goodsId\",\n    pagination: false\n  }), __jsx(\"div\", {\n    style: {\n      marginTop: 20\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/about\"\n  }, __jsx(\"a\", null, \"\\u5173\\u4E8E\"))));\n}\n_c = BasicDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"BasicDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvYmFzaWNkZXRhaWwuanN4PzAxYWUiXSwibmFtZXMiOlsiQmFzaWNEZXRhaWwiLCJkZXRhaWwiLCJyZWZ1bmQiLCJ1c2VyIiwicmVmdW5kTGlzdCIsInBpY2tVcE9yZGVySWQiLCJzdGF0ZSIsInNhbGVPcmRlcklkIiwic3ViT3JkZXJJZCIsIm5hbWUiLCJ0ZWwiLCJleHByZXNzIiwiYWRkcmVzcyIsInJlbWFya3MiLCJyZWZ1bmRMaXN0UmVzdWx0IiwiY291bnQiLCJhbW91bnQiLCJmb3JFYWNoIiwiZ29vZHMiLCJjb25jYXQiLCJnb29kc0lkIiwiY29sdW1ucyIsImtleSIsInRpdGxlIiwiZGF0YUluZGV4IiwicmVuZGVyIiwidGV4dCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRWUsU0FBU0EsV0FBVCxPQUFrQztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUFBLE1BQ3ZDQyxNQUR1QyxHQUNWRCxNQURVLENBQ3ZDQyxNQUR1QztBQUFBLE1BQy9CQyxJQUQrQixHQUNWRixNQURVLENBQy9CRSxJQUQrQjtBQUFBLE1BQ3pCQyxVQUR5QixHQUNWSCxNQURVLENBQ3pCRyxVQUR5QjtBQUFBLE1BRXZDQyxhQUZ1QyxHQUVXSCxNQUZYLENBRXZDRyxhQUZ1QztBQUFBLE1BRXhCQyxLQUZ3QixHQUVXSixNQUZYLENBRXhCSSxLQUZ3QjtBQUFBLE1BRWpCQyxXQUZpQixHQUVXTCxNQUZYLENBRWpCSyxXQUZpQjtBQUFBLE1BRUpDLFVBRkksR0FFV04sTUFGWCxDQUVKTSxVQUZJO0FBQUEsTUFHdkNDLElBSHVDLEdBR0VOLElBSEYsQ0FHdkNNLElBSHVDO0FBQUEsTUFHakNDLEdBSGlDLEdBR0VQLElBSEYsQ0FHakNPLEdBSGlDO0FBQUEsTUFHNUJDLE9BSDRCLEdBR0VSLElBSEYsQ0FHNUJRLE9BSDRCO0FBQUEsTUFHbkJDLE9BSG1C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RTtBQUFFYSxlQUFTLEVBQUU7QUFBYjtBQUFaLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQW9CLGdDQUFwQixDQURGLENBakJGLENBREY7QUF1QkQ7S0FqRnVCM0IsVyIsImZpbGUiOiIuL3BhZ2VzL2RldGFpbC9iYXNpY2RldGFpbC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBEZXNjcmlwdGlvbnMsIERpdmlkZXIsIFRhYmxlIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBTaWRlTWVudUxheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL3NpZGUtbWVudS1sYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljRGV0YWlsICh7IGRldGFpbCB9KSB7XG4gIGNvbnN0IHsgcmVmdW5kLCB1c2VyLCByZWZ1bmRMaXN0IH0gPSBkZXRhaWxcbiAgY29uc3QgeyBwaWNrVXBPcmRlcklkLCBzdGF0ZSwgc2FsZU9yZGVySWQsIHN1Yk9yZGVySWQgfSA9IHJlZnVuZFxuICBjb25zdCB7IG5hbWUsIHRlbCwgZXhwcmVzcywgYWRkcmVzcywgcmVtYXJrcyB9ID0gdXNlclxuICBjb25zdCByZWZ1bmRMaXN0UmVzdWx0ID0gKCgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgbGV0IGFtb3VudCA9IDBcbiAgICByZWZ1bmRMaXN0LmZvckVhY2goZ29vZHMgPT4ge1xuICAgICAgY291bnQgKz0gZ29vZHMuY291bnRcbiAgICAgIGFtb3VudCArPSBnb29kcy5hbW91bnRcbiAgICB9KVxuICAgIHJldHVybiByZWZ1bmRMaXN0LmNvbmNhdChbe1xuICAgICAgZ29vZHNJZDogJ+aAu+iuoScsXG4gICAgICBjb3VudCxcbiAgICAgIGFtb3VudFxuICAgIH1dKVxuICB9KSgpXG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBrZXk6ICdnb29kc0lkJyxcbiAgICAgIHRpdGxlOiAn5ZWG5ZOB57yW5Y+3JyxcbiAgICAgIGRhdGFJbmRleDogJ2dvb2RzSWQnLFxuICAgICAgcmVuZGVyOiAodGV4dCkgPT4ge1xuICAgICAgICBpZiAodGV4dCA9PT0gJ+aAu+iuoScpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiA8YT57dGV4dH08L2E+XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2dvb2RzTmFtZScsXG4gICAgICB0aXRsZTogJ+WVhuWTgeWQjeensCcsXG4gICAgICBkYXRhSW5kZXg6ICdnb29kc05hbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdnb29kc0JhckNvZGUnLFxuICAgICAgdGl0bGU6ICfllYblk4HmnaHnoIEnLFxuICAgICAgZGF0YUluZGV4OiAnZ29vZHNCYXJDb2RlJ1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAncHJpY2UnLFxuICAgICAgdGl0bGU6ICfljZXku7cnLFxuICAgICAgZGF0YUluZGV4OiAncHJpY2UnXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdjb3VudCcsXG4gICAgICB0aXRsZTogJ+aVsOmHj++8iOS7tu+8iScsXG4gICAgICBkYXRhSW5kZXg6ICdjb3VudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2Ftb3VudCcsXG4gICAgICB0aXRsZTogJ+mHkeminScsXG4gICAgICBkYXRhSW5kZXg6ICdhbW91bnQnXG4gICAgfVxuICBdXG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZU1lbnVMYXlvdXQgdGl0bGU9J+WfuuehgOivpuaDhScgbWVudUtleT0nZGV0YWlsL2Jhc2ljZGV0YWlsJz5cbiAgICAgIDxEZXNjcmlwdGlvbnMgdGl0bGU9J+mAgOasvueUs+ivtyc+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n5Y+W6LSn5Y2V5Y+3Jz57cGlja1VwT3JkZXJJZH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+eKtuaAgSc+e3N0YXRlfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n6ZSA5ZSu5Y2V5Y+3Jz57c2FsZU9yZGVySWR9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSflrZDorqLljZUnPntzdWJPcmRlcklkfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICA8L0Rlc2NyaXB0aW9ucz5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8RGVzY3JpcHRpb25zIHRpdGxlPSfnlKjmiLfkv6Hmga8nPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+eUqOaIt+Wnk+WQjSc+e25hbWV9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSfogZTns7vnlLXor50nPnt0ZWx9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSfluLjnlKjlv6vpgJInPntleHByZXNzfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n5Y+W6LSn5Zyw5Z2AJz57YWRkcmVzc308L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+Wkh+azqCc+e3JlbWFya3N9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgIDwvRGVzY3JpcHRpb25zPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhU291cmNlPXtyZWZ1bmRMaXN0UmVzdWx0fSByb3dLZXk9J2dvb2RzSWQnIHBhZ2luYXRpb249e2ZhbHNlfSAvPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8TGluayBocmVmPScvYWJvdXQnPjxhPuWFs+S6jjwvYT48L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NpZGVNZW51TGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoY29udGV4dCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmFzaWNkZXRhaWwnKVxuICBjb25zdCBkZXRhaWwgPSBhd2FpdCBkYXRhLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRldGFpbFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/basicdetail.jsx\n");

/***/ })

})