webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_app_module__ = __webpack_require__("./src/public/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__public_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/public/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__("./src/public/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_resume_resume_module__ = __webpack_require__("./src/public/components/resume/resume.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_resume_resume_module__["a" /* PortfolioModule */],
                __WEBPACK_IMPORTED_MODULE_4__services_services_module__["b" /* ServicesModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/public/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron-fix {\n\tpadding-bottom: 32px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n\n.header-content{\n\tmax-width: 850px;\n\tmargin: auto;\n}"

/***/ }),

/***/ "./src/public/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"jumbotron jumbotron-fix\">\n    <div class=\"\">\n      <div class=\"header-content pad-sides\">\n        <resume-header></resume-header>\n        <resume-about></resume-about>\n      </div>\n      <resume-skills [offsetHeight]=\"headerContentHeight\"></resume-skills>\n    </div>\n  </div>\n  <div class=\"table-default\">\n    <div class=\"container\">\n      <resume-projects></resume-projects>\n    </div>\n  </div>\n  <resume-footer></resume-footer>\n</div>\n"

/***/ }),

/***/ "./src/public/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.headerContentHeight = 0;
    }
    AppComponent.prototype.onWindowScroll = function () {
        this.headerContentHeight = document.getElementsByClassName('header-content')[0].scrollHeight || 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/public/app/app.component.html"),
            styles: [__webpack_require__("./src/public/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".welcome-card {\n  width: calc( 100% - 200px);\n  margin-left: 200px;\n}\n\n.biopic {\n  float: left;\n  padding: 10px;\n  width: 200px;\n}\n\n"

/***/ }),

/***/ "./src/public/components/resume/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<resume-contacts></resume-contacts>\n<div>\n  <img src=\"assets/images/cropped/me.jpg\" class=\"biopic img-responsive\">\n  <div class=\"welcome-card\">\n    <h2>Welcome!</h2>\n    <span class=\"lead\" [innerHTML]=\"welcomeMessage\"></span>\n    <div class=\"center-content\">\n      <hr class=\"gap\">\n    </div>\n    <p [innerHTML]=\"welcomeMessageCallout\"></p>\n   </div>\n</div>\n\n<div style=\"clear: left;\">"

/***/ }),

