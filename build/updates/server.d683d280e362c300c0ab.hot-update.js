require("source-map-support").install();
exports.id = "server";
exports.modules = {

/***/ "./src/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
// The top-level (parent) route
const routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [{
    path: '',
    load: () => Promise.all(/* import() | home */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("book~home"), __webpack_require__.e("home")]).then(__webpack_require__.bind(null, "./src/routes/home/index.js"))
  }, {
    path: '/login',
    load: () => Promise.all(/* import() | login */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("login")]).then(__webpack_require__.bind(null, "./src/routes/login/index.js"))
  }, {
    path: '/register',
    load: () => Promise.all(/* import() | register */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("register")]).then(__webpack_require__.bind(null, "./src/routes/register/index.js"))
  }, {
    path: '/book',
    load: () => Promise.all(/* import() | book */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("book~home"), __webpack_require__.e("book")]).then(__webpack_require__.bind(null, "./src/routes/book/index.js"))
  }, {
    path: '/about',
    load: () => Promise.all(/* import() | about */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about")]).then(__webpack_require__.bind(null, "./src/routes/about/index.js"))
  }, {
    path: '/privacy',
    load: () => Promise.all(/* import() | privacy */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("privacy")]).then(__webpack_require__.bind(null, "./src/routes/privacy/index.js"))
  }, {
    path: '/admin',
    load: () => Promise.all(/* import() | admin */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("admin")]).then(__webpack_require__.bind(null, "./src/routes/admin/index.js"))
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: () => Promise.all(/* import() | not-found */[__webpack_require__.e("vendors~about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("about~admin~book~home~login~not-found~privacy~register"), __webpack_require__.e("not-found")]).then(__webpack_require__.bind(null, "./src/routes/not-found/index.js"))
  }],

  async action({
    next
  }) {
    // Execute each child route until one of them return the result
    const route = await next(); // Provide default values for title, description etc.

    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';
    return route;
  }

}; // The error page is available by permanent url for development mode

if (true) {
  routes.children.unshift({
    path: '/error',
    action: __webpack_require__("./src/routes/error/index.js").default
  });
}

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9zZXJ2ZXIuZDY4M2QyODBlMzYyYzMwMGMwYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL3JvdXRlcy9pbmRleC5qcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgZ2xvYmFsLXJlcXVpcmUgKi9cblxuLy8gVGhlIHRvcC1sZXZlbCAocGFyZW50KSByb3V0ZVxuY29uc3Qgcm91dGVzID0ge1xuICBwYXRoOiAnJyxcblxuICAvLyBLZWVwIGluIG1pbmQsIHJvdXRlcyBhcmUgZXZhbHVhdGVkIGluIG9yZGVyXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2hvbWUnICovICcuL2hvbWUnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdsb2dpbicgKi8gJy4vbG9naW4nKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvcmVnaXN0ZXInLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdyZWdpc3RlcicgKi8gJy4vcmVnaXN0ZXInKSxcbiAgICB9LFxuXHQgICAge1xuICAgICAgcGF0aDogJy9ib29rJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYm9vaycgKi8gJy4vYm9vaycpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hYm91dCcsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2Fib3V0JyAqLyAnLi9hYm91dCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9wcml2YWN5JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAncHJpdmFjeScgKi8gJy4vcHJpdmFjeScpLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hZG1pbicsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2FkbWluJyAqLyAnLi9hZG1pbicpLFxuICAgIH0sXG5cbiAgICAvLyBXaWxkY2FyZCByb3V0ZXMsIGUuZy4geyBwYXRoOiAnKC4qKScsIC4uLiB9IChtdXN0IGdvIGxhc3QpXG4gICAge1xuICAgICAgcGF0aDogJyguKiknLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdub3QtZm91bmQnICovICcuL25vdC1mb3VuZCcpLFxuICAgIH0sXG4gIF0sXG5cbiAgYXN5bmMgYWN0aW9uKHsgbmV4dCB9KSB7XG4gICAgLy8gRXhlY3V0ZSBlYWNoIGNoaWxkIHJvdXRlIHVudGlsIG9uZSBvZiB0aGVtIHJldHVybiB0aGUgcmVzdWx0XG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCBuZXh0KCk7XG5cbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciB0aXRsZSwgZGVzY3JpcHRpb24gZXRjLlxuICAgIHJvdXRlLnRpdGxlID0gYCR7cm91dGUudGl0bGUgfHwgJ1VudGl0bGVkIFBhZ2UnfSAtIHd3dy5yZWFjdHN0YXJ0ZXJraXQuY29tYDtcbiAgICByb3V0ZS5kZXNjcmlwdGlvbiA9IHJvdXRlLmRlc2NyaXB0aW9uIHx8ICcnO1xuXG4gICAgcmV0dXJuIHJvdXRlO1xuICB9LFxufTtcblxuLy8gVGhlIGVycm9yIHBhZ2UgaXMgYXZhaWxhYmxlIGJ5IHBlcm1hbmVudCB1cmwgZm9yIGRldmVsb3BtZW50IG1vZGVcbmlmIChfX0RFVl9fKSB7XG4gIHJvdXRlcy5jaGlsZHJlbi51bnNoaWZ0KHtcbiAgICBwYXRoOiAnL2Vycm9yJyxcbiAgICBhY3Rpb246IHJlcXVpcmUoJy4vZXJyb3InKS5kZWZhdWx0LFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZVwiKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxrV0FBQTtBQUZBO0FBS0E7QUFDQSxpVUFBQTtBQUZBO0FBS0E7QUFDQSwwVUFBQTtBQUZBO0FBS0E7QUFDQSxrV0FBQTtBQUZBO0FBS0E7QUFDQSxpVUFBQTtBQUZBO0FBS0E7QUFDQSx1VUFBQTtBQUZBO0FBS0E7QUFDQSxpVUFBQTtBQUZBO0FBTUE7QUFDQTtBQUNBLDZVQUFBO0FBRkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFuREE7QUFDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7O0FDekVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=