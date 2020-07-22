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
    width: 'auto',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9ib29rLmY3YzllZWFhMjYzMmIxNWE0YTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3N3aXRjaHRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBjb2xvcj1cImRlZmF1bHRcIj5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgICAgIHNjcm9sbEJ1dHRvbnM9XCJhdXRvXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3JvbGxhYmxlIGF1dG8gdGFicyBleGFtcGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiJmVtc3A7IEFib3V0IEJvb2sgJmVtc3A7IFwiIHsuLi5hMTF5UHJvcHMoMCl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiJmVtc3A7IEJvb2sgQ29udGVudCAmZW1zcDsgXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCImZW1zcDsgQWJvdXQgVGhlIEF1dGhvciAmZW1zcDsgXCIgey4uLmExMXlQcm9wcygyKX0gLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXswfT5cclxuICAgICAgIFRoZSB2ZWdldGFibGVzIHBlc3RzIHBsYWd1ZSBldmVyeWJvZHkgd2hvIGhhcyBldmVyIHJhaXNlZCB2ZWdldGFibGVzLCBmcm9tIGJhY2t5YXJkIGdhcmRlbmVyIHRvIHByb2Zlc3Npb25hbCBob3J0aWN1bHR1cmlzdHMsIGZhcm0gbWFuYWdlcnMgYW5kIGFncm8tYnVzaW5lc3MgcHJvZmVzc2lvbmFscy4gVGhlIGVjb25vbWljIGltcGFjdHMgb2YgdmVnZXRhYmxlIHBlc3RzIGFyZSBlbm9ybW91cy4gVG8gbWFuYWdlIGFuZCBtaW5pbWl6ZSB0aGUgYWR2ZXJzZSBpbXBhY3RzIG9mIHBlc3RzLCBpdCBpcyBpbXBvcnRhbnQgdG8gaWRlbnRpZnkgZXhhY3RseSB3aGljaCBwZXN0cyBhcmUgYWZmZWN0aW5nIHZlZ2V0YWJsZSBjcm9wcy4gVGhlIHByZXNlbnQgYm9vayBlbnRpdGxlZCAnRWNvLWZyaWVuZGx5IFBlc3QgTWFuYWdlbWVudCBTdHJhdGVnaWVzIGZvciBtYWpvciB2ZWdldGFibGUgY3JvcHMnIHByb3ZpZGVzIGNvbXByZWhlbnNpdmUga25vd2xlZGdlIG9uIHRoZSBpbnNlY3QgcGVzdHMgb2Ygc29tZSBzZWxlY3RlZCB2ZWdldGFibGVzLCBpZGVudGlmaWNhdGlvbiBndWlkZXMsIGRlc2NyaXB0aW9ucyBvZiBwZXN0IGxpZmUgaGlzdG9yeSwgZGFtYWdlIHN5bXB0b21zLCBob3N0IHBsYW50IHJlbGF0aW9uc2hpcHMsIG5hdHVyYWwgZW5lbWllcyBhbmQgcGVzdCBtYW5hZ2VtZW50IHJlY29tbWVuZGF0aW9ucy4gSW4gYWRkaXRpb24gdG8gYWJvdmUsIHRoZSBib29rIGFsc28gaW5jbHVkZXMgdGhlIHVzZSBvZiBsdXJlIHRyYXBzIGFuZCBvdGhlciBlY28tZnJpZW5kbHkgbWFuYWdlbWVudCB0ZWNobmlxdWVzIGZvciBmcnVpdCBmbGllcyBhbmQgaG9zdCBwbGFudCByZXNpc3RhbmNlIGFzIGEgY29tcG9uZW50IHRvIG9yZ2FuaWMgcGVzdCBtYW5hZ2VtZW50IGluIHZlZ2V0YWJsZSBjcm9wcyBhbG9uZyB3aXRoIG9yZ2FuaWMgYWdyaWN1bHR1cmUtIG15dGhzIGFuZCByZWFsaXRpZXMuIEV2ZXJ5IGdhcmRlbmVyLCBob3J0aWN1bHR1cmFsaXN0LCBzY2llbnRpc3RzLCBmYXJtZXJzLCBkZWNpc2lvbi1tYWtlcnMgYW5kIHBvbGl0aWNpYW5zIHdobyB3aXNoIHRvIGJ1aWxkIGEgc2FmZSBhZ3JpY3VsdHVyZSBzaG91bGQgaGF2ZSB0aGlzIGJvb2sgYXMgYSBjb21wbGV0ZSByZWZlcmVuY2UuXHJcbiAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cclxuICAgICAgICBJdGVtIFR3b1xyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn0+XHJcbiAgICAgICAgSXRlbSBUaHJlZVxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==