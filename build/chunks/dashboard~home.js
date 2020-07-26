require("source-map-support").install();
exports.ids = ["dashboard~home"];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2Rhc2hib2FyZH5ob21lLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9uYXZiYXJIb21lLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvc2VhcmNoQmFySG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IHMgZnJvbScuL25hdkJhci5jc3MnO1xuaW1wb3J0IE1vdXNlT3ZlclBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyJ1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvcyc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIG1lbnVCdXR0b246IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICBmbGV4R3JvdzogMSxcblx0XHRwYWFkZGluZzoxMCxcbiAgICAgICAgY29sb3I6J2JsYWNrJ1xuICAgIH0sXG4gICAgbWVudU9wdG46e1xuICAgIGJvcmRlcjogMCxcbiAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICBoZWlnaHQ6IDQwLFxuICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXG4gICAgbWFyZ2luOicwIDVweCcsXG4gICAgZm9udFdlaWdodDonNDAwJ1xuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVBcHBCYXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHN0PSB1c2VTdHlsZXMocyk7XG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0QXV0aChldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU1lbnUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICB7LyogPEZvcm1Hcm91cD5cbiAgICAgICAgLy8gICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAvLyAgICAgICAgICAgICBjb250cm9sPXs8U3dpdGNoIGNoZWNrZWQ9e2F1dGh9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGFyaWEtbGFiZWw9XCJsb2dpbiBzd2l0Y2hcIiAvPn1cbiAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw9e2F1dGggPyAnTG9nb3V0JyA6ICdMb2dpbid9XG4gICAgICAgIC8vICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICB7LyogPC9Gb3JtR3JvdXA+ICovfVxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGVsZXZhdGlvbj17MH0gd2lkdGg9e1wiMTEwJVwifSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgbWFyZ2luOiAnMHB4IC0xMXB4Jyxwb3NpdGlvbjpcImFic29sdXRlXCJ9fT5cbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGFyaWEtbGFiZWw9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gc3R5bGU9e3ttYXJnaW5MZWZ0OicyMHB4Jyxjb2xvcjonYmxhY2snfX0+XG4gICAgICAgICAgICAgICAgICAgIEFHUk8gQUNBREVNSUNTXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPE1vdXNlT3ZlclBvcG92ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU9wdG59c3R5bGU9e3sgd2lkdGg6IFwiMTAlXCJ9fT5NYWdhemluZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU9wdG59c3R5bGU9e3sgd2lkdGg6IFwiMTAlXCJ9fT5OZXdzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVPcHRufXN0eWxlPXt7ICB3aWR0aDogXCIxMCVcIn19PkRvd25sb2FkczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51T3B0bn1zdHlsZT17eyAgd2lkdGg6IFwiMjAlXCJ9fT5FLUNhdGFsb2d1ZXM8L0J1dHRvbj5cblx0XHRcbiAgICAgICAgICAgICAgICAgICBcblxuXHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpblwiPlxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiI2RmZGZkZlwiLCBib3JkZXJSYWRpdXM6IFwiMTBweFwiLCBjdXJzb3I6XCJwb2ludGVyXCIsZm9udFNpemU6IFwiMThweFwiLCBoZWlnaHQ6IFwiNDBweFwiLCB3aWR0aDogXCI4NSVcIiwgYWxpZ246IFwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6ICcxMHB4JyxtYXJnaW5SaWdodDonNTBweCcsY29sb3I6J2JsYWNrJyxmb250V2VpZ2h0Oic0MDAnLCBvdXRsaW5lOlwibm9uZVwiLCBib3JkZXI6XCJub25lXCJ9fT5Mb2dpbiA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgey8qIHthdXRoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWFwcGJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5NeSBhY2NvdW50PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IGNyZWF0ZUZpbHRlck9wdGlvbnMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vc2VhcmNoYmFyLmNzcyc7XG5cbmNvbnN0IHVzZXN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgICAgICAgd2lkdGg6ICc2MCUnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIwJScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzUwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIHNlYXJjaEljb246IHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgdG9wOiAnMzAlJyxcbiAgICAgICAgbGVmdDogJzc2JScsXG4gICAgfSxcblxufSkpO1xuY29uc3QgZmlsdGVyT3B0aW9ucyA9IGNyZWF0ZUZpbHRlck9wdGlvbnMoe1xuICAgIG1hdGNoRnJvbTogJ3N0YXJ0JyxcbiAgICBsaW1pdDogNSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGcmVlU29sbygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlc3R5bGVzKClcbiAgICB1c2VTdHlsZXMocylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAxMDAgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJY29ufT5cbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCI0MHB4XCIgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgIGZyZWVTb2xvXG4gICAgICAgICAgICAgICAgaWQ9XCJmcmVlLXNvbG8tMi1kZW1vXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dG9wMTAwRmlsbXMubWFwKChvcHRpb24pID0+IG9wdGlvbi50aXRsZSl9XG4gICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17ZmlsdGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT17cy5maWVsZFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBCb29rc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3sgLi4ucGFyYW1zLklucHV0UHJvcHMsIHR5cGU6ICdzZWFyY2gnIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9XCJjZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIHNyYz1cImh0dHA6Ly9hZ3JvYmlvc29ubGluZS5jb20vYm9va3NfY292ZXJwYWdlcy8wNjI2MDkwOF82ODUuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwcHhcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA0MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8gVG9wIDEwMCBmaWxtcyBhcyByYXRlZCBieSBJTURiIHVzZXJzLiBodHRwOi8vd3d3LmltZGIuY29tL2NoYXJ0L3RvcFxuY29uc3QgdG9wMTAwRmlsbXMgPSBbXG4gICAgeyB0aXRsZTogJ1RoZSBTaGF3c2hhbmsgUmVkZW1wdGlvbicsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcicsIHllYXI6IDE5NzIgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEdvZGZhdGhlcjogUGFydCBJSScsIHllYXI6IDE5NzQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIERhcmsgS25pZ2h0JywgeWVhcjogMjAwOCB9LFxuICAgIHsgdGl0bGU6ICcxMiBBbmdyeSBNZW4nLCB5ZWFyOiAxOTU3IH0sXG4gICAgeyB0aXRsZTogXCJTY2hpbmRsZXIncyBMaXN0XCIsIHllYXI6IDE5OTMgfSxcbiAgICB7IHRpdGxlOiAnUHVscCBGaWN0aW9uJywgeWVhcjogMTk5NCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBSZXR1cm4gb2YgdGhlIEtpbmcnLCB5ZWFyOiAyMDAzIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHb29kLCB0aGUgQmFkIGFuZCB0aGUgVWdseScsIHllYXI6IDE5NjYgfSxcbiAgICB7IHRpdGxlOiAnRmlnaHQgQ2x1YicsIHllYXI6IDE5OTkgfSxcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZycsIHllYXI6IDIwMDEgfSxcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsIHllYXI6IDE5ODAgfSxcbiAgICB7IHRpdGxlOiAnRm9ycmVzdCBHdW1wJywgeWVhcjogMTk5NCB9LFxuICAgIHsgdGl0bGU6ICdJbmNlcHRpb24nLCB5ZWFyOiAyMDEwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIFR3byBUb3dlcnMnLCB5ZWFyOiAyMDAyIH0sXG4gICAgeyB0aXRsZTogXCJPbmUgRmxldyBPdmVyIHRoZSBDdWNrb28ncyBOZXN0XCIsIHllYXI6IDE5NzUgfSxcbiAgICB7IHRpdGxlOiAnR29vZGZlbGxhcycsIHllYXI6IDE5OTAgfSxcbiAgICB7IHRpdGxlOiAnVGhlIE1hdHJpeCcsIHllYXI6IDE5OTkgfSxcbiAgICB7IHRpdGxlOiAnU2V2ZW4gU2FtdXJhaScsIHllYXI6IDE5NTQgfSxcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsIHllYXI6IDE5NzcgfSxcbiAgICB7IHRpdGxlOiAnQ2l0eSBvZiBHb2QnLCB5ZWFyOiAyMDAyIH0sXG4gICAgeyB0aXRsZTogJ1NlN2VuJywgeWVhcjogMTk5NSB9LFxuICAgIHsgdGl0bGU6ICdUaGUgU2lsZW5jZSBvZiB0aGUgTGFtYnMnLCB5ZWFyOiAxOTkxIH0sXG4gICAgeyB0aXRsZTogXCJJdCdzIGEgV29uZGVyZnVsIExpZmVcIiwgeWVhcjogMTk0NiB9LFxuICAgIHsgdGl0bGU6ICdMaWZlIElzIEJlYXV0aWZ1bCcsIHllYXI6IDE5OTcgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFVzdWFsIFN1c3BlY3RzJywgeWVhcjogMTk5NSB9LFxuICAgIHsgdGl0bGU6ICdMw6lvbjogVGhlIFByb2Zlc3Npb25hbCcsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnU3Bpcml0ZWQgQXdheScsIHllYXI6IDIwMDEgfSxcbiAgICB7IHRpdGxlOiAnU2F2aW5nIFByaXZhdGUgUnlhbicsIHllYXI6IDE5OTggfSxcbiAgICB7IHRpdGxlOiAnT25jZSBVcG9uIGEgVGltZSBpbiB0aGUgV2VzdCcsIHllYXI6IDE5NjggfSxcbiAgICB7IHRpdGxlOiAnQW1lcmljYW4gSGlzdG9yeSBYJywgeWVhcjogMTk5OCB9LFxuICAgIHsgdGl0bGU6ICdJbnRlcnN0ZWxsYXInLCB5ZWFyOiAyMDE0IH0sXG4gICAgeyB0aXRsZTogJ0Nhc2FibGFuY2EnLCB5ZWFyOiAxOTQyIH0sXG4gICAgeyB0aXRsZTogJ0NpdHkgTGlnaHRzJywgeWVhcjogMTkzMSB9LFxuICAgIHsgdGl0bGU6ICdQc3ljaG8nLCB5ZWFyOiAxOTYwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHcmVlbiBNaWxlJywgeWVhcjogMTk5OSB9LFxuICAgIHsgdGl0bGU6ICdUaGUgSW50b3VjaGFibGVzJywgeWVhcjogMjAxMSB9LFxuICAgIHsgdGl0bGU6ICdNb2Rlcm4gVGltZXMnLCB5ZWFyOiAxOTM2IH0sXG4gICAgeyB0aXRsZTogJ1JhaWRlcnMgb2YgdGhlIExvc3QgQXJrJywgeWVhcjogMTk4MSB9LFxuICAgIHsgdGl0bGU6ICdSZWFyIFdpbmRvdycsIHllYXI6IDE5NTQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFBpYW5pc3QnLCB5ZWFyOiAyMDAyIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBEZXBhcnRlZCcsIHllYXI6IDIwMDYgfSxcbiAgICB7IHRpdGxlOiAnVGVybWluYXRvciAyOiBKdWRnbWVudCBEYXknLCB5ZWFyOiAxOTkxIH0sXG4gICAgeyB0aXRsZTogJ0JhY2sgdG8gdGhlIEZ1dHVyZScsIHllYXI6IDE5ODUgfSxcbiAgICB7IHRpdGxlOiAnV2hpcGxhc2gnLCB5ZWFyOiAyMDE0IH0sXG4gICAgeyB0aXRsZTogJ0dsYWRpYXRvcicsIHllYXI6IDIwMDAgfSxcbiAgICB7IHRpdGxlOiAnTWVtZW50bycsIHllYXI6IDIwMDAgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFByZXN0aWdlJywgeWVhcjogMjAwNiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgTGlvbiBLaW5nJywgeWVhcjogMTk5NCB9LFxuICAgIHsgdGl0bGU6ICdBcG9jYWx5cHNlIE5vdycsIHllYXI6IDE5NzkgfSxcbiAgICB7IHRpdGxlOiAnQWxpZW4nLCB5ZWFyOiAxOTc5IH0sXG4gICAgeyB0aXRsZTogJ1N1bnNldCBCb3VsZXZhcmQnLCB5ZWFyOiAxOTUwIH0sXG4gICAgeyB0aXRsZTogJ0RyLiBTdHJhbmdlbG92ZSBvcjogSG93IEkgTGVhcm5lZCB0byBTdG9wIFdvcnJ5aW5nIGFuZCBMb3ZlIHRoZSBCb21iJywgeWVhcjogMTk2NCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgR3JlYXQgRGljdGF0b3InLCB5ZWFyOiAxOTQwIH0sXG4gICAgeyB0aXRsZTogJ0NpbmVtYSBQYXJhZGlzbycsIHllYXI6IDE5ODggfSxcbiAgICB7IHRpdGxlOiAnVGhlIExpdmVzIG9mIE90aGVycycsIHllYXI6IDIwMDYgfSxcbiAgICB7IHRpdGxlOiAnR3JhdmUgb2YgdGhlIEZpcmVmbGllcycsIHllYXI6IDE5ODggfSxcbiAgICB7IHRpdGxlOiAnUGF0aHMgb2YgR2xvcnknLCB5ZWFyOiAxOTU3IH0sXG4gICAgeyB0aXRsZTogJ0RqYW5nbyBVbmNoYWluZWQnLCB5ZWFyOiAyMDEyIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBTaGluaW5nJywgeWVhcjogMTk4MCB9LFxuICAgIHsgdGl0bGU6ICdXQUxMwrdFJywgeWVhcjogMjAwOCB9LFxuICAgIHsgdGl0bGU6ICdBbWVyaWNhbiBCZWF1dHknLCB5ZWFyOiAxOTk5IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCBSaXNlcycsIHllYXI6IDIwMTIgfSxcbiAgICB7IHRpdGxlOiAnUHJpbmNlc3MgTW9ub25va2UnLCB5ZWFyOiAxOTk3IH0sXG4gICAgeyB0aXRsZTogJ0FsaWVucycsIHllYXI6IDE5ODYgfSxcbiAgICB7IHRpdGxlOiAnT2xkYm95JywgeWVhcjogMjAwMyB9LFxuICAgIHsgdGl0bGU6ICdPbmNlIFVwb24gYSBUaW1lIGluIEFtZXJpY2EnLCB5ZWFyOiAxOTg0IH0sXG4gICAgeyB0aXRsZTogJ1dpdG5lc3MgZm9yIHRoZSBQcm9zZWN1dGlvbicsIHllYXI6IDE5NTcgfSxcbiAgICB7IHRpdGxlOiAnRGFzIEJvb3QnLCB5ZWFyOiAxOTgxIH0sXG4gICAgeyB0aXRsZTogJ0NpdGl6ZW4gS2FuZScsIHllYXI6IDE5NDEgfSxcbiAgICB7IHRpdGxlOiAnTm9ydGggYnkgTm9ydGh3ZXN0JywgeWVhcjogMTk1OSB9LFxuICAgIHsgdGl0bGU6ICdWZXJ0aWdvJywgeWVhcjogMTk1OCB9LFxuICAgIHsgdGl0bGU6ICdTdGFyIFdhcnM6IEVwaXNvZGUgVkkgLSBSZXR1cm4gb2YgdGhlIEplZGknLCB5ZWFyOiAxOTgzIH0sXG4gICAgeyB0aXRsZTogJ1Jlc2Vydm9pciBEb2dzJywgeWVhcjogMTk5MiB9LFxuICAgIHsgdGl0bGU6ICdCcmF2ZWhlYXJ0JywgeWVhcjogMTk5NSB9LFxuICAgIHsgdGl0bGU6ICdNJywgeWVhcjogMTkzMSB9LFxuICAgIHsgdGl0bGU6ICdSZXF1aWVtIGZvciBhIERyZWFtJywgeWVhcjogMjAwMCB9LFxuICAgIHsgdGl0bGU6ICdBbcOpbGllJywgeWVhcjogMjAwMSB9LFxuICAgIHsgdGl0bGU6ICdBIENsb2Nrd29yayBPcmFuZ2UnLCB5ZWFyOiAxOTcxIH0sXG4gICAgeyB0aXRsZTogJ0xpa2UgU3RhcnMgb24gRWFydGgnLCB5ZWFyOiAyMDA3IH0sXG4gICAgeyB0aXRsZTogJ1RheGkgRHJpdmVyJywgeWVhcjogMTk3NiB9LFxuICAgIHsgdGl0bGU6ICdMYXdyZW5jZSBvZiBBcmFiaWEnLCB5ZWFyOiAxOTYyIH0sXG4gICAgeyB0aXRsZTogJ0RvdWJsZSBJbmRlbW5pdHknLCB5ZWFyOiAxOTQ0IH0sXG4gICAgeyB0aXRsZTogJ0V0ZXJuYWwgU3Vuc2hpbmUgb2YgdGhlIFNwb3RsZXNzIE1pbmQnLCB5ZWFyOiAyMDA0IH0sXG4gICAgeyB0aXRsZTogJ0FtYWRldXMnLCB5ZWFyOiAxOTg0IH0sXG4gICAgeyB0aXRsZTogJ1RvIEtpbGwgYSBNb2NraW5nYmlyZCcsIHllYXI6IDE5NjIgfSxcbiAgICB7IHRpdGxlOiAnVG95IFN0b3J5IDMnLCB5ZWFyOiAyMDEwIH0sXG4gICAgeyB0aXRsZTogJ0xvZ2FuJywgeWVhcjogMjAxNyB9LFxuICAgIHsgdGl0bGU6ICdGdWxsIE1ldGFsIEphY2tldCcsIHllYXI6IDE5ODcgfSxcbiAgICB7IHRpdGxlOiAnRGFuZ2FsJywgeWVhcjogMjAxNiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgU3RpbmcnLCB5ZWFyOiAxOTczIH0sXG4gICAgeyB0aXRsZTogJzIwMDE6IEEgU3BhY2UgT2R5c3NleScsIHllYXI6IDE5NjggfSxcbiAgICB7IHRpdGxlOiBcIlNpbmdpbicgaW4gdGhlIFJhaW5cIiwgeWVhcjogMTk1MiB9LFxuICAgIHsgdGl0bGU6ICdUb3kgU3RvcnknLCB5ZWFyOiAxOTk1IH0sXG4gICAgeyB0aXRsZTogJ0JpY3ljbGUgVGhpZXZlcycsIHllYXI6IDE5NDggfSxcbiAgICB7IHRpdGxlOiAnVGhlIEtpZCcsIHllYXI6IDE5MjEgfSxcbiAgICB7IHRpdGxlOiAnSW5nbG91cmlvdXMgQmFzdGVyZHMnLCB5ZWFyOiAyMDA5IH0sXG4gICAgeyB0aXRsZTogJ1NuYXRjaCcsIHllYXI6IDIwMDAgfSxcbiAgICB7IHRpdGxlOiAnMyBJZGlvdHMnLCB5ZWFyOiAyMDA5IH0sXG4gICAgeyB0aXRsZTogJ01vbnR5IFB5dGhvbiBhbmQgdGhlIEhvbHkgR3JhaWwnLCB5ZWFyOiAxOTc1IH0sXG5dO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFaQTtBQXFCQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==