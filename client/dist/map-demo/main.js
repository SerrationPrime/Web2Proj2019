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

module.exports = "<div class=\"container\">\r\n  <h3>Fakultet tehničkih nauka</h3>\r\n  <div style=\"width:50%; margin: 0 auto\">\r\n    <app-map></app-map>\r\n  </div>\r\n\r\n  <p>\r\n    Aplikacija koristi\r\n    <a href=\"https://angular-maps.com/\">Angular Google Maps (AGM) modul</a>.\r\n    <br /> Instaliranje modula u okviru projekta se radi pomoću:\r\n    <span style=\"color:#2a9fd6\">npm install @agm/core --save</span> komande.\r\n  </p>\r\n\r\n</div>\r\n"

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
        this.title = 'map-demo';
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







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk' }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<p>\r\n  <!-- Kreiramo mapu -->\r\n  <agm-map [latitude]=\"markerInfo.location.latitude\" [longitude]=\"markerInfo.location.longitude\" [zoom]=\"18\" (mapClick)=\"placeMarker($event)\">  \r\n\r\n    <agm-marker [latitude]=\"markerInfo.location.latitude\" [longitude]=\"markerInfo.location.longitude\" [title]=\"markerInfo.title\"\r\n    [label]=\"markerInfo.label\" [iconUrl]=\"markerInfo.iconUrl\">\r\n\r\n      <!-- Svakom markeru dodajemo info-window (Nije obavezno!)-->\r\n      <agm-info-window [latitude]=\"markerInfo.location.latitude\" [longitude]=\"markerInfo.location.longitude\" >\r\n\r\n        <!-- U info-window stavljamo html -->\r\n        <span style=\"font-size: 16px;font-family:'Times New Roman'\">Fakultet tehničkih nauka</span>\r\n        <br/>\r\n        <span style=\"font-family:'Times New Roman'; color:gray;\"><strong>Jugodrvo</strong></span>\r\n        <span style=\"font-family:'Times New Roman'; color:gray;\">Bulevar oslobođenja 131</span>\r\n        <a [href]=\"markerInfo.link\">See the site.</a>\r\n      </agm-info-window>\r\n\r\n    </agm-marker>\r\n\r\n    <agm-polyline [strokeColor]=\"polyline.color\">\r\n         <agm-polyline-point *ngFor=\"let point of polyline.path\" [latitude]=\"point.latitude\" [longitude]=\"point.longitude\">\r\n         </agm-polyline-point>\r\n    </agm-polyline>\r\n\r\n    <agm-marker *ngFor=\"let point of polyline.path\" [latitude]=\"point.latitude\" [longitude]=\"point.longitude\" [iconUrl]=\"polyline.icon\">\r\n    </agm-marker>\r\n\r\n  </agm-map>\r\n</p>\r\n"

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





var MapComponent = /** @class */ (function () {
    function MapComponent(ngZone) {
        this.ngZone = ngZone;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.markerInfo = new _model_marker_info_model__WEBPACK_IMPORTED_MODULE_2__["MarkerInfo"](new _model_geolocation__WEBPACK_IMPORTED_MODULE_3__["GeoLocation"](45.242268, 19.842954), "assets/ftn.png", "Jugodrvo", "", "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
        this.polyline = new _model_polyline__WEBPACK_IMPORTED_MODULE_4__["Polyline"]([], 'blue', { url: "assets/busicon.png", scaledSize: { width: 50, height: 50 } });
    };
    MapComponent.prototype.placeMarker = function ($event) {
        this.polyline.addLocation(new _model_geolocation__WEBPACK_IMPORTED_MODULE_3__["GeoLocation"]($event.coords.lat, $event.coords.lng));
        console.log(this.polyline);
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: ["agm-map {height: 500px; width: 700px;}", __webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
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