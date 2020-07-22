require("source-map-support").install();
exports.id = "book";
exports.modules = {

/***/ "./src/components/switchtab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonAuto; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\switchtab.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: `scrollable-auto-tabpanel-${index}`,
    "aria-labelledby": `scrollable-auto-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), value === index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children)));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    width: '50%',
    backgroundColor: theme.palette.background.paper
  }
}));
function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "scrollable auto tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "\u2003 About Book \u2003 "
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "\u2003 Book Content \u2003 "
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    label: "\u2003 About The Author \u2003 "
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "The vegetables pests plague everybody who has ever raised vegetables, from backyard gardener to professional horticulturists, farm managers and agro-business professionals. The economic impacts of vegetable pests are enormous. To manage and minimize the adverse impacts of pests, it is important to identify exactly which pests are affecting vegetable crops. The present book entitled 'Eco-friendly Pest Management Strategies for major vegetable crops' provides comprehensive knowledge on the insect pests of some selected vegetables, identification guides, descriptions of pest life history, damage symptoms, host plant relationships, natural enemies and pest management recommendations. In addition to above, the book also includes the use of lure traps and other eco-friendly management techniques for fruit flies and host plant resistance as a component to organic pest management in vegetable crops along with organic agriculture- myths and realities. Every gardener, horticulturalist, scientists, farmers, decision-makers and politicians who wish to build a safe agriculture should have this book as a complete reference."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Item Two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Item Three"));
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9ib29rLjMwMjZlZjNlYTQyMTNhMzY2M2IxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3N3aXRjaHRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHdpZHRoOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0bygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICAgICAgc2Nyb2xsQnV0dG9ucz1cImF1dG9cIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNjcm9sbGFibGUgYXV0byB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCImZW1zcDsgQWJvdXQgQm9vayAmZW1zcDsgXCIgey4uLmExMXlQcm9wcygwKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCImZW1zcDsgQm9vayBDb250ZW50ICZlbXNwOyBcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIiZlbXNwOyBBYm91dCBUaGUgQXV0aG9yICZlbXNwOyBcIiB7Li4uYTExeVByb3BzKDIpfSAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxyXG4gICAgICAgVGhlIHZlZ2V0YWJsZXMgcGVzdHMgcGxhZ3VlIGV2ZXJ5Ym9keSB3aG8gaGFzIGV2ZXIgcmFpc2VkIHZlZ2V0YWJsZXMsIGZyb20gYmFja3lhcmQgZ2FyZGVuZXIgdG8gcHJvZmVzc2lvbmFsIGhvcnRpY3VsdHVyaXN0cywgZmFybSBtYW5hZ2VycyBhbmQgYWdyby1idXNpbmVzcyBwcm9mZXNzaW9uYWxzLiBUaGUgZWNvbm9taWMgaW1wYWN0cyBvZiB2ZWdldGFibGUgcGVzdHMgYXJlIGVub3Jtb3VzLiBUbyBtYW5hZ2UgYW5kIG1pbmltaXplIHRoZSBhZHZlcnNlIGltcGFjdHMgb2YgcGVzdHMsIGl0IGlzIGltcG9ydGFudCB0byBpZGVudGlmeSBleGFjdGx5IHdoaWNoIHBlc3RzIGFyZSBhZmZlY3RpbmcgdmVnZXRhYmxlIGNyb3BzLiBUaGUgcHJlc2VudCBib29rIGVudGl0bGVkICdFY28tZnJpZW5kbHkgUGVzdCBNYW5hZ2VtZW50IFN0cmF0ZWdpZXMgZm9yIG1ham9yIHZlZ2V0YWJsZSBjcm9wcycgcHJvdmlkZXMgY29tcHJlaGVuc2l2ZSBrbm93bGVkZ2Ugb24gdGhlIGluc2VjdCBwZXN0cyBvZiBzb21lIHNlbGVjdGVkIHZlZ2V0YWJsZXMsIGlkZW50aWZpY2F0aW9uIGd1aWRlcywgZGVzY3JpcHRpb25zIG9mIHBlc3QgbGlmZSBoaXN0b3J5LCBkYW1hZ2Ugc3ltcHRvbXMsIGhvc3QgcGxhbnQgcmVsYXRpb25zaGlwcywgbmF0dXJhbCBlbmVtaWVzIGFuZCBwZXN0IG1hbmFnZW1lbnQgcmVjb21tZW5kYXRpb25zLiBJbiBhZGRpdGlvbiB0byBhYm92ZSwgdGhlIGJvb2sgYWxzbyBpbmNsdWRlcyB0aGUgdXNlIG9mIGx1cmUgdHJhcHMgYW5kIG90aGVyIGVjby1mcmllbmRseSBtYW5hZ2VtZW50IHRlY2huaXF1ZXMgZm9yIGZydWl0IGZsaWVzIGFuZCBob3N0IHBsYW50IHJlc2lzdGFuY2UgYXMgYSBjb21wb25lbnQgdG8gb3JnYW5pYyBwZXN0IG1hbmFnZW1lbnQgaW4gdmVnZXRhYmxlIGNyb3BzIGFsb25nIHdpdGggb3JnYW5pYyBhZ3JpY3VsdHVyZS0gbXl0aHMgYW5kIHJlYWxpdGllcy4gRXZlcnkgZ2FyZGVuZXIsIGhvcnRpY3VsdHVyYWxpc3QsIHNjaWVudGlzdHMsIGZhcm1lcnMsIGRlY2lzaW9uLW1ha2VycyBhbmQgcG9saXRpY2lhbnMgd2hvIHdpc2ggdG8gYnVpbGQgYSBzYWZlIGFncmljdWx0dXJlIHNob3VsZCBoYXZlIHRoaXMgYm9vayBhcyBhIGNvbXBsZXRlIHJlZmVyZW5jZS5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxyXG4gICAgICAgIEl0ZW0gVHdvXHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfT5cclxuICAgICAgICBJdGVtIFRocmVlXHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7OztBIiwic291cmNlUm9vdCI6IiJ9