require("source-map-support").install();
exports.ids = ["admin~dashboard"];
exports.modules = {

/***/ "./src/components/navbar.js":
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\navbar.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  menuOptn: {
    border: 0,
    color: 'black',
    height: 40,
    padding: '0 4px',
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    elevation: 0,
    width: "110%",
    style: {
      backgroundColor: "transparent",
      margin: '0px -11px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    edge: "start",
    className: classes.menuButton,
    "aria-label": "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    style: {
      marginLeft: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "AGRO ACADEMICS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_popover__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Magazines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Downloads"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      width: "20%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "E-Catalogues"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.menuOptn,
    style: {
      marginRight: '10%',
      width: "10%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Distributor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      backgroundColor: "#dfdfdf",
      borderRadius: "10px",
      fontSize: "14px",
      height: "40px",
      width: "10%",
      align: "center",
      marginLeft: '10px',
      marginRight: '50px',
      color: 'black',
      fontWeight: '400'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Login \xA0  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      fontSize: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/components/searchbar.js":
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
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\searchbar.js";

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
      position: "relative"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FkbWlufmRhc2hib2FyZC5qcyIsInNvdXJjZXMiOlsiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgcyBmcm9tJy4vbmF2QmFyLmNzcyc7XG5pbXBvcnQgTW91c2VPdmVyUG9wb3ZlciBmcm9tICcuL3BvcG92ZXInXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zJztcbmltcG9ydCB7TGluayxSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgIGNvbG9yOidibGFjaydcbiAgICB9LFxuICAgIG1lbnVPcHRuOntcbiAgICBib3JkZXI6IDAsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICBwYWRkaW5nOiAnMCA0cHgnLFxuICAgIG1hcmdpbjonMCA1cHgnLFxuICAgIGZvbnRXZWlnaHQ6JzQwMCdcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51QXBwQmFyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBzdD0gdXNlU3R5bGVzKHMpO1xuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEF1dGgoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIHsvKiA8Rm9ybUdyb3VwPlxuICAgICAgICAvLyAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnRyb2w9ezxTd2l0Y2ggY2hlY2tlZD17YXV0aH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImxvZ2luIHN3aXRjaFwiIC8+fVxuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbD17YXV0aCA/ICdMb2dvdXQnIDogJ0xvZ2luJ31cbiAgICAgICAgLy8gICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIHsvKiA8L0Zvcm1Hcm91cD4gKi99XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgZWxldmF0aW9uPXswfSB3aWR0aD17XCIxMTAlXCJ9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLCBtYXJnaW46ICcwcHggLTExcHgnfX0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBhcmlhLWxhYmVsPVwibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHN0eWxlPXt7bWFyZ2luTGVmdDonMTBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgQUdSTyBBQ0FERU1JQ1NcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8TW91c2VPdmVyUG9wb3ZlciAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51T3B0bn1zdHlsZT17eyAgd2lkdGg6IFwiMTAlXCJ9fT5NYWdhemluZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU9wdG59c3R5bGU9e3sgd2lkdGg6IFwiMTAlXCJ9fT5OZXdzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVPcHRufXN0eWxlPXt7ICB3aWR0aDogXCIxMCVcIn19PkRvd25sb2FkczwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51T3B0bn1zdHlsZT17eyAgd2lkdGg6IFwiMjAlXCJ9fT5FLUNhdGFsb2d1ZXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubWVudU9wdG59IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTAlJywgd2lkdGg6IFwiMTAlXCJ9fT5EaXN0cmlidXRvcjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZGZkZmRmXCIsIGJvcmRlclJhZGl1czogXCIxMHB4XCIsIGZvbnRTaXplOiBcIjE0cHhcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgd2lkdGg6IFwiMTAlXCIsIGFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5MZWZ0OiAnMTBweCcsbWFyZ2luUmlnaHQ6JzUwcHgnLGNvbG9yOidibGFjaycsZm9udFdlaWdodDonNDAwJ319PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiAmbmJzcDsgIDxBcnJvd0ZvcndhcmRJb3NJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAxNSB9fSAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7Lyoge2F1dGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdkxlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudS1hcHBiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtYXBwYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBmYWRlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBdXRvY29tcGxldGUsIHtjcmVhdGVGaWx0ZXJPcHRpb25zfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vc2VhcmNoYmFyLmNzcyc7XG5cbmNvbnN0IHVzZXN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgJyYgPiAqJzoge1xuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgICAgICAgd2lkdGg6ICc2MCUnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogJzIwJScsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzUwcHgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIHNlYXJjaEljb246IHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgdG9wOiAnMzAlJyxcbiAgICAgICAgbGVmdDogJzc2JScsXG4gICAgfSxcblxufSkpO1xuY29uc3QgZmlsdGVyT3B0aW9ucyA9IGNyZWF0ZUZpbHRlck9wdGlvbnMoe1xuICAgIG1hdGNoRnJvbTogJ3N0YXJ0JyxcbiAgICBsaW1pdDogNSxcbn0pOyAgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyZWVTb2xvKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VzdHlsZXMoKVxuICAgIHVzZVN0eWxlcyhzKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiNDBweFwiIH19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGUgXG4gICAgICAgICAgICAgICAgZnJlZVNvbG9cbiAgICAgICAgICAgICAgICBpZD1cImZyZWUtc29sby0yLWRlbW9cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt0b3AxMDBGaWxtcy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlKX1cbiAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPXtzLmZpZWxkU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VhcmNoIEJvb2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17eyAuLi5wYXJhbXMuSW5wdXRQcm9wcywgdHlwZTogJ3NlYXJjaCcgfX1cbiAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIHNyYz1cImh0dHA6Ly9hZ3JvYmlvc29ubGluZS5jb20vYm9va3NfY292ZXJwYWdlcy8wNjI2MDkwOF82ODUuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiOTBweFwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIixtYXJnaW5SaWdodDonMTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6NDAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8vIFRvcCAxMDAgZmlsbXMgYXMgcmF0ZWQgYnkgSU1EYiB1c2Vycy4gaHR0cDovL3d3dy5pbWRiLmNvbS9jaGFydC90b3BcbmNvbnN0IHRvcDEwMEZpbG1zID0gW1xuICAgIHsgdGl0bGU6ICdUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb24nLCB5ZWFyOiAxOTk0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXInLCB5ZWFyOiAxOTcyIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBHb2RmYXRoZXI6IFBhcnQgSUknLCB5ZWFyOiAxOTc0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBEYXJrIEtuaWdodCcsIHllYXI6IDIwMDggfSxcbiAgICB7IHRpdGxlOiAnMTIgQW5ncnkgTWVuJywgeWVhcjogMTk1NyB9LFxuICAgIHsgdGl0bGU6IFwiU2NoaW5kbGVyJ3MgTGlzdFwiLCB5ZWFyOiAxOTkzIH0sXG4gICAgeyB0aXRsZTogJ1B1bHAgRmljdGlvbicsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgUmV0dXJuIG9mIHRoZSBLaW5nJywgeWVhcjogMjAwMyB9LFxuICAgIHsgdGl0bGU6ICdUaGUgR29vZCwgdGhlIEJhZCBhbmQgdGhlIFVnbHknLCB5ZWFyOiAxOTY2IH0sXG4gICAgeyB0aXRsZTogJ0ZpZ2h0IENsdWInLCB5ZWFyOiAxOTk5IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcnLCB5ZWFyOiAyMDAxIH0sXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBWIC0gVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLCB5ZWFyOiAxOTgwIH0sXG4gICAgeyB0aXRsZTogJ0ZvcnJlc3QgR3VtcCcsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnSW5jZXB0aW9uJywgeWVhcjogMjAxMCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBUd28gVG93ZXJzJywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6IFwiT25lIEZsZXcgT3ZlciB0aGUgQ3Vja29vJ3MgTmVzdFwiLCB5ZWFyOiAxOTc1IH0sXG4gICAgeyB0aXRsZTogJ0dvb2RmZWxsYXMnLCB5ZWFyOiAxOTkwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBNYXRyaXgnLCB5ZWFyOiAxOTk5IH0sXG4gICAgeyB0aXRsZTogJ1NldmVuIFNhbXVyYWknLCB5ZWFyOiAxOTU0IH0sXG4gICAgeyB0aXRsZTogJ1N0YXIgV2FyczogRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLCB5ZWFyOiAxOTc3IH0sXG4gICAgeyB0aXRsZTogJ0NpdHkgb2YgR29kJywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6ICdTZTdlbicsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFNpbGVuY2Ugb2YgdGhlIExhbWJzJywgeWVhcjogMTk5MSB9LFxuICAgIHsgdGl0bGU6IFwiSXQncyBhIFdvbmRlcmZ1bCBMaWZlXCIsIHllYXI6IDE5NDYgfSxcbiAgICB7IHRpdGxlOiAnTGlmZSBJcyBCZWF1dGlmdWwnLCB5ZWFyOiAxOTk3IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBVc3VhbCBTdXNwZWN0cycsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnTMOpb246IFRoZSBQcm9mZXNzaW9uYWwnLCB5ZWFyOiAxOTk0IH0sXG4gICAgeyB0aXRsZTogJ1NwaXJpdGVkIEF3YXknLCB5ZWFyOiAyMDAxIH0sXG4gICAgeyB0aXRsZTogJ1NhdmluZyBQcml2YXRlIFJ5YW4nLCB5ZWFyOiAxOTk4IH0sXG4gICAgeyB0aXRsZTogJ09uY2UgVXBvbiBhIFRpbWUgaW4gdGhlIFdlc3QnLCB5ZWFyOiAxOTY4IH0sXG4gICAgeyB0aXRsZTogJ0FtZXJpY2FuIEhpc3RvcnkgWCcsIHllYXI6IDE5OTggfSxcbiAgICB7IHRpdGxlOiAnSW50ZXJzdGVsbGFyJywgeWVhcjogMjAxNCB9LFxuICAgIHsgdGl0bGU6ICdDYXNhYmxhbmNhJywgeWVhcjogMTk0MiB9LFxuICAgIHsgdGl0bGU6ICdDaXR5IExpZ2h0cycsIHllYXI6IDE5MzEgfSxcbiAgICB7IHRpdGxlOiAnUHN5Y2hvJywgeWVhcjogMTk2MCB9LFxuICAgIHsgdGl0bGU6ICdUaGUgR3JlZW4gTWlsZScsIHllYXI6IDE5OTkgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEludG91Y2hhYmxlcycsIHllYXI6IDIwMTEgfSxcbiAgICB7IHRpdGxlOiAnTW9kZXJuIFRpbWVzJywgeWVhcjogMTkzNiB9LFxuICAgIHsgdGl0bGU6ICdSYWlkZXJzIG9mIHRoZSBMb3N0IEFyaycsIHllYXI6IDE5ODEgfSxcbiAgICB7IHRpdGxlOiAnUmVhciBXaW5kb3cnLCB5ZWFyOiAxOTU0IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBQaWFuaXN0JywgeWVhcjogMjAwMiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgRGVwYXJ0ZWQnLCB5ZWFyOiAyMDA2IH0sXG4gICAgeyB0aXRsZTogJ1Rlcm1pbmF0b3IgMjogSnVkZ21lbnQgRGF5JywgeWVhcjogMTk5MSB9LFxuICAgIHsgdGl0bGU6ICdCYWNrIHRvIHRoZSBGdXR1cmUnLCB5ZWFyOiAxOTg1IH0sXG4gICAgeyB0aXRsZTogJ1doaXBsYXNoJywgeWVhcjogMjAxNCB9LFxuICAgIHsgdGl0bGU6ICdHbGFkaWF0b3InLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJ01lbWVudG8nLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJ1RoZSBQcmVzdGlnZScsIHllYXI6IDIwMDYgfSxcbiAgICB7IHRpdGxlOiAnVGhlIExpb24gS2luZycsIHllYXI6IDE5OTQgfSxcbiAgICB7IHRpdGxlOiAnQXBvY2FseXBzZSBOb3cnLCB5ZWFyOiAxOTc5IH0sXG4gICAgeyB0aXRsZTogJ0FsaWVuJywgeWVhcjogMTk3OSB9LFxuICAgIHsgdGl0bGU6ICdTdW5zZXQgQm91bGV2YXJkJywgeWVhcjogMTk1MCB9LFxuICAgIHsgdGl0bGU6ICdEci4gU3RyYW5nZWxvdmUgb3I6IEhvdyBJIExlYXJuZWQgdG8gU3RvcCBXb3JyeWluZyBhbmQgTG92ZSB0aGUgQm9tYicsIHllYXI6IDE5NjQgfSxcbiAgICB7IHRpdGxlOiAnVGhlIEdyZWF0IERpY3RhdG9yJywgeWVhcjogMTk0MCB9LFxuICAgIHsgdGl0bGU6ICdDaW5lbWEgUGFyYWRpc28nLCB5ZWFyOiAxOTg4IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBMaXZlcyBvZiBPdGhlcnMnLCB5ZWFyOiAyMDA2IH0sXG4gICAgeyB0aXRsZTogJ0dyYXZlIG9mIHRoZSBGaXJlZmxpZXMnLCB5ZWFyOiAxOTg4IH0sXG4gICAgeyB0aXRsZTogJ1BhdGhzIG9mIEdsb3J5JywgeWVhcjogMTk1NyB9LFxuICAgIHsgdGl0bGU6ICdEamFuZ28gVW5jaGFpbmVkJywgeWVhcjogMjAxMiB9LFxuICAgIHsgdGl0bGU6ICdUaGUgU2hpbmluZycsIHllYXI6IDE5ODAgfSxcbiAgICB7IHRpdGxlOiAnV0FMTMK3RScsIHllYXI6IDIwMDggfSxcbiAgICB7IHRpdGxlOiAnQW1lcmljYW4gQmVhdXR5JywgeWVhcjogMTk5OSB9LFxuICAgIHsgdGl0bGU6ICdUaGUgRGFyayBLbmlnaHQgUmlzZXMnLCB5ZWFyOiAyMDEyIH0sXG4gICAgeyB0aXRsZTogJ1ByaW5jZXNzIE1vbm9ub2tlJywgeWVhcjogMTk5NyB9LFxuICAgIHsgdGl0bGU6ICdBbGllbnMnLCB5ZWFyOiAxOTg2IH0sXG4gICAgeyB0aXRsZTogJ09sZGJveScsIHllYXI6IDIwMDMgfSxcbiAgICB7IHRpdGxlOiAnT25jZSBVcG9uIGEgVGltZSBpbiBBbWVyaWNhJywgeWVhcjogMTk4NCB9LFxuICAgIHsgdGl0bGU6ICdXaXRuZXNzIGZvciB0aGUgUHJvc2VjdXRpb24nLCB5ZWFyOiAxOTU3IH0sXG4gICAgeyB0aXRsZTogJ0RhcyBCb290JywgeWVhcjogMTk4MSB9LFxuICAgIHsgdGl0bGU6ICdDaXRpemVuIEthbmUnLCB5ZWFyOiAxOTQxIH0sXG4gICAgeyB0aXRsZTogJ05vcnRoIGJ5IE5vcnRod2VzdCcsIHllYXI6IDE5NTkgfSxcbiAgICB7IHRpdGxlOiAnVmVydGlnbycsIHllYXI6IDE5NTggfSxcbiAgICB7IHRpdGxlOiAnU3RhciBXYXJzOiBFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJywgeWVhcjogMTk4MyB9LFxuICAgIHsgdGl0bGU6ICdSZXNlcnZvaXIgRG9ncycsIHllYXI6IDE5OTIgfSxcbiAgICB7IHRpdGxlOiAnQnJhdmVoZWFydCcsIHllYXI6IDE5OTUgfSxcbiAgICB7IHRpdGxlOiAnTScsIHllYXI6IDE5MzEgfSxcbiAgICB7IHRpdGxlOiAnUmVxdWllbSBmb3IgYSBEcmVhbScsIHllYXI6IDIwMDAgfSxcbiAgICB7IHRpdGxlOiAnQW3DqWxpZScsIHllYXI6IDIwMDEgfSxcbiAgICB7IHRpdGxlOiAnQSBDbG9ja3dvcmsgT3JhbmdlJywgeWVhcjogMTk3MSB9LFxuICAgIHsgdGl0bGU6ICdMaWtlIFN0YXJzIG9uIEVhcnRoJywgeWVhcjogMjAwNyB9LFxuICAgIHsgdGl0bGU6ICdUYXhpIERyaXZlcicsIHllYXI6IDE5NzYgfSxcbiAgICB7IHRpdGxlOiAnTGF3cmVuY2Ugb2YgQXJhYmlhJywgeWVhcjogMTk2MiB9LFxuICAgIHsgdGl0bGU6ICdEb3VibGUgSW5kZW1uaXR5JywgeWVhcjogMTk0NCB9LFxuICAgIHsgdGl0bGU6ICdFdGVybmFsIFN1bnNoaW5lIG9mIHRoZSBTcG90bGVzcyBNaW5kJywgeWVhcjogMjAwNCB9LFxuICAgIHsgdGl0bGU6ICdBbWFkZXVzJywgeWVhcjogMTk4NCB9LFxuICAgIHsgdGl0bGU6ICdUbyBLaWxsIGEgTW9ja2luZ2JpcmQnLCB5ZWFyOiAxOTYyIH0sXG4gICAgeyB0aXRsZTogJ1RveSBTdG9yeSAzJywgeWVhcjogMjAxMCB9LFxuICAgIHsgdGl0bGU6ICdMb2dhbicsIHllYXI6IDIwMTcgfSxcbiAgICB7IHRpdGxlOiAnRnVsbCBNZXRhbCBKYWNrZXQnLCB5ZWFyOiAxOTg3IH0sXG4gICAgeyB0aXRsZTogJ0RhbmdhbCcsIHllYXI6IDIwMTYgfSxcbiAgICB7IHRpdGxlOiAnVGhlIFN0aW5nJywgeWVhcjogMTk3MyB9LFxuICAgIHsgdGl0bGU6ICcyMDAxOiBBIFNwYWNlIE9keXNzZXknLCB5ZWFyOiAxOTY4IH0sXG4gICAgeyB0aXRsZTogXCJTaW5naW4nIGluIHRoZSBSYWluXCIsIHllYXI6IDE5NTIgfSxcbiAgICB7IHRpdGxlOiAnVG95IFN0b3J5JywgeWVhcjogMTk5NSB9LFxuICAgIHsgdGl0bGU6ICdCaWN5Y2xlIFRoaWV2ZXMnLCB5ZWFyOiAxOTQ4IH0sXG4gICAgeyB0aXRsZTogJ1RoZSBLaWQnLCB5ZWFyOiAxOTIxIH0sXG4gICAgeyB0aXRsZTogJ0luZ2xvdXJpb3VzIEJhc3RlcmRzJywgeWVhcjogMjAwOSB9LFxuICAgIHsgdGl0bGU6ICdTbmF0Y2gnLCB5ZWFyOiAyMDAwIH0sXG4gICAgeyB0aXRsZTogJzMgSWRpb3RzJywgeWVhcjogMjAwOSB9LFxuICAgIHsgdGl0bGU6ICdNb250eSBQeXRob24gYW5kIHRoZSBIb2x5IEdyYWlsJywgeWVhcjogMTk3NSB9LFxuXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWEE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVpBO0FBcUJBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==