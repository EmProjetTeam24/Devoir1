"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */ (function () {
    function View(controller) {
        this.controller = controller;
        this.produits = this.controller.model;
        this.refresh();
    }
    View.prototype.refresh = function () {
        console.log("adding products");
        document.getElementById("produits").innerHTML = this.produits.renderAll();
    };
    return View;
}());
exports.default = View;
