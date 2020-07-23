require("source-map-support").install();
exports.ids = ["home"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Home-root-1avl7 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Home-container-3YPN- {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.Home-newsItem--EKGZ {\n  margin: 0 0 32px;\n  margin: 0 0 2rem;\n}\n\n.Home-newsTitle-3GwAp {\n  font-size: 24px;\n  font-size: 1.5rem;\n}\n\n.Home-newsDesc-107uo h1,\n.Home-newsDesc-107uo h2,\n.Home-newsDesc-107uo h3,\n.Home-newsDesc-107uo h4,\n.Home-newsDesc-107uo h5,\n.Home-newsDesc-107uo h6 {\n  font-size: 18px;\n  font-size: 1.125rem;\n}\n\n.Home-newsDesc-107uo pre {\n  white-space: pre-wrap;\n  font-size: 14px;\n  font-size: 0.875rem;\n}\n\n.Home-newsDesc-107uo img {\n  max-width: 100%;\n}\n", "",{"version":3,"sources":["Home.css","../../components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;;ACPF;;;;;;;EAOE;;AAEF;EACE;;+EAE6E;;EAE7E,iEAAiE;;EAEjE;;+EAE6E;;EAE7E,2BAA2B;;EAE3B;;+EAE6E;;EAE7E,sBAAsB,GAAG,+BAA+B;EACxD,sBAAsB,GAAG,0BAA0B;EACnD,sBAAsB,GAAG,4BAA4B;EACrD,uBAAuB,EAAE,gCAAgC;AAC3D;;ADnBA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAmC;EAAnC,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAAhB,gBAAgB;AAClB;;AAEA;EACE,eAAiB;EAAjB,iBAAiB;AACnB;;AAEA;;;;;;EAME,eAAmB;EAAnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,eAAmB;EAAnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n\n.newsItem {\n  margin: 0 0 2rem;\n}\n\n.newsTitle {\n  font-size: 1.5rem;\n}\n\n.newsDesc h1,\n.newsDesc h2,\n.newsDesc h3,\n.newsDesc h4,\n.newsDesc h5,\n.newsDesc h6 {\n  font-size: 1.125rem;\n}\n\n.newsDesc pre {\n  white-space: pre-wrap;\n  font-size: 0.875rem;\n}\n\n.newsDesc img {\n  max-width: 100%;\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"]}]);
// Exports
exports.locals = {
	"root": "Home-root-1avl7",
	"container": "Home-container-3YPN-",
	"newsItem": "Home-newsItem--EKGZ",
	"newsTitle": "Home-newsTitle-3GwAp",
	"newsDesc": "Home-newsDesc-107uo"
};

/***/ }),

/***/ "./src/components/navbarHome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _navBar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/navBar.css");
/* harmony import */ var _navBar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navBar_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/popover.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("@material-ui/icons/ArrowForwardIos");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\navbarHome.js";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    paadding: 10,
    color: 'black'
  },
  menuOptn: {
    border: 0,
    color: 'black',
    height: 40,
    padding: '5px 10px',
    margin: '0 5px',
    fontWeight: '400'
  }
}));
function MenuAppBar() {
  const classes = useStyles();
  const st = useStyles(_navBar_css__WEBPACK_IMPORTED_MODULE_8___default.a);
  const [auth, setAuth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    elevation: 0,
    width: "110%",
    style: {
      backgroundColor: "transparent",
      margin: '0px -11px',
      position: "absolute"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    className: classes.menuButton,
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    style: {
      marginLeft: '20px',
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "AGRO ACADEMICS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_popover__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Magazines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Downloads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "20%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "E-Catalogues"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "http://localhost:3000/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: "#dfdfdf",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "18px",
      height: "40px",
      width: "85%",
      align: "center",
      marginLeft: '10px',
      marginRight: '50px',
      color: 'black',
      fontWeight: '400',
      outline: "none",
      border: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Login ")))));
}

/***/ }),

/***/ "./src/components/searchBarHome.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreeSolo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _searchbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/searchbar.css");
/* harmony import */ var _searchbar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_searchbar_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\searchBarHome.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const usestyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(8),
      width: '60%',
      marginLeft: '20%',
      align: 'center',
      fontSize: '50px',
      position: 'relative'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'absolute',
    pointerEvents: 'none',
    top: '30%',
    left: '76%'
  }
}));
const filterOptions = Object(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["createFilterOptions"])({
  matchFrom: 'start',
  limit: 5
});
function FreeSolo() {
  const classes = usestyles();
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6___default()(_searchbar_css__WEBPACK_IMPORTED_MODULE_7___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      position: "absolute",
      top: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      fontSize: "40px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default.a, {
    freeSolo: true,
    id: "free-solo-2-demo",
    disableClearable: true,
    options: top100Films.map(option => option.title),
    filterOptions: filterOptions,
    renderInput: params => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
      className: _searchbar_css__WEBPACK_IMPORTED_MODULE_7___default.a.fieldSearch
    }, params, {
      label: "Search Books",
      margin: "normal",
      variant: "outlined",
      InputProps: { ...params.InputProps,
        type: 'search'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })),
    renderOption: option => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      alignItems: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://agrobiosonline.com/books_coverpages/06260908_685.jpg",
      alt: "pic",
      style: {
        height: "90px",
        paddingTop: "20px",
        marginRight: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      item: true,
      xs: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontWeight: 400
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, option))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
} // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}, {
  title: '12 Angry Men',
  year: 1957
}, {
  title: "Schindler's List",
  year: 1993
}, {
  title: 'Pulp Fiction',
  year: 1994
}, {
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003
}, {
  title: 'The Good, the Bad and the Ugly',
  year: 1966
}, {
  title: 'Fight Club',
  year: 1999
}, {
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001
}, {
  title: 'Star Wars: Episode V - The Empire Strikes Back',
  year: 1980
}, {
  title: 'Forrest Gump',
  year: 1994
}, {
  title: 'Inception',
  year: 2010
}, {
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002
}, {
  title: "One Flew Over the Cuckoo's Nest",
  year: 1975
}, {
  title: 'Goodfellas',
  year: 1990
}, {
  title: 'The Matrix',
  year: 1999
}, {
  title: 'Seven Samurai',
  year: 1954
}, {
  title: 'Star Wars: Episode IV - A New Hope',
  year: 1977
}, {
  title: 'City of God',
  year: 2002
}, {
  title: 'Se7en',
  year: 1995
}, {
  title: 'The Silence of the Lambs',
  year: 1991
}, {
  title: "It's a Wonderful Life",
  year: 1946
}, {
  title: 'Life Is Beautiful',
  year: 1997
}, {
  title: 'The Usual Suspects',
  year: 1995
}, {
  title: 'Léon: The Professional',
  year: 1994
}, {
  title: 'Spirited Away',
  year: 2001
}, {
  title: 'Saving Private Ryan',
  year: 1998
}, {
  title: 'Once Upon a Time in the West',
  year: 1968
}, {
  title: 'American History X',
  year: 1998
}, {
  title: 'Interstellar',
  year: 2014
}, {
  title: 'Casablanca',
  year: 1942
}, {
  title: 'City Lights',
  year: 1931
}, {
  title: 'Psycho',
  year: 1960
}, {
  title: 'The Green Mile',
  year: 1999
}, {
  title: 'The Intouchables',
  year: 2011
}, {
  title: 'Modern Times',
  year: 1936
}, {
  title: 'Raiders of the Lost Ark',
  year: 1981
}, {
  title: 'Rear Window',
  year: 1954
}, {
  title: 'The Pianist',
  year: 2002
}, {
  title: 'The Departed',
  year: 2006
}, {
  title: 'Terminator 2: Judgment Day',
  year: 1991
}, {
  title: 'Back to the Future',
  year: 1985
}, {
  title: 'Whiplash',
  year: 2014
}, {
  title: 'Gladiator',
  year: 2000
}, {
  title: 'Memento',
  year: 2000
}, {
  title: 'The Prestige',
  year: 2006
}, {
  title: 'The Lion King',
  year: 1994
}, {
  title: 'Apocalypse Now',
  year: 1979
}, {
  title: 'Alien',
  year: 1979
}, {
  title: 'Sunset Boulevard',
  year: 1950
}, {
  title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
  year: 1964
}, {
  title: 'The Great Dictator',
  year: 1940
}, {
  title: 'Cinema Paradiso',
  year: 1988
}, {
  title: 'The Lives of Others',
  year: 2006
}, {
  title: 'Grave of the Fireflies',
  year: 1988
}, {
  title: 'Paths of Glory',
  year: 1957
}, {
  title: 'Django Unchained',
  year: 2012
}, {
  title: 'The Shining',
  year: 1980
}, {
  title: 'WALL·E',
  year: 2008
}, {
  title: 'American Beauty',
  year: 1999
}, {
  title: 'The Dark Knight Rises',
  year: 2012
}, {
  title: 'Princess Mononoke',
  year: 1997
}, {
  title: 'Aliens',
  year: 1986
}, {
  title: 'Oldboy',
  year: 2003
}, {
  title: 'Once Upon a Time in America',
  year: 1984
}, {
  title: 'Witness for the Prosecution',
  year: 1957
}, {
  title: 'Das Boot',
  year: 1981
}, {
  title: 'Citizen Kane',
  year: 1941
}, {
  title: 'North by Northwest',
  year: 1959
}, {
  title: 'Vertigo',
  year: 1958
}, {
  title: 'Star Wars: Episode VI - Return of the Jedi',
  year: 1983
}, {
  title: 'Reservoir Dogs',
  year: 1992
}, {
  title: 'Braveheart',
  year: 1995
}, {
  title: 'M',
  year: 1931
}, {
  title: 'Requiem for a Dream',
  year: 2000
}, {
  title: 'Amélie',
  year: 2001
}, {
  title: 'A Clockwork Orange',
  year: 1971
}, {
  title: 'Like Stars on Earth',
  year: 2007
}, {
  title: 'Taxi Driver',
  year: 1976
}, {
  title: 'Lawrence of Arabia',
  year: 1962
}, {
  title: 'Double Indemnity',
  year: 1944
}, {
  title: 'Eternal Sunshine of the Spotless Mind',
  year: 2004
}, {
  title: 'Amadeus',
  year: 1984
}, {
  title: 'To Kill a Mockingbird',
  year: 1962
}, {
  title: 'Toy Story 3',
  year: 2010
}, {
  title: 'Logan',
  year: 2017
}, {
  title: 'Full Metal Jacket',
  year: 1987
}, {
  title: 'Dangal',
  year: 2016
}, {
  title: 'The Sting',
  year: 1973
}, {
  title: '2001: A Space Odyssey',
  year: 1968
}, {
  title: "Singin' in the Rain",
  year: 1952
}, {
  title: 'Toy Story',
  year: 1995
}, {
  title: 'Bicycle Thieves',
  year: 1948
}, {
  title: 'The Kid',
  year: 1921
}, {
  title: 'Inglourious Basterds',
  year: 2009
}, {
  title: 'Snatch',
  year: 2000
}, {
  title: '3 Idiots',
  year: 2009
}, {
  title: 'Monty Python and the Holy Grail',
  year: 1975
}];