/***/ "./src/public/components/resume/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// todo media qurry at 740 with contacts container at 457.
// TODO: Start bones of nav. Pull in footer.
//TODO: Do navigation of skills pc.
var AboutComponent = /** @class */ (function () {
    function AboutComponent(contactsService) {
        this.contactsService = contactsService;
    }
    Object.defineProperty(AboutComponent.prototype, "welcomeMessage", {
        get: function () {
            return this.contactsService.welcomeMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutComponent.prototype, "welcomeMessageCallout", {
        get: function () {
            return this.contactsService.welcomeMessageCallout;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-about',
            template: __webpack_require__("./src/public/components/resume/about/about.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/about/about.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_services_module__["a" /* ContactsService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\n.footer-container {\n  margin: 8px;\n}"

/***/ }),

/***/ "./src/public/components/resume/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n\t<resume-contacts></resume-contacts>\n</div>"

/***/ }),

/***/ "./src/public/components/resume/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-footer',
            template: __webpack_require__("./src/public/components/resume/footer/footer.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/footer/footer.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/public/components/resume/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-8\">\n      <h1>{{name}}</h1>\n      <div><span class=\"text-primary\">Current Occupation:</span> {{occupation}}</div>\n    </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/public/components/resume/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.name = 'Daniel Cannova';
        this.occupation = 'Educational Software Engineer';
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-header',
            template: __webpack_require__("./src/public/components/resume/header/header.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/projects/carousel.component.css":
/***/ (function(module, exports) {

module.exports = ".control {\n  border-radius: 3px;\n}\n\n.project-btn-group {\n\twidth: 100%;\n}"

/***/ }),

/***/ "./src/public/components/resume/projects/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div [attr.id]=\"id\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <ng-container *ngFor=\"let _image of images; let _i = index\">\n      <div class=\"carousel-item project-image-container\" [class.active]=\"_i == 0\" >\n        <img class=\"img-fluid\"  [attr.src]=\"_image\" [class.d-block]=\"true\" [class.w-100]=\"true\" alt=\"{{_i}} slide\" >\n      </div>\n    </ng-container>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#{{id}}\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon control\" aria-hidden=\"true\" [style.background-color]=\"backgroundColor\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\"  href=\"#{{id}}\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon control\" aria-hidden=\"true\" [style.background-color]=\"backgroundColor\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/public/components/resume/projects/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.backgroundColor = 'transparent';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "backgroundColor", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-carousel',
            template: __webpack_require__("./src/public/components/resume/projects/carousel.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/projects/carousel.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".contacts {\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.contact-info {\n  padding: 8px;\n}\n\n.contact-info-title {\n  margin-right: 8px;\n}\n\n.welcome-card {\n  width: calc( 100% - 200px);\n  margin-left: 200px;\n}\n\n.biopic {\n  float: left;\n  padding: 10px;\n  width: 200px;\n}\n\n.gap {\n  margin: 0 40%;\n}\n\n.stack {\n  margin-bottom: 16px;\n}\n\n.project-vertical {\n  text-align: left;\n}\n\n.project-btn-group {\n  margin-top: 16px;\n  width: 100%;\n}\n\n.btn {\n  white-space: normal;\n}\n\n.project-row {\n  margin-bottom: 24px;\n  padding: 2.5% 0;\n  color: black;\n}\n\n.project-skills {\n  margin-top: 64px;\n  width: 100%;\n}\n\n.tall {\n  margin-top: -64px;\n  margin-bottom: -80px;\n}\n\n.project-header {\n    border-color: #115977 !important;\n    background-color: white !important;\n    border-left: 0;\n    border-right: 0;\n    border-top: 0;\n}\n\n.animate {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.btn-border-rev {\n  background-color: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  color: #a6a6a6;\n  \n}\n\n.btn-border-rev:before {\n  width: 0;\n  height: 100%;\n  border-width: 1px 0 1px 0;\n  top: -1px;\n  right: 0;\n}\n\n.btn-border-rev:after {\n  width: 100%;\n  height: 0;\n  border-width: 0 1px 0 1px;\n  bottom: 0;\n  left: -1px;\n  -webkit-transition-delay: 0.05s;\n          transition-delay: 0.05s;\n}\n\n.btn-border-rev:before,\n.btn-border-rev:after {\n  content: '';\n  border-style: solid;\n  position: absolute;\n  z-index: 5;\n  border-radius: 3px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n\n.btn-codepen {\n  line-height: 35px;\n  margin: 2px;\n  padding: 0 15px;\n  font-size: 12px;\n  position: relative;\n  opacity: .999;\n  border-radius: 3px;\n  width: 100%;\n}\n\n.btn-border-rev.btn-blue:hover {\n    color: #3498db;\n}\n\n.btn-border-rev:hover:before {\n  width: 100%;\n}\n\n.btn-border-rev:hover:after {\n  height: 100%;\n}\n\n.btn-border-rev:hover {\n    background-color: transparent;\n}\n"

/***/ }),

/***/ "./src/public/components/resume/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-black bg-info mb-3 project-header\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Side Projects</h4>\n  </div>\n</div>\n<project-component [projects]=\"sideProjects\"></project-component>\n\n<div class=\"card text-black bg-info mb-3 project-header\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Course Projects</h4>\n  </div>\n</div>\n<project-component [projects]=\"courseProjects\" [carousel-background]=\"'black'\"></project-component>\n"

/***/ }),

/***/ "./src/public/components/resume/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.carouselBackground = 'transparent';
    }
    ProjectComponent.prototype.openWindow = function (link) {
        window.open(link);
    };
    ProjectComponent.prototype.replaceSpaces = function (str) {
        return str.replace(/\s/g, '-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('carousel-background'),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "carouselBackground", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'project-component',
            template: "\n    <div class=\"row project-row\" *ngFor=\"let _project of projects; let _i = index\">\n    <div class=\"project-vertical col-sm-4\" >\n      <h3 id=\"{{replaceSpaces(_project.title)}}\" [innerHTML]=\"_project.title\"><div class=\"date-text\" [innerHTML]=\"_project.dates\"></div></h3>\n      <p>\n        {{_project.description}}\n      </p>\n      <ul *ngIf=\"_project.todo\">\n        <li *ngFor=\"let _item of _project.todo\" [innerHTML]=\"_item\"></li>\n      </ul>\n    </div>\n    <div class=\"card-text description col-sm-4\">\n    <div class=\"btn-group-vertical project-btn-group\" data-toggle=\"buttons\">\n        <input *ngIf=\"_project.host\" type=\"button\" class=\"btn btn-outline-primary \" (click)=\"openWindow(_project.host)\" value=\"Code & Downloads\" />\n        <input *ngIf=\"_project.github\" type=\"button\" class=\"btn btn-outline-primary \" (click)=\"openWindow(_project.github)\" value=\"Github Repository\"/>\n        <input *ngIf=\"_project.view\" type=\"button\" class=\"btn btn-outline-success \" (click)=\"openWindow(_project.view)\" value=\"View Now\"/>\n      </div>\n      <div class=\"project-skills\">\n        <div *ngFor=\"let _skill of _project.skills\">\n          <h6 id=\"{{_skill.title.replace(' ', '-')}}-project-{{_skill.index}}\" class=\"btn-codepen animate btn-blue btn-border-rev\" [innerHTML]=\"_skill.title\"></h6>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"images col-sm-4\">\n      <resume-carousel [id]=\"_project.title\" [images]=\"_project.images\" [backgroundColor]=\"carouselBackground\"></resume-carousel>\n    </div>\n    <div *ngIf=\"_i !== projects.length -1\" class=\"center-content\">\n      <hr class=\"gap\">\n    </div>\n  </div>",
            styles: [__webpack_require__("./src/public/components/resume/projects/projects.component.css")],
        })
        // badge badge-pill badge-info
    ], ProjectComponent);
    return ProjectComponent;
}());

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(http) {
        this.http = http;
        this.courseProjects = [];
        this.sideProjects = [];
        this.projects = [];
        this.linkDropDownDictionary = {};
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/projects.component.json")
            .subscribe(function (res) {
            _this.data = res;
            for (var _i = 0, _a = _this.data.course; _i < _a.length; _i++) {
                var project = _a[_i];
                var skills = [];
                for (var _b = 0, _c = project.skills; _b < _c.length; _b++) {
                    var skill = _c[_b];
                    var dictSkill = skill;
                    if (!_this.linkDropDownDictionary.hasOwnProperty(dictSkill)) {
                        _this.linkDropDownDictionary[dictSkill] = 0;
                    }
                    else {
                        _this.linkDropDownDictionary[dictSkill]++;
                    }
                    skills.push({ title: skill, index: _this.linkDropDownDictionary[dictSkill] });
                }
                project.skills = skills;
                _this.courseProjects.push(project);
            }
            for (var _d = 0, _e = _this.data.side; _d < _e.length; _d++) {
                var project = _e[_d];
                var skills = [];
                for (var _f = 0, _g = project.skills; _f < _g.length; _f++) {
                    var skill = _g[_f];
                    var dictSkill = skill;
                    if (!_this.linkDropDownDictionary[dictSkill]) {
                        _this.linkDropDownDictionary[dictSkill] = 0;
                    }
                    else {
                        _this.linkDropDownDictionary[dictSkill]++;
                    }
                    skills.push({ title: dictSkill, index: _this.linkDropDownDictionary[dictSkill] });
                }
                project.skills = skills;
                _this.sideProjects.push(project);
            }
            _this.projects = [{
                    title: "Side Projects",
                    data: _this.sideProjects
                },
                {
                    title: "Course Projects",
                    data: _this.courseProjects
                }];
            console.log(_this.projects);
        });
        // @HostListener("window:scroll", [])
        // onWindowScroll() {
        //   console.log(this._parentHeight, this.headerHeight);
        //   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        //   const padding = 30;
        //   const headerPos = this._parentHeight + this.headerHeight - padding;
        //   if (number > headerPos) {
        //     this.showHeader = true;
        //   } else if (this.showHeader && number < headerPos) {
        //     this.showHeader = false;
        //   }
        // }
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-projects',
            template: __webpack_require__("./src/public/components/resume/projects/projects.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/projects/projects.component.css")],
            preserveWhitespaces: true
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/public/components/resume/resume.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/public/components/resume/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_carousel_component__ = __webpack_require__("./src/public/components/resume/projects/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/public/components/resume/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/public/components/resume/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__ = __webpack_require__("./src/public/components/resume/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__ = __webpack_require__("./src/public/components/resume/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/public/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__ = __webpack_require__("./node_modules/ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* components */






/* shared */



var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["b" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__["b" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__["a" /* SkillNavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["a" /* ProjectComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projects_projects_component__["b" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__skills_skills_component__["b" /* SkillsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__services_services_module__["b" /* ServicesModule */]
            ]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/public/components/resume/skills/skills.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animateAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var animateAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('animateAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        backgroundColor: 'initial',
        transform: 'scale(1)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('100ms ease-in')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('100ms ease-out'))
]);


/***/ }),

