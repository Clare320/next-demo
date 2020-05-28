webpackHotUpdate("static/development/pages/detail/basicdetail.js",{

/***/ "./pages/detail/basicdetail.jsx":
/*!**************************************!*\
  !*** ./pages/detail/basicdetail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BasicDetail; });\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ \"./node_modules/antd/lib/table/style/index.js\");\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider/style */ \"./node_modules/antd/lib/divider/style/index.js\");\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/descriptions/style */ \"./node_modules/antd/lib/descriptions/style/index.js\");\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/descriptions */ \"./node_modules/antd/lib/descriptions/index.js\");\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/side-menu-layout */ \"./layouts/side-menu-layout/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction PlaceHolder(title) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(\"title\", null, \"\\u8BE6\\u60C5\")), __jsx(\"div\", null, title));\n}\n\n_c = PlaceHolder;\nfunction BasicDetail() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('/api/basicdetail', fetcher),\n      detail = _useSWR.detail,\n      error = _useSWR.error;\n\n  if (error) return __jsx(PlaceHolder, {\n    title: \"Failed to laod\"\n  });\n\n  if (!detail) {\n    return __jsx(PlaceHolder, {\n      title: \"Loading...\"\n    });\n  }\n\n  var refund = detail.refund,\n      user = detail.user,\n      refundList = detail.refundList;\n  var pickUpOrderId = refund.pickUpOrderId,\n      state = refund.state,\n      saleOrderId = refund.saleOrderId,\n      subOrderId = refund.subOrderId;\n  var name = user.name,\n      tel = user.tel,\n      express = user.express,\n      address = user.address,\n      remarks = user.remarks;\n\n  var refundListResult = function () {\n    var count = 0;\n    var amount = 0;\n    refundList.forEach(function (goods) {\n      count += goods.count;\n      amount += goods.amount;\n    });\n    return refundList.concat([{\n      goodsId: '总计',\n      count: count,\n      amount: amount\n    }]);\n  }();\n\n  var columns = [{\n    key: 'goodsId',\n    title: '商品编号',\n    dataIndex: 'goodsId',\n    render: function render(text) {\n      if (text === '总计') {\n        return text;\n      } else {\n        return __jsx(\"a\", null, text);\n      }\n    }\n  }, {\n    key: 'goodsName',\n    title: '商品名称',\n    dataIndex: 'goodsName'\n  }, {\n    key: 'goodsBarCode',\n    title: '商品条码',\n    dataIndex: 'goodsBarCode'\n  }, {\n    key: 'price',\n    title: '单价',\n    dataIndex: 'price'\n  }, {\n    key: 'count',\n    title: '数量（件）',\n    dataIndex: 'count'\n  }, {\n    key: 'amount',\n    title: '金额',\n    dataIndex: 'amount'\n  }];\n  return __jsx(_layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    title: \"\\u57FA\\u7840\\u8BE6\\u60C5\",\n    menuKey: \"detail/basicdetail\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u9000\\u6B3E\\u7533\\u8BF7\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5355\\u53F7\"\n  }, pickUpOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u72B6\\u6001\"\n  }, state), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u9500\\u552E\\u5355\\u53F7\"\n  }, saleOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5B50\\u8BA2\\u5355\"\n  }, subOrderId)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u7528\\u6237\\u4FE1\\u606F\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u7528\\u6237\\u59D3\\u540D\"\n  }, name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u8054\\u7CFB\\u7535\\u8BDD\"\n  }, tel), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5E38\\u7528\\u5FEB\\u9012\"\n  }, express), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5730\\u5740\"\n  }, address), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5907\\u6CE8\"\n  }, remarks)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    columns: columns,\n    dataSource: refundListResult,\n    rowKey: \"goodsId\",\n    pagination: false\n  }), __jsx(\"div\", {\n    style: {\n      marginTop: 20\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/about\"\n  }, __jsx(\"a\", null, \"\\u5173\\u4E8E\"))));\n} // export async function getStaticProps (context) {\n//   const data = await fetch('/api/basicdetail')\n//   const detail = await data.json()\n//   return {\n//     props: {\n//       detail\n//     }\n//   }\n// }\n\n_s(BasicDetail, \"8IMNtjAw8p9FplWE9Sr+iF6NnTo=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c2 = BasicDetail;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PlaceHolder\");\n$RefreshReg$(_c2, \"BasicDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvYmFzaWNkZXRhaWwuanN4PzAxYWUiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJQbGFjZUhvbGRlciIsInRpdGxlIiwiQmFzaWNEZXRhaWwiLCJ1c2VTV1IiLCJkZXRhaWwiLCJlcnJvciIsInJlZnVuZCIsInVzZXIiLCJyZWZ1bmRMaXN0IiwicGlja1VwT3JkZXJJZCIsInN0YXRlIiwic2FsZU9yZGVySWQiLCJzdWJPcmRlcklkIiwibmFtZSIsInRlbCIsImV4cHJlc3MiLCJhZGRyZXNzIiwicmVtYXJrcyIsInJlZnVuZExpc3RSZXN1bHQiLCJjb3VudCIsImFtb3VudCIsImZvckVhY2giLCJnb29kcyIsImNvbmNhdCIsImdvb2RzSWQiLCJjb2x1bW5zIiwia2V5IiwiZGF0YUluZGV4IiwicmVuZGVyIiwidGV4dCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FBbkIsQ0FBVDtBQUFBLENBQWhCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRCxRQUFNLG9DQUFOLENBREYsRUFFRSxtQkFBTUEsS0FBTixDQUZGLENBREY7QUFNRDs7S0FQUUQsVztBQVNNLFNBQVNFLFdBQVQsR0FBdUI7QUFBQTs7QUFBQSxnQkFDVkMsbURBQU0sQ0FBQyxrQkFBRCxFQUFxQlQsT0FBckIsQ0FESTtBQUFBLE1BQzVCVSxNQUQ0QixXQUM1QkEsTUFENEI7QUFB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QW1CLFNBQUssRUFBQztBQUF6QixLQUErQkMsS0FBL0IsQ0FGRixFQUdFLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLEtBQWlDQyxXQUFqQyxDQUhGLEVBSUUsbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUM7QUFBekIsS0FBZ0NDLFVBQWhDLENBSkYsQ0FERixFQU9FLG9FQVBGLEVBUUU7QUFBYyxTQUFLLEVBQUM7QUFBcEIsS0FDRSxtRUFBYyxJQUFkO0FBQW1CLFNBQUssRUFBQztBQUF6QixLQUFpQ0MsSUFBakMsQ0FERixFQUVFLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLEtBQWlDQyxHQUFqQyxDQUZGLEVBR0UsbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUM7QUFBekIsS0FBaUNDLE9BQWpDLENBSEYsRUFJRSxtRUFBYyxJQUFkO0FBQW1CLFNBQUssRUFBQztBQUF6QixLQUFpQ0MsT0FBakMsQ0FKRixFQUtFLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLEtBQStCQyxPQUEvQixDQUxGLENBUkYsRUFlRSxvRUFmRixFQWdCRTtBQUFPLFdBQU8sRUFBRVEsT0FBaEI7QUFBeUIsY0FBVSxFQUFFUCxnQkFBckM7QUFBdUQsVUFBTSxFQUFDLFNBQTlEO0FBQXdFLGNBQVUsRUFBRTtBQUFwRixJQWhCRixFQWlCRTtBQUFLLFNBQUssRUFBRTtBQUFFWSxlQUFTLEVBQUU7QUFBYjtBQUFaLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQW9CLGdDQUFwQixDQURGLENBakJGLENBREY7QUF1QkQsQyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FuR3dCNUIsVztVQUNJQywyQzs7O01BREpELFciLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvYmFzaWNkZXRhaWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEZXNjcmlwdGlvbnMsIERpdmlkZXIsIFRhYmxlIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBTaWRlTWVudUxheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL3NpZGUtbWVudS1sYXlvdXQnXG5cbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cbmZ1bmN0aW9uIFBsYWNlSG9sZGVyKHRpdGxlKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPjx0aXRsZT7or6bmg4U8L3RpdGxlPjwvSGVhZD5cbiAgICAgIDxkaXY+e3RpdGxlfTwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljRGV0YWlsKCkge1xuICBjb25zdCB7IGRldGFpbCwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9iYXNpY2RldGFpbCcsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPFBsYWNlSG9sZGVyIHRpdGxlPSdGYWlsZWQgdG8gbGFvZCcgLz5cbiAgaWYgKCFkZXRhaWwpIHtcbiAgICByZXR1cm4gPFBsYWNlSG9sZGVyIHRpdGxlPSdMb2FkaW5nLi4uJyAvPlxuICB9XG5cbiAgY29uc3QgeyByZWZ1bmQsIHVzZXIsIHJlZnVuZExpc3QgfSA9IGRldGFpbFxuICBjb25zdCB7IHBpY2tVcE9yZGVySWQsIHN0YXRlLCBzYWxlT3JkZXJJZCwgc3ViT3JkZXJJZCB9ID0gcmVmdW5kXG4gIGNvbnN0IHsgbmFtZSwgdGVsLCBleHByZXNzLCBhZGRyZXNzLCByZW1hcmtzIH0gPSB1c2VyXG4gIGNvbnN0IHJlZnVuZExpc3RSZXN1bHQgPSAoKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDBcbiAgICBsZXQgYW1vdW50ID0gMFxuICAgIHJlZnVuZExpc3QuZm9yRWFjaChnb29kcyA9PiB7XG4gICAgICBjb3VudCArPSBnb29kcy5jb3VudFxuICAgICAgYW1vdW50ICs9IGdvb2RzLmFtb3VudFxuICAgIH0pXG4gICAgcmV0dXJuIHJlZnVuZExpc3QuY29uY2F0KFt7XG4gICAgICBnb29kc0lkOiAn5oC76K6hJyxcbiAgICAgIGNvdW50LFxuICAgICAgYW1vdW50XG4gICAgfV0pXG4gIH0pKClcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIGtleTogJ2dvb2RzSWQnLFxuICAgICAgdGl0bGU6ICfllYblk4HnvJblj7cnLFxuICAgICAgZGF0YUluZGV4OiAnZ29vZHNJZCcsXG4gICAgICByZW5kZXI6ICh0ZXh0KSA9PiB7XG4gICAgICAgIGlmICh0ZXh0ID09PSAn5oC76K6hJykge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDxhPnt0ZXh0fTwvYT5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ29vZHNOYW1lJyxcbiAgICAgIHRpdGxlOiAn5ZWG5ZOB5ZCN56ewJyxcbiAgICAgIGRhdGFJbmRleDogJ2dvb2RzTmFtZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2dvb2RzQmFyQ29kZScsXG4gICAgICB0aXRsZTogJ+WVhuWTgeadoeeggScsXG4gICAgICBkYXRhSW5kZXg6ICdnb29kc0JhckNvZGUnXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdwcmljZScsXG4gICAgICB0aXRsZTogJ+WNleS7tycsXG4gICAgICBkYXRhSW5kZXg6ICdwcmljZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2NvdW50JyxcbiAgICAgIHRpdGxlOiAn5pWw6YeP77yI5Lu277yJJyxcbiAgICAgIGRhdGFJbmRleDogJ2NvdW50J1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnYW1vdW50JyxcbiAgICAgIHRpdGxlOiAn6YeR6aKdJyxcbiAgICAgIGRhdGFJbmRleDogJ2Ftb3VudCdcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxTaWRlTWVudUxheW91dCB0aXRsZT0n5Z+656GA6K+m5oOFJyBtZW51S2V5PSdkZXRhaWwvYmFzaWNkZXRhaWwnPlxuICAgICAgPERlc2NyaXB0aW9ucyB0aXRsZT0n6YCA5qy+55Sz6K+3Jz5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSflj5botKfljZXlj7cnPntwaWNrVXBPcmRlcklkfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n54q25oCBJz57c3RhdGV9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSfplIDllK7ljZXlj7cnPntzYWxlT3JkZXJJZH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+WtkOiuouWNlSc+e3N1Yk9yZGVySWR9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgIDwvRGVzY3JpcHRpb25zPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxEZXNjcmlwdGlvbnMgdGl0bGU9J+eUqOaIt+S/oeaBryc+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n55So5oi35aeT5ZCNJz57bmFtZX08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+iBlOezu+eUteivnSc+e3RlbH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+W4uOeUqOW/q+mAkic+e2V4cHJlc3N9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSflj5botKflnLDlnYAnPnthZGRyZXNzfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n5aSH5rOoJz57cmVtYXJrc308L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgPC9EZXNjcmlwdGlvbnM+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGFTb3VyY2U9e3JlZnVuZExpc3RSZXN1bHR9IHJvd0tleT0nZ29vZHNJZCcgcGFnaW5hdGlvbj17ZmFsc2V9IC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+PGE+5YWz5LqOPC9hPjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2lkZU1lbnVMYXlvdXQ+XG4gIClcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzIChjb250ZXh0KSB7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnL2FwaS9iYXNpY2RldGFpbCcpXG4vLyAgIGNvbnN0IGRldGFpbCA9IGF3YWl0IGRhdGEuanNvbigpXG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgZGV0YWlsXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detail/basicdetail.jsx\n");

/***/ })

})