require("source-map-support").install();
exports.id = "dashboard";
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/dashboard/dashboard.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".dashboard-dash-35HWC{\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tpadding: 50px;\r\n}\r\nimg{\r\n\twidth: 200px;\r\n\theight: 300px;\r\n\tmargin: 0;\r\n\tpadding: 50px;\r\n}", "",{"version":3,"sources":["dashboard.css"],"names":[],"mappings":"AAAA;CACC,oBAAa;CAAb,aAAa;CACb,mBAAe;KAAf,eAAe;CACf,WAAW;CACX,YAAY;CACZ,aAAa;AACd;AACA;CACC,YAAY;CACZ,aAAa;CACb,SAAS;CACT,aAAa;AACd","file":"dashboard.css","sourcesContent":[".dash{\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tpadding: 50px;\r\n}\r\nimg{\r\n\twidth: 200px;\r\n\theight: 300px;\r\n\tmargin: 0;\r\n\tpadding: 50px;\r\n}"]}]);
// Exports
exports.locals = {
	"dash": "dashboard-dash-35HWC"
};

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9kYXNoYm9hcmQuNjM1NDBlMzA3NjE3ODc4ZDJkNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRhc2hib2FyZC1kYXNoLTM1SFdDe1xcclxcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHQgICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuXFx0d2lkdGg6IDIwMHB4O1xcclxcblxcdGhlaWdodDogMzAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDUwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImRhc2hib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxvQkFBYTtDQUFiLGFBQWE7Q0FDYixtQkFBZTtLQUFmLGVBQWU7Q0FDZixXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixTQUFTO0NBQ1QsYUFBYTtBQUNkXCIsXCJmaWxlXCI6XCJkYXNoYm9hcmQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kYXNoe1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG5pbWd7XFxyXFxuXFx0d2lkdGg6IDIwMHB4O1xcclxcblxcdGhlaWdodDogMzAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDUwcHg7XFxyXFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImRhc2hcIjogXCJkYXNoYm9hcmQtZGFzaC0zNUhXQ1wiXG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=