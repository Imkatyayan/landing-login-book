require("source-map-support").install();
exports.ids = ["about"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Page-root-2VuHt {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-QOUG7 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n", "",{"version":3,"sources":["Page.css","../variables.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;;ACPF;;;;;;;EAOE;;AAEF;EACE;;+EAE6E;;EAE7E,iEAAiE;;EAEjE;;+EAE6E;;EAE7E,2BAA2B;;EAE3B;;+EAE6E;;EAE7E,sBAAsB,GAAG,+BAA+B;EACxD,sBAAsB,GAAG,0BAA0B;EACnD,sBAAsB,GAAG,4BAA4B;EACrD,uBAAuB,EAAE,gCAAgC;AAC3D;;ADnBA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAmC;EAAnC,mCAAmC;AACrC","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"]}]);
// Exports
exports.locals = {
	"root": "Page-root-2VuHt",
	"container": "Page-container-QOUG7"
};

/***/ }),

/***/ "./src/components/Page/Page.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.css");
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
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/Page/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Page/Page.css");
/* harmony import */ var _Page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Page_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\Page\\Page.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function Page({
  title,
  html
}) {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_0___default()(_Page_css__WEBPACK_IMPORTED_MODULE_3___default.a);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Page_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Page_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: html
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
}
Page.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  html: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

/***/ }),

/***/ "./src/routes/about/about.md":
/***/ (function(module, exports) {

module.exports = {"title":"About Us","component":"ContentPage","key":"about","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor\nfermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis.\nMaecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis tortor, nec\nimperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et\nfacilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra\ncommodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero,\nid consectetur tortor bibendum non. Quisque nec fringilla lorem. Nullam\nefficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie ac\nsollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu tempor.\nSed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in consequat\nelit tellus auctor nulla. Donec placerat elementum diam, vitae imperdiet lectus\nluctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam non\nquam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris suscipit.\nPellentesque tincidunt libero ultricies risus iaculis, sit amet consequat velit\nblandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit ut magna quis,\nfeugiat porta nibh. Sed id enim lectus. Suspendisse elementum justo sapien, sit\namet consequat orci accumsan et. Aliquam ornare ullamcorper sem sed finibus.\nNullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla fermentum\nmauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam enim.</p>\n"};

/***/ }),

