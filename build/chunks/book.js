require("source-map-support").install();
exports.ids = ["book"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/book/Book.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\r\n\r\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\r\n\r\n.Book-rot-3YiIU {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.Book-container-1KgN7 {\r\n \t-ms-flex-align: center;\r\n \t    align-items: center;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  padding: 30px 80px;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 15px 16px .17px rgba(0,0,0,0.05);\r\n          box-shadow: 0 15px 16px .17px rgba(0,0,0,0.05);\r\n}\r\n\r\nimg{\r\n\twidth: 350px;\r\n\theight: 350px;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-pack: end;\r\n\t    justify-content: flex-end;\r\n\t-ms-flex-align: center;\r\n\t    align-items: center;\r\n\tpadding: 20px;\r\n}", "",{"version":3,"sources":["Book.css","../../components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;;ACPF;;;;;;;EAOE;;AAEF;EACE;;+EAE6E;;EAE7E,iEAAiE;;EAEjE;;+EAE6E;;EAE7E,2BAA2B;;EAE3B;;+EAE6E;;EAE7E,sBAAsB,GAAG,+BAA+B;EACxD,sBAAsB,GAAG,0BAA0B;EACnD,sBAAsB,GAAG,4BAA4B;EACrD,uBAAuB,EAAE,gCAAgC;AAC3D;;ADnBA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAGA;EACE,sBAAmB;MAAnB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,sDAA8C;UAA9C,8CAA8C;AAChD;;AACA;CACC,YAAY;CACZ,aAAa;CACb,oBAAa;CAAb,aAAa;CACb,kBAAyB;KAAzB,yBAAyB;CACzB,sBAAmB;KAAnB,mBAAmB;CACnB,aAAa;AACd","file":"Book.css","sourcesContent":["/**\r\n * React Starter Kit (https://www.reactstarterkit.com/)\r\n *\r\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE.txt file in the root directory of this source tree.\r\n */\r\n\r\n@import '../../components/variables.css';\r\n\r\n.rot {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n\r\n.container {\r\n \talign-items: center;\r\n  background: #fff;\r\n  border-radius: 20px;\r\n  padding: 30px 80px;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  box-shadow: 0 15px 16px .17px rgba(0,0,0,0.05);\r\n}\r\nimg{\r\n\twidth: 350px;\r\n\theight: 350px;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n\tpadding: 20px;\r\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"]}]);
// Exports
exports.locals = {
	"rot": "Book-rot-3YiIU",
	"container": "Book-container-1KgN7"
};

/***/ }),

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
  }, "Eco-friendly Pest Management Strategies for Major Vegetable Crops Pests of Brinjal (Eggplant) and their Eco-Friendly Management Techniques Tamoghna Saha, Hari Krishna, Nithya Chandran, Sharwan Kumar, Sailabala Dei and Archana Kumari Organic Pest Management Strategies in Tomato Romila Akoijam, Atanu Seni and Sandip Patra Insect and Non Insect Pests of Chilli and their Environment Friendly Management Rachana R. R., RichaVarshney, Romila Akoijam and Jayasimha G. T. Insect Pests of Okra and their Eco-friendly Management Atanu Seni, Romila Akoijam and Sandip Patra Cruciferous Vegetables: Scope of Organic based Pest Management ShyamBabu Sah Leguminous Vegetables: Strategies of Eco-friendly Management of Important Insect Pests Biswajit Patra Pest Problems and their Eco-friendly Management Techniques in Leafy Vegetables Gautam Chakraborty and S. Mondal Pest Problem and their Management Strategies of Tuber and Root Vegetable Crops Kalmesh Managanvi, Tamoghna Saha and Nithya Chandran Insect Pests of Moringa and their Ecofriendly Management Atanu Seni and Jaydeep Halder Use of Lure Traps and other Eco-friendly Techniques for Organic Pest Management against Fruit Flies Sheikh Khursheed and Farooz Hassan Host Plant Resistance as a Component to Organic Pest Management in Vegetable Crops Rachana R. R., Richa Varshney, Romila Akoijam and Jayasimha G. T. Organic Agriculture: Myths, Realities and Beyond Prabuddha Ray and Sarthak Chowdhury"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Tamoghna Saha, Ph.D. is serving as Assistant Professor-cum-Junior Scientist, Entomology at Bihar Agricultural University (BAU), Sabour, Bhagalpur, Bihar and having more than seven and half years of experience in teaching (Undergraduate, Post-graduate and Ph. D), research, extension and training. He is the major advisor of five M.Sc. (3 completed) and one Ph. D student and also Co-advisor around twelve students in Post Graduate programme. His research currently covers host plant resistance on vegetable crops, toxicological studies and eco-friendly pest management on vegetable crops. He has released three technologies for management of key insect pests on vegetable crops in his short service carrier. Dr. Saha is presently associated with All India Coordinated Research Project on Vegetable Crops where he is catering a large no of entomological field trials.  He received post graduation in entomology from University Agricultural Sciences, Dharwad and acquired doctorate from Bidhan Chandra Krishi Vishwavidyalaya, Kalyani, Nadia, West Bengal. Dr. Saha has published many research papers, review articles and book chapters in various national and international journals. He is also an active member of editorial board of different national and international journals. Dr. Saha is Life Fellow of Entomological Society of India and Society of Plant Protection Sciences."));
}

