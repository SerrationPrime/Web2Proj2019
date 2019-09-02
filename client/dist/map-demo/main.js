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

/***/ "./src/app/admin-view-lines/admin-view-lines.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-view-lines/admin-view-lines.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXctbGluZXMvYWRtaW4tdmlldy1saW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-view-lines/admin-view-lines.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-view-lines/admin-view-lines.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Change Lines</p>\r\n  </font>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\" style=\"font-family: 'Times New Roman'\">\r\n      <select id=\"lineSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Linija 1</option>\r\n        <option> <!--[ngValue]=\"2\"-->Linija 4</option>\r\n        <option> <!--[ngValue]=\"3\"-->Linija 3</option>\r\n        <option> <!--[ngValue]=\"4\"-->Linija 4</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n    </div>\r\n    <div class=\"form-group col-lg-3\" style=\"align-items:flex-end\">\r\n      <input id=\"line\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" type=\"button\" value=\"Change Line\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"LineNumber\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Line Number\">\r\n      <br />\r\n      <select id=\"StationSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Stanica 1</option>\r\n        <option> <!--[ngValue]=\"2\"-->Stanica 4</option>\r\n        <option> <!--[ngValue]=\"3\"-->Stanica 3</option>\r\n        <option> <!--[ngValue]=\"4\"-->Stanica 4</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"StationName\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Station Name\">\r\n      <br />\r\n      <input id=\"StationAdress\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Station Adress\">\r\n    </div>\r\n    <div class=\"form-group col-lg-2\">\r\n      <input id=\"StationLatitude\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"number\" placeholder=\"Latitude\">\r\n      <br />\r\n      <input id=\"StationLongitude\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"number\" placeholder=\"Longitude\">\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin-view-lines/admin-view-lines.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-view-lines/admin-view-lines.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminViewLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewLinesComponent", function() { return AdminViewLinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminViewLinesComponent = /** @class */ (function () {
    function AdminViewLinesComponent() {
    }
    AdminViewLinesComponent.prototype.ngOnInit = function () {
    };
    AdminViewLinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-view-lines',
            template: __webpack_require__(/*! ./admin-view-lines.component.html */ "./src/app/admin-view-lines/admin-view-lines.component.html"),
            styles: [__webpack_require__(/*! ./admin-view-lines.component.css */ "./src/app/admin-view-lines/admin-view-lines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminViewLinesComponent);
    return AdminViewLinesComponent;
}());



/***/ }),

/***/ "./src/app/admin-view-prices/admin-view-prices.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin-view-prices/admin-view-prices.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXctcHJpY2VzL2FkbWluLXZpZXctcHJpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-view-prices/admin-view-prices.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin-view-prices/admin-view-prices.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Ticket Prices</p>\r\n  </font>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <select id=\"ticketSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\"> <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Hourly Ticket</option>\r\n        <option> <!--[ngValue]=\"2\"-->Daily Ticket</option>\r\n        <option> <!--[ngValue]=\"3\"-->Monthly Ticket</option>\r\n        <option> <!--[ngValue]=\"4\"-->Yearly Ticket</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <select id=\"userSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--[(ngModel)]=\"users\"--> <!--(change)=\"priceSelection()\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Normal Ticket</option>\r\n        <option> <!--[ngValue]=\"2\"-->Student Ticket</option>\r\n        <option> <!--[ngValue]=\"3\"-->Senior Ticket</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"price\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" type=\"button\" value=\"Change Ticket Price\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group col-lg-3\" style=\"color:darkblue; font-size: medium\">\r\n    <input type=\"text\" id=\"price\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo\" placeholder=\"Change Ticket Price\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-view-prices/admin-view-prices.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-view-prices/admin-view-prices.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminViewPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewPricesComponent", function() { return AdminViewPricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminViewPricesComponent = /** @class */ (function () {
    function AdminViewPricesComponent() {
    }
    AdminViewPricesComponent.prototype.ngOnInit = function () {
    };
    AdminViewPricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-view-prices',
            template: __webpack_require__(/*! ./admin-view-prices.component.html */ "./src/app/admin-view-prices/admin-view-prices.component.html"),
            styles: [__webpack_require__(/*! ./admin-view-prices.component.css */ "./src/app/admin-view-prices/admin-view-prices.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminViewPricesComponent);
    return AdminViewPricesComponent;
}());



/***/ }),

/***/ "./src/app/admin-view-schedules/admin-view-schedules.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin-view-schedules/admin-view-schedules.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXctc2NoZWR1bGVzL2FkbWluLXZpZXctc2NoZWR1bGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-view-schedules/admin-view-schedules.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-view-schedules/admin-view-schedules.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Change Schedule</p>\r\n  </font>\r\n  <div class=\"row\">\r\n      <div class=\"form-group col-lg-3\" style=\"font-family: 'Times New Roman'\">\r\n        <select id=\"scheduleSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n          <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n          <option> <!--[ngValue]=\"1\"-->Radosled 1</option>\r\n          <option> <!--[ngValue]=\"2\"-->Radosled 4</option>\r\n          <option> <!--[ngValue]=\"3\"-->Radosled 3</option>\r\n          <option> <!--[ngValue]=\"4\"-->Radosled 4</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group col-lg-2\">\r\n      </div>\r\n      <div class=\"form-group col-lg-3\">\r\n        <input id=\"schedule\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" type=\"button\" value=\"Change Schedule\" />\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"ScheduleDeparture\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"New Departures\">\r\n      <br />\r\n      <input id=\"LineNumber\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Line Number\">\r\n      <br />\r\n      <select id=\"daySelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--[(ngModel)]=\"users\"--> <!--(change)=\"priceSelection()\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Monday</option>\r\n        <option> <!--[ngValue]=\"2\"-->Tuesday</option>\r\n        <option> <!--[ngValue]=\"3\"-->Wednesday</option>\r\n        <option> <!--[ngValue]=\"1\"-->Thursday</option>\r\n        <option> <!--[ngValue]=\"2\"-->Friday</option>\r\n        <option> <!--[ngValue]=\"3\"-->Saturday</option>\r\n        <option> <!--[ngValue]=\"3\"-->Sunday</option>\r\n      </select>\r\n    </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/admin-view-schedules/admin-view-schedules.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-view-schedules/admin-view-schedules.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminViewSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewSchedulesComponent", function() { return AdminViewSchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminViewSchedulesComponent = /** @class */ (function () {
    function AdminViewSchedulesComponent() {
    }
    AdminViewSchedulesComponent.prototype.ngOnInit = function () {
    };
    AdminViewSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-view-schedules',
            template: __webpack_require__(/*! ./admin-view-schedules.component.html */ "./src/app/admin-view-schedules/admin-view-schedules.component.html"),
            styles: [__webpack_require__(/*! ./admin-view-schedules.component.css */ "./src/app/admin-view-schedules/admin-view-schedules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminViewSchedulesComponent);
    return AdminViewSchedulesComponent;
}());



/***/ }),

/***/ "./src/app/admin-view-stations/admin-view-stations.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-view-stations/admin-view-stations.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXZpZXctc3RhdGlvbnMvYWRtaW4tdmlldy1zdGF0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-view-stations/admin-view-stations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-view-stations/admin-view-stations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Change Station</p>\r\n  </font>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\" style=\"font-family: 'Times New Roman'\">\r\n      <select id=\"stationSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Stanica 1</option>\r\n        <option> <!--[ngValue]=\"2\"-->Stanica 2</option>\r\n        <option> <!--[ngValue]=\"3\"-->Stanica 3</option>\r\n        <option> <!--[ngValue]=\"4\"-->Stanica 4</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-6\">\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"station\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" type=\"button\" value=\"Change Station\" />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"StationName\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Station Name\">\r\n      <br />\r\n      <input id=\"StationAdress\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Station Adress\">\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"StationLatitude\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"number\" placeholder=\"Latitude\">\r\n      <br />\r\n      <input id=\"StationLongitude\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"number\" placeholder=\"Longitude\">\r\n      <br />\r\n    </div>\r\n    <div class=\"form-group col-lg-2\">\r\n      <select id=\"lineSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\">\r\n        <!--(change)=\"priceSelection()\" name=\"tickets\" [(ngModel)]=\"tickets\"-->>\r\n        <option> <!--[ngValue]=\"1\"-->Linija 1</option>\r\n        <option> <!--[ngValue]=\"2\"-->Linija 4</option>\r\n        <option> <!--[ngValue]=\"3\"-->Linija 3</option>\r\n        <option> <!--[ngValue]=\"4\"-->Linija 4</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-2\">\r\n      <input id=\"LineNumber\" class=\" input-group-text\" style=\"background-color:azure; color:indigo; border-color:indigo;\" type=\"text\" placeholder=\"Change Line Number\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-view-stations/admin-view-stations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-view-stations/admin-view-stations.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminViewStationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewStationsComponent", function() { return AdminViewStationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminViewStationsComponent = /** @class */ (function () {
    function AdminViewStationsComponent() {
    }
    AdminViewStationsComponent.prototype.ngOnInit = function () {
    };
    AdminViewStationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-view-stations',
            template: __webpack_require__(/*! ./admin-view-stations.component.html */ "./src/app/admin-view-stations/admin-view-stations.component.html"),
            styles: [__webpack_require__(/*! ./admin-view-stations.component.css */ "./src/app/admin-view-stations/admin-view-stations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminViewStationsComponent);
    return AdminViewStationsComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _admin_view_lines_admin_view_lines_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-view-lines/admin-view-lines.component */ "./src/app/admin-view-lines/admin-view-lines.component.ts");
/* harmony import */ var _admin_view_stations_admin_view_stations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-view-stations/admin-view-stations.component */ "./src/app/admin-view-stations/admin-view-stations.component.ts");
/* harmony import */ var _admin_view_schedules_admin_view_schedules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-view-schedules/admin-view-schedules.component */ "./src/app/admin-view-schedules/admin-view-schedules.component.ts");
/* harmony import */ var _admin_view_prices_admin_view_prices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-view-prices/admin-view-prices.component */ "./src/app/admin-view-prices/admin-view-prices.component.ts");












var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"] },
    { path: 'price', component: _price_price_component__WEBPACK_IMPORTED_MODULE_4__["PriceComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'admin-view-lines', component: _admin_view_lines_admin_view_lines_component__WEBPACK_IMPORTED_MODULE_8__["AdminViewLinesComponent"] },
    { path: 'admin-view-stations', component: _admin_view_stations_admin_view_stations_component__WEBPACK_IMPORTED_MODULE_9__["AdminViewStationsComponent"] },
    { path: 'admin-view-schedules', component: _admin_view_schedules_admin_view_schedules_component__WEBPACK_IMPORTED_MODULE_10__["AdminViewSchedulesComponent"] },
    { path: 'admin-view-prices', component: _admin_view_prices_admin_view_prices_component__WEBPACK_IMPORTED_MODULE_11__["AdminViewPricesComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header></app-header>\r\n  <div class=\"container\" style=\"text-align: center\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
        this.title = 'Line Map';
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-http.service */ "./src/app/services/auth-http.service.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _admin_view_lines_admin_view_lines_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-view-lines/admin-view-lines.component */ "./src/app/admin-view-lines/admin-view-lines.component.ts");
/* harmony import */ var _admin_view_stations_admin_view_stations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-view-stations/admin-view-stations.component */ "./src/app/admin-view-stations/admin-view-stations.component.ts");
/* harmony import */ var _admin_view_schedules_admin_view_schedules_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-view-schedules/admin-view-schedules.component */ "./src/app/admin-view-schedules/admin-view-schedules.component.ts");
/* harmony import */ var _admin_view_prices_admin_view_prices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-view-prices/admin-view-prices.component */ "./src/app/admin-view-prices/admin-view-prices.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_9__["PriceComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _admin_view_lines_admin_view_lines_component__WEBPACK_IMPORTED_MODULE_17__["AdminViewLinesComponent"],
                _admin_view_stations_admin_view_stations_component__WEBPACK_IMPORTED_MODULE_18__["AdminViewStationsComponent"],
                _admin_view_schedules_admin_view_schedules_component__WEBPACK_IMPORTED_MODULE_19__["AdminViewSchedulesComponent"],
                _admin_view_prices_admin_view_prices_component__WEBPACK_IMPORTED_MODULE_20__["AdminViewPricesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk' }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"], multi: true },
                _services_auth_http_service__WEBPACK_IMPORTED_MODULE_15__["AuthHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul (click)=\"checkAuth()\" class=\"nav navbar-nav\" style=\"font-family: 'Times New Roman'\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Schedule</a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"map\">Station Map</a></li>\r\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"price\">Buy Ticket</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsAdmin\"><a class=\"nav-link\" routerLink=\"admin-view-lines\">Check Lines</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsAdmin\"><a class=\"nav-link\" routerLink=\"admin-view-stations\">Check Station</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsAdmin\"><a class=\"nav-link\" routerLink=\"admin-view-schedules\">Check Schedules</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsAdmin\"><a class=\"nav-link\" routerLink=\"admin-view-prices\">Check Prices</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsLogged\"><a class=\"nav-link\" routerLink=\"login\">Login</a></li>\r\n        <li class=\"nav-item\" *ngIf=\"!IsLogged\"><a class=\"nav-link\" onclick=\"logout()\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-http.service */ "./src/app/services/auth-http.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http) {
        this.http = http;
        this.isAdmin = false;
        this.isLogged = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.jwt = localStorage.jwt;
        if (this.jwt) {
            if (localStorage.role === "Admin") {
                this.isAdmin = true;
            }
            this.isLogged = true;
        }
        else
            this.isLogged = false;
    };
    HeaderComponent.prototype.checkAuth = function () {
        if (this.jwt) {
            if (localStorage.role === "Admin") {
                this.isAdmin = true;
            }
        }
    };
    HeaderComponent.prototype.logOut = function () {
        this.http.logOut();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["AuthHttpService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Sky-Metro of Novi Sad</p>\r\n  </font>\r\n  <div class=\"col-lg-6\" style=\"font-family: 'Times New Roman'\">\r\n    <div class=\"list-group\" id=\"list-tab\" role=\"tablist\" name=\"scheduleArray\">\r\n      <p class=\"list-group-item list-group-item-action\" style=\"background-color:azure; color:indigo;\" id=\"list-home-list\" data-toggle=\"list\" href=\"#list-home\" role=\"tab\"\r\n         *ngFor=\"let schedule of schedules\">Line:{{schedule.LineNumber}}, Departures:{{schedule.Departure}}</p>\r\n    </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_modelSchedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/modelSchedule */ "./src/app/home/model/modelSchedule.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(ngZone, http, el) {
        this.ngZone = ngZone;
        this.http = http;
        this.el = el;
        this.scheduleUri = "api/Schedules";
        this.scheduleArray = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.scheduleUri).subscribe(function (data) {
            _this.scheduleArray = data;
            _this.schedules = [];
            for (var i = 0; i < _this.scheduleArray.length; i++) {
                var sch = new _model_modelSchedule__WEBPACK_IMPORTED_MODULE_3__["Schedule"](_this.scheduleArray[i].Departures, _this.scheduleArray[i].Line.LineNumber);
                _this.schedules.push(sch);
            }
            console.log(_this.schedules);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/model/modelSchedule.ts":
/*!*********************************************!*\
  !*** ./src/app/home/model/modelSchedule.ts ***!
  \*********************************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
var Schedule = /** @class */ (function () {
    function Schedule(Departure, LineNumber) {
        this.Departure = Departure;
        this.LineNumber = LineNumber;
    }
    return Schedule;
}());



/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var jwt = localStorage.jwt;
        console.log(req);
        if (jwt) {
            req = req.clone({
                setHeaders: {
                    "Authorization": "Bearer " + jwt
                }
            });
        }
        return next.handle(req);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <form [formGroup]=\"login\" (ngSubmit)=\"onSubmit()\">\r\n    <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n      <p>Login to account</p>\r\n    </font>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" id=\"username\" required class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Username...\" formControlName=\"username\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" id=\"password\" minlength=\"6\" required class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Password...\" formControlName=\"password\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"submit\" id=\"Login\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" value=\"Login\" />\r\n    </div>\r\n  </form>\r\n  <div class=\"form-group\">\r\n    <a href=\"register\" class=\"d-inline-flex\" style=\"color:darkblue; outline-color:indigo\">Don't have an account? <br /> Register Now!</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_auth_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-http.service */ "./src/app/services/auth-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.login.status === 'VALID') {
            var userData = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"];
            userData = this.login.value;
            this.http.logIn(userData, function () { return _this.router.navigate(['/home']); });
        }
        else {
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_http_service__WEBPACK_IMPORTED_MODULE_4__["AuthHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <!-- Kreiramo mapu -->\r\n  <agm-map [latitude]=\"markerInfo.location.latitude\" [longitude]=\"markerInfo.location.longitude\" [zoom]=\"18\" (mapClick)=\"placeMarker($event)\">\r\n\r\n    <agm-polyline *ngFor=\"let busLine of polylines\" [strokeColor]=\"busLine.color\">\r\n      <agm-polyline-point *ngFor=\"let point of busLine.path\" [latitude]=\"point.latitude\" [longitude]=\"point.longitude\">\r\n      </agm-polyline-point>\r\n      <agm-marker *ngFor=\"let point of busLine.path\" [latitude]=\"point.latitude\" [longitude]=\"point.longitude\" [iconUrl]=\"busLine.icon\">\r\n      </agm-marker>\r\n    </agm-polyline>\r\n\r\n  </agm-map>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_marker_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/marker-info.model */ "./src/app/map/model/marker-info.model.ts");
/* harmony import */ var _model_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/geolocation */ "./src/app/map/model/geolocation.ts");
/* harmony import */ var _model_polyline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/polyline */ "./src/app/map/model/polyline.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MapComponent = /** @class */ (function () {
    function MapComponent(ngZone, http) {
        this.ngZone = ngZone;
        this.http = http;
        this.linesUri = "api/Lines";
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.linesUri).subscribe(function (data) {
            _this.lineArray = data;
            console.log(_this.lineArray);
            _this.polylines = [];
            for (var i = 0; i < _this.lineArray.length; i++) {
                _this.polylines.push(new _model_polyline__WEBPACK_IMPORTED_MODULE_4__["Polyline"]([], 'red', { url: "assets/busicon.png", scaledSize: { width: 50, height: 50 } }));
                var line = _this.lineArray[i];
                for (var j = 0; j < line.Stations.length; j++) {
                    _this.polylines[i].addLocation(new _model_geolocation__WEBPACK_IMPORTED_MODULE_3__["GeoLocation"](line.Stations[j].Latitude, line.Stations[j].Longitude));
                }
            }
            console.log(_this.polylines);
        });
        this.markerInfo = new _model_marker_info_model__WEBPACK_IMPORTED_MODULE_2__["MarkerInfo"](new _model_geolocation__WEBPACK_IMPORTED_MODULE_3__["GeoLocation"](45.242268, 19.842954), "assets/ftn.png", "Jugodrvo", "", "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
    };
    MapComponent.prototype.placeMarker = function ($event) {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: ["agm-map {height: 500px; width: 700px;}", __webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/model/geolocation.ts":
/*!******************************************!*\
  !*** ./src/app/map/model/geolocation.ts ***!
  \******************************************/
/*! exports provided: GeoLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocation", function() { return GeoLocation; });
var GeoLocation = /** @class */ (function () {
    function GeoLocation(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return GeoLocation;
}());



/***/ }),

/***/ "./src/app/map/model/marker-info.model.ts":
/*!************************************************!*\
  !*** ./src/app/map/model/marker-info.model.ts ***!
  \************************************************/
/*! exports provided: MarkerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerInfo", function() { return MarkerInfo; });
var MarkerInfo = /** @class */ (function () {
    function MarkerInfo(location, icon, title, label, link) {
        this.iconUrl = icon;
        this.title = title;
        this.label = label;
        this.location = location;
        this.link = link;
    }
    return MarkerInfo;
}());



/***/ }),

/***/ "./src/app/map/model/polyline.ts":
/*!***************************************!*\
  !*** ./src/app/map/model/polyline.ts ***!
  \***************************************/
/*! exports provided: Polyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
var Polyline = /** @class */ (function () {
    function Polyline(path, color, icon) {
        this.color = color;
        this.path = path;
        this.icon = icon;
    }
    Polyline.prototype.addLocation = function (location) {
        this.path.push(location);
    };
    return Polyline;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/price/price.component.css":
/*!*******************************************!*\
  !*** ./src/app/price/price.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlL3ByaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Ticket Prices</p>\r\n  </font>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <select name=\"tickets\" [(ngModel)]=\"tickets\" id=\"ticketSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\" (change)=\"priceSelection()\">\r\n        <option [ngValue]=\"1\">Hourly Ticket</option>\r\n        <option [ngValue]=\"2\">Daily Ticket</option>\r\n        <option [ngValue]=\"3\">Monthly Ticket</option>\r\n        <option [ngValue]=\"4\">Yearly Ticket</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <select [(ngModel)]=\"users\" id=\"userSelect\" class=\"form-control input-group-text\" style=\"background-color:azure; color:indigo\" (change)=\"priceSelection()\">\r\n        <option [ngValue]=\"1\" >Normal Ticket</option>\r\n        <option [ngValue]=\"2\" >Student Ticket</option>\r\n        <option [ngValue]=\"3\" >Senior Ticket</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-lg-3\">\r\n      <input id=\"buy\" class=\" input-group-text\" (click)=\"buyTicket()\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" type=\"button\" value=\"Buy Ticket\" />\r\n    </div>\r\n    <div class=\" form-group col-lg-3\">\r\n      {{ticketConfirmation}}\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group col-lg-3\" style=\"color:darkblue; font-size: medium\">\r\n    <p>Ticket Price: {{currentPrice}} ({{currentType}})</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PriceComponent = /** @class */ (function () {
    function PriceComponent(ngZone, http) {
        this.ngZone = ngZone;
        this.http = http;
        this.pricesUri = "api/Pricings";
        this.ticketsUri = "api/Tickets";
        this.priceArray = null;
        this.ticketConfirmation = "";
        this.tickets = 1;
        this.users = 1;
    }
    PriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceTypes = [];
        this.jwt = localStorage.jwt;
        this.http.get(this.pricesUri).subscribe(function (data) {
            _this.priceArray = data;
            _this.priceSelection();
        });
    };
    PriceComponent.prototype.buyTicket = function () {
        var _this = this;
        var ticketType = 1;
        if (this.jwt) {
            ticketType = this.tickets;
        }
        this.http.post(this.ticketsUri, ticketType).subscribe(function (data) {
            _this.ticketConfirmation = "Successfully bought a " + data['TicketType'].Type + " ticket! Your ticket ID is " + data['Id'] + ".";
        }), function (error) { console.log(error); };
    };
    PriceComponent.prototype.priceSelection = function () {
        if (this.priceArray === null) {
            this.currentPrice = "";
        }
        else {
            var combinedKey = this.tickets.toString() + this.users.toString();
            for (var i = 0; i < this.priceArray.length; i++) {
                if (combinedKey === this.priceArray[i].Id) {
                    this.currentPrice = this.priceArray[i].Price;
                    if (combinedKey === "11" || combinedKey === "21" || combinedKey === "31" || combinedKey === "41") {
                        this.currentType = "Normal price with no discounts";
                    }
                    else {
                        this.currentType = this.priceArray[i].TicketType.Type + " Price with " + this.priceArray[i].UserType.Type + " Discount.";
                    }
                    break;
                }
            }
        }
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"background-color:lightsteelblue\">\r\n  <font size=\"30\" color=\"darkslateblue\" face=\"Arial\">\r\n    <p>Register Account</p>\r\n  </font>\r\n  <form [formGroup]=\"register\" (submit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" id=\"username\" formControlName=\"username\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Username...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Password...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" id=\"confirmPassword\" formControlName=\"confirmPassword\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Confirm Password...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" id=\"fName\" formControlName=\"firstName\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"First Name...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" id=\"lName\" formControlName=\"lastName\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" placeholder=\"Last Name...\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"date\" id=\"dateBirth\" formControlName=\"dateOfBirth\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" />\r\n    </div>\r\n    <div class=\"form-group d-inline-flex align-items-center\">\r\n      <select formControlName=\"userType\" class=\"form-control input-group-text align-items-center\" style=\"background-color:azure; color:indigo; margin-left:inherit\" align=\"center\">\r\n        <option selected [ngValue]=\"1\">Normal Customer</option>\r\n        <option [ngValue]=\"2\">Student</option>\r\n        <option [ngValue]=\"3\">Senior</option>\r\n      </select>\r\n    </div>\r\n    <div *ngIf=\"register.controls.userType.value !== 1\" class=\"form-group\">\r\n      <input formControlName=\"confirmationImageLink\" type=\"file\" id=\"image\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo\" align=\"center\" />\r\n      <br />\r\n      <p style=\"color:indigo\" align=\"center\">Image does not need to be uploaded right now<br />Please provide your Index(Student) or Pension Check(Senior)</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"submit\" id=\"Register\" class=\"input-group-text d-inline-flex p-2\" style=\"background-color:azure; color:indigo; border-color:indigo; border-bottom-width:medium\" value=\"Register\" />\r\n    </div>\r\n  </form>\r\n  \r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, http) {
        this.router = router;
        this.http = http;
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmationImageLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.registerPath = "/api/Account/Register";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.register.controls.userType.setValue(1);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var model;
        if (this.register.valid && (model.password == model.confirmPassword)) {
            this.http.post(this.registerPath, model).subscribe(function () {
                _this.router.navigate['/login'];
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth-http.service.ts ***!
  \***********************************************/
/*! exports provided: AuthHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHttpService", function() { return AuthHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthHttpService = /** @class */ (function () {
    function AuthHttpService(http) {
        this.http = http;
        this.base_url = "http://localhost:52295";
    }
    AuthHttpService.prototype.logIn = function (user, callback) {
        var data = "username=" + user.username + "&password=" + user.password + "&grant_type=password";
        var httpOptions = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        };
        this.http.post(this.base_url + "/oauth/token", data, httpOptions)
            .subscribe(function (data) {
            var jwt = data.access_token;
            var jwtData = jwt.split('.')[1];
            var decodedJwtJsonData = window.atob(jwtData);
            var decodedJwtData = JSON.parse(decodedJwtJsonData);
            var role = decodedJwtData.role;
            console.log('jwtData: ' + jwtData);
            console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
            console.log('decodedJwtData: ' + decodedJwtData);
            console.log('Role ' + role);
            localStorage.setItem('jwt', jwt);
            localStorage.setItem('role', role);
            callback();
        });
    };
    AuthHttpService.prototype.logOut = function () {
        var httpOptions = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        };
        this.http.post(this.base_url + "/Account/Logout", httpOptions)
            .subscribe(function () {
            localStorage.removeItem('jwt');
            localStorage.removeItem('role');
            console.log('Logout was successful.');
        });
    };
    AuthHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthHttpService);
    return AuthHttpService;
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

module.exports = __webpack_require__(/*! C:\Users\Milan\Documents\GitHub\Web2Proj2019\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map