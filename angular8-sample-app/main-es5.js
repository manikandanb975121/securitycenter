function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar color=\"primary\">\n  <a class=\"title\" href=\"/\">{{ title }}</a>\n\n  <div class=\"toolbar-spacer\"></div>\n\n  <a mat-button [routerLink]=\"['profile']\">Profile</a>\n\n  <button mat-raised-button *ngIf=\"!loggedIn\" (click)=\"login()\">Login</button>\n  <button mat-raised-button *ngIf=\"loggedIn\" (click)=\"logout()\">Logout</button>\n</mat-toolbar>\n<button (click)=\"token()\">Get Token</button>\n<div class=\"container\">\n \n  <router-outlet *ngIf=\"!isIframe\"></router-outlet>\n</div> -->\n<app-nav-bar>\n  <router-outlet></router-outlet>\n</app-nav-bar>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>auth works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardAlertsDashboardAlertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hr>\n<div class=\"p-2\">\n        <!-- <mat-form-field> -->\n            <!-- <form>\n                <div class=\"form-group\" >\n                    <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                </div>\n            </form> -->\n\n            <mat-form-field appearance=\"legacy\">\n                <input (keyup)=\"applyFilter($event.target.value)\" matInput placeholder=\"Search Alerts\">\n              </mat-form-field>\n            \n        <!-- </mat-form-field> -->\n        <mat-table [dataSource]=\"alertData\" matSort>\n            <ng-container matColumnDef=\"First Name\" class=\"p-4\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">Title</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"pr-5\">{{ element.title | titlecase }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Last Name\" class=\"p-4\">  \n                <mat-header-cell *matHeaderCellDef mat-sort-header class=\"pl-5\">Severity</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.severity | titlecase }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.status | titlecase }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"CollegeTest\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Category</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.category }}</mat-cell>\n            </ng-container>\n            \n    \n            <ng-container matColumnDef=\"dateTime\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Created Date Time</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.createdDateTime | date: 'short'}}</mat-cell>\n            </ng-container>\n\n            <!-- <ng-container matColumnDef=\"assignedTo\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Assigned To</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.assignedTo }}</mat-cell>\n            </ng-container> -->\n\n            <ng-container matColumnDef=\"provider\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Provider</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.vendorInformation.provider }}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"manage\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Manage</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <!-- <mat-icon>dvr</mat-icon> -->\n                    <!-- <button mat-icon-button (click)=\"manageAlerts(element.id)\"></button> -->\n                    <button mat-mini-fab color=\"warn\" class=\"cursorPointer b\" (click)=\"manageAlerts(element.id, manage)\">+</button>\n                </mat-cell>\n                \n            </ng-container>\n            \n            <!-- <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <button mat-icon-button class=\"cursorPointer b\" (click)=\"viewProfile(element._id)\"><mat-icon>launch</mat-icon></button>\n                    <button mat-icon-button color=\"warn\" class=\"cursorPointer b\" (click)=\"deleteStudent(element._id)\"><mat-icon>delete_outline</mat-icon></button>\n                </mat-cell>\n            </ng-container> -->\n    \n            <!-- <ng-container matColumnDef=\"loading\">\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                    Loading data...\n                </mat-footer-cell>\n            </ng-container> -->\n    \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"p-2\"></mat-row>\n            <!-- <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide': alertData!=null}\"></mat-footer-row> -->\n        </mat-table>\n        <mat-paginator class=\"mt-4\" [pageSizeOptions]=\"[5,10,20]\" showFirstLastButtons></mat-paginator>\n</div>  \n\n\n\n<ng-template #manage>\n    <h5>MANAGE ALERTS</h5>\n    <mat-form-field class=\"mt-4\" style=\"width: 250px;\" appearance=\"legacy\">\n        <!-- <input matInput placeholder=\"Placeholder\"> -->\n        <mat-label>STATUS</mat-label>\n        <mat-select matNativeControl required>\n            <mat-option value=\"volvo\">NewAlert</mat-option>\n            <mat-option value=\"saab\">InProgress</mat-option>\n            <mat-option value=\"mercedes\">Resolved</mat-option>\n            <mat-option value=\"audi\">Dismissed</mat-option>\n        </mat-select>\n      </mat-form-field>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-3 shadow-sm\">\n    <nav aria-label=\"breadcrumb\" class=\"\">\n        <ol class=\"breadcrumb bg-white p-3\">\n            <li class=\"breadcrumb-item active\"><a routerLink=\"/\">DashBoard</a></li>\n            <!-- <li class=\"breadcrumb-item\"><a href=\"#\">Test</a></li>\n            <li class=\"breadcrumb-item active\">{{ testDetails?.test.title }}</li> -->\n          </ol>\n      </nav>\n</div>\n\n<div class=\"container\">\n    <div class=\"mt-4\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" class=\"\" (click)=\"openAlerts2()\">Alerts</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Secure Score</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Action</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Subscriptions</mat-card>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-5\">\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">MISP</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Indicator</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Condition</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Security Risk</mat-card>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row mt-5\">\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Microsoft Team</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">SharePoint</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">One Drive</mat-card>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div>\n                    <mat-card style=\"width: 250px; height: 150px;\" (click)=\"openAlerts2()\">Risk User</mat-card>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- <ng-template #alerts> -->\n    <ng-template  #alerts class=\"mat-elevation-z8 p-3\">\n        <div>\n\n        </div>\n        <hr>\n        <!-- <mat-form-field> -->\n            <form>\n                <div class=\"form-group\" >\n                    <input class=\"form-control\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n                </div>\n            </form>\n            \n        <!-- </mat-form-field> -->\n        <mat-table [dataSource]=\"alertData\" matSort>\n            <ng-container matColumnDef=\"First Name\" class=\"p-3\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.title | uppercase }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Last Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Severity</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.severity }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.status }}</mat-cell>\n            </ng-container>\n    \n            <ng-container matColumnDef=\"CollegeTest\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Category</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.category }}</mat-cell>\n            </ng-container>\n            \n    \n            <ng-container matColumnDef=\"dateTime\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Created Date Time</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.createdDateTime | date: 'medium'}}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"assignedTo\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Assigned To</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.assignedTo }}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"provider\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Provider</mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"p-2\">{{ element.vendorInformation.provider }}</mat-cell>\n            </ng-container>\n            \n            <!-- <ng-container matColumnDef=\"actions\">\n                <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">\n                    <button mat-icon-button class=\"cursorPointer b\" (click)=\"viewProfile(element._id)\"><mat-icon>launch</mat-icon></button>\n                    <button mat-icon-button color=\"warn\" class=\"cursorPointer b\" (click)=\"deleteStudent(element._id)\"><mat-icon>delete_outline</mat-icon></button>\n                </mat-cell>\n            </ng-container> -->\n    \n            <!-- <ng-container matColumnDef=\"loading\">\n                <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                    Loading data...\n                </mat-footer-cell>\n            </ng-container> -->\n    \n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"p-2\"></mat-row>\n            <!-- <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide': alertData!=null}\"></mat-footer-row> -->\n        </mat-table>\n        <mat-paginator [pageSizeOptions]=\"[5,10,20]\" showFirstLastButtons></mat-paginator>\n    <!-- </div> -->\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar color=\"primary\">\n    <a class=\"title\" href=\"/\">{{ title }}</a>\n  \n    <div class=\"toolbar-spacer\"></div>\n  \n    <a mat-button [routerLink]=\"['profile']\">Profile</a>\n  \n    <button mat-raised-button *ngIf=\"!loggedIn\" (click)=\"logout()\">Login</button>\n    <button mat-raised-button *ngIf=\"loggedIn\" (click)=\"logout()\">Logout</button>\n  </mat-toolbar> -->\n\n  <mat-toolbar  class=\"bg-dark mat-elevation-z6\">\n    <span class=\"text-light\">Security Center</span>\n    <div class=\"spacer\"></div>\n    <!-- <a mat-raised-button *ngIf=\"loggedIn\" (click)=\"logout()\">Logout</a> -->\n    <!-- <a mat-button *ngIf=\"loggedIn\">{{ users.name }}</a> -->\n    <ngx-avatar name=\"{{users?.name}}\" (click)=\"openModel(mytemplate)\"></ngx-avatar>\n  </mat-toolbar>\n  <div class=\"container\">\n    <router-outlet *ngIf=\"!isIframe\"></router-outlet>\n  </div>\n  <ng-template #mytemplate>\n    <h2>{{ users?.name }}</h2>\n    <a mat-raised-button *ngIf=\"loggedIn\" (click)=\"logout()\">Logout</a>\n  </ng-template>\n\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>\n  Welcome {{profile?.displayName}}\n</p>\n<button (click)=\"getAlerts()\">Get Alerts</button> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/Guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = !!this.authService.getAccount();

          if (!isAuth) {
            // this.router.navigate(['']);
            this.authService.loginRedirect();
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _app_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _Guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Guard/auth.guard */
    "./src/app/Guard/auth.guard.ts");
    /* harmony import */


    var _app_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../app/dashboard/dashboard/dashboard.component */
    "./src/app/dashboard/dashboard/dashboard.component.ts"); // DashBoard Components


    var routes = [{
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
      canActivate: [// MsalGuard
      _Guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: '',
      component: _app_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'login',
      component: _app_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
      canActivate: [// AuthGuard
      ]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\na.title {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5hLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var msal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! msal */
    "./node_modules/msal/lib-es6/index.js");
    /* harmony import */


    var _app_oauthSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/oauthSettings */
    "./src/app/oauthSettings.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app/auth.service */
    "./src/app/auth.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      // requestObj = {
      //   appId: '120165c2-bd77-478e-86d3-36f9f74b8e11',
      //   scopes: [
      //     // 'user.read',
      //     //   'user.read.all',
      //     //   'securityevents.readwrite.all',
      //     //   'securityevents.read.all',
      //     '.default'
      //   ],
      // };
      function AppComponent(broadcastService, authService, http, access) {
        _classCallCheck(this, AppComponent);

        this.broadcastService = broadcastService;
        this.authService = authService;
        this.http = http;
        this.access = access;
        this.title = 'MSAL - Angular 8 Sample App';
        this.isIframe = false;
        this.loggedIn = false;
        this.at = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // console.log(window.navigator.userAgent.indexOf('MSIE '));
          // console.log(window.navigator.userAgent.indexOf('Trident/') > -1);
          // this.access.getAccessToken();
          var isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
          console.log(isIE); // if (!this.loggedIn) {
          // this.login();
          //   this.checkoutAccount();
          // }

          this.isIframe = window !== window.parent && !window.opener;
          this.checkoutAccount(); //   this.authService.acquireTokenSilent(this.requestObj).then((tokenResponse) => {
          //     // Callback code here
          //     console.log(tokenResponse.accessToken);
          //     this.at.next(tokenResponse.accessToken);
          // }).catch((error) => {
          //     console.log(error);
          // });

          this.broadcastService.subscribe('msal:loginSuccess', function () {
            _this.checkoutAccount();
          });
          this.authService.handleRedirectCallback(function (authError, response) {
            if (authError) {
              console.error('Redirect Error: ', authError.errorMessage);
              return;
            }

            console.log('Redirect Success: ', response);
            console.log('Access Token: ', response.accessToken);

            _this.access.getAccessTokenFromBackend(); // const accessToken = this.getAccessToken().then(data => {
            //   console.log(data);
            // });
            // console.log(accessToken);

          }); // const v: any = this.getAccessToken;
          // console.log(v);

          this.authService.setLogger(new msal__WEBPACK_IMPORTED_MODULE_3__["Logger"](function (logLevel, message, piiEnabled) {
            console.log('MSAL Logging: ', message);
          }, {
            correlationId: msal__WEBPACK_IMPORTED_MODULE_3__["CryptoUtils"].createNewGuid(),
            piiLoggingEnabled: false
          }));
        }
      }, {
        key: "checkoutAccount",
        value: function checkoutAccount() {
          console.log(!this.authService.getAccount());
          this.loggedIn = !!this.authService.getAccount();
          console.log(this.loggedIn);
        }
      }, {
        key: "login",
        value: function login() {
          var isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
          console.log(isIE);

          if (!isIE) {
            this.authService.loginPopup(_app_oauthSettings__WEBPACK_IMPORTED_MODULE_4__["OAuthSettings"]); // const accessToken = this.getAccessToken();
            // console.log(accessToken);
          } else {// this.authService.loginRedirect(OAuthSettings);
              // const accessToken = this.getAccessToken();
              // console.log(accessToken);
            }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        } // async getAccessToken(): Promise<string> {
        //   // tslint:disable-next-line: prefer-const
        //   let result = await this.authService.acquireTokenSilent(this.requestObj)
        //     .catch((reason) => {
        //       console.log(reason);
        //     });
        //   if (result) {
        //     // Temporary to display token in an error box
        //     // this.alertsService.add('Token acquired', result.accessToken);
        //     console.log(result.idToken);
        //     return result.accessToken;
        //   }
        //   return null;
        // }
        // getAccessToken() {
        //   this.at.asObservable();
        // }

      }, {
        key: "token",
        value: function token() {
          var name = {
            name: 'Manikandan'
          };
          this.http.get('http://localhost:3000/api/post').subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "hai",
        value: function hai() {
          console.log('Hai');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _app_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: protectedResourceMaps, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "protectedResourceMaps", function () {
      return protectedResourceMaps;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var ngx_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-avatar */
    "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
    /* harmony import */


    var _app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../app/dashboard/dashboard.module */
    "./src/app/dashboard/dashboard.module.ts");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth-interceptor */
    "./src/app/auth-interceptor.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");

    var protectedResourceMaps = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];
    var isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"]],
      imports: [_app_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _azure_msal_angular__WEBPACK_IMPORTED_MODULE_10__["MsalModule"].forRoot({
        auth: {
          clientId: '120165c2-bd77-478e-86d3-36f9f74b8e11',
          authority: 'https://login.microsoftonline.com/common',
          validateAuthority: true,
          redirectUri: 'http://localhost:3001/',
          postLogoutRedirectUri: 'http://localhost:3001/',
          navigateToLoginRequestUrl: true
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE
        }
      }, {
        popUp: !isIE,
        consentScopes: [// '.default',
        // 'SecurityEvents.ReadWrite.All',
        // 'SecurityEvents.Read.All',
        // // 'user.read',
        // 'user.read.all',
        // 'securityevents.readwrite.all',
        // 'securityevents.read.all',
        // 'threatIndicators.ReadWrite.OwnedBy'
        'profile', 'offline_access', 'user.read', 'calendars.read'],
        unprotectedResources: ['https://www.microsoft.com/en-us/'],
        protectedResourceMap: protectedResourceMaps,
        extraQueryParameters: {}
      })],
      providers: [// {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: MsalInterceptor,
      //   multi: true
      // },
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-interceptor.ts":
  /*!*************************************!*\
    !*** ./src/app/auth-interceptor.ts ***!
    \*************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // import { AuthService } from '../app/auth.service';


    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      // requestObj = {
      //     appId: '120165c2-bd77-478e-86d3-36f9f74b8e11',
      //     scopes: [
      //     //   'user.read',
      //     // 'user.read.all',
      //     // 'securityevents.readwrite.all',
      //     // 'securityevents.read.all',
      //     '.default'
      //     ],
      //   };
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          //   const authToken = this.getAccessToken().then(response => {
          //       this.authToken = response;
          //   });
          var authToken = localStorage.getItem('AccessTokenForAPI'); // const authToken = this.authService.getToken();
          // const authToken = this.authService.getAccessToken2();

          console.log(authToken);
          var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
          });
          return next.handle(authRequest); // return next.handle(this.authRequest);
          // return this.authToken = this.getAccessToken().then(res => {
          //     const at = res;
          //     console.log(at);
          //     this.authRequest = req.clone({
          //         headers: req.headers.set('Authorization', 'Bearer ' + at)
          //     });
          //     return next.handle(this.authRequest);
          // });
          // if (this.authRequest) {
          //     return next.handle(this.authRequest);
          // }
          // console.log(authToken);
          // this.authRequest = req.clone({
          //     headers: req.headers.set('Authorization', 'Bearer ' + authToken)
          // });
          // return next.handle(this.authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var _app_services_alerts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/services/alerts.service */
    "./src/app/services/alerts.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(authService, http, alertService) {
        _classCallCheck(this, AuthService);

        this.authService = authService;
        this.http = http;
        this.alertService = alertService;
        this.requestObj = {
          appId: '120165c2-bd77-478e-86d3-36f9f74b8e11',
          scopes: [// 'user.read',
          // 'user.read.all',
          // 'securityevents.readwrite.all',
          // 'securityevents.read.all',
          // '.default',
          // 'SecurityEvents.ReadWrite.All',
          // 'SecurityEvents.Read.All',
          'profile', 'offline_access', 'user.read', 'calendars.read']
        };
      }

      _createClass(AuthService, [{
        key: "getAccessToken",
        value: function getAccessToken() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.authService.acquireTokenSilent(this.requestObj).catch(function (reason) {
                      console.log(reason);
                    });

                  case 2:
                    result = _context.sent;

                    if (!result) {
                      _context.next = 8;
                      break;
                    }

                    // Temporary to display token in an error box
                    // this.alertsService.add('Token acquired', result.accessToken);
                    console.log(result.idToken);
                    this.accesstoken = result.accessToken;
                    console.log(this.accesstoken);
                    return _context.abrupt("return", result.accessToken);

                  case 8:
                    return _context.abrupt("return", null);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.accesstoken;
        }
      }, {
        key: "getAccessTokenFromBackend",
        value: function getAccessTokenFromBackend() {
          var _this2 = this;

          this.http.get('http://localhost:3001/api/token').subscribe(function (data) {
            console.log(data);
            console.log(data.accessToken);
            _this2.accessTOken2 = data.accessToken;
            localStorage.setItem('AccessTokenForAPI', data.accessToken); // this.alertService.getUserDetails();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }, {
        key: "getAccessToken2",
        value: function getAccessToken2() {
          return this.accessTOken2;
        }
      }, {
        key: "getAlerts",
        value: function getAlerts() {// this.http.get('http://localhost:3001/api/alert').subscribe(data => {
          //   console.log(data);
          // });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__["MsalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _app_services_alerts_service__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthComponent =
    /*#__PURE__*/
    function () {
      function AuthComponent(broadcastService, authService, http, access, router) {
        _classCallCheck(this, AuthComponent);

        this.broadcastService = broadcastService;
        this.authService = authService;
        this.http = http;
        this.access = access;
        this.router = router;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.loginPopup();
          this.router.navigate(['/']);
          console.log('Hello From Auth');
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css")).default]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardAlertsDashboardAlertsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".b {\r\n    outline: none;\r\n    border: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1hbGVydHMvZGFzaGJvYXJkLWFsZXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtYWxlcnRzL2Rhc2hib2FyZC1hbGVydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DashboardAlertsComponent */

  /***/
  function srcAppDashboardDashboardAlertsDashboardAlertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAlertsComponent", function () {
      return DashboardAlertsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/alerts.service */
    "./src/app/services/alerts.service.ts");

    var DashboardAlertsComponent =
    /*#__PURE__*/
    function () {
      function DashboardAlertsComponent(dialog, alertService) {
        _classCallCheck(this, DashboardAlertsComponent);

        this.dialog = dialog;
        this.alertService = alertService;
        this.displayedColumns = ['First Name', 'Last Name', 'Email', 'CollegeTest', 'dateTime', 'provider', 'manage'];
      }

      _createClass(DashboardAlertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.alertService.getAlerts();
          this.alertService.getUpdatedAlerts().subscribe(function (response) {
            console.log(response.result.value);
            _this3.alerts = response.result.value;
            _this3.alertData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.alerts);
            _this3.alertData.sort = _this3.sort;
            _this3.alertData.paginator = _this3.paginator;
          });
        } // openAlerts(templateRef) {
        //   const dialogRef = this.dialog.open(templateRef, {
        //     width: '1200px',
        //     height: '650px'
        //     // data: { name: this.name, animal: this.animal }
        // });
        //   dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     // this.animal = result;
        //   });
        // }

      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.alertData.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "manageAlerts",
        value: function manageAlerts(alertsId, templateRef) {
          console.log(alertsId);
          var dialogRef = this.dialog.open(templateRef, {
            width: '500px',
            height: '400px' // data: { name: this.name, animal: this.animal }

          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed'); // this.animal = result;
          });
        }
      }]);

      return DashboardAlertsComponent;
    }();

    DashboardAlertsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: false
    })], DashboardAlertsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], DashboardAlertsComponent.prototype, "paginator", void 0);
    DashboardAlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard-alerts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard-alerts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard-alerts.component.css */
      "./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.css")).default]
    })], DashboardAlertsComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dashboard_alerts_dashboard_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-alerts/dashboard-alerts.component */
    "./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dashboard_alerts_dashboard_alerts_component__WEBPACK_IMPORTED_MODULE_5__["DashboardAlertsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"]],
      entryComponents: [_dashboard_alerts_dashboard_alerts_component__WEBPACK_IMPORTED_MODULE_5__["DashboardAlertsComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard/dashboard.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard/dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_alerts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/alerts.service */
    "./src/app/services/alerts.service.ts");
    /* harmony import */


    var _dashboard_alerts_dashboard_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dashboard-alerts/dashboard-alerts.component */
    "./src/app/dashboard/dashboard-alerts/dashboard-alerts.component.ts"); // Pop Up components


    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(dialog, alertService) {
        _classCallCheck(this, DashboardComponent);

        this.dialog = dialog;
        this.alertService = alertService;
        this.displayedColumns = ['First Name', 'Last Name', 'Email', 'CollegeTest', 'dateTime', 'assignedTo', 'provider', 'manage'];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.alertService.getAlerts();
          this.alertService.getUpdatedAlerts().subscribe(function (response) {
            console.log(response.result.value);
            _this4.alerts = response.result.value;
            _this4.alertData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this4.alerts);
            _this4.alertData.sort = _this4.sort;
            _this4.alertData.paginator = _this4.paginator;
          });
        }
      }, {
        key: "openAlerts",
        value: function openAlerts(templateRef) {
          var dialogRef = this.dialog.open(templateRef, {
            width: '1200px',
            height: '650px' // data: { name: this.name, animal: this.animal }

          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed'); // this.animal = result;
          });
        }
      }, {
        key: "openAlerts2",
        value: function openAlerts2() {
          var dialogRef = this.dialog.open(_dashboard_alerts_dashboard_alerts_component__WEBPACK_IMPORTED_MODULE_4__["DashboardAlertsComponent"], {
            width: '1200px',
            height: '700px' // data: { name: this.name, animal: this.animal }

          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed'); // this.animal = result;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.alertData.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_alerts_service__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: false
    })], DashboardComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: false
    })], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavBarNavBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  a.title {\r\n    color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIGEudGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var msal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! msal */
    "./node_modules/msal/lib-es6/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(broadcastService, authService, http, access, dialog) {
        _classCallCheck(this, NavBarComponent);

        this.broadcastService = broadcastService;
        this.authService = authService;
        this.http = http;
        this.access = access;
        this.dialog = dialog;
        this.title = 'MSAL - Angular 8 Sample App';
        this.isIframe = false;
        this.loggedIn = false;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          console.log('Hello From Navbar');
          this.isIframe = window !== window.parent && !window.opener;
          console.log('Hello From navbar2');
          this.checkoutAccount();
          this.broadcastService.subscribe('msal:loginSuccess', function () {
            _this5.checkoutAccount();
          });
          this.authService.handleRedirectCallback(function (authError, response) {
            if (authError) {
              console.error('Redirect Error: ', authError.errorMessage);
              return;
            }

            console.log('Redirect Success: ', response);
            console.log('Access Token: ', response.accessToken); // this.access.getAccessTokenFromBackend();
            // const accessToken = this.getAccessToken().then(data => {
            //   console.log(data);
            // });
            // console.log(accessToken);
          }); // const v: any = this.getAccessToken;
          // console.log(v);

          this.authService.setLogger(new msal__WEBPACK_IMPORTED_MODULE_3__["Logger"](function (logLevel, message, piiEnabled) {
            console.log('MSAL Logging: ', message);
          }, {
            correlationId: msal__WEBPACK_IMPORTED_MODULE_3__["CryptoUtils"].createNewGuid(),
            piiLoggingEnabled: false
          }));
        }
      }, {
        key: "checkoutAccount",
        value: function checkoutAccount() {
          console.log(this.authService.getAccount());
          this.users = this.authService.getAccount();
          this.loggedIn = !!this.authService.getAccount();
          console.log(this.loggedIn); // if (localStorage.getItem('AccessTokenForAPI') !== null) {

          this.access.getAccessTokenFromBackend(); // }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('AccessTokenForAPI');
          this.authService.logout();
        }
      }, {
        key: "openModel",
        value: function openModel(templateRef) {
          var dialogRef = this.dialog.open(templateRef, {
            width: '400px',
            height: '300px' // data: { name: this.name, animal: this.animal }

          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed'); // this.animal = result;
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]
      }, {
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.css */
      "./src/app/nav-bar/nav-bar.component.css")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/oauthSettings.ts":
  /*!**********************************!*\
    !*** ./src/app/oauthSettings.ts ***!
    \**********************************/

  /*! exports provided: OAuthSettings */

  /***/
  function srcAppOauthSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OAuthSettings", function () {
      return OAuthSettings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OAuthSettings = {
      appId: '120165c2-bd77-478e-86d3-36f9f74b8e11',
      scopes: [// 'user.read',
      // 'openid',
      // 'user.read.all',
      // 'securityevents.readwrite.all',
      // 'securityevents.read.all',
      // '.default',
      // 'SecurityEvents.ReadWrite.All',
      // 'SecurityEvents.Read.All'
      'profile', 'offline_access', 'user.read', 'calendars.read' // 'SecurityEvents.ReadWrite.All',
      // 'SecurityEvents.Read.All',
      //   // 'user.read',
      // 'user.read.all',
      ]
    };
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @azure/msal-angular */
    "./node_modules/@azure/msal-angular/fesm2015/azure-msal-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService, http, access) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.http = http;
        this.access = access;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Hello World'); // this.getProfile();
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this6 = this;

          this.http.get(GRAPH_ENDPOINT).toPromise().then(function (profile) {
            _this6.profile = profile;
          });
        }
      }, {
        key: "getAlerts",
        value: function getAlerts() {
          this.access.getAlerts();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/services/alerts.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/alerts.service.ts ***!
    \********************************************/

  /*! exports provided: AlertsService */

  /***/
  function srcAppServicesAlertsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsService", function () {
      return AlertsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertsService =
    /*#__PURE__*/
    function () {
      function AlertsService(http) {
        _classCallCheck(this, AlertsService);

        this.http = http;
        this.alerts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
      }

      _createClass(AlertsService, [{
        key: "getAlerts",
        value: function getAlerts() {
          var _this7 = this;

          this.http.get('http://localhost:3001/api/alert').subscribe(function (data) {
            // console.log(data);
            _this7.alerts.next(data);
          });
        }
      }, {
        key: "getUpdatedAlerts",
        value: function getUpdatedAlerts() {
          return this.alerts.asObservable();
        } // getUserDetails() {
        //   this.http.get('http://localhost:3001/api/user').subscribe(data => {
        //     console.log(data);
        //   });
        // }

      }, {
        key: "getProfile",
        value: function getProfile() {
          this.http.get(this.GRAPH_ENDPOINT).toPromise().then(function (profile) {
            console.log(profile); // this.profile = profile;
          });
        }
      }]);

      return AlertsService;
    }();

    AlertsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AlertsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\graph\security center\angular8-sample-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map