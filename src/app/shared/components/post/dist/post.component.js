"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostComponent = void 0;
var core_1 = require("@angular/core");
var PostComponent = /** @class */ (function () {
    function PostComponent(postservice) {
        this.postservice = postservice;
        this.Items = this.postservice.getAllPosts();
        this.pageSize = 6; // Nombre d'éléments par page
        this.currentPage = 1;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.updateItemPost();
        this.TotalPage();
        this.PostPoularys = this.postservice.getPopularyPost();
        this.IntersectionObsercer1();
    };
    PostComponent.prototype.TotalPage = function () {
        var totalPage = Math.ceil(this.Items.length / this.pageSize);
        this.totalPages = totalPage;
    };
    PostComponent.prototype.updateItemPost = function () {
        var start = ((this.currentPage - 1)) * (this.pageSize);
        var end = (this.currentPage) * (this.pageSize);
        this.Posts = this.Items.slice(start, end);
    };
    //recuperations de la precedante page
    PostComponent.prototype.getPrecedent = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateItemPost();
        }
    };
    //recuperations de la page suivant
    PostComponent.prototype.getsuivant = function () {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateItemPost();
        }
    };
    //Ici c'est l'utilisation de L'intersection Observer
    PostComponent.prototype.IntersectionObsercer1 = function () {
        var ratio = .2;
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: ratio
        };
        var observation = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('affichage');
                    observer.unobserve(entry.target);
                }
            });
        };
        var observation2 = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reavel-visible');
                    observer2.unobserve(entry.target);
                }
            });
        };
        var observation3 = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reavel-visibleright');
                    observer2.unobserve(entry.target);
                }
            });
        };
        var observer = new IntersectionObserver(observation, options);
        var observer2 = new IntersectionObserver(observation2, options);
        var observer3 = new IntersectionObserver(observation3, options);
        document.querySelectorAll('[class*="cacher-"]').forEach(function (el) { return observer.observe(el); });
        document.querySelectorAll('[class*="reavel-"]').forEach(function (el) { return observer2.observe(el); });
        document.querySelectorAll('[class*="reavelright-"]').forEach(function (el) { return observer3.observe(el); });
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            templateUrl: './post.component.html',
            styleUrl: './post.component.scss'
        })
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