/***/ "./src/routes/about/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/about/about.md");
/* harmony import */ var _about_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about_md__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\routes\\about\\index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function action() {
  return {
    chunks: ['about'],
    title: _about_md__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _about_md__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2Fib3V0LmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9QYWdlL1BhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2UvUGFnZS5jc3M/MTU5MCIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL1BhZ2UvUGFnZS5qcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9yb3V0ZXMvYWJvdXQvYWJvdXQubWQiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL2Fib3V0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5QYWdlLXJvb3QtMlZ1SHQge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLlBhZ2UtY29udGFpbmVyLVFPVUc3IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJQYWdlLmNzc1wiLFwiLi4vdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztFQU9FOztBQ1BGOzs7Ozs7O0VBT0U7O0FBRUY7RUFDRTs7K0VBRTZFOztFQUU3RSxpRUFBaUU7O0VBRWpFOzsrRUFFNkU7O0VBRTdFLDJCQUEyQjs7RUFFM0I7OytFQUU2RTs7RUFFN0Usc0JBQXNCLEdBQUcsK0JBQStCO0VBQ3hELHNCQUFzQixHQUFHLDBCQUEwQjtFQUNuRCxzQkFBc0IsR0FBRyw0QkFBNEI7RUFDckQsdUJBQXVCLEVBQUUsZ0NBQWdDO0FBQzNEOztBRG5CQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFtQztFQUFuQyxtQ0FBbUM7QUFDckNcIixcImZpbGVcIjpcIlBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuQGltcG9ydCAnLi4vdmFyaWFibGVzLmNzcyc7XFxuXFxuLnJvb3Qge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblwiLFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlBhZ2Utcm9vdC0yVnVIdFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlBhZ2UtY29udGFpbmVyLVFPVUc3XCJcbn07IiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9QYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL1BhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9QYWdlLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHMgZnJvbSAnLi9QYWdlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSAoeyB0aXRsZSwgaHRtbCB9KSB7XG4gIHVzZVN0eWxlcyhzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGh0bWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0aXRsZVwiOlwiQWJvdXQgVXNcIixcImNvbXBvbmVudFwiOlwiQ29udGVudFBhZ2VcIixcImtleVwiOlwiYWJvdXRcIixcImh0bWxcIjpcIjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBjb25zZXF1YXQgdG9ydG9yXFxuZmVybWVudHVtIG1pIGZlcm1lbnR1bSBkaWduaXNzaW0uIE51bGxhbSB2ZWwgaXBzdW0gdXQgbGlndWxhIGVsZW1lbnR1bSBsb2JvcnRpcy5cXG5NYWVjZW5hcyBhbGlxdWFtLCBtYXNzYSBsYW9yZWV0IGxhY2luaWEgcHJldGl1bSwgbmlzaSB1cm5hIHZlbmVuYXRpcyB0b3J0b3IsIG5lY1xcbmltcGVyZGlldCB0ZWxsdXMgbGliZXJvIGVmZmljaXR1ciBtZXR1cy4gRnVzY2Ugc2VtcGVyIHBvc3VlcmUgbGlndWxhLCBldFxcbmZhY2lsaXNpcyBtZXR1cyBiaWJlbmR1bSBpbnRlcmR1bS4gTWF1cmlzIGF0IG1hdXJpcyBzaXQgYW1ldCBzZW0gcGhhcmV0cmFcXG5jb21tb2RvIGEgZXUgbGVvLiBOYW0gYXQgZXN0IG5vbiByaXN1cyBjdXJzdXMgbWF4aW11cy4gTmFtIGZldWdpYXQgYXVndWUgbGliZXJvLFxcbmlkIGNvbnNlY3RldHVyIHRvcnRvciBiaWJlbmR1bSBub24uIFF1aXNxdWUgbmVjIGZyaW5naWxsYSBsb3JlbS4gTnVsbGFtXFxuZWZmaWNpdHVyIHZ1bHB1dGF0ZSBtYXVyaXMsIG5lYyBtYXhpbXVzIGxlbyBkaWduaXNzaW0gaWQuPC9wPlxcbjxwPkluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBEdWlzIHNhZ2l0dGlzIGR1aSBhYyBleCBzdXNjaXBpdCBtYXhpbXVzLlxcbk1vcmJpIHBlbGxlbnRlc3F1ZSB2ZW5lbmF0aXMgZmVsaXMgc2VkIGNvbnZhbGxpcy4gTnVsbGEgdmFyaXVzLCBuaWJoIHZpdGFlXFxucGxhY2VyYXQgdGVtcHVzLCBtYXVyaXMgc2VtIGVsZW1lbnR1bSBpcHN1bSwgZWdldCBzb2xsaWNpdHVkaW4gbmlzbCBlc3QgdmVsXFxucHVydXMuIEZ1c2NlIG1hbGVzdWFkYSBvZGlvIHZlbGl0LCBub24gY3Vyc3VzIGxlbyBmZXJtZW50dW0gaWQuIENyYXMgcGhhcmV0cmFcXG5zb2RhbGVzIGZyaW5naWxsYS4gRXRpYW0gcXVpcyBlc3QgYSBkb2xvciBlZ2VzdGFzIHBlbGxlbnRlc3F1ZS4gTWFlY2VuYXMgbm9uXFxuc2NlbGVyaXNxdWUgcHVydXMsIGNvbmd1ZSBjdXJzdXMgYXJjdS4gRG9uZWMgdmVsIGRhcGlidXMgbWkuIE1hdXJpcyBtYXhpbXVzXFxucG9zdWVyZSBwbGFjZXJhdC4gU2VkIGV0IGxpYmVybyBldSBuaWJoIHRyaXN0aXF1ZSBtb2xsaXMgYSBlZ2V0IGxlY3R1cy4gRG9uZWNcXG5pbnRlcmR1bSBhdWd1ZSBzb2xsaWNpdHVkaW4gdmVoaWN1bGEgaGVuZHJlcml0LiBWaXZhbXVzIGp1c3RvIG9yY2ksIG1vbGVzdGllIGFjXFxuc29sbGljaXR1ZGluIGFjLCBsb2JvcnRpcyBhdCB0ZWxsdXMuIEV0aWFtIHJob25jdXMgdWxsYW1jb3JwZXIgcmlzdXMgZXUgdGVtcG9yLlxcblNlZCBwb3J0dGl0b3IsIG5lcXVlIGFjIGVmZmljaXR1ciBncmF2aWRhLCBhcmN1IGxhY3VzIHBoYXJldHJhIGR1aSwgaW4gY29uc2VxdWF0XFxuZWxpdCB0ZWxsdXMgYXVjdG9yIG51bGxhLiBEb25lYyBwbGFjZXJhdCBlbGVtZW50dW0gZGlhbSwgdml0YWUgaW1wZXJkaWV0IGxlY3R1c1xcbmx1Y3R1cyBhdC48L3A+XFxuPHA+TnVsbGFtIGV1IGZldWdpYXQgbWkuIFF1aXNxdWUgbmVjIHRyaXN0aXF1ZSBuaXNsLCBkaWduaXNzaW0gZGljdHVtIGxlby4gTmFtIG5vblxcbnF1YW0gbmlzaS4gRG9uZWMgcnV0cnVtIHR1cnBpcyBhYyBkaWFtIGJsYW5kaXQsIGlkIHB1bHZpbmFyIG1hdXJpcyBzdXNjaXBpdC5cXG5QZWxsZW50ZXNxdWUgdGluY2lkdW50IGxpYmVybyB1bHRyaWNpZXMgcmlzdXMgaWFjdWxpcywgc2l0IGFtZXQgY29uc2VxdWF0IHZlbGl0XFxuYmxhbmRpdC4gRnVzY2UgcXVpcyB2YXJpdXMgbnVsbGEuIE51bGxhbSBuaXNpIG5pc2ksIHN1c2NpcGl0IHV0IG1hZ25hIHF1aXMsXFxuZmV1Z2lhdCBwb3J0YSBuaWJoLiBTZWQgaWQgZW5pbSBsZWN0dXMuIFN1c3BlbmRpc3NlIGVsZW1lbnR1bSBqdXN0byBzYXBpZW4sIHNpdFxcbmFtZXQgY29uc2VxdWF0IG9yY2kgYWNjdW1zYW4gZXQuIEFsaXF1YW0gb3JuYXJlIHVsbGFtY29ycGVyIHNlbSBzZWQgZmluaWJ1cy5cXG5OdWxsYW0gYWMgbGFjdXMgcHVsdmluYXIsIGVnZXN0YXMgZmVsaXMgdXQsIGFjY3Vtc2FuIGVzdC48L3A+XFxuPHA+UGVsbGVudGVzcXVlIHNhZ2l0dGlzIHZlaGljdWxhIHNlbSBxdWlzIGx1Y3R1cy4gUHJvaW4gc29kYWxlcyBtYWduYSBpbiBsb3JlbVxcbmhlbmRyZXJpdCBhbGlxdWFtLiBJbnRlZ2VyIGV1IHZhcml1cyBvcmNpLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluXFxuZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBWZXN0aWJ1bHVtIGFudGUgaXBzdW1cXG5wcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIEN1cmFlOyBVdCBhdCBtYXVyaXNcXG5uaWJoLiBTdXNwZW5kaXNzZSBtYXhpbXVzIGFjIGVyb3MgYXQgdmVzdGlidWx1bS48L3A+XFxuPHA+SW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBRdWlzcXVlIGVnZXN0YXNcXG50b3J0b3IgZXQgZHVpIGNvbnNlcXVhdCBmYXVjaWJ1cy4gTnVuYyB2aXRhZSBvZGlvIG9ybmFyZSwgdmVuZW5hdGlzIGxpZ3VsYSBhLFxcbnZ1bHB1dGF0ZSBuaXNsLiBBZW5lYW4gY29uZ3VlIHZhcml1cyBleCwgc2l0IGFtZXQgYmliZW5kdW0gb2RpbyBwb3N1ZXJlIGF0Llxcbk51bGxhIGZhY2lsaXNpLiBJbiBmaW5pYnVzLCBudWxsYSB2aXRhZSB0aW5jaWR1bnQgb3JuYXJlLCBzYXBpZW4gbnVsbGEgZmVybWVudHVtXFxubWF1cmlzLCBzZWQgY29uc2VjdGV0dXIgdG9ydG9yIGFyY3UgZWdldCBhcmN1LiBWZXN0aWJ1bHVtIHZlbCBxdWFtIGVuaW0uPC9wPlxcblwifTsiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dC5tZCdcblxuZnVuY3Rpb24gYWN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsnYWJvdXQnXSxcbiAgICB0aXRsZTogYWJvdXQudGl0bGUsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8UGFnZSB7Li4uYWJvdXR9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7QUM3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=