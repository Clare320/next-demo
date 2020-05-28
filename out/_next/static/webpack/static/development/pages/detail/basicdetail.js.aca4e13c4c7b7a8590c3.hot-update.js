webpackHotUpdate("static/development/pages/detail/basicdetail.js",{

/***/ "./pages/detail/basicdetail.jsx":
/*!**************************************!*\
  !*** ./pages/detail/basicdetail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BasicDetail; });\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ \"./node_modules/antd/lib/table/style/index.js\");\n/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ \"./node_modules/antd/lib/table/index.js\");\n/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider/style */ \"./node_modules/antd/lib/divider/style/index.js\");\n/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ \"./node_modules/antd/lib/divider/index.js\");\n/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/descriptions/style */ \"./node_modules/antd/lib/descriptions/style/index.js\");\n/* harmony import */ var antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/descriptions */ \"./node_modules/antd/lib/descriptions/index.js\");\n/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/side-menu-layout */ \"./layouts/side-menu-layout/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\n\n\n\n\nvar fetcher = function fetcher(url) {\n  return fetch(url).then(function (res) {\n    return res.json();\n  });\n};\n\nfunction PlaceHolder(_ref) {\n  var content = _ref.content;\n  return __jsx(\"div\", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx(\"title\", null, \"\\u8BE6\\u60C5\")), __jsx(\"div\", null, content));\n}\n\n_c = PlaceHolder;\nfunction BasicDetail() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('/api/basicdetail', fetcher),\n      detail = _useSWR.detail,\n      error = _useSWR.error;\n\n  if (error) return __jsx(PlaceHolder, {\n    key: \"fail\",\n    content: \"Failed to laod\"\n  });\n\n  if (!detail) {\n    return __jsx(PlaceHolder, {\n      key: \"loading\",\n      content: \"Loading...\"\n    });\n  }\n\n  var refund = detail.refund,\n      user = detail.user,\n      refundList = detail.refundList;\n  var pickUpOrderId = refund.pickUpOrderId,\n      state = refund.state,\n      saleOrderId = refund.saleOrderId,\n      subOrderId = refund.subOrderId;\n  var name = user.name,\n      tel = user.tel,\n      express = user.express,\n      address = user.address,\n      remarks = user.remarks;\n\n  var refundListResult = function () {\n    var count = 0;\n    var amount = 0;\n    refundList.forEach(function (goods) {\n      count += goods.count;\n      amount += goods.amount;\n    });\n    return refundList.concat([{\n      goodsId: '总计',\n      count: count,\n      amount: amount\n    }]);\n  }();\n\n  var columns = [{\n    key: 'goodsId',\n    title: '商品编号',\n    dataIndex: 'goodsId',\n    render: function render(text) {\n      if (text === '总计') {\n        return text;\n      } else {\n        return __jsx(\"a\", null, text);\n      }\n    }\n  }, {\n    key: 'goodsName',\n    title: '商品名称',\n    dataIndex: 'goodsName'\n  }, {\n    key: 'goodsBarCode',\n    title: '商品条码',\n    dataIndex: 'goodsBarCode'\n  }, {\n    key: 'price',\n    title: '单价',\n    dataIndex: 'price'\n  }, {\n    key: 'count',\n    title: '数量（件）',\n    dataIndex: 'count'\n  }, {\n    key: 'amount',\n    title: '金额',\n    dataIndex: 'amount'\n  }];\n  return __jsx(_layouts_side_menu_layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    title: \"\\u57FA\\u7840\\u8BE6\\u60C5\",\n    menuKey: \"detail/basicdetail\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u9000\\u6B3E\\u7533\\u8BF7\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5355\\u53F7\"\n  }, pickUpOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u72B6\\u6001\"\n  }, state), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u9500\\u552E\\u5355\\u53F7\"\n  }, saleOrderId), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5B50\\u8BA2\\u5355\"\n  }, subOrderId)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    title: \"\\u7528\\u6237\\u4FE1\\u606F\"\n  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u7528\\u6237\\u59D3\\u540D\"\n  }, name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u8054\\u7CFB\\u7535\\u8BDD\"\n  }, tel), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5E38\\u7528\\u5FEB\\u9012\"\n  }, express), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u53D6\\u8D27\\u5730\\u5740\"\n  }, address), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n    label: \"\\u5907\\u6CE8\"\n  }, remarks)), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, null), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    columns: columns,\n    dataSource: refundListResult,\n    rowKey: \"goodsId\",\n    pagination: false\n  }), __jsx(\"div\", {\n    style: {\n      marginTop: 20\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/about\"\n  }, __jsx(\"a\", null, \"\\u5173\\u4E8E\"))));\n} // export async function getStaticProps (context) {\n//   const data = await fetch('/api/basicdetail')\n//   const detail = await data.json()\n//   return {\n//     props: {\n//       detail\n//     }\n//   }\n// }\n\n_s(BasicDetail, \"8IMNtjAw8p9FplWE9Sr+iF6NnTo=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c2 = BasicDetail;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PlaceHolder\");\n$RefreshReg$(_c2, \"BasicDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWwvYmFzaWNkZXRhaWwuanN4PzAxYWUiXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJQbGFjZUhvbGRlciIsImNvbnRlbnQiLCJCYXNpY0RldGFpbCIsInVzZVNXUiIsImRldGFpbCIsImVycm9yIiwicmVmdW5kIiwidXNlciIsInJlZnVuZExpc3QiLCJwaWNrVXBPcmRlcklkIiwic3RhdGUiLCJzYWxlT3JkZXJJZCIsInN1Yk9yZGVySWQiLCJuYW1lIiwidGVsIiwiZXhwcmVzcyIsImFkZHJlc3MiLCJyZW1hcmtzIiwicmVmdW5kTGlzdFJlc3VsdCIsImNvdW50IiwiYW1vdW50IiwiZm9yRWFjaCIsImdvb2RzIiwiY29uY2F0IiwiZ29vZHNJZCIsImNvbHVtbnMiLCJrZXkiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsInRleHQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBQW5CLENBQVQ7QUFBQSxDQUFoQjs7QUFFQSxTQUFTQyxXQUFULE9BQW1DO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ2pDLFNBQ0UsbUJBQ0UsTUFBQyxnREFBRCxRQUFNLG9DQUFOLENBREYsRUFFRSxtQkFBTUEsT0FBTixDQUZGLENBREY7QUFNRDs7S0FQUUQsVztBQVNNLFNBQVNFLFdBQVQsR0FBd0I7QUFBQTs7QUFBQSxnQkFDWEMsbURBQU0sQ0FBQyxrQkFBRCxFQUFxQlQsT0FBckIsQ0FESztBQUFBLE1BQzdC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dCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IERlc2NyaXB0aW9ucywgRGl2aWRlciwgVGFibGUgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IFNpZGVNZW51TGF5b3V0IGZyb20gJy4uLy4uL2xheW91dHMvc2lkZS1tZW51LWxheW91dCdcblxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblxuZnVuY3Rpb24gUGxhY2VIb2xkZXIgKHsgY29udGVudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPjx0aXRsZT7or6bmg4U8L3RpdGxlPjwvSGVhZD5cbiAgICAgIDxkaXY+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNEZXRhaWwgKCkge1xuICBjb25zdCB7IGRldGFpbCwgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9iYXNpY2RldGFpbCcsIGZldGNoZXIpXG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPFBsYWNlSG9sZGVyIGtleT0nZmFpbCcgY29udGVudD0nRmFpbGVkIHRvIGxhb2QnIC8+XG4gIGlmICghZGV0YWlsKSB7XG4gICAgcmV0dXJuIDxQbGFjZUhvbGRlciBrZXk9J2xvYWRpbmcnIGNvbnRlbnQ9J0xvYWRpbmcuLi4nIC8+XG4gIH1cblxuICBjb25zdCB7IHJlZnVuZCwgdXNlciwgcmVmdW5kTGlzdCB9ID0gZGV0YWlsXG4gIGNvbnN0IHsgcGlja1VwT3JkZXJJZCwgc3RhdGUsIHNhbGVPcmRlcklkLCBzdWJPcmRlcklkIH0gPSByZWZ1bmRcbiAgY29uc3QgeyBuYW1lLCB0ZWwsIGV4cHJlc3MsIGFkZHJlc3MsIHJlbWFya3MgfSA9IHVzZXJcbiAgY29uc3QgcmVmdW5kTGlzdFJlc3VsdCA9ICgoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGxldCBhbW91bnQgPSAwXG4gICAgcmVmdW5kTGlzdC5mb3JFYWNoKGdvb2RzID0+IHtcbiAgICAgIGNvdW50ICs9IGdvb2RzLmNvdW50XG4gICAgICBhbW91bnQgKz0gZ29vZHMuYW1vdW50XG4gICAgfSlcbiAgICByZXR1cm4gcmVmdW5kTGlzdC5jb25jYXQoW3tcbiAgICAgIGdvb2RzSWQ6ICfmgLvorqEnLFxuICAgICAgY291bnQsXG4gICAgICBhbW91bnRcbiAgICB9XSlcbiAgfSkoKVxuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAga2V5OiAnZ29vZHNJZCcsXG4gICAgICB0aXRsZTogJ+WVhuWTgee8luWPtycsXG4gICAgICBkYXRhSW5kZXg6ICdnb29kc0lkJyxcbiAgICAgIHJlbmRlcjogKHRleHQpID0+IHtcbiAgICAgICAgaWYgKHRleHQgPT09ICfmgLvorqEnKSB7XG4gICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPGE+e3RleHR9PC9hPlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdnb29kc05hbWUnLFxuICAgICAgdGl0bGU6ICfllYblk4HlkI3np7AnLFxuICAgICAgZGF0YUluZGV4OiAnZ29vZHNOYW1lJ1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ29vZHNCYXJDb2RlJyxcbiAgICAgIHRpdGxlOiAn5ZWG5ZOB5p2h56CBJyxcbiAgICAgIGRhdGFJbmRleDogJ2dvb2RzQmFyQ29kZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ3ByaWNlJyxcbiAgICAgIHRpdGxlOiAn5Y2V5Lu3JyxcbiAgICAgIGRhdGFJbmRleDogJ3ByaWNlJ1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnY291bnQnLFxuICAgICAgdGl0bGU6ICfmlbDph4/vvIjku7bvvIknLFxuICAgICAgZGF0YUluZGV4OiAnY291bnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdhbW91bnQnLFxuICAgICAgdGl0bGU6ICfph5Hpop0nLFxuICAgICAgZGF0YUluZGV4OiAnYW1vdW50J1xuICAgIH1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPFNpZGVNZW51TGF5b3V0IHRpdGxlPSfln7rnoYDor6bmg4UnIG1lbnVLZXk9J2RldGFpbC9iYXNpY2RldGFpbCc+XG4gICAgICA8RGVzY3JpcHRpb25zIHRpdGxlPSfpgIDmrL7nlLPor7cnPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+WPlui0p+WNleWPtyc+e3BpY2tVcE9yZGVySWR9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSfnirbmgIEnPntzdGF0ZX08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+mUgOWUruWNleWPtyc+e3NhbGVPcmRlcklkfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n5a2Q6K6i5Y2VJz57c3ViT3JkZXJJZH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgPC9EZXNjcmlwdGlvbnM+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPERlc2NyaXB0aW9ucyB0aXRsZT0n55So5oi35L+h5oGvJz5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSfnlKjmiLflp5PlkI0nPntuYW1lfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n6IGU57O755S16K+dJz57dGVsfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD0n5bi455So5b+r6YCSJz57ZXhwcmVzc308L0Rlc2NyaXB0aW9ucy5JdGVtPlxuICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9J+WPlui0p+WcsOWdgCc+e2FkZHJlc3N9PC9EZXNjcmlwdGlvbnMuSXRlbT5cbiAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPSflpIfms6gnPntyZW1hcmtzfTwvRGVzY3JpcHRpb25zLkl0ZW0+XG4gICAgICA8L0Rlc2NyaXB0aW9ucz5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YVNvdXJjZT17cmVmdW5kTGlzdFJlc3VsdH0gcm93S2V5PSdnb29kc0lkJyBwYWdpbmF0aW9uPXtmYWxzZX0gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz48YT7lhbPkuo48L2E+PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9TaWRlTWVudUxheW91dD5cbiAgKVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKGNvbnRleHQpIHtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCcvYXBpL2Jhc2ljZGV0YWlsJylcbi8vICAgY29uc3QgZGV0YWlsID0gYXdhaXQgZGF0YS5qc29uKClcblxuLy8gICByZXR1cm4ge1xuLy8gICAgIHByb3BzOiB7XG4vLyAgICAgICBkZXRhaWxcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/basicdetail.jsx\n");

/***/ })

})