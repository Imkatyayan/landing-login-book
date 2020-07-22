require("source-map-support").install();
exports.id = "login";
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding: 20px;\n\n}\n.Login-container-2IZbL {\n \t-ms-flex-align: center;\n \t    align-items: center;\n  background: #fff;\n  border-radius: 20px;\n  padding: 30px 80px;\n  max-width: 380px;\n  margin: 0 auto;\n  -webkit-box-shadow: 0 10px 20px .17px rgba(0,0,0,0.2);\n          box-shadow: 0 10px 20px .17px rgba(0,0,0,0.2);\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: block;\n  font-size: 1.1em;\n}\n.Login-input-HfRjv {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\na{\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\ttext-align: left;\n\ttext-decoration: none;\n\tcolor: #333;\n\tfont-size: 16px;\n\t-webkit-transition: .3s;\n\t-o-transition: .3s;\n\ttransition: .3s;\n}\na:hover{\n\tcolor: #000;\n}\nimg{\n\twidth: 350px;\n\theight: 150px;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-pack: end;\n\t    justify-content: flex-end;\n\t-ms-flex-align: center;\n\t    align-items: center;\n\tpadding: 20px;\n}", "",{"version":3,"sources":["Login.css","../../components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;EAOE;ACPF;;;;;;;EAOE;AAEF;EACE;;+EAE6E;;EAE7E,iEAAiE;;EAEjE;;+EAE6E;;EAE7E,2BAA2B;;EAE3B;;+EAE6E;;EAE7E,sBAAsB,GAAG,+BAA+B;EACxD,sBAAsB,GAAG,0BAA0B;EACnD,sBAAsB,GAAG,4BAA4B;EACrD,uBAAuB,EAAE,gCAAgC;AAC3D;ADpBA;EACE,aAAa;;AAEf;AAEA;EACE,sBAAmB;MAAnB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,qDAA6C;UAA7C,6CAA6C;AAC/C;AAEA;EACE,iBAAiB;AACnB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;AAEA;EACE,cAAc;EACd,8BAAsB;UAAtB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,wDAAgD;UAAhD,gDAAgD;EAChD,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,wFAAwE;EAAxE,gFAAwE;EAAxE,2EAAwE;EAAxE,wEAAwE;EAAxE,8GAAwE;AAC1E;AAEA;EACE,qBAAqB;EACrB,wFAAgF;UAAhF,gFAAgF;AAClF;AAEA;EACE,cAAc;EACd,8BAAsB;UAAtB,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,sBAAsB;EACtB,eAAe;AACjB;AAEA;EACE,kCAAkC;AACpC;AAEA;EACE,qBAAqB;EACrB,kDAA0C;UAA1C,0CAA0C;AAC5C;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AAErB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AAErB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AAErB;AAEA;EACE,mBAAmB;AACrB;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,cAAc;AAChB;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;AACb;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,cAAc;EACd,WAAW;EACX,6BAA6B;EAC7B,WAAW;AACb;AACA;CACC,2BAAoB;CAApB,oBAAoB;CACpB,gBAAgB;CAChB,qBAAqB;CACrB,WAAW;CACX,eAAe;CACf,uBAAe;CAAf,kBAAe;CAAf,eAAe;AAChB;AAEA;CACC,WAAW;AACZ;AAEA;CACC,YAAY;CACZ,aAAa;CACb,oBAAa;CAAb,aAAa;CACb,kBAAyB;KAAzB,yBAAyB;CACzB,sBAAmB;KAAnB,mBAAmB;CACnB,aAAa;AACd","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding: 20px;\n\n}\n\n.container {\n \talign-items: center;\n  background: #fff;\n  border-radius: 20px;\n  padding: 30px 80px;\n  max-width: 380px;\n  margin: 0 auto;\n  box-shadow: 0 10px 20px .17px rgba(0,0,0,0.2);\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: block;\n  font-size: 1.1em;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\na{\n\tdisplay: inline-flex;\n\ttext-align: left;\n\ttext-decoration: none;\n\tcolor: #333;\n\tfont-size: 16px;\n\ttransition: .3s;\n}\n\na:hover{\n\tcolor: #000;\n}\n\nimg{\n\twidth: 350px;\n\theight: 150px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n\tpadding: 20px;\n}","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"]}]);
// Exports
exports.locals = {
	"root": "Login-root-3Vk6J",
	"container": "Login-container-2IZbL",
	"lead": "Login-lead-25ZSA",
	"formGroup": "Login-formGroup-uHfQ-",
	"label": "Login-label-Mf2-c",
	"input": "Login-input-HfRjv",
	"button": "Login-button-2JhAE",
	"facebook": "Login-facebook-QGMxt Login-button-2JhAE",
	"google": "Login-google-17cIx Login-button-2JhAE",
	"twitter": "Login-twitter-21gEV Login-button-2JhAE",
	"icon": "Login-icon-2Dc1q",
	"lineThrough": "Login-lineThrough-2wlls"
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9sb2dpbi5iOGU3ZGZjYWRkYzEwMGU0OTliOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG4uTG9naW4tcm9vdC0zVms2SiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcblxcbn1cXG4uTG9naW4tY29udGFpbmVyLTJJWmJMIHtcXG4gXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gXFx0ICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXG4gIG1heC13aWR0aDogMzgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDIwcHggLjE3cHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAuMTdweCByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5Mb2dpbi1sZWFkLTI1WlNBIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG4uTG9naW4tZm9ybUdyb3VwLXVIZlEtIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5Mb2dpbi1sYWJlbC1NZjItYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcbi5Mb2dpbi1pbnB1dC1IZlJqdiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XFxuICBjb2xvcjogIzYxNjE2MTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG59XFxuLkxvZ2luLWlucHV0LUhmUmp2OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbn1cXG4uTG9naW4tYnV0dG9uLTJKaEFFIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM3MzI3NztcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMzczMjc3O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uTG9naW4tYnV0dG9uLTJKaEFFOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDUwLCAxMTksIDAuOCk7XFxufVxcbi5Mb2dpbi1idXR0b24tMkpoQUU6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3NGMyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG59XFxuLkxvZ2luLWZhY2Vib29rLVFHTXh0IHtcXG4gIGJvcmRlci1jb2xvcjogIzNiNTk5ODtcXG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XFxufVxcbi5Mb2dpbi1mYWNlYm9vay1RR014dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMmQ0MzczO1xcbn1cXG4uTG9naW4tZ29vZ2xlLTE3Y0l4IHtcXG4gIGJvcmRlci1jb2xvcjogI2RkNGIzOTtcXG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XFxufVxcbi5Mb2dpbi1nb29nbGUtMTdjSXg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2MyMzMyMTtcXG59XFxuLkxvZ2luLXR3aXR0ZXItMjFnRVYge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xcbiAgYmFja2dyb3VuZDogIzU1YWNlZTtcXG59XFxuLkxvZ2luLXR3aXR0ZXItMjFnRVY6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI3OTVlOTtcXG59XFxuLkxvZ2luLWljb24tMkRjMXEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAtMnB4IDEycHggLTJweCAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG4uTG9naW4tbGluZVRocm91Z2gtMndsbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiAnJztcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ5JTtcXG4gIHotaW5kZXg6IC0yO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgY29udGVudDogJyc7XFxufVxcbmF7XFxuXFx0ZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjMzMzO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IC4zcztcXG5cXHQtby10cmFuc2l0aW9uOiAuM3M7XFxuXFx0dHJhbnNpdGlvbjogLjNzO1xcbn1cXG5hOmhvdmVye1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG5pbWd7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTUwcHg7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtbXMtZmxleC1wYWNrOiBlbmQ7XFxuXFx0ICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJMb2dpbi5jc3NcIixcIi4uLy4uL2NvbXBvbmVudHMvdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztFQU9FO0FDUEY7Ozs7Ozs7RUFPRTtBQUVGO0VBQ0U7OytFQUU2RTs7RUFFN0UsaUVBQWlFOztFQUVqRTs7K0VBRTZFOztFQUU3RSwyQkFBMkI7O0VBRTNCOzsrRUFFNkU7O0VBRTdFLHNCQUFzQixHQUFHLCtCQUErQjtFQUN4RCxzQkFBc0IsR0FBRywwQkFBMEI7RUFDbkQsc0JBQXNCLEdBQUcsNEJBQTRCO0VBQ3JELHVCQUF1QixFQUFFLGdDQUFnQztBQUMzRDtBRHBCQTtFQUNFLGFBQWE7O0FBRWY7QUFFQTtFQUNFLHNCQUFtQjtNQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3REFBZ0Q7VUFBaEQsZ0RBQWdEO0VBQ2hELGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHdGQUF3RTtFQUF4RSxnRkFBd0U7RUFBeEUsMkVBQXdFO0VBQXhFLHdFQUF3RTtFQUF4RSw4R0FBd0U7QUFDMUU7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3RkFBZ0Y7VUFBaEYsZ0ZBQWdGO0FBQ2xGO0FBRUE7RUFDRSxjQUFjO0VBQ2QsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrREFBMEM7VUFBMUMsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBRXJCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFFckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUVyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsV0FBVztBQUNiO0FBQ0E7Q0FDQywyQkFBb0I7Q0FBcEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGVBQWU7Q0FDZix1QkFBZTtDQUFmLGtCQUFlO0NBQWYsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsV0FBVztBQUNaO0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG9CQUFhO0NBQWIsYUFBYTtDQUNiLGtCQUF5QjtLQUF6Qix5QkFBeUI7Q0FDekIsc0JBQW1CO0tBQW5CLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2RcIixcImZpbGVcIjpcIkxvZ2luLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvdmFyaWFibGVzLmNzcyc7XFxuXFxuLnJvb3Qge1xcbiAgcGFkZGluZzogMjBweDtcXG5cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuIFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHggODBweDtcXG4gIG1heC13aWR0aDogMzgwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC4xN3B4IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuXFxuLmxlYWQge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi5mb3JtR3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLmlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gIGNvbG9yOiAjNjE2MTYxO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzMyNzc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA1MCwgMTE5LCAwLjgpO1xcbn1cXG5cXG4uYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG59XFxuXFxuLmZhY2Vib29rIHtcXG4gIGJvcmRlci1jb2xvcjogIzNiNTk5ODtcXG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XFxuICBjb21wb3NlczogYnV0dG9uO1xcbn1cXG5cXG4uZmFjZWJvb2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkNDM3MztcXG59XFxuXFxuLmdvb2dsZSB7XFxuICBib3JkZXItY29sb3I6ICNkZDRiMzk7XFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbiAgY29tcG9zZXM6IGJ1dHRvbjtcXG59XFxuXFxuLmdvb2dsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYzIzMzIxO1xcbn1cXG5cXG4udHdpdHRlciB7XFxuICBib3JkZXItY29sb3I6ICM1NWFjZWU7XFxuICBiYWNrZ3JvdW5kOiAjNTVhY2VlO1xcbiAgY29tcG9zZXM6IGJ1dHRvbjtcXG59XFxuXFxuLnR3aXR0ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzI3OTVlOTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAtMnB4IDEycHggLTJweCAwO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4ubGluZVRocm91Z2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLmxpbmVUaHJvdWdoOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb250ZW50OiAnJztcXG59XFxuXFxuLmxpbmVUaHJvdWdoOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQ5JTtcXG4gIHotaW5kZXg6IC0yO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbiAgY29udGVudDogJyc7XFxufVxcbmF7XFxuXFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6ICMzMzM7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHRyYW5zaXRpb246IC4zcztcXG59XFxuXFxuYTpob3ZlcntcXG5cXHRjb2xvcjogIzAwMDtcXG59XFxuXFxuaW1ne1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDE1MHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVwiLFwiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkxvZ2luLXJvb3QtM1ZrNkpcIixcblx0XCJjb250YWluZXJcIjogXCJMb2dpbi1jb250YWluZXItMklaYkxcIixcblx0XCJsZWFkXCI6IFwiTG9naW4tbGVhZC0yNVpTQVwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIkxvZ2luLWZvcm1Hcm91cC11SGZRLVwiLFxuXHRcImxhYmVsXCI6IFwiTG9naW4tbGFiZWwtTWYyLWNcIixcblx0XCJpbnB1dFwiOiBcIkxvZ2luLWlucHV0LUhmUmp2XCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwiZmFjZWJvb2tcIjogXCJMb2dpbi1mYWNlYm9vay1RR014dCBMb2dpbi1idXR0b24tMkpoQUVcIixcblx0XCJnb29nbGVcIjogXCJMb2dpbi1nb29nbGUtMTdjSXggTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwidHdpdHRlclwiOiBcIkxvZ2luLXR3aXR0ZXItMjFnRVYgTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwiaWNvblwiOiBcIkxvZ2luLWljb24tMkRjMXFcIixcblx0XCJsaW5lVGhyb3VnaFwiOiBcIkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzXCJcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=