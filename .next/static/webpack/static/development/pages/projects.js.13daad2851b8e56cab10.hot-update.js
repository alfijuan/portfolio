webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/projects.styles.ts":
/*!************************************************!*\
  !*** ./components/projects/projects.styles.ts ***!
  \************************************************/
/*! exports provided: StyledProjects, Row, ProjectList, ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledProjects", function() { return StyledProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectList", function() { return ProjectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItem", function() { return ProjectItem; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var StyledProjects = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz0",
  label: "StyledProjects"
})(false ? undefined : {
  name: "uwwqev",
  styles: "width:100%;height:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFd0MiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Row = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz1",
  label: "Row"
})(false ? undefined : {
  name: "1kopsh7",
  styles: "width:100%;height:100%;align-items:flex-start;display:flex;justify-content:flex-start;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPNkIiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var ProjectList = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz2",
  label: "ProjectList"
})(false ? undefined : {
  name: "1w574ec",
  styles: "width:100%;height:100%;align-items:flex-start;display:flex;justify-content:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlcUMiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var ProjectItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz3",
  label: "ProjectItem"
})(false ? undefined : {
  name: "1uzjl8x",
  styles: "width:calc(33.33%);height:calc(33.33vw);border:1px solid red;background:white;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnFDIiwiZmlsZSI6Ii9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvamVjdHMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdExpc3QgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogY2FsYygzMy4zMyUpO1xuICBoZWlnaHQ6IGNhbGMoMzMuMzN2dyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gOyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ })

})
//# sourceMappingURL=projects.js.13daad2851b8e56cab10.hot-update.js.map