/***/ "./src/public/components/resume/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "navigate-skill{\n\tdisplay: inline-block;\n}\n\n@media (max-width: 991px) {\n\tnavigate-skill {\n\t\tmargin: 16px;\n\t}\n}\n\n.skills-container {\n\tmargin: 8px;\n}\n\n.center-sides {\n\tpadding: 0 2rem;\n}\n\n.skill {\n  display: inline-block;\n  margin: 8px;\n  padding: 8px;\n  cursor: pointer;\n}\n\n.skills-header {\n\tposition: fixed;\n  top: 0;\n  left: 0;\n  background-color: #fafafa;\n  z-index: 1;\n  width: 100%;\n  padding: 8px;\n}\n\n.fake-link:hover {\n    color: #fff !important;\n}\n\n.fake-link {\n    color: rgba(255, 255, 255, 0.5) !important;\n    text-decoration: none;\n    background-color: transparent;\n}\n\n.skill-color-override {\n  border-style: none;\n}\n\n.dropdown-link,\n.nav-link {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/public/components/resume/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"skills-container\">\n    <nav class=\"skill-color-override navbar navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"#\">DanCan</a>\n      <button #skillNav class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTOP\" aria-controls=\"navbarTOP\" aria-expanded=\"true\" aria-label=\"Toggle navigation\" style=\"\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"navbar-collapse collapse\" id=\"navbarTOP\" style=\"\">\n        <!-- <ng-container *ngFor=\"let skill of skills\"> -->\n          <navigate-skill [offset]=\"280\" (navigationClick)=\"collapse()\" [text]=\"'skill'\"></navigate-skill>\n        <!-- </ng-container> -->\n      </div>\n    </nav>\n</div>\n<div *ngIf=\"showHeader\" class=\"skills-header\">\n<div class=\"center-sides\">\n  <nav class=\"skill-color-override navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">DanCan</a>\n    <button #skillNavFloat class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"true\" aria-label=\"Toggle navigation\" style=\"\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarColor03\" style=\"\">\n      <!-- <ng-container *ngFor=\"let skill of skills\"> -->\n      <navigate-skill [offset]=\"130\" (navigationClick)=\"collapse()\" [text]=\"'skill'\"></navigate-skill>\n      <!-- </ng-container> -->\n    </div>\n  </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/public/components/resume/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillNavComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills_animation__ = __webpack_require__("./src/public/components/resume/skills/skills.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
`
        <ul class="navbar-nav mr-auto">

          <ng-template [ngIf]="multiple" [ngIfElse]="singleLink" >
            <span class="nav-link dropdown-toggle" [@animateAnimation]="state" [class.fake-link]="!show" role="button" data-toggle="dropdown" (click)="toggleShown()" aria-haspopup="true" aria-expanded="false'"	[innerHTML]="text"> </span>
            <div *ngIf="multiple" class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
              <a *ngFor="let _skill of doubles[text]" class="dropdown-item" href="#{{text.replace(' ', '-')}}-project-{{_skill}}" [innerHTML]="_skill==0 ? text+' Profile' : text+' Place To Visit'"
                    [@animateAnimation]="state" pageScroll role="button" [pageScrollOffset]="500" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
            </div>
          </ng-template>
          <ng-template #singleLink>
            <a href="#{{text.replace(' ', '-')}}-project-0" class="fake-link nav-link" [@animateAnimation]="state" pageScroll role="button" [innerHTML]="text" [pageScrollOffset]="500" [pageScrollDuration]="2000" [pageScrollEasing]="myEasing" [pageScrollInterruptible]="false" (pageScrollFinish)="doSmth($event)"></a>
          </ng-template>
        </ul>
  `
*/
var SkillNavComponent = /** @class */ (function () {
    function SkillNavComponent() {
        this.navigationClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.state = 'inactive';
        this.projectTitles = [
            { title: 'Illuminare: Spirit', menu: false },
            { title: 'Super Astro Breakers', menu: false },
            { title: "Udacity", menu: true, items: ['Profile', 'Place I want to visit'] }
        ];
        this._doubles = [{ title: 'HTML', total: 2 }, { title: 'CSS', total: 2 }, { title: 'JavaScript', total: 2 }];
        this.doubles = {};
        this.show = false;
        this.scrollOffset = 0;
        /** source: https://www.npmjs.com/package/ng2-page-scroll **/
        this.myEasing = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
        for (var _i = 0, _a = this._doubles; _i < _a.length; _i++) {
            var ldd = _a[_i];
            this.doubles[ldd.title] = Array(ldd.total).fill(ldd.total).map(function (x, i) { return i; });
        }
    }
    SkillNavComponent.prototype.replaceSpaces = function (str) {
        return str.replace(/\s/g, '-');
    };
    Object.defineProperty(SkillNavComponent.prototype, "multiple", {
        get: function () {
            var _this = this;
            var value = this._doubles.filter(function (v) { return v.title === _this.text; });
            return value.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    SkillNavComponent.prototype.toggleShown = function () {
        if (this.multiple) {
            this.show = !this.show;
        }
    };
    SkillNavComponent.prototype.emitCollapseEvent = function () {
        this.navigationClick.emit(true);
    };
    SkillNavComponent.prototype.doSmth = function (reachedTarget) {
        if (reachedTarget) {
            console.log('Yeah, we reached our destination');
        }
        else {
            console.log('Ohoh, something interrupted us');
        }
    };
    /** end source **/
    SkillNavComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SkillNavComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], SkillNavComponent.prototype, "offset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SkillNavComponent.prototype, "navigationClick", void 0);
    SkillNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navigate-skill',
            styles: [__webpack_require__("./src/public/components/resume/skills/skills.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__skills_animation__["a" /* animateAnimation */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None,
            template: "\n  \t<ul class=\"navbar-nav mr-auto\">\n  \t\t<ng-container *ngFor=\"let project of projectTitles\">\n\t\t\t\t<ng-template [ngIf]=\"project.menu\" [ngIfElse]=\"singleLink\">\n\t\t\t\t\t<div class=\"btn-group\" role=\"group\"><span class=\"nav-link dropdown-toggle\" [@animateAnimation]=\"state\" [class.fake-link]=\"!show\" role=\"button\" data-toggle=\"dropdown\" (click)=\"toggleShown()\" aria-haspopup=\"true\" aria-expanded=\"false'\"\t[innerHTML]=\"project.title\"> </span>\n          <div class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);\">\n            <a *ngFor=\"let _skill of project.items\" class=\"dropdown-item dropdown-link\" href=\"#{{project.title}}:-{{replaceSpaces(_skill)}}\" [innerHTML]=\"_skill\"\n            \t\t(click)=\"emitCollapseEvent()\" [@animateAnimation]=\"state\" pageScroll role=\"button\" [pageScrollOffset]=\"offset\" [pageScrollDuration]=\"2000\" [pageScrollEasing]=\"myEasing\" [pageScrollInterruptible]=\"false\" (pageScrollFinish)=\"doSmth($event)\"></a>\n        \t</div>    </div>\n\n\n\t\t\t\t</ng-template>\n        <ng-template #singleLink>\n          <a href=\"#{{replaceSpaces(project.title)}}\" (click)=\"emitCollapseEvent()\" class=\"fake-link nav-link\" [@animateAnimation]=\"state\" pageScroll role=\"button\" [innerHTML]=\"project.title\" [pageScrollOffset]=\"offset\" [pageScrollDuration]=\"2000\" [pageScrollEasing]=\"myEasing\" [pageScrollInterruptible]=\"false\" (pageScrollFinish)=\"doSmth($event)\"></a>\n        </ng-template>\n  \t\t</ng-container>\n  \t</ul>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SkillNavComponent);
    return SkillNavComponent;
}());

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(contactsService, elmRef) {
        this.contactsService = contactsService;
        this.elmRef = elmRef;
        this._parentHeight = 0;
        this.showHeader = false;
        this.headerHeight = 0;
    }
    Object.defineProperty(SkillsComponent.prototype, "parentHeight", {
        set: function (value) {
            this._parentHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillsComponent.prototype, "skills", {
        get: function () {
            return this.contactsService.skills2 && this.contactsService.skills2['length'] !== 0 ? this.contactsService.skills2[0] : [];
        },
        enumerable: true,
        configurable: true
    });
    SkillsComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var padding = 30;
        var headerPos = this._parentHeight + this.headerHeight - padding;
        if (number > headerPos) {
            this.showHeader = true;
        }
        else if (this.showHeader && number < headerPos) {
            this.showHeader = false;
        }
    };
    SkillsComponent.prototype.ngOnInit = function () {
        this.headerHeight = this.elmRef.nativeElement.getElementsByClassName('skills-container')[0].offsetHeight;
    };
    SkillsComponent.prototype.collapse = function () {
        // get check both buttons for click expanded state
        // click one or both
        if (!this.skillNav.nativeElement.classList.contains('collapsed')) {
            this.skillNav.nativeElement.click();
        }
        if (this.skillNavFloat && !this.skillNavFloat.nativeElement.classList.contains('collapsed')) {
            this.skillNavFloat.nativeElement.click();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('skillNav'),
        __metadata("design:type", Object)
    ], SkillsComponent.prototype, "skillNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('skillNavFloat'),
        __metadata("design:type", Object)
    ], SkillsComponent.prototype, "skillNavFloat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('offsetHeight'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SkillsComponent.prototype, "parentHeight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SkillsComponent.prototype, "onWindowScroll", null);
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-skills',
            template: __webpack_require__("./src/public/components/resume/skills/skills.component.html"),
            styles: [__webpack_require__("./src/public/components/resume/skills/skills.component.css")],
            preserveWhitespaces: false,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_services_module__["a" /* ContactsService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/public/components/shared/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = ".contacts {\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0;\n}\n\n.contact-info {\n  padding: 8px;\n}\n\n.contact-info-title {\n  margin-right: 8px;\n}\n\n.welcome-card {\n  width: calc( 100% - 200px);\n  margin-left: 200px;\n}\n\n.biopic {\n  float: left;\n  padding: 10px;\n  width: 200px;\n}\n\n.gap {\n  margin: 0 40%;\n}\n"

/***/ }),

/***/ "./src/public/components/shared/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"contacts\">\n  <li class=\"contact-info\" *ngFor=\"let _contact of contacts\">\n    <span class=\"contact-info-title badge badge-secondary\">{{_contact.title}}:</span>\n    <span>{{_contact.content}}</span>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/public/components/shared/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactsService) {
        this.contactsService = contactsService;
        this.contacts = [];
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.contacts = this.contactsService.contacts;
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resume-contacts',
            template: __webpack_require__("./src/public/components/shared/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/public/components/shared/contacts/contacts.component.css")],
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_services_module__["a" /* ContactsService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/public/components/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__ = __webpack_require__("./src/public/components/shared/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_module__ = __webpack_require__("./src/public/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__services_services_module__["b" /* ServicesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__contacts_contacts_component__["a" /* ContactsComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/public/services/contactsService/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        var _this = this;
        this.http = http;
        this.contacts = [];
        this.welcomeMessage = "";
        this.welcomeMessageCallout = "";
        this.http.get("assets/about.component.json")
            .subscribe(function (res) {
            _this.data = res;
            for (var _i = 0, _a = _this.data.contacts; _i < _a.length; _i++) {
                var contactData = _a[_i];
                _this.contacts.push(contactData);
            }
            _this.welcomeMessage = _this.data.welcomeMessage;
            _this.welcomeMessageCallout = _this.data.welcomeMessageCallout;
            _this.skills = _this.data.skills;
            _this.skills2 = _this.data.skills2;
        });
    }
    ContactsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/public/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contactsService_contacts_service__ = __webpack_require__("./src/public/services/contactsService/contacts.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__contactsService_contacts_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* components */

/* exports */

var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule_1 = ServicesModule;
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__contactsService_contacts_service__["a" /* ContactsService */]]
        };
    };
    ServicesModule = ServicesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({})
    ], ServicesModule);
    return ServicesModule;
    var ServicesModule_1;
}());

// TODO: Create a Service that loads in the Projects and totals the doubles. 


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map