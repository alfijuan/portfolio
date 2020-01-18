webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/index.ts":
/*!**************************************!*\
  !*** ./components/projects/index.ts ***!
  \**************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./components/projects/projects.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return _projects__WEBPACK_IMPORTED_MODULE_0__["Projects"]; });



/***/ }),

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFd0MiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var Row = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz1",
  label: "Row"
})(false ? undefined : {
  name: "1kopsh7",
  styles: "width:100%;height:100%;align-items:flex-start;display:flex;justify-content:flex-start;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPNkIiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var ProjectList = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz2",
  label: "ProjectList"
})(false ? undefined : {
  name: "1m53dbf",
  styles: "width:100%;height:100%;align-items:flex-start;display:flex;flex-direction:column;justify-content:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlcUMiLCJmaWxlIjoiL1VzZXJzL2p1YW5pdG8vUmVwb3NpdG9yaW9zL3BvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuc3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9qZWN0cyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSk7XG4gIGhlaWdodDogY2FsYygzMy4zM3Z3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbmA7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var ProjectItem = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
  target: "e15igaxz3",
  label: "ProjectItem"
})(false ? undefined : {
  name: "1uzjl8x",
  styles: "width:calc(33.33%);height:calc(33.33vw);border:1px solid red;background:white;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QnFDIiwiZmlsZSI6Ii9Vc2Vycy9qdWFuaXRvL1JlcG9zaXRvcmlvcy9wb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLnN0eWxlcy50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvamVjdHMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdExpc3QgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogY2FsYygzMy4zMyUpO1xuICBoZWlnaHQ6IGNhbGMoMzMuMzN2dyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5gOyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

/***/ }),

/***/ "./components/projects/projects.tsx":
/*!******************************************!*\
  !*** ./components/projects/projects.tsx ***!
  \******************************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _projects_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.styles */ "./components/projects/projects.styles.ts");
/* harmony import */ var _layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/layout.styles */ "./components/layout/layout.styles.ts");
var _jsxFileName = "/Users/juanito/Repositorios/portfolio-next/components/projects/projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var projectsAPI = [{}];
var Projects = function Projects() {
  return __jsx(_projects_styles__WEBPACK_IMPORTED_MODULE_1__["StyledProjects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_projects_styles__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_projects_styles__WEBPACK_IMPORTED_MODULE_1__["ProjectList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_projects_styles__WEBPACK_IMPORTED_MODULE_1__["ProjectItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })))));
};

/***/ }),

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.ts");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects */ "./components/projects/index.ts");
var _jsxFileName = "/Users/juanito/Repositorios/portfolio-next/pages/projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Projects = function Projects() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_projects__WEBPACK_IMPORTED_MODULE_2__["Projects"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.9249dc1ab5539394c277.hot-update.js.map