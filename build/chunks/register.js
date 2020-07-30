require("source-map-support").install();
exports.ids = ["register"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/register/Register.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Register-root-2_v1F {\n margin: 0;\n\tpadding: 0;\n}\n\n.Register-container-31Gk4 {\n  margin: 0 0;\n  padding: 0 0 0px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\nimg{\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack:center;\n\t    justify-content:center;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\tpadding: 20px;\n\tmargin-left: 125px;\n}", "",{"version":3,"sources":["Register.css","../../components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;;ACPF;;;;;;;EAOE;;AAEF;EACE;;+EAE6E;;EAE7E,iEAAiE;;EAEjE;;+EAE6E;;EAE7E,2BAA2B;;EAE3B;;+EAE6E;;EAE7E,sBAAsB,GAAG,+BAA+B;EACxD,sBAAsB,GAAG,0BAA0B;EACnD,sBAAsB,GAAG,4BAA4B;EACrD,uBAAuB,EAAE,gCAAgC;AAC3D;;ADnBA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAmC;EAAnC,mCAAmC;AACrC;;AACA;CACC,YAAY;CACZ,aAAa;CACb,oBAAa;CAAb,aAAa;CACb,oBAAsB;KAAtB,sBAAsB;CACtB,sBAAmB;KAAnB,mBAAmB;CACnB,aAAa;CACb,kBAAkB;AACnB","file":"Register.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n margin: 0;\n\tpadding: 0;\n}\n\n.container {\n  margin: 0 0;\n  padding: 0 0 0px;\n  max-width: var(--max-content-width);\n}\nimg{\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: flex;\n\tjustify-content:center;\n\talign-items: center;\n\tpadding: 20px;\n\tmargin-left: 125px;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"]}]);
// Exports
exports.locals = {
	"root": "Register-root-2_v1F",
	"container": "Register-container-31Gk4"
};

/***/ }),

/***/ "./src/routes/register/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegisterForm_Register1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/register/RegisterForm/Register1.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RegisterForm_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/register/RegisterForm/UserContext.js");
/* harmony import */ var _Register_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/routes/register/Register.css");
/* harmony import */ var _Register_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Register_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _avatar_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/register/avatar.svg");
/* harmony import */ var _avatar_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_avatar_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\App.js";


 //REGISTER FORM

 //HEADER

 //CONTEXT




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    minHeight: "100vh",
    alignContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      alignContent: "flex-start"
    }
  },
  header: {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    color: theme.palette.primary.light
  },
  toolbar: {
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterForm_UserContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: classes.header,
    xs: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h3",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "AGRO ACADEMICS", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _avatar_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h3",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Registration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h5",
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Complete all 3 steps to finish registration process")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RegisterForm_Register1__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/routes/register/Register.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/register/Register.css");
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
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/register/Register.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/register/Register.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/register/RegisterForm/FormComplete.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\FormComplete.js";



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  title: {
    padding: theme.spacing(5, 0)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = useStyles();

  const reload = () => {
    window.location.reload();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Congratulation! You completed registration process. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), "Verify Your Email To Step In."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: reload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Reload"));
});

/***/ }),

/***/ "./src/routes/register/RegisterForm/Register1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserPreferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/register/RegisterForm/UserPreferences.js");
/* harmony import */ var _UserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/register/RegisterForm/UserDetails.js");
/* harmony import */ var _UserSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/register/RegisterForm/UserSummary.js");
/* harmony import */ var _FormComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/register/RegisterForm/FormComplete.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/icons/Error");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/Stepper");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/Step");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("@material-ui/core/StepLabel");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("@material-ui/core/StepContent");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/routes/register/RegisterForm/UserContext.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\Register1.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 //MY MODULES




 //GENERAL


 //STEPPER




 //FORM

 //CONTEXT


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 0)
    },
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 0)
    }
  },
  center: {
    textAlign: "center"
  },
  content: {
    padding: theme.spacing(2, 3, 5)
  },
  buttonsContainer: {
    margin: theme.spacing(0, 0)
  },
  button: {
    marginRight: theme.spacing(2)
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));
const steps = ["Basic information", "User details", "Summary"]; //MAIN COMPONENT

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [completed, setCompleted] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [errors] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({});
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_13__["UserContext"]);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const isStepOptional = step => {
    return step === 1;
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (activeStep < steps.length - 1) handleNext();else {
      setCompleted(true);
    }
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: undefined
        });

      case 1:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserPreferences__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: undefined
        });

      case 2:
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserSummary__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: undefined
        });

      default:
        return "Unknown step";
    }
  };

  const handleError = e => {
    errors[e.target.name] = e.target.validationMessage;
    setState({ ...state,
      errors: { ...errors
      }
    });
    setOpen(true);
  };

  const handleChange = e => {
    //PASSWORD MATCHING
    if (e.target.name === "confirmPassword" && e.target.value !== state.user.password) {
      e.target.setCustomValidity("Passwords are not matching");
    } else {
      e.target.setCustomValidity("");
    }

    if (e.target.name === "password") {
      const confirm = e.target.form.querySelector("input[name='confirmPassword']"); // WHEN WE CHANGE PASSWORD, WE WANT TO VALIDATE CONFIRM PASSWORD AS WELL

      if (e.target.value === state.user.confirmPassword) {
        delete errors[confirm.name];
        confirm.setCustomValidity("");
      } else {
        confirm.setCustomValidity("Passwords are not matching");
        errors[confirm.name] = confirm.validationMessage;
      }
    }

    if (e.target.validity.valid) {
      //OTHER ELEMENTS
      delete errors[e.target.name];
    } else {
      errors[e.target.name] = e.target.validationMessage;
    }

    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({ ...state,
      user: { ...state.user,
        [e.target.name]: value
      },
      errors: { ...errors
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, !completed && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    activeStep: activeStep,
    orientation: "vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, steps.map((label, index) => {
    const labelProps = {};

    if (isStepOptional(index)) {
      labelProps.optional = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: undefined
      }, "Optional");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_9___default.a, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_10___default.a, _extends({}, labelProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }), label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit,
      onInvalid: handleError,
      onChange: handleChange,
      className: classes.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, getStepContent(activeStep), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.buttonsContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
      disabled: activeStep === 0,
      className: classes.button,
      variant: "contained",
      onClick: handleBack,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: undefined
    }, "Back"), activeStep < steps.length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
      type: "submit",
      className: classes.button,
      variant: "contained",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }, "Next"), activeStep === steps.length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, {
      type: "submit",
      className: classes.button,
      variant: "contained",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: undefined
    }, "Submit")))));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Snackbar"], {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    },
    resumeHideDuration: 3000,
    autoHideDuration: 3000,
    onClose: handleCloseSnackbar,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["SnackbarContent"], {
    className: (classes.error, classes.error),
    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.message,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: undefined
    }), "Please correct the data"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  })), completed && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: (classes.root, classes.center),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/routes/register/RegisterForm/UserContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\UserContext.js";

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])([{}, () => {}]);
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: new Date().toISOString().slice(0, 10),
      Country: "Indian",
      countryCode: "+91",
      phoneNumber: "",
      profession: "",
      password: "",
      confirmPassword: "",
      bio: "",
      PostalAddress: {
        addressLine1: "",
        addressLine2: "",
        lankMark: "",
        City: "",
        State: "",
        Country: ""
      },
      BillingAddress: {
        addressLine1: "",
        addressLine2: "",
        lankMark: "",
        City: "",
        State: "",
        Country: ""
      },
      governmentId: "",
      governmentIdentificationType: "",
      image: "",
      //convert to base 64
      isSubscibed: false,
      acceptTerms: false
    },
    errors: {}
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
    value: [state, setState],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, props.children);
});

/***/ }),

/***/ "./src/routes/register/RegisterForm/UserDetails.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/withWidth");
/* harmony import */ var _material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/routes/register/RegisterForm/UserContext.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\UserDetails.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 //GENERAL



 //CONTEXT


