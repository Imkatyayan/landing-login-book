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
    flexGrow: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9ib29rLjEwYTg3Njk1ZGI0NjIwZjc1NDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3N3aXRjaHRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcclxuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgIGlkPXtgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1hdXRvLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gLFxyXG4gICAgJ2FyaWEtY29udHJvbHMnOiBgc2Nyb2xsYWJsZS1hdXRvLXRhYnBhbmVsLSR7aW5kZXh9YCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMTAsXHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2Nyb2xsYWJsZSBhdXRvIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIiZlbXNwOyBBYm91dCBCb29rICZlbXNwOyBcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIiZlbXNwOyBCb29rIENvbnRlbnQgJmVtc3A7IFwiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiJmVtc3A7IEFib3V0IFRoZSBBdXRob3IgJmVtc3A7IFwiIHsuLi5hMTF5UHJvcHMoMil9IC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcbiAgICAgICBUaGUgdmVnZXRhYmxlcyBwZXN0cyBwbGFndWUgZXZlcnlib2R5IHdobyBoYXMgZXZlciByYWlzZWQgdmVnZXRhYmxlcywgZnJvbSBiYWNreWFyZCBnYXJkZW5lciB0byBwcm9mZXNzaW9uYWwgaG9ydGljdWx0dXJpc3RzLCBmYXJtIG1hbmFnZXJzIGFuZCBhZ3JvLWJ1c2luZXNzIHByb2Zlc3Npb25hbHMuIFRoZSBlY29ub21pYyBpbXBhY3RzIG9mIHZlZ2V0YWJsZSBwZXN0cyBhcmUgZW5vcm1vdXMuIFRvIG1hbmFnZSBhbmQgbWluaW1pemUgdGhlIGFkdmVyc2UgaW1wYWN0cyBvZiBwZXN0cywgaXQgaXMgaW1wb3J0YW50IHRvIGlkZW50aWZ5IGV4YWN0bHkgd2hpY2ggcGVzdHMgYXJlIGFmZmVjdGluZyB2ZWdldGFibGUgY3JvcHMuIFRoZSBwcmVzZW50IGJvb2sgZW50aXRsZWQgJ0Vjby1mcmllbmRseSBQZXN0IE1hbmFnZW1lbnQgU3RyYXRlZ2llcyBmb3IgbWFqb3IgdmVnZXRhYmxlIGNyb3BzJyBwcm92aWRlcyBjb21wcmVoZW5zaXZlIGtub3dsZWRnZSBvbiB0aGUgaW5zZWN0IHBlc3RzIG9mIHNvbWUgc2VsZWN0ZWQgdmVnZXRhYmxlcywgaWRlbnRpZmljYXRpb24gZ3VpZGVzLCBkZXNjcmlwdGlvbnMgb2YgcGVzdCBsaWZlIGhpc3RvcnksIGRhbWFnZSBzeW1wdG9tcywgaG9zdCBwbGFudCByZWxhdGlvbnNoaXBzLCBuYXR1cmFsIGVuZW1pZXMgYW5kIHBlc3QgbWFuYWdlbWVudCByZWNvbW1lbmRhdGlvbnMuIEluIGFkZGl0aW9uIHRvIGFib3ZlLCB0aGUgYm9vayBhbHNvIGluY2x1ZGVzIHRoZSB1c2Ugb2YgbHVyZSB0cmFwcyBhbmQgb3RoZXIgZWNvLWZyaWVuZGx5IG1hbmFnZW1lbnQgdGVjaG5pcXVlcyBmb3IgZnJ1aXQgZmxpZXMgYW5kIGhvc3QgcGxhbnQgcmVzaXN0YW5jZSBhcyBhIGNvbXBvbmVudCB0byBvcmdhbmljIHBlc3QgbWFuYWdlbWVudCBpbiB2ZWdldGFibGUgY3JvcHMgYWxvbmcgd2l0aCBvcmdhbmljIGFncmljdWx0dXJlLSBteXRocyBhbmQgcmVhbGl0aWVzLiBFdmVyeSBnYXJkZW5lciwgaG9ydGljdWx0dXJhbGlzdCwgc2NpZW50aXN0cywgZmFybWVycywgZGVjaXNpb24tbWFrZXJzIGFuZCBwb2xpdGljaWFucyB3aG8gd2lzaCB0byBidWlsZCBhIHNhZmUgYWdyaWN1bHR1cmUgc2hvdWxkIGhhdmUgdGhpcyBib29rIGFzIGEgY29tcGxldGUgcmVmZXJlbmNlLlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgICAgSXRlbSBUd29cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG4gICAgICAgIEl0ZW0gVGhyZWVcclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=