"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var post_component_1 = require("./components/post/post.component");
var post_list_component_1 = require("./components/post-list/post-list.component");
var post_list_detail_component_1 = require("./components/post-list-detail/post-list-detail.component");
var shared_routing_module_1 = require("./shared-routing.module");
var shorting_pipe_1 = require("./pipes/shorting.pipe");
var post_list_populaire_component_1 = require("./components/post-list-populaire/post-list-populaire.component");
var home_component_1 = require("./components/home/home.component");
var header_component_1 = require("./components/header/header.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                post_component_1.PostComponent,
                post_list_component_1.PostListComponent,
                post_list_detail_component_1.PostListDetailComponent,
                post_list_populaire_component_1.PostListPopulaireComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent
            ],
            imports: [
                common_1.CommonModule,
                shared_routing_module_1.SharedRoutingModule,
                shorting_pipe_1.ShortingPipe,
            ],
            exports: [
                post_component_1.PostComponent,
                post_list_component_1.PostListComponent,
                home_component_1.HomeComponent,
                post_list_detail_component_1.PostListDetailComponent,
                shorting_pipe_1.ShortingPipe,
                header_component_1.HeaderComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