/* harmony default export */ __webpack_exports__["default"] = (props => {
  let country = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let countryC = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  const [state] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const {
    user,
    errors
  } = state;
  const dateLimit = new Date();
  dateLimit.setFullYear(dateLimit.getFullYear() - 18);
  const filterOptions = Object(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["createFilterOptions"])({
    matchFrom: 'start',
    limit: 5
  });

  const handleChanges = e => {
    setTimeout(() => {
      let CountryVal = country.childNodes[1].firstElementChild.value;
      console.log(CountryVal);
      CountryList.map(option => {
        if (option.name == CountryVal) {
          user.Countrycode = option.Iso;
          countryC.childNodes[1].firstElementChild.value = option.Iso;
        }
      });
    }, 1000);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Type your First Name here",
    name: "firstName",
    label: "FirstName",
    value: user.firstName,
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    required: true,
    inputProps: {
      minLength: 3,
      maxLength: 20
    },
    error: !!errors["username"],
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Type your First Name here",
    name: "lastName",
    label: "Lastname",
    value: user.lastName,
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    required: true,
    inputProps: {
      minLength: 3,
      maxLength: 20
    },
    error: !!errors["username"],
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Type your email here",
    name: "email",
    label: "Email",
    value: user.email,
    type: "email",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    error: !!errors["email"],
    required: true,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "date",
    name: "birthdate",
    id: "birthdate",
    label: "Date Of BIrth",
    defaultValue: user.birthdate,
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    inputProps: {
      min: "1920-01-01",
      max: dateLimit.toISOString().slice(0, 10)
    },
    error: !!errors["birthdate"],
    required: true,
    fullWidth: Object(_material_ui_core_withWidth__WEBPACK_IMPORTED_MODULE_2__["isWidthDown"])("sm"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "free-solo-2-demo",
    disableClearable: true,
    options: CountryList.map(option => option.name),
    filterOptions: filterOptions,
    onChange: handleChanges,
    renderInput: params => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({}, params, {
      ref: el => {
        country = el;
      },
      placeholder: "Country",
      name: "Country",
      label: "Country",
      value: user.Country,
      variant: "outlined",
      margin: "normal",
      InputLabelProps: {
        shrink: true
      },
      required: true,
      error: !!errors["Country"],
      fullWidth: true,
      InputProps: { ...params.InputProps,
        type: 'search'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    ref: el => {
      countryC = el;
    },
    placeholder: "countrycode",
    name: "email",
    label: "Country Code",
    value: user.Countrycode,
    disabled: true,
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    error: !!errors["email"],
    required: true,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Phone Number",
    type: "number",
    name: "phoneNumber",
    label: "Phone Number",
    value: user.phoneNumber,
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    error: !!errors["phoneNumber"],
    inputProps: {
      min: 100000,
      max: 9999999999999
    },
    required: true,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Type your password here",
    name: "password",
    label: "Password",
    value: user.password,
    type: "password",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    required: true,
    error: !!errors["password"],
    inputProps: {
      minLength: 6,
      maxLength: 20
    },
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    lg: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    placeholder: "Re-type your password here",
    label: "Password",
    name: "confirmPassword",
    value: user.confirmPassword,
    type: "password",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    error: !!errors["confirmPassword"],
    inputProps: {
      minLength: 6,
      maxLength: 20
    },
    required: true,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "free-solo-2-demo",
    disableClearable: true,
    options: CountryList.map(option => option.name),
    filterOptions: filterOptions,
    onChange: handleChanges,
    renderInput: params => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({}, params, {
      placeholder: "Government Identification Type",
      name: "governmentIdentificationType",
      label: "Government Identification Type",
      value: user.governmentIdentificationType,
      variant: "outlined",
      margin: "normal",
      InputLabelProps: {
        shrink: true
      },
      required: true,
      error: !!errors["Country"],
      fullWidth: true,
      InputProps: { ...params.InputProps,
        type: 'search'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  })));
});
const CountryList = [{
  "name": "Afghanistan",
  "Iso": "+93",
  "countryCode": "AF"
}, {
  "name": "Åland Islands",
  "Iso": "+358",
  "countryCode": "AX"
}, {
  "name": "Albania",
  "Iso": "+355",
  "countryCode": "AL"
}, {
  "name": "Algeria",
  "Iso": "+213",
  "countryCode": "DZ"
}, {
  "name": "American Samoa",
  "Iso": "+1684",
  "countryCode": "AS"
}, {
  "name": "Andorra",
  "Iso": "+376",
  "countryCode": "AD"
}, {
  "name": "Angola",
  "Iso": "+244",
  "countryCode": "AO"
}, {
  "name": "Anguilla",
  "Iso": "+1264",
  "countryCode": "AI"
}, {
  "name": "Antarctica",
  "Iso": "+672",
  "countryCode": "AQ"
}, {
  "name": "Antigua and Barbuda",
  "Iso": "+1268",
  "countryCode": "AG"
}, {
  "name": "Argentina",
  "Iso": "+54",
  "countryCode": "AR"
}, {
  "name": "Armenia",
  "Iso": "+374",
  "countryCode": "AM"
}, {
  "name": "Aruba",
  "Iso": "+297",
  "countryCode": "AW"
}, {
  "name": "Australia",
  "Iso": "+61",
  "countryCode": "AU"
}, {
  "name": "Austria",
  "Iso": "+43",
  "countryCode": "AT"
}, {
  "name": "Azerbaijan",
  "Iso": "+994",
  "countryCode": "AZ"
}, {
  "name": "Bahamas",
  "Iso": "+1242",
  "countryCode": "BS"
}, {
  "name": "Bahrain",
  "Iso": "+973",
  "countryCode": "BH"
}, {
  "name": "Bangladesh",
  "Iso": "+880",
  "countryCode": "BD"
}, {
  "name": "Barbados",
  "Iso": "+1246",
  "countryCode": "BB"
}, {
  "name": "Belarus",
  "Iso": "+375",
  "countryCode": "BY"
}, {
  "name": "Belgium",
  "Iso": "+32",
  "countryCode": "BE"
}, {
  "name": "Belize",
  "Iso": "+501",
  "countryCode": "BZ"
}, {
  "name": "Benin",
  "Iso": "+229",
  "countryCode": "BJ"
}, {
  "name": "Bermuda",
  "Iso": "+1441",
  "countryCode": "BM"
}, {
  "name": "Bhutan",
  "Iso": "+975",
  "countryCode": "BT"
}, {
  "name": "Bolivia, Plurinational State of bolivia",
  "Iso": "+591",
  "countryCode": "BO"
}, {
  "name": "Bosnia and Herzegovina",
  "Iso": "+387",
  "countryCode": "BA"
}, {
  "name": "Botswana",
  "Iso": "+267",
  "countryCode": "BW"
}, {
  "name": "Bouvet Island",
  "Iso": "+47",
  "countryCode": "BV"
}, {
  "name": "Brazil",
  "Iso": "+55",
  "countryCode": "BR"
}, {
  "name": "British Indian Ocean Territory",
  "Iso": "+246",
  "countryCode": "IO"
}, {
  "name": "Brunei Darussalam",
  "Iso": "+673",
  "countryCode": "BN"
}, {
  "name": "Bulgaria",
  "Iso": "+359",
  "countryCode": "BG"
}, {
  "name": "Burkina Faso",
  "Iso": "+226",
  "countryCode": "BF"
}, {
  "name": "Burundi",
  "Iso": "+257",
  "countryCode": "BI"
}, {
  "name": "Cambodia",
  "Iso": "+855",
  "countryCode": "KH"
}, {
  "name": "Cameroon",
  "Iso": "+237",
  "countryCode": "CM"
}, {
  "name": "Canada",
  "Iso": "+1",
  "countryCode": "CA"
}, {
  "name": "Cape Verde",
  "Iso": "+238",
  "countryCode": "CV"
}, {
  "name": "Cayman Islands",
  "Iso": "+ 345",
  "countryCode": "KY"
}, {
  "name": "Central African Republic",
  "Iso": "+236",
  "countryCode": "CF"
}, {
  "name": "Chad",
  "Iso": "+235",
  "countryCode": "TD"
}, {
  "name": "Chile",
  "Iso": "+56",
  "countryCode": "CL"
}, {
  "name": "China",
  "Iso": "+86",
  "countryCode": "CN"
}, {
  "name": "Christmas Island",
  "Iso": "+61",
  "countryCode": "CX"
}, {
  "name": "Cocos (Keeling) Islands",
  "Iso": "+61",
  "countryCode": "CC"
}, {
  "name": "Colombia",
  "Iso": "+57",
  "countryCode": "CO"
}, {
  "name": "Comoros",
  "Iso": "+269",
  "countryCode": "KM"
}, {
  "name": "Congo",
  "Iso": "+242",
  "countryCode": "CG"
}, {
  "name": "Congo, The Democratic Republic of the Congo",
  "Iso": "+243",
  "countryCode": "CD"
}, {
  "name": "Cook Islands",
  "Iso": "+682",
  "countryCode": "CK"
}, {
  "name": "Costa Rica",
  "Iso": "+506",
  "countryCode": "CR"
}, {
  "name": "Cote d'Ivoire",
  "Iso": "+225",
  "countryCode": "CI"
}, {
  "name": "Croatia",
  "Iso": "+385",
  "countryCode": "HR"
}, {
  "name": "Cuba",
  "Iso": "+53",
  "countryCode": "CU"
}, {
  "name": "Cyprus",
  "Iso": "+357",
  "countryCode": "CY"
}, {
  "name": "Czech Republic",
  "Iso": "+420",
  "countryCode": "CZ"
}, {
  "name": "Denmark",
  "Iso": "+45",
  "countryCode": "DK"
}, {
  "name": "Djibouti",
  "Iso": "+253",
  "countryCode": "DJ"
}, {
  "name": "Dominica",
  "Iso": "+1767",
  "countryCode": "DM"
}, {
  "name": "Dominican Republic",
  "Iso": "+1849",
  "countryCode": "DO"
}, {
  "name": "Ecuador",
  "Iso": "+593",
  "countryCode": "EC"
}, {
  "name": "Egypt",
  "Iso": "+20",
  "countryCode": "EG"
}, {
  "name": "El Salvador",
  "Iso": "+503",
  "countryCode": "SV"
}, {
  "name": "Equatorial Guinea",
  "Iso": "+240",
  "countryCode": "GQ"
}, {
  "name": "Eritrea",
  "Iso": "+291",
  "countryCode": "ER"
}, {
  "name": "Estonia",
  "Iso": "+372",
  "countryCode": "EE"
}, {
  "name": "Ethiopia",
  "Iso": "+251",
  "countryCode": "ET"
}, {
  "name": "Falkland Islands (Malvinas)",
  "Iso": "+500",
  "countryCode": "FK"
}, {
  "name": "Faroe Islands",
  "Iso": "+298",
  "countryCode": "FO"
}, {
  "name": "Fiji",
  "Iso": "+679",
  "countryCode": "FJ"
}, {
  "name": "Finland",
  "Iso": "+358",
  "countryCode": "FI"
}, {
  "name": "France",
  "Iso": "+33",
  "countryCode": "FR"
}, {
  "name": "French Guiana",
  "Iso": "+594",
  "countryCode": "GF"
}, {
  "name": "French Polynesia",
  "Iso": "+689",
  "countryCode": "PF"
}, {
  "name": "French Southern Territories",
  "Iso": "+262",
  "countryCode": "TF"
}, {
  "name": "Gabon",
  "Iso": "+241",
  "countryCode": "GA"
}, {
  "name": "Gambia",
  "Iso": "+220",
  "countryCode": "GM"
}, {
  "name": "Georgia",
  "Iso": "+995",
  "countryCode": "GE"
}, {
  "name": "Germany",
  "Iso": "+49",
  "countryCode": "DE"
}, {
  "name": "Ghana",
  "Iso": "+233",
  "countryCode": "GH"
}, {
  "name": "Gibraltar",
  "Iso": "+350",
  "countryCode": "GI"
}, {
  "name": "Greece",
  "Iso": "+30",
  "countryCode": "GR"
}, {
  "name": "Greenland",
  "Iso": "+299",
  "countryCode": "GL"
}, {
  "name": "Grenada",
  "Iso": "+1473",
  "countryCode": "GD"
}, {
  "name": "Guadeloupe",
  "Iso": "+590",
  "countryCode": "GP"
}, {
  "name": "Guam",
  "Iso": "+1671",
  "countryCode": "GU"
}, {
  "name": "Guatemala",
  "Iso": "+502",
  "countryCode": "GT"
}, {
  "name": "Guernsey",
  "Iso": "+44",
  "countryCode": "GG"
}, {
  "name": "Guinea",
  "Iso": "+224",
  "countryCode": "GN"
}, {
  "name": "Guinea-Bissau",
  "Iso": "+245",
  "countryCode": "GW"
}, {
  "name": "Guyana",
  "Iso": "+592",
  "countryCode": "GY"
}, {
  "name": "Haiti",
  "Iso": "+509",
  "countryCode": "HT"
}, {
  "name": "Heard Island and Mcdonald Islands",
  "Iso": "+0",
  "countryCode": "HM"
}, {
  "name": "Holy See (Vatican City State)",
  "Iso": "+379",
  "countryCode": "VA"
}, {
  "name": "Honduras",
  "Iso": "+504",
  "countryCode": "HN"
}, {
  "name": "Hong Kong",
  "Iso": "+852",
  "countryCode": "HK"
}, {
  "name": "Hungary",
  "Iso": "+36",
  "countryCode": "HU"
}, {
  "name": "Iceland",
  "Iso": "+354",
  "countryCode": "IS"
}, {
  "name": "India",
  "Iso": "+91",
  "countryCode": "IN"
}, {
  "name": "Indonesia",
  "Iso": "+62",
  "countryCode": "ID"
}, {
  "name": "Iran, Islamic Republic of Persian Gulf",
  "Iso": "+98",
  "countryCode": "IR"
}, {
  "name": "Iraq",
  "Iso": "+964",
  "countryCode": "IQ"
}, {
  "name": "Ireland",
  "Iso": "+353",
  "countryCode": "IE"
}, {
  "name": "Isle of Man",
  "Iso": "+44",
  "countryCode": "IM"
}, {
  "name": "Israel",
  "Iso": "+972",
  "countryCode": "IL"
}, {
  "name": "Italy",
  "Iso": "+39",
  "countryCode": "IT"
}, {
  "name": "Jamaica",
  "Iso": "+1876",
  "countryCode": "JM"
}, {
  "name": "Japan",
  "Iso": "+81",
  "countryCode": "JP"
}, {
  "name": "Jersey",
  "Iso": "+44",
  "countryCode": "JE"
}, {
  "name": "Jordan",
  "Iso": "+962",
  "countryCode": "JO"
}, {
  "name": "Kazakhstan",
  "Iso": "+7",
  "countryCode": "KZ"
}, {
  "name": "Kenya",
  "Iso": "+254",
  "countryCode": "KE"
}, {
  "name": "Kiribati",
  "Iso": "+686",
  "countryCode": "KI"
}, {
  "name": "Korea, Democratic People's Republic of Korea",
  "Iso": "+850",
  "countryCode": "KP"
}, {
  "name": "Korea, Republic of South Korea",
  "Iso": "+82",
  "countryCode": "KR"
}, {
  "name": "Kosovo",
  "Iso": "+383",
  "countryCode": "XK"
}, {
  "name": "Kuwait",
  "Iso": "+965",
  "countryCode": "KW"
}, {
  "name": "Kyrgyzstan",
  "Iso": "+996",
  "countryCode": "KG"
}, {
  "name": "Laos",
  "Iso": "+856",
  "countryCode": "LA"
}, {
  "name": "Latvia",
  "Iso": "+371",
  "countryCode": "LV"
}, {
  "name": "Lebanon",
  "Iso": "+961",
  "countryCode": "LB"
}, {
  "name": "Lesotho",
  "Iso": "+266",
  "countryCode": "LS"
}, {
  "name": "Liberia",
  "Iso": "+231",
  "countryCode": "LR"
}, {
  "name": "Libyan Arab Jamahiriya",
  "Iso": "+218",
  "countryCode": "LY"
}, {
  "name": "Liechtenstein",
  "Iso": "+423",
  "countryCode": "LI"
}, {
  "name": "Lithuania",
  "Iso": "+370",
  "countryCode": "LT"
}, {
  "name": "Luxembourg",
  "Iso": "+352",
  "countryCode": "LU"
}, {
  "name": "Macao",
  "Iso": "+853",
  "countryCode": "MO"
}, {
  "name": "Macedonia",
  "Iso": "+389",
  "countryCode": "MK"
}, {
  "name": "Madagascar",
  "Iso": "+261",
  "countryCode": "MG"
}, {
  "name": "Malawi",
  "Iso": "+265",
  "countryCode": "MW"
}, {
  "name": "Malaysia",
  "Iso": "+60",
  "countryCode": "MY"
}, {
  "name": "Maldives",
  "Iso": "+960",
  "countryCode": "MV"
}, {
  "name": "Mali",
  "Iso": "+223",
  "countryCode": "ML"
}, {
  "name": "Malta",
  "Iso": "+356",
  "countryCode": "MT"
}, {
  "name": "Marshall Islands",
  "Iso": "+692",
  "countryCode": "MH"
}, {
  "name": "Martinique",
  "Iso": "+596",
  "countryCode": "MQ"
}, {
  "name": "Mauritania",
  "Iso": "+222",
  "countryCode": "MR"
}, {
  "name": "Mauritius",
  "Iso": "+230",
  "countryCode": "MU"
}, {
  "name": "Mayotte",
  "Iso": "+262",
  "countryCode": "YT"
}, {
  "name": "Mexico",
  "Iso": "+52",
  "countryCode": "MX"
}, {
  "name": "Micronesia, Federated States of Micronesia",
  "Iso": "+691",
  "countryCode": "FM"
}, {
  "name": "Moldova",
  "Iso": "+373",
  "countryCode": "MD"
}, {
  "name": "Monaco",
  "Iso": "+377",
  "countryCode": "MC"
}, {
  "name": "Mongolia",
  "Iso": "+976",
  "countryCode": "MN"
}, {
  "name": "Montenegro",
  "Iso": "+382",
  "countryCode": "ME"
}, {
  "name": "Montserrat",
  "Iso": "+1664",
  "countryCode": "MS"
}, {
  "name": "Morocco",
  "Iso": "+212",
  "countryCode": "MA"
}, {
  "name": "Mozambique",
  "Iso": "+258",
  "countryCode": "MZ"
}, {
  "name": "Myanmar",
  "Iso": "+95",
  "countryCode": "MM"
}, {
  "name": "Namibia",
  "Iso": "+264",
  "countryCode": "NA"
}, {
  "name": "Nauru",
  "Iso": "+674",
  "countryCode": "NR"
}, {
  "name": "Nepal",
  "Iso": "+977",
  "countryCode": "NP"
}, {
  "name": "Netherlands",
  "Iso": "+31",
  "countryCode": "NL"
}, {
  "name": "Netherlands Antilles",
  "Iso": "+599",
  "countryCode": "AN"
}, {
  "name": "New Caledonia",
  "Iso": "+687",
  "countryCode": "NC"
}, {
  "name": "New Zealand",
  "Iso": "+64",
  "countryCode": "NZ"
}, {
  "name": "Nicaragua",
  "Iso": "+505",
  "countryCode": "NI"
}, {
  "name": "Niger",
  "Iso": "+227",
  "countryCode": "NE"
}, {
  "name": "Nigeria",
  "Iso": "+234",
  "countryCode": "NG"
}, {
  "name": "Niue",
  "Iso": "+683",
  "countryCode": "NU"
}, {
  "name": "Norfolk Island",
  "Iso": "+672",
  "countryCode": "NF"
}, {
  "name": "Northern Mariana Islands",
  "Iso": "+1670",
  "countryCode": "MP"
}, {
  "name": "Norway",
  "Iso": "+47",
  "countryCode": "NO"
}, {
  "name": "Oman",
  "Iso": "+968",
  "countryCode": "OM"
}, {
  "name": "Pakistan",
  "Iso": "+92",
  "countryCode": "PK"
}, {
  "name": "Palau",
  "Iso": "+680",
  "countryCode": "PW"
}, {
  "name": "Palestinian Territory, Occupied",
  "Iso": "+970",
  "countryCode": "PS"
}, {
  "name": "Panama",
  "Iso": "+507",
  "countryCode": "PA"
}, {
  "name": "Papua New Guinea",
  "Iso": "+675",
  "countryCode": "PG"
}, {
  "name": "Paraguay",
  "Iso": "+595",
  "countryCode": "PY"
}, {
  "name": "Peru",
  "Iso": "+51",
  "countryCode": "PE"
}, {
  "name": "Philippines",
  "Iso": "+63",
  "countryCode": "PH"
}, {
  "name": "Pitcairn",
  "Iso": "+64",
  "countryCode": "PN"
}, {
  "name": "Poland",
  "Iso": "+48",
  "countryCode": "PL"
}, {
  "name": "Portugal",
  "Iso": "+351",
  "countryCode": "PT"
}, {
  "name": "Puerto Rico",
  "Iso": "+1939",
  "countryCode": "PR"
}, {
  "name": "Qatar",
  "Iso": "+974",
  "countryCode": "QA"
}, {
  "name": "Romania",
  "Iso": "+40",
  "countryCode": "RO"
}, {
  "name": "Russia",
  "Iso": "+7",
  "countryCode": "RU"
}, {
  "name": "Rwanda",
  "Iso": "+250",
  "countryCode": "RW"
}, {
  "name": "Reunion",
  "Iso": "+262",
  "countryCode": "RE"
}, {
  "name": "Saint Barthelemy",
  "Iso": "+590",
  "countryCode": "BL"
}, {
  "name": "Saint Helena, Ascension and Tristan Da Cunha",
  "Iso": "+290",
  "countryCode": "SH"
}, {
  "name": "Saint Kitts and Nevis",
  "Iso": "+1869",
  "countryCode": "KN"
}, {
  "name": "Saint Lucia",
  "Iso": "+1758",
  "countryCode": "LC"
}, {
  "name": "Saint Martin",
  "Iso": "+590",
  "countryCode": "MF"
}, {
  "name": "Saint Pierre and Miquelon",
  "Iso": "+508",
  "countryCode": "PM"
}, {
  "name": "Saint Vincent and the Grenadines",
  "Iso": "+1784",
  "countryCode": "VC"
}, {
  "name": "Samoa",
  "Iso": "+685",
  "countryCode": "WS"
}, {
  "name": "San Marino",
  "Iso": "+378",
  "countryCode": "SM"
}, {
  "name": "Sao Tome and Principe",
  "Iso": "+239",
  "countryCode": "ST"
}, {
  "name": "Saudi Arabia",
  "Iso": "+966",
  "countryCode": "SA"
}, {
  "name": "Senegal",
  "Iso": "+221",
  "countryCode": "SN"
}, {
  "name": "Serbia",
  "Iso": "+381",
  "countryCode": "RS"
}, {
  "name": "Seychelles",
  "Iso": "+248",
  "countryCode": "SC"
}, {
  "name": "Sierra Leone",
  "Iso": "+232",
  "countryCode": "SL"
}, {
  "name": "Singapore",
  "Iso": "+65",
  "countryCode": "SG"
}, {
  "name": "Slovakia",
  "Iso": "+421",
  "countryCode": "SK"
}, {
  "name": "Slovenia",
  "Iso": "+386",
  "countryCode": "SI"
}, {
  "name": "Solomon Islands",
  "Iso": "+677",
  "countryCode": "SB"
}, {
  "name": "Somalia",
  "Iso": "+252",
  "countryCode": "SO"
}, {
  "name": "South Africa",
  "Iso": "+27",
  "countryCode": "ZA"
}, {
  "name": "South Sudan",
  "Iso": "+211",
  "countryCode": "SS"
}, {
  "name": "South Georgia and the South Sandwich Islands",
  "Iso": "+500",
  "countryCode": "GS"
}, {
  "name": "Spain",
  "Iso": "+34",
  "countryCode": "ES"
}, {
  "name": "Sri Lanka",
  "Iso": "+94",
  "countryCode": "LK"
}, {
  "name": "Sudan",
  "Iso": "+249",
  "countryCode": "SD"
}, {
  "name": "Suriname",
  "Iso": "+597",
  "countryCode": "SR"
}, {
  "name": "Svalbard and Jan Mayen",
  "Iso": "+47",
  "countryCode": "SJ"
}, {
  "name": "Swaziland",
  "Iso": "+268",
  "countryCode": "SZ"
}, {
  "name": "Sweden",
  "Iso": "+46",
  "countryCode": "SE"
}, {
  "name": "Switzerland",
  "Iso": "+41",
  "countryCode": "CH"
}, {
  "name": "Syrian Arab Republic",
  "Iso": "+963",
  "countryCode": "SY"
}, {
  "name": "Taiwan",
  "Iso": "+886",
  "countryCode": "TW"
}, {
  "name": "Tajikistan",
  "Iso": "+992",
  "countryCode": "TJ"
}, {
  "name": "Tanzania, United Republic of Tanzania",
  "Iso": "+255",
  "countryCode": "TZ"
}, {
  "name": "Thailand",
  "Iso": "+66",
  "countryCode": "TH"
}, {
  "name": "Timor-Leste",
  "Iso": "+670",
  "countryCode": "TL"
}, {
  "name": "Togo",
  "Iso": "+228",
  "countryCode": "TG"
}, {
  "name": "Tokelau",
  "Iso": "+690",
  "countryCode": "TK"
}, {
  "name": "Tonga",
  "Iso": "+676",
  "countryCode": "TO"
}, {
  "name": "Trinidad and Tobago",
  "Iso": "+1868",
  "countryCode": "TT"
}, {
  "name": "Tunisia",
  "Iso": "+216",
  "countryCode": "TN"
}, {
  "name": "Turkey",
  "Iso": "+90",
  "countryCode": "TR"
}, {
  "name": "Turkmenistan",
  "Iso": "+993",
  "countryCode": "TM"
}, {
  "name": "Turks and Caicos Islands",
  "Iso": "+1649",
  "countryCode": "TC"
}, {
  "name": "Tuvalu",
  "Iso": "+688",
  "countryCode": "TV"
}, {
  "name": "Uganda",
  "Iso": "+256",
  "countryCode": "UG"
}, {
  "name": "Ukraine",
  "Iso": "+380",
  "countryCode": "UA"
}, {
  "name": "United Arab Emirates",
  "Iso": "+971",
  "countryCode": "AE"
}, {
  "name": "United Kingdom",
  "Iso": "+44",
  "countryCode": "GB"
}, {
  "name": "United States",
  "Iso": "+1",
  "countryCode": "US"
}, {
  "name": "Uruguay",
  "Iso": "+598",
  "countryCode": "UY"
}, {
  "name": "Uzbekistan",
  "Iso": "+998",
  "countryCode": "UZ"
}, {
  "name": "Vanuatu",
  "Iso": "+678",
  "countryCode": "VU"
}, {
  "name": "Venezuela, Bolivarian Republic of Venezuela",
  "Iso": "+58",
  "countryCode": "VE"
}, {
  "name": "Vietnam",
  "Iso": "+84",
  "countryCode": "VN"
}, {
  "name": "Virgin Islands, British",
  "Iso": "+1284",
  "countryCode": "VG"
}, {
  "name": "Virgin Islands, U.S.",
  "Iso": "+1340",
  "countryCode": "VI"
}, {
  "name": "Wallis and Futuna",
  "Iso": "+681",
  "countryCode": "WF"
}, {
  "name": "Yemen",
  "Iso": "+967",
  "countryCode": "YE"
}, {
  "name": "Zambia",
  "Iso": "+260",
  "countryCode": "ZM"
}, {
  "name": "Zimbabwe",
  "Iso": "+263",
  "countryCode": "ZW"
}];

/***/ }),

/***/ "./src/routes/register/RegisterForm/UserPreferences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/register/RegisterForm/UserContext.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\UserPreferences.js";

 //GENERAL

 //USER PREFERENCES

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const [state] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const {
    user
  } = state;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "bio",
    label: "Bio",
    value: user.bio,
    name: "bio",
    placeholder: "Type few words about you",
    variant: "outlined",
    margin: "normal",
    multiline: true,
    InputLabelProps: {
      shrink: true
    },
    inputProps: {
      maxLength: 200
    },
    fullWidth: true,
    rows: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "website",
    label: "Website",
    name: "website",
    type: "url",
    value: user.website,
    placeholder: "Type URL address of your website",
    helperText: "URL address should start with http://... or https://...",
    variant: "outlined",
    margin: "normal",
    InputLabelProps: {
      shrink: true
    },
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./src/routes/register/RegisterForm/UserSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/register/RegisterForm/UserContext.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\RegisterForm\\UserSummary.js";


 //GENERAL


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  summary: {
    padding: theme.spacing(3),
    border: "1px solid #ddd",
    marginBottom: theme.spacing(2)
  }
})); // SUMMARY COMPONENT

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const classes = useStyles();
  const [state] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
  const {
    username,
    email,
    birthdate,
    bio,
    website
  } = state.user;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Summary")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Birthdate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, birthdate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Bio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, bio || "-")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, website || "-"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      checked: state.user.newsletter,
      color: "primary",
      name: "newsletter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }),
    label: "Sign me up for Newsletter, to receive regular updates.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      checked: state.user.acceptTerms,
      required: true,
      color: "primary",
      name: "acceptTerms",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }),
    label: "I accept terms and conditions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }))));
});