/***/ }),

/***/ "./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/home/Home.css");
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
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/home/Home.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/home/Home.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navbarHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/navbarHome.js");
/* harmony import */ var _components_searchBarHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/searchBarHome.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/tabs.js");
/* harmony import */ var _components_list1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/list1.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/carousel.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\home\\Home.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









function Home({
  news
}) {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default()(_Home_css__WEBPACK_IMPORTED_MODULE_3___default.a);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_navbarHome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_searchBarHome__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list1__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/home/Home.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\home\\index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




async function action({
  fetch
}) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}'
    })
  });
  const {
    data
  } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hvbWUuanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL25hdmJhckhvbWUuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9zZWFyY2hCYXJIb21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmNzcz84MmQ1IiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLkhvbWUtcm9vdC0xYXZsNyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uSG9tZS1jb250YWluZXItM1lQTi0ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDAgNDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5Ib21lLW5ld3NJdGVtLS1FS0daIHtcXG4gIG1hcmdpbjogMCAwIDMycHg7XFxuICBtYXJnaW46IDAgMCAycmVtO1xcbn1cXG5cXG4uSG9tZS1uZXdzVGl0bGUtM0d3QXAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGgxLFxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGgyLFxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGgzLFxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGg0LFxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGg1LFxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIGg2IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi5Ib21lLW5ld3NEZXNjLTEwN3VvIHByZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4uSG9tZS1uZXdzRGVzYy0xMDd1byBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJIb21lLmNzc1wiLFwiLi4vLi4vY29tcG9uZW50cy92YXJpYWJsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0VBT0U7O0FDUEY7Ozs7Ozs7RUFPRTs7QUFFRjtFQUNFOzsrRUFFNkU7O0VBRTdFLGlFQUFpRTs7RUFFakU7OytFQUU2RTs7RUFFN0UsMkJBQTJCOztFQUUzQjs7K0VBRTZFOztFQUU3RSxzQkFBc0IsR0FBRywrQkFBK0I7RUFDeEQsc0JBQXNCLEdBQUcsMEJBQTBCO0VBQ25ELHNCQUFzQixHQUFHLDRCQUE0QjtFQUNyRCx1QkFBdUIsRUFBRSxnQ0FBZ0M7QUFDM0Q7O0FEbkJBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQW1DO0VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFpQjtFQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7OztFQU1FLGVBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJmaWxlXCI6XCJIb21lLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvdmFyaWFibGVzLmNzcyc7XFxuXFxuLnJvb3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblxcbi5uZXdzSXRlbSB7XFxuICBtYXJnaW46IDAgMCAycmVtO1xcbn1cXG5cXG4ubmV3c1RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubmV3c0Rlc2MgaDEsXFxuLm5ld3NEZXNjIGgyLFxcbi5uZXdzRGVzYyBoMyxcXG4ubmV3c0Rlc2MgaDQsXFxuLm5ld3NEZXNjIGg1LFxcbi5uZXdzRGVzYyBoNiB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubmV3c0Rlc2MgcHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi5uZXdzRGVzYyBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIixcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIb21lLXJvb3QtMWF2bDdcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lLWNvbnRhaW5lci0zWVBOLVwiLFxuXHRcIm5ld3NJdGVtXCI6IFwiSG9tZS1uZXdzSXRlbS0tRUtHWlwiLFxuXHRcIm5ld3NUaXRsZVwiOiBcIkhvbWUtbmV3c1RpdGxlLTNHd0FwXCIsXG5cdFwibmV3c0Rlc2NcIjogXCJIb21lLW5ld3NEZXNjLTEwN3VvXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBzIGZyb20nLi9uYXZCYXIuY3NzJztcbmltcG9ydCBNb3VzZU92ZXJQb3BvdmVyIGZyb20gJy4vcG9wb3ZlcidcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3MnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG5cdFx0cGFhZGRpbmc6MTAsXG4gICAgICAgIGNvbG9yOidibGFjaydcbiAgICB9LFxuICAgIG1lbnVPcHRuOntcbiAgICBib3JkZXI6IDAsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxuICAgIG1hcmdpbjonMCA1cHgnLFxuICAgIGZvbnRXZWlnaHQ6JzQwMCdcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51QXBwQmFyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBzdD0gdXNlU3R5bGVzKHMpO1xuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEF1dGgoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgey8qIDxGb3JtR3JvdXA+XG4gICAgICAgIC8vICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgLy8gICAgICAgICAgICAgY29udHJvbD17PFN3aXRjaCBjaGVja2VkPXthdXRofSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhcmlhLWxhYmVsPVwibG9naW4gc3dpdGNoXCIgLz59XG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsPXthdXRoID8gJ0xvZ291dCcgOiAnTG9naW4nfVxuICAgICAgICAvLyAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgey8qIDwvRm9ybUdyb3VwPiAqL31cbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBlbGV2YXRpb249ezB9IHdpZHRoPXtcIjExMCVcIn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsIG1hcmdpbjogJzBweCAtMTFweCcscG9zaXRpb246XCJhYnNvbHV0ZVwifX0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBhcmlhLWxhYmVsPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7bWFyZ2luTGVmdDonMjBweCcsY29sb3I6J2JsYWNrJ319PlxuICAgICAgICAgICAgICAgICAgICBBR1JPIEFDQURFTUlDU1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxNb3VzZU92ZXJQb3BvdmVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVPcHRufXN0eWxlPXt7IHdpZHRoOiBcIjEwJVwifX0+TWFnYXppbmVzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVPcHRufXN0eWxlPXt7IHdpZHRoOiBcIjEwJVwifX0+TmV3czwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51T3B0bn1zdHlsZT17eyAgd2lkdGg6IFwiMTAlXCJ9fT5Eb3dubG9hZHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU9wdG59c3R5bGU9e3sgIHdpZHRoOiBcIjIwJVwifX0+RS1DYXRhbG9ndWVzPC9CdXR0b24+XG5cdFx0XG4gICAgICAgICAgICAgICAgICAgXG5cblx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW5cIj5cbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNkZmRmZGZcIiwgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIiwgY3Vyc29yOlwicG9pbnRlclwiLGZvbnRTaXplOiBcIjE4cHhcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiODUlXCIsIGFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5MZWZ0OiAnMTBweCcsbWFyZ2luUmlnaHQ6JzUwcHgnLGNvbG9yOidibGFjaycsZm9udFdlaWdodDonNDAwJywgb3V0bGluZTpcIm5vbmVcIiwgYm9yZGVyOlwibm9uZVwifX0+TG9naW4gPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7YXV0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2TGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtZW51LWFwcGJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVudS1hcHBiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UHJvZmlsZTwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGZhZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSwgeyBjcmVhdGVGaWx0ZXJPcHRpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL3NlYXJjaGJhci5jc3MnO1xuXG5jb25zdCB1c2VzdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgICcmID4gKic6IHtcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgICAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyMCUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udFNpemU6ICc1MHB4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBzZWFyY2hJY29uOiB7XG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIHRvcDogJzMwJScsXG4gICAgICAgIGxlZnQ6ICc3NiUnLFxuICAgIH0sXG5cbn0pKTtcbmNvbnN0IGZpbHRlck9wdGlvbnMgPSBjcmVhdGVGaWx0ZXJPcHRpb25zKHtcbiAgICBtYXRjaEZyb206ICdzdGFydCcsXG4gICAgbGltaXQ6IDUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJlZVNvbG8oKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZXN0eWxlcygpXG4gICAgdXNlU3R5bGVzKHMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMTAwIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiNDBweFwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICBmcmVlU29sb1xuICAgICAgICAgICAgICAgIGlkPVwiZnJlZS1zb2xvLTItZGVtb1wiXG4gICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RvcDEwMEZpbG1zLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udGl0bGUpfVxuICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9e3MuZmllbGRTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggQm9va3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7IC4uLnBhcmFtcy5JbnB1dFByb3BzLCB0eXBlOiAnc2VhcmNoJyB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGltZyBzcmM9XCJodHRwOi8vYWdyb2Jpb3NvbmxpbmUuY29tL2Jvb2tzX2NvdmVycGFnZXMvMDYyNjA5MDhfNjg1LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI5MHB4XCIsIHBhZGRpbmdUb3A6IFwiMjBweFwiLCBtYXJnaW5SaWdodDogJzEwcHgnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNDAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIFRvcCAxMDAgZmlsbXMgYXMgcmF0ZWQgYnkgSU1EYiB1c2Vycy4gaHR0cDovL3d3dy5pbWRiLmNvbS9jaGFydC90b3BcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xuICAgIHsgdGl0bGU6ICdUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb24nLCB5ZWFyOiAxOTk0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXInLCB5ZWFyOiAxOTcyIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXI6IFBhcnQgSUknLCB5ZWFyOiAxOTc0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCcsIHllYXI6IDIwMDggfSxcbiAgICB7IHRpdGxlOiAnMTIgQW5ncnkgTWVuJywgeWVhcjogMTk1NyB9LFxuICAgIHsgdGl0bGU6IFwiU2NoaW5kbGVyJ3MgTGlzdFwiLCB5ZWFyOiAxOTkzIH0sXG4gICAgeyB0aXRsZTogJ1B1bHAgRmljdGlvbicsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgeWVhcjogMjAwMyB9LFxuICAgIHsgdGl0bGU6ICdUaGUgR29vZCwgdGhlIEJhZCBhbmQgdGhlIFVnbHknLCB5ZWFyOiAxOTY2IH0sXG4gICAgeyB0aXRsZTogJ0ZpZ2h0IENsdWInLCB5ZWFyOiAxOTk5IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCB5ZWFyOiAyMDAxIH0sXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBWIC0gVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLCB5ZWFyOiAxOTgwIH0sXG4gICAgeyB0aXRsZTogJ0ZvcnJlc3QgR3VtcCcsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnSW5jZXB0aW9uJywgeWVhcjogMjAxMCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBUd28gVG93ZXJzJywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6IFwiT25lIEZsZXcgT3ZlciB0aGUgQ3Vja29vJ3MgTmVzdFwiLCB5ZWFyOiAxOTc1IH0sXG4gICAgeyB0aXRsZTogJ0dvb2RmZWxsYXMnLCB5ZWFyOiAxOTkwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBNYXRyaXgnLCB5ZWFyOiAxOTk5IH0sXG4gICAgeyB0aXRsZTogJ1NldmVuIFNhbXVyYWknLCB5ZWFyOiAxOTU0IH0sXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLCB5ZWFyOiAxOTc3IH0sXG4gICAgeyB0aXRsZTogJ0NpdHkgb2YgR29kJywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6ICdTZTdlbicsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFNpbGVuY2Ugb2YgdGhlIExhbWJzJywgeWVhcjogMTk5MSB9LFxuICAgIHsgdGl0bGU6IFwiSXQncyBhIFdvbmRlcmZ1bCBMaWZlXCIsIHllYXI6IDE5NDYgfSxcbiAgICB7IHRpdGxlOiAnTGlmZSBJcyBCZWF1dGlmdWwnLCB5ZWFyOiAxOTk3IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBVc3VhbCBTdXNwZWN0cycsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnTMOpb246IFRoZSBQcm9mZXNzaW9uYWwnLCB5ZWFyOiAxOTk0IH0sXG4gICAgeyB0aXRsZTogJ1NwaXJpdGVkIEF3YXknLCB5ZWFyOiAyMDAxIH0sXG4gICAgeyB0aXRsZTogJ1NhdmluZyBQcml2YXRlIFJ5YW4nLCB5ZWFyOiAxOTk4IH0sXG4gICAgeyB0aXRsZTogJ09uY2UgVXBvbiBhIFRpbWUgaW4gdGhlIFdlc3QnLCB5ZWFyOiAxOTY4IH0sXG4gICAgeyB0aXRsZTogJ0FtZXJpY2FuIEhpc3RvcnkgWCcsIHllYXI6IDE5OTggfSxcbiAgICB7IHRpdGxlOiAnSW50ZXJzdGVsbGFyJywgeWVhcjogMjAxNCB9LFxuICAgIHsgdGl0bGU6ICdDYXNhYmxhbmNhJywgeWVhcjogMTk0MiB9LFxuICAgIHsgdGl0bGU6ICdDaXR5IExpZ2h0cycsIHllYXI6IDE5MzEgfSxcbiAgICB7IHRpdGxlOiAnUHN5Y2hvJywgeWVhcjogMTk2MCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgR3JlZW4gTWlsZScsIHllYXI6IDE5OTkgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEludG91Y2hhYmxlcycsIHllYXI6IDIwMTEgfSxcbiAgICB7IHRpdGxlOiAnTW9kZXJuIFRpbWVzJywgeWVhcjogMTkzNiB9LFxuICAgIHsgdGl0bGU6ICdSYWlkZXJzIG9mIHRoZSBMb3N0IEFyaycsIHllYXI6IDE5ODEgfSxcbiAgICB7IHRpdGxlOiAnUmVhciBXaW5kb3cnLCB5ZWFyOiAxOTU0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBQaWFuaXN0JywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgRGVwYXJ0ZWQnLCB5ZWFyOiAyMDA2IH0sXG4gICAgeyB0aXRsZTogJ1Rlcm1pbmF0b3IgMjogSnVkZ21lbnQgRGF5JywgeWVhcjogMTk5MSB9LFxuICAgIHsgdGl0bGU6ICdCYWNrIHRvIHRoZSBGdXR1cmUnLCB5ZWFyOiAxOTg1IH0sXG4gICAgeyB0aXRsZTogJ1doaXBsYXNoJywgeWVhcjogMjAxNCB9LFxuICAgIHsgdGl0bGU6ICdHbGFkaWF0b3InLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJ01lbWVudG8nLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBQcmVzdGlnZScsIHllYXI6IDIwMDYgfSxcbiAgICB7IHRpdGxlOiAnVGhlIExpb24gS2luZycsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnQXBvY2FseXBzZSBOb3cnLCB5ZWFyOiAxOTc5IH0sXG4gICAgeyB0aXRsZTogJ0FsaWVuJywgeWVhcjogMTk3OSB9LFxuICAgIHsgdGl0bGU6ICdTdW5zZXQgQm91bGV2YXJkJywgeWVhcjogMTk1MCB9LFxuICAgIHsgdGl0bGU6ICdEci4gU3RyYW5nZWxvdmUgb3I6IEhvdyBJIExlYXJuZWQgdG8gU3RvcCBXb3JyeWluZyBhbmQgTG92ZSB0aGUgQm9tYicsIHllYXI6IDE5NjQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEdyZWF0IERpY3RhdG9yJywgeWVhcjogMTk0MCB9LFxuICAgIHsgdGl0bGU6ICdDaW5lbWEgUGFyYWRpc28nLCB5ZWFyOiAxOTg4IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBMaXZlcyBvZiBPdGhlcnMnLCB5ZWFyOiAyMDA2IH0sXG4gICAgeyB0aXRsZTogJ0dyYXZlIG9mIHRoZSBGaXJlZmxpZXMnLCB5ZWFyOiAxOTg4IH0sXG4gICAgeyB0aXRsZTogJ1BhdGhzIG9mIEdsb3J5JywgeWVhcjogMTk1NyB9LFxuICAgIHsgdGl0bGU6ICdEamFuZ28gVW5jaGFpbmVkJywgeWVhcjogMjAxMiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgU2hpbmluZycsIHllYXI6IDE5ODAgfSxcbiAgICB7IHRpdGxlOiAnV0FMTMK3RScsIHllYXI6IDIwMDggfSxcbiAgICB7IHRpdGxlOiAnQW1lcmljYW4gQmVhdXR5JywgeWVhcjogMTk5OSB9LFxuICAgIHsgdGl0bGU6ICdUaGUgRGFyayBLbmlnaHQgUmlzZXMnLCB5ZWFyOiAyMDEyIH0sXG4gICAgeyB0aXRsZTogJ1ByaW5jZXNzIE1vbm9ub2tlJywgeWVhcjogMTk5NyB9LFxuICAgIHsgdGl0bGU6ICdBbGllbnMnLCB5ZWFyOiAxOTg2IH0sXG4gICAgeyB0aXRsZTogJ09sZGJveScsIHllYXI6IDIwMDMgfSxcbiAgICB7IHRpdGxlOiAnT25jZSBVcG9uIGEgVGltZSBpbiBBbWVyaWNhJywgeWVhcjogMTk4NCB9LFxuICAgIHsgdGl0bGU6ICdXaXRuZXNzIGZvciB0aGUgUHJvc2VjdXRpb24nLCB5ZWFyOiAxOTU3IH0sXG4gICAgeyB0aXRsZTogJ0RhcyBCb290JywgeWVhcjogMTk4MSB9LFxuICAgIHsgdGl0bGU6ICdDaXRpemVuIEthbmUnLCB5ZWFyOiAxOTQxIH0sXG4gICAgeyB0aXRsZTogJ05vcnRoIGJ5IE5vcnRod2VzdCcsIHllYXI6IDE5NTkgfSxcbiAgICB7IHRpdGxlOiAnVmVydGlnbycsIHllYXI6IDE5NTggfSxcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJywgeWVhcjogMTk4MyB9LFxuICAgIHsgdGl0bGU6ICdSZXNlcnZvaXIgRG9ncycsIHllYXI6IDE5OTIgfSxcbiAgICB7IHRpdGxlOiAnQnJhdmVoZWFydCcsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnTScsIHllYXI6IDE5MzEgfSxcbiAgICB7IHRpdGxlOiAnUmVxdWllbSBmb3IgYSBEcmVhbScsIHllYXI6IDIwMDAgfSxcbiAgICB7IHRpdGxlOiAnQW3DqWxpZScsIHllYXI6IDIwMDEgfSxcbiAgICB7IHRpdGxlOiAnQSBDbG9ja3dvcmsgT3JhbmdlJywgeWVhcjogMTk3MSB9LFxuICAgIHsgdGl0bGU6ICdMaWtlIFN0YXJzIG9uIEVhcnRoJywgeWVhcjogMjAwNyB9LFxuICAgIHsgdGl0bGU6ICdUYXhpIERyaXZlcicsIHllYXI6IDE5NzYgfSxcbiAgICB7IHRpdGxlOiAnTGF3cmVuY2Ugb2YgQXJhYmlhJywgeWVhcjogMTk2MiB9LFxuICAgIHsgdGl0bGU6ICdEb3VibGUgSW5kZW1uaXR5JywgeWVhcjogMTk0NCB9LFxuICAgIHsgdGl0bGU6ICdFdGVybmFsIFN1bnNoaW5lIG9mIHRoZSBTcG90bGVzcyBNaW5kJywgeWVhcjogMjAwNCB9LFxuICAgIHsgdGl0bGU6ICdBbWFkZXVzJywgeWVhcjogMTk4NCB9LFxuICAgIHsgdGl0bGU6ICdUbyBLaWxsIGEgTW9ja2luZ2JpcmQnLCB5ZWFyOiAxOTYyIH0sXG4gICAgeyB0aXRsZTogJ1RveSBTdG9yeSAzJywgeWVhcjogMjAxMCB9LFxuICAgIHsgdGl0bGU6ICdMb2dhbicsIHllYXI6IDIwMTcgfSxcbiAgICB7IHRpdGxlOiAnRnVsbCBNZXRhbCBKYWNrZXQnLCB5ZWFyOiAxOTg3IH0sXG4gICAgeyB0aXRsZTogJ0RhbmdhbCcsIHllYXI6IDIwMTYgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFN0aW5nJywgeWVhcjogMTk3MyB9LFxuICAgIHsgdGl0bGU6ICcyMDAxOiBBIFNwYWNlIE9keXNzZXknLCB5ZWFyOiAxOTY4IH0sXG4gICAgeyB0aXRsZTogXCJTaW5naW4nIGluIHRoZSBSYWluXCIsIHllYXI6IDE5NTIgfSxcbiAgICB7IHRpdGxlOiAnVG95IFN0b3J5JywgeWVhcjogMTk5NSB9LFxuICAgIHsgdGl0bGU6ICdCaWN5Y2xlIFRoaWV2ZXMnLCB5ZWFyOiAxOTQ4IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBLaWQnLCB5ZWFyOiAxOTIxIH0sXG4gICAgeyB0aXRsZTogJ0luZ2xvdXJpb3VzIEJhc3RlcmRzJywgeWVhcjogMjAwOSB9LFxuICAgIHsgdGl0bGU6ICdTbmF0Y2gnLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJzMgSWRpb3RzJywgeWVhcjogMjAwOSB9LFxuICAgIHsgdGl0bGU6ICdNb250eSBQeXRob24gYW5kIHRoZSBIb2x5IEdyYWlsJywgeWVhcjogMTk3NSB9LFxuXTtcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9Ib21lLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZS5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzIGZyb20gJy4vSG9tZS5jc3MnXG5pbXBvcnQgTWVudUFwcEJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmJhckhvbWUnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoQmFySG9tZSdcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFicydcbmltcG9ydCBMbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QxJ1xuaW1wb3J0IENhcmFzdWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJvdXNlbCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgbmV3cyB9KSB7XG4gIHVzZVN0eWxlcyhzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPE1lbnVBcHBCYXIgIC8+XG4gICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICA8Q2FyYXN1bC8+XG4gICAgICA8Q2FyZC8+XG4gICAgICA8TGwvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbiAoeyBmZXRjaCB9KSB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6ICd7bmV3c3t0aXRsZSxsaW5rLGNvbnRlbnR9fSdcbiAgICB9KVxuICB9KVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3AuanNvbigpXG4gIGlmICghZGF0YSB8fCAhZGF0YS5uZXdzKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHRoZSBuZXdzIGZlZWQuJylcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ1JlYWN0IFN0YXJ0ZXIgS2l0JyxcbiAgICBjaHVua3M6IFsnaG9tZSddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgICAgIDxIb21lLz5cblxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFaQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVpBO0FBcUJBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=