/***/ }),

/***/ "./src/routes/book/Book.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/book/Book.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/book/Book.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/book/Book.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/book/Book.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Book_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/book/Book.css");
/* harmony import */ var _Book_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Book_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/navbar.js");
/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/searchbar.js");
/* harmony import */ var _components_list1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/list1.js");
/* harmony import */ var _components_switchtab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/switchtab.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cover_book_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/routes/book/cover-book.png");
/* harmony import */ var _cover_book_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_cover_book_png__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\book\\Book.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */















const UseStyless = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  root: {
    flexGrow: 3
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 500,
    height: 400
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));
function Book({
  title
}) {
  const classes = UseStyless();
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default()(_Book_css__WEBPACK_IMPORTED_MODULE_3___default.a);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Book_css__WEBPACK_IMPORTED_MODULE_3___default.a.rot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_searchbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _cover_book_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 12,
    sm: true,
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: true,
    container: true,
    direction: "column",
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "The Devils 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "body2",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "No Of Pages : 272 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "Publisher : Agrobios (India) ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), "Language : English"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "ISBN : 9788194377665"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "body2",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: _Book_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    id: "quant",
    type: "number",
    placeholder: "Quantity",
    name: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "body2",
    style: {
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Remove ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Add to Cart"), "  \u2003", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Wishlist")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "$19.00"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Book_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_switchtab__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list1__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/routes/book/cover-book.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/book/cover-book.png?7b0fd313";

/***/ }),

/***/ "./src/routes/book/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/book/Book.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\book\\index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Book Information';