/***/ }),

/***/ "./src/routes/register/avatar.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/register/avatar.svg?af9757de";

/***/ }),

/***/ "./src/routes/register/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/register/App.js");
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\register\\index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'New User Registration';

function action() {
  return {
    chunks: ['register'],
    title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvUmVnaXN0ZXIuY3NzP2UxNDEiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS9Gb3JtQ29tcGxldGUuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS9SZWdpc3RlcjEuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS9Vc2VyQ29udGV4dC5qcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvUmVnaXN0ZXJGb3JtL1VzZXJEZXRhaWxzLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9yZWdpc3Rlci9SZWdpc3RlckZvcm0vVXNlclByZWZlcmVuY2VzLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9yZWdpc3Rlci9SZWdpc3RlckZvcm0vVXNlclN1bW1hcnkuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL2F2YXRhci5zdmciLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5SZWdpc3Rlci1yb290LTJfdjFGIHtcXG4gbWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5SZWdpc3Rlci1jb250YWluZXItMzFHazQge1xcbiAgbWFyZ2luOiAwIDA7XFxuICBwYWRkaW5nOiAwIDAgMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuaW1ne1xcblxcdHdpZHRoOiAxMDBweDtcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LW1zLWZsZXgtcGFjazpjZW50ZXI7XFxuXFx0ICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMjVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiUmVnaXN0ZXIuY3NzXCIsXCIuLi8uLi9jb21wb25lbnRzL3ZhcmlhYmxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7RUFPRTs7QUNQRjs7Ozs7OztFQU9FOztBQUVGO0VBQ0U7OytFQUU2RTs7RUFFN0UsaUVBQWlFOztFQUVqRTs7K0VBRTZFOztFQUU3RSwyQkFBMkI7O0VBRTNCOzsrRUFFNkU7O0VBRTdFLHNCQUFzQixHQUFHLCtCQUErQjtFQUN4RCxzQkFBc0IsR0FBRywwQkFBMEI7RUFDbkQsc0JBQXNCLEdBQUcsNEJBQTRCO0VBQ3JELHVCQUF1QixFQUFFLGdDQUFnQztBQUMzRDs7QURuQkE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBbUM7RUFBbkMsbUNBQW1DO0FBQ3JDOztBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixvQkFBYTtDQUFiLGFBQWE7Q0FDYixvQkFBc0I7S0FBdEIsc0JBQXNCO0NBQ3RCLHNCQUFtQjtLQUFuQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQlwiLFwiZmlsZVwiOlwiUmVnaXN0ZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy92YXJpYWJsZXMuY3NzJztcXG5cXG4ucm9vdCB7XFxuIG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAwO1xcbiAgcGFkZGluZzogMCAwIDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5pbWd7XFxuXFx0d2lkdGg6IDEwMHB4O1xcblxcdGhlaWdodDogMTAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRtYXJnaW4tbGVmdDogMTI1cHg7XFxufVwiLFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlJlZ2lzdGVyLXJvb3QtMl92MUZcIixcblx0XCJjb250YWluZXJcIjogXCJSZWdpc3Rlci1jb250YWluZXItMzFHazRcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuLy9SRUdJU1RFUiBGT1JNXG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gXCIuL1JlZ2lzdGVyRm9ybS9SZWdpc3RlcjFcIjtcbi8vSEVBREVSXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuLy9DT05URVhUXG5pbXBvcnQgVXNlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi9SZWdpc3RlckZvcm0vVXNlckNvbnRleHRcIjtcbmltcG9ydCBzIGZyb20gJy4vUmVnaXN0ZXIuY3NzJ1xuaW1wb3J0IGxvZ2luSW1nIGZyb20gXCIuL2F2YXRhci5zdmdcIjtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgIGFsaWduQ29udGVudDogXCJzdHJldGNoXCIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcbiAgICAgIGFsaWduQ29udGVudDogXCJmbGV4LXN0YXJ0XCJcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xuICAgICAgZmxleEdyb3c6IDFcbiAgICB9XG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHQsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodFxuICB9LFxuICB0b29sYmFyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgfVxufSkpO1xuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9IHhzPXsxMn0gbWQ9ezR9PlxuXHQgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICBBR1JPIEFDQURFTUlDU1xuXHQgICA8aW1nIHNyYz17bG9naW5JbWd9IC8+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gzJyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgUmVnaXN0cmF0aW9uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgQ29tcGxldGUgYWxsIDMgc3RlcHMgdG8gZmluaXNoIHJlZ2lzdHJhdGlvbiBwcm9jZXNzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XG4gICAgICAgICAgPFJlZ2lzdGVyRm9ybSAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Vc2VyQ29udGV4dFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1JlZ2lzdGVyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1JlZ2lzdGVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vUmVnaXN0ZXIuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDApXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHJlbG9hZCA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgIENvbmdyYXR1bGF0aW9uISBZb3UgY29tcGxldGVkIHJlZ2lzdHJhdGlvbiBwcm9jZXNzLiA8YnIgLz5cblx0ICAgIFZlcmlmeSBZb3VyIEVtYWlsIFRvIFN0ZXAgSW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9J2NvbnRhaW5lZCcgY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e3JlbG9hZH0+XG4gICAgICAgIFJlbG9hZFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG4vL01ZIE1PRFVMRVNcbmltcG9ydCBVc2VyUHJlZmVyZW5jZXMgZnJvbSBcIi4vVXNlclByZWZlcmVuY2VzXCI7XG5pbXBvcnQgVXNlckRldGFpbHMgZnJvbSBcIi4vVXNlckRldGFpbHNcIjtcbmltcG9ydCBVc2VyU3VtbWFyeSBmcm9tIFwiLi9Vc2VyU3VtbWFyeVwiO1xuaW1wb3J0IEZvcm1Db21wbGV0ZSBmcm9tIFwiLi9Gb3JtQ29tcGxldGVcIjtcblxuLy9HRU5FUkFMXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHksIFNuYWNrYmFyLCBTbmFja2JhckNvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBFcnJvckljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FcnJvclwiO1xuLy9TVEVQUEVSXG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IFN0ZXBDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29udGVudFwiO1xuLy9GT1JNXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbi8vQ09OVEVYVFxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi9Vc2VyQ29udGV4dFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAwKVxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIildOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDApXG4gICAgfVxuICB9LFxuICBjZW50ZXI6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgfSxcbiAgY29udGVudDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMywgNSlcbiAgfSxcbiAgYnV0dG9uc0NvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwKVxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBlcnJvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIGljb246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmNvbnN0IHN0ZXBzID0gW1wiQmFzaWMgaW5mb3JtYXRpb25cIiwgXCJVc2VyIGRldGFpbHNcIiwgXCJTdW1tYXJ5XCJdO1xuXG4vL01BSU4gQ09NUE9ORU5UXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtlcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaXNTdGVwT3B0aW9uYWwgPSBzdGVwID0+IHtcbiAgICByZXR1cm4gc3RlcCA9PT0gMTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xvc2VTbmFja2JhciA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChhY3RpdmVTdGVwIDwgc3RlcHMubGVuZ3RoIC0gMSkgaGFuZGxlTmV4dCgpO1xuICAgIGVsc2Uge1xuICAgICAgc2V0Q29tcGxldGVkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdGVwQ29udGVudCA9IHN0ZXAgPT4ge1xuICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gPFVzZXJEZXRhaWxzIC8+O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFVzZXJQcmVmZXJlbmNlcyAvPjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDxVc2VyU3VtbWFyeSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlVua25vd24gc3RlcFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFcnJvciA9IGUgPT4ge1xuICAgIGVycm9yc1tlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGVycm9yczogeyAuLi5lcnJvcnMgfSB9KTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIC8vUEFTU1dPUkQgTUFUQ0hJTkdcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5uYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiICYmXG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gc3RhdGUudXNlci5wYXNzd29yZFxuICAgICkge1xuICAgICAgZS50YXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQYXNzd29yZHMgYXJlIG5vdCBtYXRjaGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGNvbnN0IGNvbmZpcm0gPSBlLnRhcmdldC5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiaW5wdXRbbmFtZT0nY29uZmlybVBhc3N3b3JkJ11cIlxuICAgICAgKTtcbiAgICAgIC8vIFdIRU4gV0UgQ0hBTkdFIFBBU1NXT1JELCBXRSBXQU5UIFRPIFZBTElEQVRFIENPTkZJUk0gUEFTU1dPUkQgQVMgV0VMTFxuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBzdGF0ZS51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICBkZWxldGUgZXJyb3JzW2NvbmZpcm0ubmFtZV07XG4gICAgICAgIGNvbmZpcm0uc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIGFyZSBub3QgbWF0Y2hpbmdcIik7XG4gICAgICAgIGVycm9yc1tjb25maXJtLm5hbWVdID0gY29uZmlybS52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAvL09USEVSIEVMRU1FTlRTXG4gICAgICBkZWxldGUgZXJyb3JzW2UudGFyZ2V0Lm5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnNbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZS50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdXNlcjogeyAuLi5zdGF0ZS51c2VyLCBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0sXG4gICAgICBlcnJvcnM6IHsgLi4uZXJyb3JzIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHshY29tcGxldGVkICYmIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0gb3JpZW50YXRpb249J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYWJlbFByb3BzID0ge307XG4gICAgICAgICAgICAgIGlmIChpc1N0ZXBPcHRpb25hbChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBsYWJlbFByb3BzLm9wdGlvbmFsID0gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+T3B0aW9uYWw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8U3RlcExhYmVsIHsuLi5sYWJlbFByb3BzfT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8U3RlcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e2hhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9TdGVwQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxuICAgICAgICByZXN1bWVIaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlU25hY2tiYXJ9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICA+XG4gICAgICAgIDxTbmFja2JhckNvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9eyhjbGFzc2VzLmVycm9yLCBjbGFzc2VzLmVycm9yKX1cbiAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAge1wiUGxlYXNlIGNvcnJlY3QgdGhlIGRhdGFcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L1NuYWNrYmFyPlxuICAgICAge2NvbXBsZXRlZCAmJiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXsoY2xhc3Nlcy5yb290LCBjbGFzc2VzLmNlbnRlcil9PlxuICAgICAgICAgIDxGb3JtQ29tcGxldGUgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KFt7fSwgKCkgPT4ge31dKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiB7XG4gICAgICBmaXJzdE5hbWU6IFwiXCIsXG4gICAgICBsYXN0TmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgZGF0ZU9mQmlydGg6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICBDb3VudHJ5OiBcIkluZGlhblwiLFxuICAgICAgY291bnRyeUNvZGU6IFwiKzkxXCIsXG4gICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgIHByb2Zlc3Npb246XCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgICAgYmlvOiBcIlwiLFxuXG4gICAgICBQb3N0YWxBZGRyZXNzOiB7XG4gICAgICAgIGFkZHJlc3NMaW5lMTogXCJcIixcbiAgICAgICAgYWRkcmVzc0xpbmUyOlwiXCIsXG4gICAgICAgIGxhbmtNYXJrOlwiXCIsXG4gICAgICAgIENpdHk6XCJcIixcbiAgICAgICAgU3RhdGU6XCJcIixcbiAgICAgICAgQ291bnRyeTpcIlwiLFxuICAgICAgfSxcbiAgICAgIEJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIGFkZHJlc3NMaW5lMTpcIlwiLFxuICAgICAgICBhZGRyZXNzTGluZTI6XCJcIixcbiAgICAgICAgbGFua01hcms6XCJcIixcbiAgICAgICAgQ2l0eTpcIlwiLFxuICAgICAgICBTdGF0ZTpcIlwiLFxuICAgICAgICBDb3VudHJ5OlwiXCIsXG4gICAgICB9LFxuICAgICAgZ292ZXJubWVudElkOlwiXCIsIFxuICAgICAgZ292ZXJubWVudElkZW50aWZpY2F0aW9uVHlwZTpcIlwiLFxuICAgICAgaW1hZ2U6IFwiXCIsLy9jb252ZXJ0IHRvIGJhc2UgNjRcbiAgICAgIGlzU3Vic2NpYmVkOiBmYWxzZSxcbiAgICAgIGFjY2VwdFRlcm1zOiBmYWxzZSxcbiAgICB9LFxuICAgIGVycm9yczoge31cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuLy9HRU5FUkFMXG5pbXBvcnQgeyBUZXh0RmllbGQsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGlzV2lkdGhEb3duIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3dpdGhXaWR0aFwiO1xuaW1wb3J0IEF1dG9jb21wbGV0ZSwgeyBjcmVhdGVGaWx0ZXJPcHRpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xuLy9DT05URVhUXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuL1VzZXJDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgbGV0IGNvdW50cnk9UmVhY3QudXNlUmVmKG51bGwpXG4gIGxldCBjb3VudHJ5QyA9IFJlYWN0LnVzZVJlZihudWxsKVxuICBjb25zdCBbc3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IHsgdXNlciwgZXJyb3JzIH0gPSBzdGF0ZTtcbiAgY29uc3QgZGF0ZUxpbWl0ID0gbmV3IERhdGUoKTtcbiAgZGF0ZUxpbWl0LnNldEZ1bGxZZWFyKGRhdGVMaW1pdC5nZXRGdWxsWWVhcigpIC0gMTgpO1xuICBjb25zdCBmaWx0ZXJPcHRpb25zID0gY3JlYXRlRmlsdGVyT3B0aW9ucyh7XG4gICAgbWF0Y2hGcm9tOiAnc3RhcnQnLFxuICAgIGxpbWl0OiA1LFxuICB9KTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlcz0oZSk9PntcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBDb3VudHJ5VmFsID0gY291bnRyeS5jaGlsZE5vZGVzWzFdLmZpcnN0RWxlbWVudENoaWxkLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhDb3VudHJ5VmFsKVxuICAgICAgQ291bnRyeUxpc3QubWFwKChvcHRpb24pID0+IHsgaWYgKG9wdGlvbi5uYW1lID09IENvdW50cnlWYWwpIHsgdXNlci5Db3VudHJ5Y29kZSA9IG9wdGlvbi5Jc287IGNvdW50cnlDLmNoaWxkTm9kZXNbMV0uZmlyc3RFbGVtZW50Q2hpbGQudmFsdWU9b3B0aW9uLklzbyB9IH0pICAgXG4gICAgfSwgMTAwMCk7ICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgRmlyc3QgTmFtZSBoZXJlJ1xuICAgICAgICAgIG5hbWU9J2ZpcnN0TmFtZSdcbiAgICAgICAgICBsYWJlbD0nRmlyc3ROYW1lJ1xuICAgICAgICAgIHZhbHVlPXt1c2VyLmZpcnN0TmFtZX1cbiAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgfX1cbiAgICAgICAgICBlcnJvcj17ISFlcnJvcnNbXCJ1c2VybmFtZVwiXX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBGaXJzdCBOYW1lIGhlcmUnXG4gICAgICAgICAgbmFtZT0nbGFzdE5hbWUnXG4gICAgICAgICAgbGFiZWw9J0xhc3RuYW1lJ1xuICAgICAgICAgIHZhbHVlPXt1c2VyLmxhc3ROYW1lfVxuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcbiAgICAgICAgICAgIG1heExlbmd0aDogMjBcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVycm9yPXshIWVycm9yc1tcInVzZXJuYW1lXCJdfVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPiBcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBlbWFpbCBoZXJlJ1xuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICB2YWx1ZT17dXNlci5lbWFpbH1cbiAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3JzW1wiZW1haWxcIl19XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgdHlwZT0nZGF0ZSdcbiAgICAgICAgICBuYW1lPSdiaXJ0aGRhdGUnXG4gICAgICAgICAgaWQ9J2JpcnRoZGF0ZSdcbiAgICAgICAgICBsYWJlbD0nRGF0ZSBPZiBCSXJ0aCdcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3VzZXIuYmlydGhkYXRlfVxuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtaW46IFwiMTkyMC0wMS0wMVwiLFxuICAgICAgICAgICAgbWF4OiBkYXRlTGltaXQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVycm9yPXshIWVycm9yc1tcImJpcnRoZGF0ZVwiXX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGZ1bGxXaWR0aD17aXNXaWR0aERvd24oXCJzbVwiKX1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cblxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgaWQ9XCJmcmVlLXNvbG8tMi1kZW1vXCJcbiAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXG4gICAgICAgICAgb3B0aW9ucz17Q291bnRyeUxpc3QubWFwKChvcHRpb24pID0+IG9wdGlvbi5uYW1lKX1cbiAgICAgICAgICBmaWx0ZXJPcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VzfVxuICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgICAgICByZWY9eyhlbCkgPT4geyBjb3VudHJ5ID0gZWw7IH19XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb3VudHJ5J1xuICAgICAgICAgICAgICBuYW1lPSdDb3VudHJ5J1xuICAgICAgICAgICAgICBsYWJlbD0nQ291bnRyeSdcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIuQ291bnRyeX1cbiAgICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZXJyb3I9eyEhZXJyb3JzW1wiQ291bnRyeVwiXX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIElucHV0UHJvcHM9e3sgLi4ucGFyYW1zLklucHV0UHJvcHMsIHR5cGU6ICdzZWFyY2gnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgPFRleHRGaWVsZCByZWY9eyhlbCkgPT4geyBjb3VudHJ5QyA9IGVsOyB9fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdjb3VudHJ5Y29kZSdcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICBsYWJlbD0nQ291bnRyeSBDb2RlJ1xuICAgICAgICAgIHZhbHVlPXt1c2VyLkNvdW50cnljb2RlfVxuICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBlcnJvcj17ISFlcnJvcnNbXCJlbWFpbFwiXX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8R3JpZCBpdGVtIHhzPXs5fT5cbiAgICAgICAgPFRleHRGaWVsZCBcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGhvbmUgTnVtYmVyJ1xuICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICBuYW1lPSdwaG9uZU51bWJlcidcbiAgICAgICAgICBsYWJlbD0nUGhvbmUgTnVtYmVyJ1xuICAgICAgICAgIHZhbHVlPXt1c2VyLnBob25lTnVtYmVyfVxuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBlcnJvcj17ISFlcnJvcnNbXCJwaG9uZU51bWJlclwiXX1cbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtaW46IDEwMDAwMCxcbiAgICAgICAgICAgIG1heDogOTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBwYXNzd29yZCBoZXJlJ1xuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcbiAgICAgICAgICB2YWx1ZT17dXNlci5wYXNzd29yZH1cbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgIHNocmluazogdHJ1ZVxuICAgICAgICAgIH19XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBlcnJvcj17ISFlcnJvcnNbXCJwYXNzd29yZFwiXX1cbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IDYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgfX1cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUmUtdHlwZSB5b3VyIHBhc3N3b3JkIGhlcmUnXG4gICAgICAgICAgbGFiZWw9J1Bhc3N3b3JkJ1xuICAgICAgICAgIG5hbWU9J2NvbmZpcm1QYXNzd29yZCdcbiAgICAgICAgICB2YWx1ZT17dXNlci5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICB9fVxuICAgICAgICAgIGVycm9yPXshIWVycm9yc1tcImNvbmZpcm1QYXNzd29yZFwiXX1cbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtaW5MZW5ndGg6IDYsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgaWQ9XCJmcmVlLXNvbG8tMi1kZW1vXCJcbiAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXG4gICAgICAgICAgb3B0aW9ucz17Q291bnRyeUxpc3QubWFwKChvcHRpb24pID0+IG9wdGlvbi5uYW1lKX1cbiAgICAgICAgICBmaWx0ZXJPcHRpb25zPXtmaWx0ZXJPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VzfVxuICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdHb3Zlcm5tZW50IElkZW50aWZpY2F0aW9uIFR5cGUnXG4gICAgICAgICAgICAgIG5hbWU9J2dvdmVybm1lbnRJZGVudGlmaWNhdGlvblR5cGUnXG4gICAgICAgICAgICAgIGxhYmVsPSdHb3Zlcm5tZW50IElkZW50aWZpY2F0aW9uIFR5cGUnXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyLmdvdmVybm1lbnRJZGVudGlmaWNhdGlvblR5cGV9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGVycm9yPXshIWVycm9yc1tcIkNvdW50cnlcIl19XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7IC4uLnBhcmFtcy5JbnB1dFByb3BzLCB0eXBlOiAnc2VhcmNoJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5jb25zdCBDb3VudHJ5TGlzdCA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgXCJJc29cIjogXCIrOTNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQUZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiw4VsYW5kIElzbGFuZHNcIixcbiAgICBcIklzb1wiOiBcIiszNThcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQVhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQWxiYW5pYVwiLFxuICAgIFwiSXNvXCI6IFwiKzM1NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBTFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBbGdlcmlhXCIsXG4gICAgXCJJc29cIjogXCIrMjEzXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkRaXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkFtZXJpY2FuIFNhbW9hXCIsXG4gICAgXCJJc29cIjogXCIrMTY4NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBU1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBbmRvcnJhXCIsXG4gICAgXCJJc29cIjogXCIrMzc2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkFEXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkFuZ29sYVwiLFxuICAgIFwiSXNvXCI6IFwiKzI0NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBT1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBbmd1aWxsYVwiLFxuICAgIFwiSXNvXCI6IFwiKzEyNjRcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQUlcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQW50YXJjdGljYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY3MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBUVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXG4gICAgXCJJc29cIjogXCIrMTI2OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBR1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBcmdlbnRpbmFcIixcbiAgICBcIklzb1wiOiBcIis1NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBcm1lbmlhXCIsXG4gICAgXCJJc29cIjogXCIrMzc0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkFNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkFydWJhXCIsXG4gICAgXCJJc29cIjogXCIrMjk3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkFXXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiLFxuICAgIFwiSXNvXCI6IFwiKzYxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkFVXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkF1c3RyaWFcIixcbiAgICBcIklzb1wiOiBcIis0M1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJBemVyYmFpamFuXCIsXG4gICAgXCJJc29cIjogXCIrOTk0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkFaXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJhaGFtYXNcIixcbiAgICBcIklzb1wiOiBcIisxMjQyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJTXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJhaHJhaW5cIixcbiAgICBcIklzb1wiOiBcIis5NzNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQkhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQmFuZ2xhZGVzaFwiLFxuICAgIFwiSXNvXCI6IFwiKzg4MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCRFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCYXJiYWRvc1wiLFxuICAgIFwiSXNvXCI6IFwiKzEyNDZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQkJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQmVsYXJ1c1wiLFxuICAgIFwiSXNvXCI6IFwiKzM3NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCWVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCZWxnaXVtXCIsXG4gICAgXCJJc29cIjogXCIrMzJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQkVcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQmVsaXplXCIsXG4gICAgXCJJc29cIjogXCIrNTAxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJaXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJlbmluXCIsXG4gICAgXCJJc29cIjogXCIrMjI5XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJKXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJlcm11ZGFcIixcbiAgICBcIklzb1wiOiBcIisxNDQxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJodXRhblwiLFxuICAgIFwiSXNvXCI6IFwiKzk3NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mIGJvbGl2aWFcIixcbiAgICBcIklzb1wiOiBcIis1OTFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQk9cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLFxuICAgIFwiSXNvXCI6IFwiKzM4N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCQVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCb3Rzd2FuYVwiLFxuICAgIFwiSXNvXCI6IFwiKzI2N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCV1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCb3V2ZXQgSXNsYW5kXCIsXG4gICAgXCJJc29cIjogXCIrNDdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQlZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQnJhemlsXCIsXG4gICAgXCJJc29cIjogXCIrNTVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQlJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsXG4gICAgXCJJc29cIjogXCIrMjQ2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIklPXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJydW5laSBEYXJ1c3NhbGFtXCIsXG4gICAgXCJJc29cIjogXCIrNjczXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJOXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJ1bGdhcmlhXCIsXG4gICAgXCJJc29cIjogXCIrMzU5XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJHXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkJ1cmtpbmEgRmFzb1wiLFxuICAgIFwiSXNvXCI6IFwiKzIyNlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJCRlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJCdXJ1bmRpXCIsXG4gICAgXCJJc29cIjogXCIrMjU3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJJXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNhbWJvZGlhXCIsXG4gICAgXCJJc29cIjogXCIrODU1XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIktIXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNhbWVyb29uXCIsXG4gICAgXCJJc29cIjogXCIrMjM3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNhbmFkYVwiLFxuICAgIFwiSXNvXCI6IFwiKzFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQ0FcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2FwZSBWZXJkZVwiLFxuICAgIFwiSXNvXCI6IFwiKzIzOFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJDVlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDYXltYW4gSXNsYW5kc1wiLFxuICAgIFwiSXNvXCI6IFwiKyAzNDVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiS1lcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXG4gICAgXCJJc29cIjogXCIrMjM2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNGXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNoYWRcIixcbiAgICBcIklzb1wiOiBcIisyMzVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVERcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ2hpbGVcIixcbiAgICBcIklzb1wiOiBcIis1NlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJDTFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDaGluYVwiLFxuICAgIFwiSXNvXCI6IFwiKzg2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNOXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNocmlzdG1hcyBJc2xhbmRcIixcbiAgICBcIklzb1wiOiBcIis2MVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJDWFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLFxuICAgIFwiSXNvXCI6IFwiKzYxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNDXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNvbG9tYmlhXCIsXG4gICAgXCJJc29cIjogXCIrNTdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQ09cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ29tb3Jvc1wiLFxuICAgIFwiSXNvXCI6IFwiKzI2OVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDb25nb1wiLFxuICAgIFwiSXNvXCI6IFwiKzI0MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJDR1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsXG4gICAgXCJJc29cIjogXCIrMjQzXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNEXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNvb2sgSXNsYW5kc1wiLFxuICAgIFwiSXNvXCI6IFwiKzY4MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJDS1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDb3N0YSBSaWNhXCIsXG4gICAgXCJJc29cIjogXCIrNTA2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNSXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkNvdGUgZCdJdm9pcmVcIixcbiAgICBcIklzb1wiOiBcIisyMjVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQ0lcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ3JvYXRpYVwiLFxuICAgIFwiSXNvXCI6IFwiKzM4NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJIUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJDdWJhXCIsXG4gICAgXCJJc29cIjogXCIrNTNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQ1VcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiQ3lwcnVzXCIsXG4gICAgXCJJc29cIjogXCIrMzU3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNZXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsXG4gICAgXCJJc29cIjogXCIrNDIwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkNaXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkRlbm1hcmtcIixcbiAgICBcIklzb1wiOiBcIis0NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJES1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJEamlib3V0aVwiLFxuICAgIFwiSXNvXCI6IFwiKzI1M1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJESlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJEb21pbmljYVwiLFxuICAgIFwiSXNvXCI6IFwiKzE3NjdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiRE1cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsXG4gICAgXCJJc29cIjogXCIrMTg0OVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJET1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFY3VhZG9yXCIsXG4gICAgXCJJc29cIjogXCIrNTkzXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkVDXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVneXB0XCIsXG4gICAgXCJJc29cIjogXCIrMjBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiRUdcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRWwgU2FsdmFkb3JcIixcbiAgICBcIklzb1wiOiBcIis1MDNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU1ZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRXF1YXRvcmlhbCBHdWluZWFcIixcbiAgICBcIklzb1wiOiBcIisyNDBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1FcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRXJpdHJlYVwiLFxuICAgIFwiSXNvXCI6IFwiKzI5MVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJFUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFc3RvbmlhXCIsXG4gICAgXCJJc29cIjogXCIrMzcyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkVFXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkV0aGlvcGlhXCIsXG4gICAgXCJJc29cIjogXCIrMjUxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkVUXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLFxuICAgIFwiSXNvXCI6IFwiKzUwMFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJGS1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJGYXJvZSBJc2xhbmRzXCIsXG4gICAgXCJJc29cIjogXCIrMjk4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkZPXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkZpamlcIixcbiAgICBcIklzb1wiOiBcIis2NzlcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiRkpcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRmlubGFuZFwiLFxuICAgIFwiSXNvXCI6IFwiKzM1OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJGSVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJGcmFuY2VcIixcbiAgICBcIklzb1wiOiBcIiszM1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJGUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJGcmVuY2ggR3VpYW5hXCIsXG4gICAgXCJJc29cIjogXCIrNTk0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdGXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkZyZW5jaCBQb2x5bmVzaWFcIixcbiAgICBcIklzb1wiOiBcIis2ODlcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUEZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsXG4gICAgXCJJc29cIjogXCIrMjYyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRGXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdhYm9uXCIsXG4gICAgXCJJc29cIjogXCIrMjQxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdBXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdhbWJpYVwiLFxuICAgIFwiSXNvXCI6IFwiKzIyMFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJHTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJHZW9yZ2lhXCIsXG4gICAgXCJJc29cIjogXCIrOTk1XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdFXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdlcm1hbnlcIixcbiAgICBcIklzb1wiOiBcIis0OVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJERVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJHaGFuYVwiLFxuICAgIFwiSXNvXCI6IFwiKzIzM1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJHSFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJHaWJyYWx0YXJcIixcbiAgICBcIklzb1wiOiBcIiszNTBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR0lcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3JlZWNlXCIsXG4gICAgXCJJc29cIjogXCIrMzBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1JcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3JlZW5sYW5kXCIsXG4gICAgXCJJc29cIjogXCIrMjk5XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdMXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkdyZW5hZGFcIixcbiAgICBcIklzb1wiOiBcIisxNDczXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdEXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkd1YWRlbG91cGVcIixcbiAgICBcIklzb1wiOiBcIis1OTBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1BcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3VhbVwiLFxuICAgIFwiSXNvXCI6IFwiKzE2NzFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1VcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsXG4gICAgXCJJc29cIjogXCIrNTAyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdUXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkd1ZXJuc2V5XCIsXG4gICAgXCJJc29cIjogXCIrNDRcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR0dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3VpbmVhXCIsXG4gICAgXCJJc29cIjogXCIrMjI0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdOXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkd1aW5lYS1CaXNzYXVcIixcbiAgICBcIklzb1wiOiBcIisyNDVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiR3V5YW5hXCIsXG4gICAgXCJJc29cIjogXCIrNTkyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdZXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhhaXRpXCIsXG4gICAgXCJJc29cIjogXCIrNTA5XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkhUXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNkb25hbGQgSXNsYW5kc1wiLFxuICAgIFwiSXNvXCI6IFwiKzBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSE1cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSlcIixcbiAgICBcIklzb1wiOiBcIiszNzlcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVkFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSG9uZHVyYXNcIixcbiAgICBcIklzb1wiOiBcIis1MDRcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSE5cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSG9uZyBLb25nXCIsXG4gICAgXCJJc29cIjogXCIrODUyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkhLXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkh1bmdhcnlcIixcbiAgICBcIklzb1wiOiBcIiszNlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJIVVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJY2VsYW5kXCIsXG4gICAgXCJJc29cIjogXCIrMzU0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIklTXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkluZGlhXCIsXG4gICAgXCJJc29cIjogXCIrOTFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSU5cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsXG4gICAgXCJJc29cIjogXCIrNjJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSURcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZiBQZXJzaWFuIEd1bGZcIixcbiAgICBcIklzb1wiOiBcIis5OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJJUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJcmFxXCIsXG4gICAgXCJJc29cIjogXCIrOTY0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIklRXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIklyZWxhbmRcIixcbiAgICBcIklzb1wiOiBcIiszNTNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSUVcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSXNsZSBvZiBNYW5cIixcbiAgICBcIklzb1wiOiBcIis0NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJJTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJJc3JhZWxcIixcbiAgICBcIklzb1wiOiBcIis5NzJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiSUxcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiSXRhbHlcIixcbiAgICBcIklzb1wiOiBcIiszOVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJJVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJKYW1haWNhXCIsXG4gICAgXCJJc29cIjogXCIrMTg3NlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJKTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJKYXBhblwiLFxuICAgIFwiSXNvXCI6IFwiKzgxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkpQXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkplcnNleVwiLFxuICAgIFwiSXNvXCI6IFwiKzQ0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkpFXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkpvcmRhblwiLFxuICAgIFwiSXNvXCI6IFwiKzk2MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJKT1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLYXpha2hzdGFuXCIsXG4gICAgXCJJc29cIjogXCIrN1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLWlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLZW55YVwiLFxuICAgIFwiSXNvXCI6IFwiKzI1NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLRVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLaXJpYmF0aVwiLFxuICAgIFwiSXNvXCI6IFwiKzY4NlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLSVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZiBLb3JlYVwiLFxuICAgIFwiSXNvXCI6IFwiKzg1MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLUFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLb3JlYSwgUmVwdWJsaWMgb2YgU291dGggS29yZWFcIixcbiAgICBcIklzb1wiOiBcIis4MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJLUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJLb3Nvdm9cIixcbiAgICBcIklzb1wiOiBcIiszODNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiWEtcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiS3V3YWl0XCIsXG4gICAgXCJJc29cIjogXCIrOTY1XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIktXXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkt5cmd5enN0YW5cIixcbiAgICBcIklzb1wiOiBcIis5OTZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiS0dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTGFvc1wiLFxuICAgIFwiSXNvXCI6IFwiKzg1NlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJMQVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMYXR2aWFcIixcbiAgICBcIklzb1wiOiBcIiszNzFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTFZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTGViYW5vblwiLFxuICAgIFwiSXNvXCI6IFwiKzk2MVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJMQlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMZXNvdGhvXCIsXG4gICAgXCJJc29cIjogXCIrMjY2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkxTXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkxpYmVyaWFcIixcbiAgICBcIklzb1wiOiBcIisyMzFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTFJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTGlieWFuIEFyYWIgSmFtYWhpcml5YVwiLFxuICAgIFwiSXNvXCI6IFwiKzIxOFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJMWVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMaWVjaHRlbnN0ZWluXCIsXG4gICAgXCJJc29cIjogXCIrNDIzXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkxJXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkxpdGh1YW5pYVwiLFxuICAgIFwiSXNvXCI6IFwiKzM3MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJMVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJMdXhlbWJvdXJnXCIsXG4gICAgXCJJc29cIjogXCIrMzUyXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkxVXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hY2FvXCIsXG4gICAgXCJJc29cIjogXCIrODUzXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1PXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hY2Vkb25pYVwiLFxuICAgIFwiSXNvXCI6IFwiKzM4OVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNS1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYWRhZ2FzY2FyXCIsXG4gICAgXCJJc29cIjogXCIrMjYxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1HXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbGF3aVwiLFxuICAgIFwiSXNvXCI6IFwiKzI2NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNV1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYWxheXNpYVwiLFxuICAgIFwiSXNvXCI6IFwiKzYwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1ZXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbGRpdmVzXCIsXG4gICAgXCJJc29cIjogXCIrOTYwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1WXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hbGlcIixcbiAgICBcIklzb1wiOiBcIisyMjNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTUxcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFsdGFcIixcbiAgICBcIklzb1wiOiBcIiszNTZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTVRcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiSXNvXCI6IFwiKzY5MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNSFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNYXJ0aW5pcXVlXCIsXG4gICAgXCJJc29cIjogXCIrNTk2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1RXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1hdXJpdGFuaWFcIixcbiAgICBcIklzb1wiOiBcIisyMjJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTVJcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWF1cml0aXVzXCIsXG4gICAgXCJJc29cIjogXCIrMjMwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1VXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1heW90dGVcIixcbiAgICBcIklzb1wiOiBcIisyNjJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiWVRcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWV4aWNvXCIsXG4gICAgXCJJc29cIjogXCIrNTJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTVhcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZiBNaWNyb25lc2lhXCIsXG4gICAgXCJJc29cIjogXCIrNjkxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkZNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1vbGRvdmFcIixcbiAgICBcIklzb1wiOiBcIiszNzNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTURcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTW9uYWNvXCIsXG4gICAgXCJJc29cIjogXCIrMzc3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1DXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1vbmdvbGlhXCIsXG4gICAgXCJJc29cIjogXCIrOTc2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1OXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk1vbnRlbmVncm9cIixcbiAgICBcIklzb1wiOiBcIiszODJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTUVcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTW9udHNlcnJhdFwiLFxuICAgIFwiSXNvXCI6IFwiKzE2NjRcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTVNcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTW9yb2Njb1wiLFxuICAgIFwiSXNvXCI6IFwiKzIxMlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNQVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJNb3phbWJpcXVlXCIsXG4gICAgXCJJc29cIjogXCIrMjU4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk1aXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk15YW5tYXJcIixcbiAgICBcIklzb1wiOiBcIis5NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOYW1pYmlhXCIsXG4gICAgXCJJc29cIjogXCIrMjY0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk5BXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5hdXJ1XCIsXG4gICAgXCJJc29cIjogXCIrNjc0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk5SXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5lcGFsXCIsXG4gICAgXCJJc29cIjogXCIrOTc3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk5QXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5ldGhlcmxhbmRzXCIsXG4gICAgXCJJc29cIjogXCIrMzFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTkxcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmV0aGVybGFuZHMgQW50aWxsZXNcIixcbiAgICBcIklzb1wiOiBcIis1OTlcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQU5cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTmV3IENhbGVkb25pYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY4N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJOQ1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOZXcgWmVhbGFuZFwiLFxuICAgIFwiSXNvXCI6IFwiKzY0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk5aXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5pY2FyYWd1YVwiLFxuICAgIFwiSXNvXCI6IFwiKzUwNVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJOSVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOaWdlclwiLFxuICAgIFwiSXNvXCI6IFwiKzIyN1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJORVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOaWdlcmlhXCIsXG4gICAgXCJJc29cIjogXCIrMjM0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk5HXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIk5pdWVcIixcbiAgICBcIklzb1wiOiBcIis2ODNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTlVcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9yZm9sayBJc2xhbmRcIixcbiAgICBcIklzb1wiOiBcIis2NzJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiTkZcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJJc29cIjogXCIrMTY3MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNUFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJOb3J3YXlcIixcbiAgICBcIklzb1wiOiBcIis0N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJOT1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJPbWFuXCIsXG4gICAgXCJJc29cIjogXCIrOTY4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIk9NXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBha2lzdGFuXCIsXG4gICAgXCJJc29cIjogXCIrOTJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUEtcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFsYXVcIixcbiAgICBcIklzb1wiOiBcIis2ODBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUFdcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZFwiLFxuICAgIFwiSXNvXCI6IFwiKzk3MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJQU1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYW5hbWFcIixcbiAgICBcIklzb1wiOiBcIis1MDdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUEFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY3NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJQR1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQYXJhZ3VheVwiLFxuICAgIFwiSXNvXCI6IFwiKzU5NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJQWVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQZXJ1XCIsXG4gICAgXCJJc29cIjogXCIrNTFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUEVcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUGhpbGlwcGluZXNcIixcbiAgICBcIklzb1wiOiBcIis2M1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJQSFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJQaXRjYWlyblwiLFxuICAgIFwiSXNvXCI6IFwiKzY0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlBOXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBvbGFuZFwiLFxuICAgIFwiSXNvXCI6IFwiKzQ4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlBMXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlBvcnR1Z2FsXCIsXG4gICAgXCJJc29cIjogXCIrMzUxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlBUXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsXG4gICAgXCJJc29cIjogXCIrMTkzOVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJQUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJRYXRhclwiLFxuICAgIFwiSXNvXCI6IFwiKzk3NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJRQVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSb21hbmlhXCIsXG4gICAgXCJJc29cIjogXCIrNDBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUk9cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUnVzc2lhXCIsXG4gICAgXCJJc29cIjogXCIrN1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJSVVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJSd2FuZGFcIixcbiAgICBcIklzb1wiOiBcIisyNTBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUldcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiUmV1bmlvblwiLFxuICAgIFwiSXNvXCI6IFwiKzI2MlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJSRVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTYWludCBCYXJ0aGVsZW15XCIsXG4gICAgXCJJc29cIjogXCIrNTkwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkJMXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIERhIEN1bmhhXCIsXG4gICAgXCJJc29cIjogXCIrMjkwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlNIXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuICAgIFwiSXNvXCI6IFwiKzE4NjlcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiS05cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2FpbnQgTHVjaWFcIixcbiAgICBcIklzb1wiOiBcIisxNzU4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkxDXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNhaW50IE1hcnRpblwiLFxuICAgIFwiSXNvXCI6IFwiKzU5MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJNRlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXG4gICAgXCJJc29cIjogXCIrNTA4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlBNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsXG4gICAgXCJJc29cIjogXCIrMTc4NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJWQ1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTYW1vYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY4NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJXU1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTYW4gTWFyaW5vXCIsXG4gICAgXCJJc29cIjogXCIrMzc4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlNNXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFxuICAgIFwiSXNvXCI6IFwiKzIzOVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJTVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIixcbiAgICBcIklzb1wiOiBcIis5NjZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0FcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2VuZWdhbFwiLFxuICAgIFwiSXNvXCI6IFwiKzIyMVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJTTlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTZXJiaWFcIixcbiAgICBcIklzb1wiOiBcIiszODFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiUlNcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2V5Y2hlbGxlc1wiLFxuICAgIFwiSXNvXCI6IFwiKzI0OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJTQ1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTaWVycmEgTGVvbmVcIixcbiAgICBcIklzb1wiOiBcIisyMzJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0xcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2luZ2Fwb3JlXCIsXG4gICAgXCJJc29cIjogXCIrNjVcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0dcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2xvdmFraWFcIixcbiAgICBcIklzb1wiOiBcIis0MjFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0tcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2xvdmVuaWFcIixcbiAgICBcIklzb1wiOiBcIiszODZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0lcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsXG4gICAgXCJJc29cIjogXCIrNjc3XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlNCXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNvbWFsaWFcIixcbiAgICBcIklzb1wiOiBcIisyNTJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU09cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsXG4gICAgXCJJc29cIjogXCIrMjdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiWkFcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU291dGggU3VkYW5cIixcbiAgICBcIklzb1wiOiBcIisyMTFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU1NcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIixcbiAgICBcIklzb1wiOiBcIis1MDBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiR1NcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU3BhaW5cIixcbiAgICBcIklzb1wiOiBcIiszNFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJFU1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTcmkgTGFua2FcIixcbiAgICBcIklzb1wiOiBcIis5NFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJMS1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTdWRhblwiLFxuICAgIFwiSXNvXCI6IFwiKzI0OVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJTRFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTdXJpbmFtZVwiLFxuICAgIFwiSXNvXCI6IFwiKzU5N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJTUlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXG4gICAgXCJJc29cIjogXCIrNDdcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU0pcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU3dhemlsYW5kXCIsXG4gICAgXCJJc29cIjogXCIrMjY4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlNaXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlN3ZWRlblwiLFxuICAgIFwiSXNvXCI6IFwiKzQ2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlNFXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlN3aXR6ZXJsYW5kXCIsXG4gICAgXCJJc29cIjogXCIrNDFcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiQ0hcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIixcbiAgICBcIklzb1wiOiBcIis5NjNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiU1lcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGFpd2FuXCIsXG4gICAgXCJJc29cIjogXCIrODg2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRXXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRhamlraXN0YW5cIixcbiAgICBcIklzb1wiOiBcIis5OTJcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVEpcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZiBUYW56YW5pYVwiLFxuICAgIFwiSXNvXCI6IFwiKzI1NVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUWlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUaGFpbGFuZFwiLFxuICAgIFwiSXNvXCI6IFwiKzY2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRIXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRpbW9yLUxlc3RlXCIsXG4gICAgXCJJc29cIjogXCIrNjcwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRMXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlRvZ29cIixcbiAgICBcIklzb1wiOiBcIisyMjhcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVEdcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVG9rZWxhdVwiLFxuICAgIFwiSXNvXCI6IFwiKzY5MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUS1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUb25nYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY3NlwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUT1wiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXG4gICAgXCJJc29cIjogXCIrMTg2OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUVFwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUdW5pc2lhXCIsXG4gICAgXCJJc29cIjogXCIrMjE2XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlROXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlR1cmtleVwiLFxuICAgIFwiSXNvXCI6IFwiKzkwXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRSXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlR1cmttZW5pc3RhblwiLFxuICAgIFwiSXNvXCI6IFwiKzk5M1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUTVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixcbiAgICBcIklzb1wiOiBcIisxNjQ5XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlRDXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlR1dmFsdVwiLFxuICAgIFwiSXNvXCI6IFwiKzY4OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJUVlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJVZ2FuZGFcIixcbiAgICBcIklzb1wiOiBcIisyNTZcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVUdcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVWtyYWluZVwiLFxuICAgIFwiSXNvXCI6IFwiKzM4MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJVQVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLFxuICAgIFwiSXNvXCI6IFwiKzk3MVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJBRVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJVbml0ZWQgS2luZ2RvbVwiLFxuICAgIFwiSXNvXCI6IFwiKzQ0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIkdCXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXNcIixcbiAgICBcIklzb1wiOiBcIisxXCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlVTXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlVydWd1YXlcIixcbiAgICBcIklzb1wiOiBcIis1OThcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVVlcIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVXpiZWtpc3RhblwiLFxuICAgIFwiSXNvXCI6IFwiKzk5OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJVWlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJWYW51YXR1XCIsXG4gICAgXCJJc29cIjogXCIrNjc4XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlZVXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZiBWZW5lenVlbGFcIixcbiAgICBcIklzb1wiOiBcIis1OFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJWRVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJWaWV0bmFtXCIsXG4gICAgXCJJc29cIjogXCIrODRcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiVk5cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIixcbiAgICBcIklzb1wiOiBcIisxMjg0XCIsXG4gICAgXCJjb3VudHJ5Q29kZVwiOiBcIlZHXCJcbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsXG4gICAgXCJJc29cIjogXCIrMTM0MFwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJWSVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLFxuICAgIFwiSXNvXCI6IFwiKzY4MVwiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJXRlwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJZZW1lblwiLFxuICAgIFwiSXNvXCI6IFwiKzk2N1wiLFxuICAgIFwiY291bnRyeUNvZGVcIjogXCJZRVwiXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJaYW1iaWFcIixcbiAgICBcIklzb1wiOiBcIisyNjBcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiWk1cIlxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiWmltYmFid2VcIixcbiAgICBcIklzb1wiOiBcIisyNjNcIixcbiAgICBcImNvdW50cnlDb2RlXCI6IFwiWldcIlxuICB9XG5dO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vVXNlckNvbnRleHRcIjtcblxuLy9HRU5FUkFMXG5pbXBvcnQgeyBUZXh0RmllbGQsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuLy9VU0VSIFBSRUZFUkVOQ0VTXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICBpZD0nYmlvJ1xuICAgICAgICAgIGxhYmVsPSdCaW8nXG4gICAgICAgICAgdmFsdWU9e3VzZXIuYmlvfVxuICAgICAgICAgIG5hbWU9J2JpbydcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBmZXcgd29yZHMgYWJvdXQgeW91J1xuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgc2hyaW5rOiB0cnVlXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IDIwMFxuICAgICAgICAgIH19XG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgcm93cz17M31cbiAgICAgICAgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPSd3ZWJzaXRlJ1xuICAgICAgICAgIGxhYmVsPSdXZWJzaXRlJ1xuICAgICAgICAgIG5hbWU9J3dlYnNpdGUnXG4gICAgICAgICAgdHlwZT0ndXJsJ1xuICAgICAgICAgIHZhbHVlPXt1c2VyLndlYnNpdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgVVJMIGFkZHJlc3Mgb2YgeW91ciB3ZWJzaXRlJ1xuICAgICAgICAgIGhlbHBlclRleHQ9J1VSTCBhZGRyZXNzIHNob3VsZCBzdGFydCB3aXRoIGh0dHA6Ly8uLi4gb3IgaHR0cHM6Ly8uLi4nXG4gICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICBzaHJpbms6IHRydWVcbiAgICAgICAgICB9fVxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbi8vR0VORVJBTFxuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgR3JpZCxcbiAgQ2hlY2tib3gsXG4gIEZvcm1Db250cm9sTGFiZWxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgc3VtbWFyeToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH1cbn0pKTtcbi8vIFNVTU1BUlkgQ09NUE9ORU5UXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgYmlydGhkYXRlLCBiaW8sIHdlYnNpdGUgfSA9IHN0YXRlLnVzZXI7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdW1tYXJ5fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz5TdW1tYXJ5PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5Vc2VybmFtZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+e3VzZXJuYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkVtYWlsPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz57ZW1haWx9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+QmlydGhkYXRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz57YmlydGhkYXRlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkJpbzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Mic+e2JpbyB8fCBcIi1cIn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5XZWJzaXRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJz57d2Vic2l0ZSB8fCBcIi1cIn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUudXNlci5uZXdzbGV0dGVyfVxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgIG5hbWU9J25ld3NsZXR0ZXInXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD0nU2lnbiBtZSB1cCBmb3IgTmV3c2xldHRlciwgdG8gcmVjZWl2ZSByZWd1bGFyIHVwZGF0ZXMuJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c3RhdGUudXNlci5hY2NlcHRUZXJtc31cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgIG5hbWU9J2FjY2VwdFRlcm1zJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9J0kgYWNjZXB0IHRlcm1zIGFuZCBjb25kaXRpb25zJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvcmVnaXN0ZXIvYXZhdGFyLnN2Zz9hZjk3NTdkZVwiOyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL0FwcCdcblxuY29uc3QgdGl0bGUgPSAnTmV3IFVzZXIgUmVnaXN0cmF0aW9uJ1xuXG5mdW5jdGlvbiBhY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydyZWdpc3RlciddLFxuICAgIHRpdGxlLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgICA8UmVnaXN0ZXIgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQTFCQTtBQUNBO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQTdCQTtBQWtDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDdk9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFqQ0E7QUFtQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7Ozs7O0FDLzdDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==