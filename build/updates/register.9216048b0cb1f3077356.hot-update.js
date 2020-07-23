require("source-map-support").install();
exports.id = "register";
exports.modules = {

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
    padding: theme.spacing(1.5, 3, 5)
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9yZWdpc3Rlci45MjE2MDQ4YjBjYjFmMzA3NzM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS9SZWdpc3RlcjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy9NWSBNT0RVTEVTXG5pbXBvcnQgVXNlclByZWZlcmVuY2VzIGZyb20gXCIuL1VzZXJQcmVmZXJlbmNlc1wiO1xuaW1wb3J0IFVzZXJEZXRhaWxzIGZyb20gXCIuL1VzZXJEZXRhaWxzXCI7XG5pbXBvcnQgVXNlclN1bW1hcnkgZnJvbSBcIi4vVXNlclN1bW1hcnlcIjtcbmltcG9ydCBGb3JtQ29tcGxldGUgZnJvbSBcIi4vRm9ybUNvbXBsZXRlXCI7XG5cbi8vR0VORVJBTFxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBTbmFja2JhciwgU25hY2tiYXJDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbi8vU1RFUFBFUlxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWxcIjtcbmltcG9ydCBTdGVwQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbnRlbnRcIjtcbi8vRk9STVxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vL0NPTlRFWFRcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vVXNlckNvbnRleHRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMClcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAwKVxuICAgIH1cbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEuNSwgMywgNSlcbiAgfSxcbiAgYnV0dG9uc0NvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwKVxuICB9LFxuICBidXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBlcnJvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5kYXJrXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIGljb246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9XG59KSk7XG5cbmNvbnN0IHN0ZXBzID0gW1wiQmFzaWMgaW5mb3JtYXRpb25cIiwgXCJVc2VyIGRldGFpbHNcIiwgXCJTdW1tYXJ5XCJdO1xuXG4vL01BSU4gQ09NUE9ORU5UXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtlcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaXNTdGVwT3B0aW9uYWwgPSBzdGVwID0+IHtcbiAgICByZXR1cm4gc3RlcCA9PT0gMTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xvc2VTbmFja2JhciA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChhY3RpdmVTdGVwIDwgc3RlcHMubGVuZ3RoIC0gMSkgaGFuZGxlTmV4dCgpO1xuICAgIGVsc2Uge1xuICAgICAgc2V0Q29tcGxldGVkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdGVwQ29udGVudCA9IHN0ZXAgPT4ge1xuICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gPFVzZXJEZXRhaWxzIC8+O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFVzZXJQcmVmZXJlbmNlcyAvPjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDxVc2VyU3VtbWFyeSAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlVua25vd24gc3RlcFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFcnJvciA9IGUgPT4ge1xuICAgIGVycm9yc1tlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGVycm9yczogeyAuLi5lcnJvcnMgfSB9KTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIC8vUEFTU1dPUkQgTUFUQ0hJTkdcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5uYW1lID09PSBcImNvbmZpcm1QYXNzd29yZFwiICYmXG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gc3RhdGUudXNlci5wYXNzd29yZFxuICAgICkge1xuICAgICAgZS50YXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQYXNzd29yZHMgYXJlIG5vdCBtYXRjaGluZ1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS50YXJnZXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5uYW1lID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIGNvbnN0IGNvbmZpcm0gPSBlLnRhcmdldC5mb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiaW5wdXRbbmFtZT0nY29uZmlybVBhc3N3b3JkJ11cIlxuICAgICAgKTtcbiAgICAgIC8vIFdIRU4gV0UgQ0hBTkdFIFBBU1NXT1JELCBXRSBXQU5UIFRPIFZBTElEQVRFIENPTkZJUk0gUEFTU1dPUkQgQVMgV0VMTFxuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBzdGF0ZS51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICBkZWxldGUgZXJyb3JzW2NvbmZpcm0ubmFtZV07XG4gICAgICAgIGNvbmZpcm0uc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIGFyZSBub3QgbWF0Y2hpbmdcIik7XG4gICAgICAgIGVycm9yc1tjb25maXJtLm5hbWVdID0gY29uZmlybS52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAvL09USEVSIEVMRU1FTlRTXG4gICAgICBkZWxldGUgZXJyb3JzW2UudGFyZ2V0Lm5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnNbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgZS50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdXNlcjogeyAuLi5zdGF0ZS51c2VyLCBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0sXG4gICAgICBlcnJvcnM6IHsgLi4uZXJyb3JzIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHshY29tcGxldGVkICYmIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0gb3JpZW50YXRpb249J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYWJlbFByb3BzID0ge307XG4gICAgICAgICAgICAgIGlmIChpc1N0ZXBPcHRpb25hbChpbmRleCkpIHtcbiAgICAgICAgICAgICAgICBsYWJlbFByb3BzLm9wdGlvbmFsID0gKFxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nY2FwdGlvbic+T3B0aW9uYWw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8U3RlcExhYmVsIHsuLi5sYWJlbFByb3BzfT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8U3RlcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkludmFsaWQ9e2hhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0U3RlcENvbnRlbnQoYWN0aXZlU3RlcCl9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9TdGVwQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxTbmFja2JhclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwiYm90dG9tXCIsIGhvcml6b250YWw6IFwicmlnaHRcIiB9fVxuICAgICAgICByZXN1bWVIaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezMwMDB9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlU25hY2tiYXJ9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICA+XG4gICAgICAgIDxTbmFja2JhckNvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9eyhjbGFzc2VzLmVycm9yLCBjbGFzc2VzLmVycm9yKX1cbiAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgPEVycm9ySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAge1wiUGxlYXNlIGNvcnJlY3QgdGhlIGRhdGFcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L1NuYWNrYmFyPlxuICAgICAge2NvbXBsZXRlZCAmJiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXsoY2xhc3Nlcy5yb290LCBjbGFzc2VzLmNlbnRlcil9PlxuICAgICAgICAgIDxGb3JtQ29tcGxldGUgLz5cbiAgICAgICAg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