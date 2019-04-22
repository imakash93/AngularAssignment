(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentCustom{    \r\n  /* padding: 0% 10% 0 10% !important; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50Q3VzdG9teyAgICBcclxuICAvKiBwYWRkaW5nOiAwJSAxMCUgMCAxMCUgIWltcG9ydGFudDsgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n<app-nav-bar></app-nav-bar>\n</header>\n<router-outlet></router-outlet>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'StudentManagementApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./students-list/students-list.component */ "./src/app/students-list/students-list.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/student-detail/student-detail.component.ts");
/* harmony import */ var _shared_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/student-form/student-form.component */ "./src/app/shared/student-form/student-form.component.ts");
/* harmony import */ var _student_view_student_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student-view/student-view.component */ "./src/app/student-view/student-view.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _student_edit_view_student_edit_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student-edit-view/student-edit-view.component */ "./src/app/student-edit-view/student-edit-view.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentsListComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_14__["StudentDetailComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"],
                _shared_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_15__["StudentFormComponent"],
                _student_view_student_view_component__WEBPACK_IMPORTED_MODULE_16__["StudentViewComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"],
                _student_edit_view_student_edit_view_component__WEBPACK_IMPORTED_MODULE_18__["StudentEditViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'students/:id', component: _student_edit_view_student_edit_view_component__WEBPACK_IMPORTED_MODULE_18__["StudentEditViewComponent"] },
                    { path: 'studentView/:id', component: _student_view_student_view_component__WEBPACK_IMPORTED_MODULE_16__["StudentViewComponent"] },
                    { path: 'studentslist', component: _students_list_students_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentsListComponent"] },
                    { path: 'register', component: _shared_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_15__["StudentFormComponent"] },
                    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_13__["WelcomeComponent"] },
                    { path: 'login', component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_17__["LogInComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', redirectTo: 'login', pathMatch: 'full' }
                ])
            ],
            providers: [_services_student_service__WEBPACK_IMPORTED_MODULE_12__["StudentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customFooter{\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tRm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer font-small teal pt-4 theme customFooter\">   \n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright Developed By: Akash Goswami\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col col-lg-8\" style=\"margin:auto;\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n        placeholder=\"Enter email\" [(ngModel)] = 'userName'>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click) = 'onBack()'>Submit</button>\n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogInComponent = /** @class */ (function () {
    function LogInComponent(router) {
        this.router = router;
        this.userName = '';
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.onBack = function () {
        localStorage.setItem("user", JSON.stringify({ name: this.userName }));
        this.router.navigate(['/studentslist']);
    };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/models/student.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/student.model.ts ***!
  \*****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(id, studentName, category, domicile, birthCertificate, markSheets, declaration, dob, fathersName, mothersName, lastClassScore) {
        this.id = id;
        this.studentName = studentName;
        this.category = category;
        this.domicile = domicile;
        this.birthCertificate = birthCertificate;
        this.markSheets = markSheets;
        this.declaration = declaration;
        this.dob = dob;
        this.fathersName = fathersName;
        this.mothersName = mothersName;
        this.lastClassScore = lastClassScore;
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-lg  theme\">\n    <a class=\"navbar-brand\" href=\"#\" style=\"color:black;\">Student On boarding App</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink] =\"['/welcome']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink] =\"['/register']\">Register</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink] =\"['/studentslist']\">List</a>\n        </li>\n      </ul>\n      <span class=\"navbar-text\">\n          <a class=\"nav-link\" [routerLink] =\"['/login']\"> admin@gmail.com</a>\n       \n      </span>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.studentsUrl = 'assets/students/students.json';
        this.docTypesUrl = 'assets/students/docTypes.json';
    }
    StudentService.prototype.handleError = function (err) {
        var errorMSg = '';
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMSg);
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.studentsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("data : " + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    StudentService.prototype.getStudentById = function (id) {
        return this.http.get(this.studentsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("data : " + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    StudentService.prototype.getDocumentTypes = function () {
        return this.http.get(this.docTypesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("data : " + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/shared/student-form/student-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/student-form/student-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-style{\r\n    margin: auto;\r\n    margin-top: 4%;\r\n    min-height: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0dWRlbnQtZm9ybS9zdHVkZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3N0dWRlbnQtZm9ybS9zdHVkZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXN0eWxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/student-form/student-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/student-form/student-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 form-style\">\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n    <div class=\"form-group row\">\n      <label for=\"firstName\" class=\"col-sm-2 col-form-label\">First name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"studentName\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"lastName\" class=\"col-sm-2 col-form-label\">Last name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n      </div>\n    </div>\n\n\n    <fieldset class=\"form-group\">\n      <div class=\"row\">\n        <legend class=\"col-form-label col-sm-2 pt-0\">Category</legend>\n        <div class=\"col-sm-10\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" formControlName=\"category\" id=\"domestic\" value=\"domestic\">\n            <label class=\"form-check-label\" for=\"domestic\">\n              Domestic\n            </label>\n          </div>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" formControlName=\"category\" id=\"international\"\n              value=\"international\">\n            <label class=\"form-check-label\" for=\"international\">\n              International\n            </label>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <div class=\"row\">\n        <legend class=\"col-form-label col-sm-4 pt-0\">Documents</legend>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group-row\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='domicile'>\n              <label class=\"form-check-label\">\n                  Domicile\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='birthcertificate'>\n              <label class=\"form-check-label\">\n                  Birthcertificate\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='previousmarksheets'>\n              <label class=\"form-check-label\">\n                  Previousmarksheets\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='signeddeclaration'>\n              <label class=\"form-check-label\">\n                  Signed declaration\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='policeclearance'>\n              <label class=\"form-check-label\">\n                  Policeclearance\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\"  formControlName='passport'>\n              <label class=\"form-check-label\">\n                  Passport\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n\n    <div class=\"form-group row\">\n      <label for=\"dob\" class=\"col-sm-2 col-form-label\">DOB</label>\n      <div class=\"col-sm-10\">\n        <input type=\"date\" class=\"form-control\" formControlName=\"dob\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"fathersName\" class=\"col-sm-2 col-form-label\">Father's Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"fathersName\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"mothersName\" class=\"col-sm-2 col-form-label\">Mother's Name</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"mothersName\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"lastClassScore\" class=\"col-sm-2 col-form-label\">Last Class Score</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastClassScore\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/student-form/student-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/student-form/student-form.component.ts ***!
  \***************************************************************/
/*! exports provided: StudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function() { return StudentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/student.service */ "./src/app/services/student.service.ts");
/* harmony import */ var src_app_models_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/student.model */ "./src/app/models/student.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var StudentFormComponent = /** @class */ (function () {
    function StudentFormComponent(studentService, formBuilder, router) {
        this.studentService = studentService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.tempDocs = [, {
                "name": "Policeclearance",
                "requiredFor": {
                    "international": true,
                    "domestic": false
                }
            },
            {
                "name": "Passport",
                "requiredFor": {
                    "international": true,
                    "domestic": false
                }
            },];
        this.registrationForm = this.createFormGroup();
    }
    StudentFormComponent.prototype.createFormGroup = function () {
        return this.formBuilder.group({
            studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            domicile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            birthcertificate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            previousmarksheets: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            signeddeclaration: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            fathersName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            mothersName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lastClassScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            policeclearance: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            passport: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    };
    StudentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getDocumentTypes().subscribe(function (docs) {
            _this.docTypes = docs;
            console.log(_this.docTypes);
        });
    };
    StudentFormComponent.prototype.onSubmit = function () {
        console.log(this.registrationForm);
        if (this.registrationForm.valid) {
            var studentName = this.registrationForm.controls['studentName'].value;
            var category = this.registrationForm.controls['category'].value;
            var domicile = this.registrationForm.controls['domicile'].value;
            var birthcertificate = this.registrationForm.controls['birthcertificate'].value;
            var previousmarksheets = this.registrationForm.controls['previousmarksheets'].value;
            var signeddeclaration = this.registrationForm.controls['signeddeclaration'].value;
            var dob = this.registrationForm.controls['dob'].value;
            var fathersName = this.registrationForm.controls['fathersName'].value;
            var mothersName = this.registrationForm.controls['mothersName'].value;
            var lastClassScore = this.registrationForm.controls['lastClassScore'].value;
            var passport = this.registrationForm.controls['passport'].value;
            var policeClearance = this.registrationForm.controls['policeclearance'].value;
            var newId = students[students.length - 1].id + 1;
            var student = new src_app_models_student_model__WEBPACK_IMPORTED_MODULE_3__["Student"](newId, studentName, category, domicile, birthcertificate, previousmarksheets, signeddeclaration, dob, fathersName, mothersName, lastClassScore);
            var students;
            if (localStorage.getItem("Students") === null || localStorage.getItem("Students").length === 2) {
                localStorage.setItem("Students", JSON.stringify(students));
            }
            else {
                students = JSON.parse(localStorage.getItem("Students"));
            }
            students.push(student);
            localStorage.setItem("Students", JSON.stringify(students));
        }
        this.router.navigate(['/studentslist']);
    };
    StudentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-form',
            template: __webpack_require__(/*! ./student-form.component.html */ "./src/app/shared/student-form/student-form.component.html"),
            styles: [__webpack_require__(/*! ./student-form.component.css */ "./src/app/shared/student-form/student-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], StudentFormComponent);
    return StudentFormComponent;
}());



/***/ }),

/***/ "./src/app/student-detail/student-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGV0YWlsL3N0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/student-detail/student-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<button type=\"button\" class=\"btn btn-info\" (click) = 'onBack()'>Back</button>"

/***/ }),

/***/ "./src/app/student-detail/student-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-detail/student-detail.component.ts ***!
  \************************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var studentId = +this.route.snapshot.paramMap.get('id');
    };
    StudentDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/studentslist']);
    };
    StudentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-detail',
            template: __webpack_require__(/*! ./student-detail.component.html */ "./src/app/student-detail/student-detail.component.html"),
            styles: [__webpack_require__(/*! ./student-detail.component.css */ "./src/app/student-detail/student-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/app/student-edit-view/student-edit-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/student-edit-view/student-edit-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZWRpdC12aWV3L3N0dWRlbnQtZWRpdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/student-edit-view/student-edit-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/student-edit-view/student-edit-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 form-style\">\n    <form >  \n      <div class=\"form-group row\">\n        <label for=\"firstName\" class=\"col-sm-2 col-form-label\">name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.studentName' >\n        </div>\n      </div>  \n  \n      <fieldset class=\"form-group\">\n        <div class=\"row\">\n          <legend class=\"col-form-label col-sm-4 pt-0\">Documents</legend>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group-row\" *ngFor='let doc of docTypes'>\n              <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\"  [name]='doc.name'  >\n                <label class=\"form-check-label\" [for]='doc.name'>\n                  {{doc.name}}\n                </label>             \n              </div>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n  \n      <div class=\"form-group row\">\n        <label for=\"dob\" class=\"col-sm-2 col-form-label\">DOB</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.dob' >\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"fathersName\" class=\"col-sm-2 col-form-label\">Father's Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.fatherName' >\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"mothersName\" class=\"col-sm-2 col-form-label\">Mother's Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.motherName' >\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"lastClassScore\" class=\"col-sm-2 col-form-label\">Last Class Score</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.lastClassScore' >\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n          <button (click) = 'onBack()' class=\"btn btn-primary\">Back</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/student-edit-view/student-edit-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-edit-view/student-edit-view.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentEditViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEditViewComponent", function() { return StudentEditViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");




var StudentEditViewComponent = /** @class */ (function () {
    function StudentEditViewComponent(route, router, studentService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
    }
    StudentEditViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var studentId = +this.route.snapshot.paramMap.get('id');
        var students;
        this.studentService.getDocumentTypes().subscribe(function (docs) {
            _this.docTypes = docs;
            console.log(_this.docTypes);
        });
        students = JSON.parse(localStorage.getItem("Students"));
        students.filter(function (tempStudent) {
            if (tempStudent.id === studentId) {
                _this.studentFound = tempStudent;
            }
        });
    };
    StudentEditViewComponent.prototype.onBack = function () {
        this.router.navigate(['/studentslist']);
    };
    StudentEditViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-edit-view',
            template: __webpack_require__(/*! ./student-edit-view.component.html */ "./src/app/student-edit-view/student-edit-view.component.html"),
            styles: [__webpack_require__(/*! ./student-edit-view.component.css */ "./src/app/student-edit-view/student-edit-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
    ], StudentEditViewComponent);
    return StudentEditViewComponent;
}());



/***/ }),

/***/ "./src/app/student-view/student-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-view/student-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtdmlldy9zdHVkZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-view/student-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-view/student-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-8 form-style\">\n    <form >  \n      <div class=\"form-group row\">\n        <label for=\"firstName\" class=\"col-sm-2 col-form-label\">name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.studentName' disabled=\"true\">\n        </div>\n      </div>  \n  \n  \n  \n      <fieldset class=\"form-group\">\n        <div class=\"row\">\n          <legend class=\"col-form-label col-sm-4 pt-0\">Documents</legend>\n          <div class=\"col-sm-6\">\n              <div class=\"form-group-row\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" checked='studentFound.domicile' >\n                  <label class=\"form-check-label\">\n                      Domicile\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\"  checked='studentFound.birthcertificate'>\n                  <label class=\"form-check-label\">\n                      Birthcertificate\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\"  checked='studentFound.previousmarksheets'>\n                  <label class=\"form-check-label\">\n                      Previousmarksheets\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" checked='studentFound.signeddeclaration'>\n                  <label class=\"form-check-label\">\n                      Signed declaration\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" checked='studentFound.policeclearance'>\n                  <label class=\"form-check-label\">\n                      Policeclearance\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" checked='studentFound.passport'>\n                  <label class=\"form-check-label\">\n                      Passport\n                  </label>\n                </div>\n              </div>\n            </div>\n        </div>\n      </fieldset>\n  \n      <div class=\"form-group row\">\n        <label for=\"dob\" class=\"col-sm-2 col-form-label\">DOB</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.dob' disabled=\"true\">\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"fathersName\" class=\"col-sm-2 col-form-label\">Father's Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.fatherName' disabled=\"true\">\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"mothersName\" class=\"col-sm-2 col-form-label\">Mother's Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.motherName' disabled=\"true\">\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <label for=\"lastClassScore\" class=\"col-sm-2 col-form-label\">Last Class Score</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" [value]='studentFound.lastClassScore' disabled=\"true\">\n        </div>\n      </div>\n  \n      <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n          <button (click) = 'onBack()' class=\"btn btn-primary\">Back</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/student-view/student-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-view/student-view.component.ts ***!
  \********************************************************/
/*! exports provided: StudentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function() { return StudentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");




var StudentViewComponent = /** @class */ (function () {
    function StudentViewComponent(route, router, studentService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
    }
    StudentViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var studentId = +this.route.snapshot.paramMap.get('id');
        var students;
        this.studentService.getDocumentTypes().subscribe(function (docs) {
            _this.docTypes = docs;
            console.log(_this.docTypes);
        });
        students = JSON.parse(localStorage.getItem("Students"));
        students.filter(function (tempStudent) {
            if (tempStudent.id === studentId) {
                _this.studentFound = tempStudent;
            }
        });
    };
    StudentViewComponent.prototype.onBack = function () {
        this.router.navigate(['/studentslist']);
    };
    StudentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-view',
            template: __webpack_require__(/*! ./student-view.component.html */ "./src/app/student-view/student-view.component.html"),
            styles: [__webpack_require__(/*! ./student-view.component.css */ "./src/app/student-view/student-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
    ], StudentViewComponent);
    return StudentViewComponent;
}());



/***/ }),

/***/ "./src/app/students-list/students-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/students-list/students-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container{\r\n    width: 70%;\r\n    margin: auto;\r\n}\r\n.custom-card{\r\n    margin-bottom: 5%;\r\n}\r\n.student-action{\r\n    margin-right: 5%;\r\n}\r\n.btn-container{\r\n    float: right;\r\n    margin-right: 4%;\r\n}\r\n.search-bar{\r\n    margin: 2%;\r\n}\r\n.selct-align{\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jdXN0b20tY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uc3R1ZGVudC1hY3Rpb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lcntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFye1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLnNlbGN0LWFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/students-list/students-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/students-list/students-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-bar\">\n<div class=\"col-sm-3\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Records\" aria-label=\"Search\"\n    [(ngModel)]='studentsFilter'>\n</div>\n<div class=\"col-sm-3\">    \n  <span class=\"navbar-text\">\n    Filter By :  {{studentsFilter}}\n  </span>\n</div>\n<div class=\"col-sm-3 selct-align\">\n    <span class=\"navbar-text\">\n        Student Type \n      </span>  \n</div>\n<div class=\"col-sm-3\">\n    <select class=\"custom-select\" (change)='filterChanged($event.target.value)'>\n        <option selected value=\"All\">All</option>\n        <option value=\"domestic\">Domestic</option>\n        <option value=\"international\">International</option>\n      </select>\n</div>\n</div>\n\n<div class=\"row list-container\" *ngIf='students && students.length'>\n  <div class=\"col-sm-6 custom-card\" *ngFor='let student of filteredStudents'>\n    <div class=\"card-group\">\n      <div class=\"card\">\n          <div class=\"card-header\">\n              <small class=\"text-muted\">{{student.type}}</small>\n            </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{student.studentName}}</h5>\n          <div>\n          <p class=\"card-text\">Name : {{student.name}}</p>\n          <p class=\"card-text\">fatherName :{{student.fatherName}}</p>\n          <p class=\"card-text\">motherName : {{student.motherName}}</p>\n          <p class=\"card-text\">dateOfBirth : {{student.dateOfBirth}}</p>\n\n        </div>\n        </div>\n        <div class=\"card-footer\">\n           <div class=\"btn-group btn-container\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"student-action btn btn-primary\" [routerLink]=\"['/students',student.id]\">Edit</button>\n                <button type=\"button\" class=\"student-action btn btn-secondary\" (click) = 'deletStudent(student.id)'>Delete</button>\n                <button type=\"button\" class=\"student-action btn btn-danger\" [routerLink]=\"['/studentView',student.id]\">View</button>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/students-list/students-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/students-list/students-list.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/student.service */ "./src/app/services/student.service.ts");



var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(studentService) {
        this.studentService = studentService;
        this.pageTitle = 'Students List';
    }
    StudentsListComponent.prototype.filterRecords = function (filterBy) {
        filterBy = filterBy.toLowerCase();
        return this.students.filter(function (student) { return student.name.toLowerCase().indexOf(filterBy) !== -1; });
    };
    Object.defineProperty(StudentsListComponent.prototype, "studentsFilter", {
        get: function () {
            return this._studentsFilter;
        },
        set: function (v) {
            this._studentsFilter = v;
            this.filteredStudents = this.studentsFilter ? this.filterRecords(this.studentsFilter) : this.students;
        },
        enumerable: true,
        configurable: true
    });
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (students) {
            if (localStorage.getItem("Students") === null) {
                localStorage.setItem("Students", JSON.stringify(students));
            }
            else {
                _this.students = JSON.parse(localStorage.getItem("Students"));
            }
            _this.filteredStudents = _this.students;
        });
    };
    StudentsListComponent.prototype.deletStudent = function (id) {
        var _this = this;
        var i = 0;
        this.students.filter(function (tempStudent) {
            if (tempStudent.id === id) {
                _this.students.splice(i, 1);
                localStorage.setItem("Students", JSON.stringify(_this.students));
                _this.filteredStudents = _this.students;
            }
            else {
                i++;
            }
            return;
        });
    };
    StudentsListComponent.prototype.filterChanged = function (selectedValue) {
        this.filteredStudents = this.students;
        var tempfilteredStudents = [];
        if (selectedValue !== "All") {
            var tempfilteredStudents1 = this.filteredStudents.map(function (tempStudent) {
                if (tempStudent.type === selectedValue.toLowerCase()) {
                    tempfilteredStudents.push(tempStudent);
                }
            });
            this.filteredStudents = tempfilteredStudents;
        }
        else {
            this.filteredStudents = this.students;
        }
    };
    StudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-list',
            template: __webpack_require__(/*! ./students-list.component.html */ "./src/app/students-list/students-list.component.html"),
            styles: [__webpack_require__(/*! ./students-list.component.css */ "./src/app/students-list/students-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img src=\"../../assets/StudentRegistration.png\" width=\"100%\"\nheight=\"86%\">"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\StudentManagementApp\AkashGoswami_3145858_Angular_Assignment\StudentManagementApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map