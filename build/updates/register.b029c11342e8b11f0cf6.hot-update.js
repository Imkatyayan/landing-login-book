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
    padding: theme.spacing(1, 3, 3, 5)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9yZWdpc3Rlci5iMDI5YzExMzQyZThiMTFmMGNmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL3JlZ2lzdGVyL1JlZ2lzdGVyRm9ybS9SZWdpc3RlcjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuLy9NWSBNT0RVTEVTXG5pbXBvcnQgVXNlclByZWZlcmVuY2VzIGZyb20gXCIuL1VzZXJQcmVmZXJlbmNlc1wiO1xuaW1wb3J0IFVzZXJEZXRhaWxzIGZyb20gXCIuL1VzZXJEZXRhaWxzXCI7XG5pbXBvcnQgVXNlclN1bW1hcnkgZnJvbSBcIi4vVXNlclN1bW1hcnlcIjtcbmltcG9ydCBGb3JtQ29tcGxldGUgZnJvbSBcIi4vRm9ybUNvbXBsZXRlXCI7XG5cbi8vR0VORVJBTFxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBTbmFja2JhciwgU25hY2tiYXJDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRXJyb3JJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JcIjtcbi8vU1RFUFBFUlxuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWxcIjtcbmltcG9ydCBTdGVwQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbnRlbnRcIjtcbi8vRk9STVxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG4vL0NPTlRFWFRcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4vVXNlckNvbnRleHRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMClcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAwKVxuICAgIH1cbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDMsIDMsIDUpXG4gIH0sXG4gIGJ1dHRvbnNDb250YWluZXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMClcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IuZGFya1xuICB9LFxuICBtZXNzYWdlOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxuICBpY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcbiAgfVxufSkpO1xuXG5jb25zdCBzdGVwcyA9IFtcIkJhc2ljIGluZm9ybWF0aW9uXCIsIFwiVXNlciBkZXRhaWxzXCIsIFwiU3VtbWFyeVwiXTtcblxuLy9NQUlOIENPTVBPTkVOVFxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbZXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xuICB9O1xuXG4gIGNvbnN0IGlzU3RlcE9wdGlvbmFsID0gc3RlcCA9PiB7XG4gICAgcmV0dXJuIHN0ZXAgPT09IDE7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlU25hY2tiYXIgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYWN0aXZlU3RlcCA8IHN0ZXBzLmxlbmd0aCAtIDEpIGhhbmRsZU5leHQoKTtcbiAgICBlbHNlIHtcbiAgICAgIHNldENvbXBsZXRlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RlcENvbnRlbnQgPSBzdGVwID0+IHtcbiAgICBzd2l0Y2ggKHN0ZXApIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIDxVc2VyRGV0YWlscyAvPjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDxVc2VyUHJlZmVyZW5jZXMgLz47XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiA8VXNlclN1bW1hcnkgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJVbmtub3duIHN0ZXBcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRXJyb3IgPSBlID0+IHtcbiAgICBlcnJvcnNbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBlcnJvcnM6IHsgLi4uZXJyb3JzIH0gfSk7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICAvL1BBU1NXT1JEIE1BVENISU5HXG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQubmFtZSA9PT0gXCJjb25maXJtUGFzc3dvcmRcIiAmJlxuICAgICAgZS50YXJnZXQudmFsdWUgIT09IHN0YXRlLnVzZXIucGFzc3dvcmRcbiAgICApIHtcbiAgICAgIGUudGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmRzIGFyZSBub3QgbWF0Y2hpbmdcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUudGFyZ2V0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICBjb25zdCBjb25maXJtID0gZS50YXJnZXQuZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcImlucHV0W25hbWU9J2NvbmZpcm1QYXNzd29yZCddXCJcbiAgICAgICk7XG4gICAgICAvLyBXSEVOIFdFIENIQU5HRSBQQVNTV09SRCwgV0UgV0FOVCBUTyBWQUxJREFURSBDT05GSVJNIFBBU1NXT1JEIEFTIFdFTExcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gc3RhdGUudXNlci5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgZGVsZXRlIGVycm9yc1tjb25maXJtLm5hbWVdO1xuICAgICAgICBjb25maXJtLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlybS5zZXRDdXN0b21WYWxpZGl0eShcIlBhc3N3b3JkcyBhcmUgbm90IG1hdGNoaW5nXCIpO1xuICAgICAgICBlcnJvcnNbY29uZmlybS5uYW1lXSA9IGNvbmZpcm0udmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy9PVEhFUiBFTEVNRU5UU1xuICAgICAgZGVsZXRlIGVycm9yc1tlLnRhcmdldC5uYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID1cbiAgICAgIGUudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIiA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHVzZXI6IHsgLi4uc3RhdGUudXNlciwgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9LFxuICAgICAgZXJyb3JzOiB7IC4uLmVycm9ycyB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7IWNvbXBsZXRlZCAmJiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9IG9yaWVudGF0aW9uPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFiZWxQcm9wcyA9IHt9O1xuICAgICAgICAgICAgICBpZiAoaXNTdGVwT3B0aW9uYWwoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxQcm9wcy5vcHRpb25hbCA9IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2NhcHRpb24nPk9wdGlvbmFsPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTdGVwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbCB7Li4ubGFiZWxQcm9wc30+e2xhYmVsfTwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICAgICAgPFN0ZXBDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgb25JbnZhbGlkPXtoYW5kbGVFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2dldFN0ZXBDb250ZW50KGFjdGl2ZVN0ZXApfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwIDwgc3RlcHMubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PSdjb250YWluZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgIDwvU3RlcENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcImJvdHRvbVwiLCBob3Jpem9udGFsOiBcInJpZ2h0XCIgfX1cbiAgICAgICAgcmVzdW1lSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVNuYWNrYmFyfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgPlxuICAgICAgICA8U25hY2tiYXJDb250ZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXsoY2xhc3Nlcy5lcnJvciwgY2xhc3Nlcy5lcnJvcil9XG4gICAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZX0+XG4gICAgICAgICAgICAgIDxFcnJvckljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgICAgICAgIHtcIlBsZWFzZSBjb3JyZWN0IHRoZSBkYXRhXCJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9TbmFja2Jhcj5cbiAgICAgIHtjb21wbGV0ZWQgJiYgKFxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17KGNsYXNzZXMucm9vdCwgY2xhc3Nlcy5jZW50ZXIpfT5cbiAgICAgICAgICA8Rm9ybUNvbXBsZXRlIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBN0JBO0FBa0NBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==