function action() {
  return {
    title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Book__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2Jvb2suanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvYm9vay9Cb29rLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3N3aXRjaHRhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Jvb2svQm9vay5jc3M/NTkxMCIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvYm9vay9Cb29rLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9ib29rL2NvdmVyLWJvb2sucG5nIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9ib29rL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxyXFxuICpcXHJcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXHJcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcclxcbiAqL1xcclxcblxcclxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcclxcblxcclxcbi5Cb29rLXJvdC0zWWlJVSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkJvb2stY29udGFpbmVyLTFLZ043IHtcXHJcXG4gXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gXFx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNXB4IDE2cHggLjE3cHggcmdiYSgwLDAsMCwwLjA1KTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDE2cHggLjE3cHggcmdiYSgwLDAsMCwwLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuaW1ne1xcclxcblxcdHdpZHRoOiAzNTBweDtcXHJcXG5cXHRoZWlnaHQ6IDM1MHB4O1xcclxcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0LW1zLWZsZXgtcGFjazogZW5kO1xcclxcblxcdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQm9vay5jc3NcIixcIi4uLy4uL2NvbXBvbmVudHMvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztFQU9FOztBQ1BGOzs7Ozs7O0VBT0U7O0FBRUY7RUFDRTs7K0VBRTZFOztFQUU3RSxpRUFBaUU7O0VBRWpFOzsrRUFFNkU7O0VBRTdFLDJCQUEyQjs7RUFFM0I7OytFQUU2RTs7RUFFN0Usc0JBQXNCLEdBQUcsK0JBQStCO0VBQ3hELHNCQUFzQixHQUFHLDBCQUEwQjtFQUNuRCxzQkFBc0IsR0FBRyw0QkFBNEI7RUFDckQsdUJBQXVCLEVBQUUsZ0NBQWdDO0FBQzNEOztBRG5CQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxzQkFBbUI7TUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0RBQThDO1VBQTlDLDhDQUE4QztBQUNoRDs7QUFDQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isb0JBQWE7Q0FBYixhQUFhO0NBQ2Isa0JBQXlCO0tBQXpCLHlCQUF5QjtDQUN6QixzQkFBbUI7S0FBbkIsbUJBQW1CO0NBQ25CLGFBQWE7QUFDZFwiLFwiZmlsZVwiOlwiQm9vay5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxyXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcclxcbiAqXFxyXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcclxcbiAqXFxyXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxyXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3ZhcmlhYmxlcy5jc3MnO1xcclxcblxcclxcbi5yb3Qge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiBcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDgwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3gtc2hhZG93OiAwIDE1cHggMTZweCAuMTdweCByZ2JhKDAsMCwwLDAuMDUpO1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuXFx0d2lkdGg6IDM1MHB4O1xcclxcblxcdGhlaWdodDogMzUwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMjBweDtcXHJcXG59XCIsXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb3RcIjogXCJCb29rLXJvdC0zWWlJVVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkJvb2stY29udGFpbmVyLTFLZ043XCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XHJcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuXHJcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxyXG4gICAgICBpZD17YHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWB9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT17YHNjcm9sbGFibGUtYXV0by10YWItJHtpbmRleH1gfVxyXG4gICAgICB7Li4ub3RoZXJ9XHJcbiAgICA+XHJcbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgIDxCb3ggcD17M30+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGBzY3JvbGxhYmxlLWF1dG8tdGFiLSR7aW5kZXh9YCxcclxuICAgICdhcmlhLWNvbnRyb2xzJzogYHNjcm9sbGFibGUtYXV0by10YWJwYW5lbC0ke2luZGV4fWAsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsYWJsZVRhYnNCdXR0b25BdXRvKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY29sb3I9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgICAgICBzY3JvbGxCdXR0b25zPVwiYXV0b1wiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2Nyb2xsYWJsZSBhdXRvIHRhYnMgZXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIiZlbXNwOyBBYm91dCBCb29rICZlbXNwOyBcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIiZlbXNwOyBCb29rIENvbnRlbnQgJmVtc3A7IFwiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiJmVtc3A7IEFib3V0IFRoZSBBdXRob3IgJmVtc3A7IFwiIHsuLi5hMTF5UHJvcHMoMil9IC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0+XHJcbiAgICAgICBUaGUgdmVnZXRhYmxlcyBwZXN0cyBwbGFndWUgZXZlcnlib2R5IHdobyBoYXMgZXZlciByYWlzZWQgdmVnZXRhYmxlcywgZnJvbSBiYWNreWFyZCBnYXJkZW5lciB0byBwcm9mZXNzaW9uYWwgaG9ydGljdWx0dXJpc3RzLCBmYXJtIG1hbmFnZXJzIGFuZCBhZ3JvLWJ1c2luZXNzIHByb2Zlc3Npb25hbHMuIFRoZSBlY29ub21pYyBpbXBhY3RzIG9mIHZlZ2V0YWJsZSBwZXN0cyBhcmUgZW5vcm1vdXMuIFRvIG1hbmFnZSBhbmQgbWluaW1pemUgdGhlIGFkdmVyc2UgaW1wYWN0cyBvZiBwZXN0cywgaXQgaXMgaW1wb3J0YW50IHRvIGlkZW50aWZ5IGV4YWN0bHkgd2hpY2ggcGVzdHMgYXJlIGFmZmVjdGluZyB2ZWdldGFibGUgY3JvcHMuIFRoZSBwcmVzZW50IGJvb2sgZW50aXRsZWQgJ0Vjby1mcmllbmRseSBQZXN0IE1hbmFnZW1lbnQgU3RyYXRlZ2llcyBmb3IgbWFqb3IgdmVnZXRhYmxlIGNyb3BzJyBwcm92aWRlcyBjb21wcmVoZW5zaXZlIGtub3dsZWRnZSBvbiB0aGUgaW5zZWN0IHBlc3RzIG9mIHNvbWUgc2VsZWN0ZWQgdmVnZXRhYmxlcywgaWRlbnRpZmljYXRpb24gZ3VpZGVzLCBkZXNjcmlwdGlvbnMgb2YgcGVzdCBsaWZlIGhpc3RvcnksIGRhbWFnZSBzeW1wdG9tcywgaG9zdCBwbGFudCByZWxhdGlvbnNoaXBzLCBuYXR1cmFsIGVuZW1pZXMgYW5kIHBlc3QgbWFuYWdlbWVudCByZWNvbW1lbmRhdGlvbnMuIEluIGFkZGl0aW9uIHRvIGFib3ZlLCB0aGUgYm9vayBhbHNvIGluY2x1ZGVzIHRoZSB1c2Ugb2YgbHVyZSB0cmFwcyBhbmQgb3RoZXIgZWNvLWZyaWVuZGx5IG1hbmFnZW1lbnQgdGVjaG5pcXVlcyBmb3IgZnJ1aXQgZmxpZXMgYW5kIGhvc3QgcGxhbnQgcmVzaXN0YW5jZSBhcyBhIGNvbXBvbmVudCB0byBvcmdhbmljIHBlc3QgbWFuYWdlbWVudCBpbiB2ZWdldGFibGUgY3JvcHMgYWxvbmcgd2l0aCBvcmdhbmljIGFncmljdWx0dXJlLSBteXRocyBhbmQgcmVhbGl0aWVzLiBFdmVyeSBnYXJkZW5lciwgaG9ydGljdWx0dXJhbGlzdCwgc2NpZW50aXN0cywgZmFybWVycywgZGVjaXNpb24tbWFrZXJzIGFuZCBwb2xpdGljaWFucyB3aG8gd2lzaCB0byBidWlsZCBhIHNhZmUgYWdyaWN1bHR1cmUgc2hvdWxkIGhhdmUgdGhpcyBib29rIGFzIGEgY29tcGxldGUgcmVmZXJlbmNlLlxyXG4gICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0+XHJcbiAgICAgIEVjby1mcmllbmRseSBQZXN0IE1hbmFnZW1lbnQgU3RyYXRlZ2llcyBmb3IgTWFqb3IgVmVnZXRhYmxlIENyb3BzXHJcblBlc3RzIG9mIEJyaW5qYWwgKEVnZ3BsYW50KSBhbmQgdGhlaXIgRWNvLUZyaWVuZGx5IE1hbmFnZW1lbnQgVGVjaG5pcXVlc1xyXG5UYW1vZ2huYSBTYWhhLCBIYXJpIEtyaXNobmEsIE5pdGh5YSBDaGFuZHJhbiwgU2hhcndhbiBLdW1hciwgU2FpbGFiYWxhIERlaSBhbmQgQXJjaGFuYSBLdW1hcmlcclxuT3JnYW5pYyBQZXN0IE1hbmFnZW1lbnQgU3RyYXRlZ2llcyBpbiBUb21hdG9cclxuUm9taWxhIEFrb2lqYW0sIEF0YW51IFNlbmkgYW5kIFNhbmRpcCBQYXRyYVxyXG5JbnNlY3QgYW5kIE5vbiBJbnNlY3QgUGVzdHMgb2YgQ2hpbGxpIGFuZCB0aGVpciBFbnZpcm9ubWVudCBGcmllbmRseSBNYW5hZ2VtZW50XHJcblJhY2hhbmEgUi4gUi4sIFJpY2hhVmFyc2huZXksIFJvbWlsYSBBa29pamFtIGFuZCBKYXlhc2ltaGEgRy4gVC5cclxuSW5zZWN0IFBlc3RzIG9mIE9rcmEgYW5kIHRoZWlyIEVjby1mcmllbmRseSBNYW5hZ2VtZW50XHJcbkF0YW51IFNlbmksIFJvbWlsYSBBa29pamFtIGFuZCBTYW5kaXAgUGF0cmFcclxuQ3J1Y2lmZXJvdXMgVmVnZXRhYmxlczogU2NvcGUgb2YgT3JnYW5pYyBiYXNlZCBQZXN0IE1hbmFnZW1lbnRcclxuU2h5YW1CYWJ1IFNhaFxyXG5MZWd1bWlub3VzIFZlZ2V0YWJsZXM6IFN0cmF0ZWdpZXMgb2YgRWNvLWZyaWVuZGx5IE1hbmFnZW1lbnQgb2YgSW1wb3J0YW50IEluc2VjdCBQZXN0c1xyXG5CaXN3YWppdCBQYXRyYVxyXG5QZXN0IFByb2JsZW1zIGFuZCB0aGVpciBFY28tZnJpZW5kbHkgTWFuYWdlbWVudCBUZWNobmlxdWVzIGluIExlYWZ5IFZlZ2V0YWJsZXNcclxuR2F1dGFtIENoYWtyYWJvcnR5IGFuZCBTLiBNb25kYWxcclxuUGVzdCBQcm9ibGVtIGFuZCB0aGVpciBNYW5hZ2VtZW50IFN0cmF0ZWdpZXMgb2YgVHViZXIgYW5kIFJvb3QgVmVnZXRhYmxlIENyb3BzXHJcbkthbG1lc2ggTWFuYWdhbnZpLCBUYW1vZ2huYSBTYWhhIGFuZCBOaXRoeWEgQ2hhbmRyYW5cclxuSW5zZWN0IFBlc3RzIG9mIE1vcmluZ2EgYW5kIHRoZWlyIEVjb2ZyaWVuZGx5IE1hbmFnZW1lbnRcclxuQXRhbnUgU2VuaSBhbmQgSmF5ZGVlcCBIYWxkZXJcclxuVXNlIG9mIEx1cmUgVHJhcHMgYW5kIG90aGVyIEVjby1mcmllbmRseSBUZWNobmlxdWVzIGZvciBPcmdhbmljIFBlc3QgTWFuYWdlbWVudCBhZ2FpbnN0IEZydWl0IEZsaWVzXHJcblNoZWlraCBLaHVyc2hlZWQgYW5kIEZhcm9veiBIYXNzYW5cclxuSG9zdCBQbGFudCBSZXNpc3RhbmNlIGFzIGEgQ29tcG9uZW50IHRvIE9yZ2FuaWMgUGVzdCBNYW5hZ2VtZW50IGluIFZlZ2V0YWJsZSBDcm9wc1xyXG5SYWNoYW5hIFIuIFIuLCBSaWNoYSBWYXJzaG5leSwgUm9taWxhIEFrb2lqYW0gYW5kIEpheWFzaW1oYSBHLiBULlxyXG5PcmdhbmljIEFncmljdWx0dXJlOiBNeXRocywgUmVhbGl0aWVzIGFuZCBCZXlvbmRcclxuUHJhYnVkZGhhIFJheSBhbmQgU2FydGhhayBDaG93ZGh1cnlcclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9PlxyXG4gICAgICAgVGFtb2dobmEgU2FoYSwgUGguRC4gaXMgc2VydmluZyBhcyBBc3Npc3RhbnQgUHJvZmVzc29yLWN1bS1KdW5pb3IgU2NpZW50aXN0LCBFbnRvbW9sb2d5IGF0IEJpaGFyIEFncmljdWx0dXJhbCBVbml2ZXJzaXR5IChCQVUpLCBTYWJvdXIsIEJoYWdhbHB1ciwgQmloYXIgYW5kIGhhdmluZyBtb3JlIHRoYW4gc2V2ZW4gYW5kIGhhbGYgeWVhcnMgb2YgZXhwZXJpZW5jZSBpbiB0ZWFjaGluZyAoVW5kZXJncmFkdWF0ZSwgUG9zdC1ncmFkdWF0ZSBhbmQgUGguIEQpLCByZXNlYXJjaCwgZXh0ZW5zaW9uIGFuZCB0cmFpbmluZy4gSGUgaXMgdGhlIG1ham9yIGFkdmlzb3Igb2YgZml2ZSBNLlNjLiAoMyBjb21wbGV0ZWQpIGFuZCBvbmUgUGguIEQgc3R1ZGVudCBhbmQgYWxzbyBDby1hZHZpc29yIGFyb3VuZCB0d2VsdmUgc3R1ZGVudHMgaW4gUG9zdCBHcmFkdWF0ZSBwcm9ncmFtbWUuIEhpcyByZXNlYXJjaCBjdXJyZW50bHkgY292ZXJzIGhvc3QgcGxhbnQgcmVzaXN0YW5jZSBvbiB2ZWdldGFibGUgY3JvcHMsIHRveGljb2xvZ2ljYWwgc3R1ZGllcyBhbmQgZWNvLWZyaWVuZGx5IHBlc3QgbWFuYWdlbWVudCBvbiB2ZWdldGFibGUgY3JvcHMuIEhlIGhhcyByZWxlYXNlZCB0aHJlZSB0ZWNobm9sb2dpZXMgZm9yIG1hbmFnZW1lbnQgb2Yga2V5IGluc2VjdCBwZXN0cyBvbiB2ZWdldGFibGUgY3JvcHMgaW4gaGlzIHNob3J0IHNlcnZpY2UgY2Fycmllci4gRHIuIFNhaGEgaXMgcHJlc2VudGx5IGFzc29jaWF0ZWQgd2l0aCBBbGwgSW5kaWEgQ29vcmRpbmF0ZWQgUmVzZWFyY2ggUHJvamVjdCBvbiBWZWdldGFibGUgQ3JvcHMgd2hlcmUgaGUgaXMgY2F0ZXJpbmcgYSBsYXJnZSBubyBvZiBlbnRvbW9sb2dpY2FsIGZpZWxkIHRyaWFscy4gIEhlIHJlY2VpdmVkIHBvc3QgZ3JhZHVhdGlvbiBpbiBlbnRvbW9sb2d5IGZyb20gVW5pdmVyc2l0eSBBZ3JpY3VsdHVyYWwgU2NpZW5jZXMsIERoYXJ3YWQgYW5kIGFjcXVpcmVkIGRvY3RvcmF0ZSBmcm9tIEJpZGhhbiBDaGFuZHJhIEtyaXNoaSBWaXNod2F2aWR5YWxheWEsIEthbHlhbmksIE5hZGlhLCBXZXN0IEJlbmdhbC4gRHIuIFNhaGEgaGFzIHB1Ymxpc2hlZCBtYW55IHJlc2VhcmNoIHBhcGVycywgcmV2aWV3IGFydGljbGVzIGFuZCBib29rIGNoYXB0ZXJzIGluIHZhcmlvdXMgbmF0aW9uYWwgYW5kIGludGVybmF0aW9uYWwgam91cm5hbHMuIEhlIGlzIGFsc28gYW4gYWN0aXZlIG1lbWJlciBvZiBlZGl0b3JpYWwgYm9hcmQgb2YgZGlmZmVyZW50IG5hdGlvbmFsIGFuZCBpbnRlcm5hdGlvbmFsIGpvdXJuYWxzLiBEci4gU2FoYSBpcyBMaWZlIEZlbGxvdyBvZiBFbnRvbW9sb2dpY2FsIFNvY2lldHkgb2YgSW5kaWEgYW5kIFNvY2lldHkgb2YgUGxhbnQgUHJvdGVjdGlvbiBTY2llbmNlcy5cclxuICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Cb29rLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0Jvb2suY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Cb29rLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcclxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHMgZnJvbSAnLi9Cb29rLmNzcydcclxuaW1wb3J0IE1lbnVBcHBCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXHJcbmltcG9ydCBMbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QxJyBcclxuaW1wb3J0IFNjcm9sbGFibGVUYWJzQnV0dG9uQXV0byBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N3aXRjaHRhYidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IGxvZ2luSW1nIGZyb20gXCIuL2NvdmVyLWJvb2sucG5nXCI7XHJcblxyXG5jb25zdCBVc2VTdHlsZXNzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDMsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG5cdCBcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIG1heFdpZHRoOiA1MDAsXHJcblx0IFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWdodDogJzEwMCUnLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2sgKHsgdGl0bGUgfSkge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBVc2VTdHlsZXNzKCk7XHJcbiAgdXNlU3R5bGVzKHMpXHJcbiAgcmV0dXJuIChcclxuXHQgICAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvdH0+XHJcblx0ICAgIDxNZW51QXBwQmFyLz5cclxuXHQgICAgXHJcblx0ICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dpbkltZ30gLz5cclxuICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBEZXZpbHMgMlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgIE5vIE9mIFBhZ2VzIDogMjcyIDxiciAvPlxyXG5cdCAgXHRcdFx0IFB1Ymxpc2hlciA6IEFncm9iaW9zIChJbmRpYSkgPGJyIC8+XHJcblx0ICBcdFx0XHQgTGFuZ3VhZ2UgOiBFbmdsaXNoXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+IFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIElTQk4gOiA5Nzg4MTk0Mzc3NjY1XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblx0ICA8YnIgLz5cclxuXHQgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIGlkPVwicXVhbnRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcblx0ICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcblx0IFxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFJlbW92ZSA8YnIgLz5cclxuXHQgIFx0XHRcdFx0PGJyIC8+XHJcblx0ICBcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFkZCB0byBDYXJ0PC9CdXR0b24+ICAmZW1zcDtcclxuXHQgIFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCI+V2lzaGxpc3Q8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPiQxOS4wMDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9QYXBlcj5cclxuXHQgIDxiciAvPlxyXG5cdDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcblx0IDxTY3JvbGxhYmxlVGFic0J1dHRvbkF1dG8vPlxyXG5cdCAgPGJyLz5cclxuICAgIDwvZGl2PlxyXG5cdCAgPGJyLz5cclxuXHRcdDxici8+XHJcblx0ICA8TGwvPlxyXG5cdCAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9ib29rL2NvdmVyLWJvb2sucG5nPzdiMGZkMzEzXCI7IiwiLyoqXHJcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBCb29rIGZyb20gJy4vQm9vaydcclxuXHJcbmNvbnN0IHRpdGxlID0gJ0Jvb2sgSW5mb3JtYXRpb24nXHJcblxyXG5mdW5jdGlvbiBhY3Rpb24gKCkge1xyXG4gIHJldHVybiB7XHJcbiAgIFxyXG4gICAgdGl0bGUsXHJcbiAgICBjb21wb25lbnQ6IChcclxuXHJcbiAgICAgICAgPEJvb2sgdGl0bGU9e3RpdGxlfSAvPlxyXG4gXHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFmQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7QUNuSEE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==