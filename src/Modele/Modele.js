"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Achat = /** @class */ (function () {
    function Achat(nom, prix, description, poids, photo) {
        if (poids === void 0) { poids = 0; }
        this.Nom = nom;
        this.Prix = prix;
        this.Description = description;
        this.Poids = poids;
        if (photo)
            this.Photo = photo;
    }
    Object.defineProperty(Achat.prototype, "Quantite", {
        set: function (value) {
            this._Quantite = value;
        },
        enumerable: true,
        configurable: true
    });
    Achat.prototype.render = function () {
        return "<div class=\"product-item\" id =" + uniqueID() + ">\n                    <img src=\"" + this.Photo + "\" alt=\"\" class=\"product_image\" />\n                    <p class=\"product_info\">" + this.Description + "</p>\n                    <button class=\"add_to_cart_button\">ajouter au panier</button>\n                </div>";
    };
    return Achat;
}());
var ModelePanier = /** @class */ (function () {
    function ModelePanier() {
        this.Quantite = this.Contenu.length;
    }
    ModelePanier.prototype.PrixTotal = function () {
        var prix = 0;
        for (var _i = 0, _a = this.Contenu; _i < _a.length; _i++) {
            var achat = _a[_i];
            prix += achat.Prix;
        }
        return prix;
    };
    return ModelePanier;
}());
var uniqueID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
var inventaire = /** @class */ (function () {
    function inventaire() {
        this._achats = [
            new Achat("PC 01", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 02", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 03", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 04", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 05", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 06", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 07", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 08", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 09", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 10", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 11", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 12", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
        ];
    }
    ;
    inventaire.prototype.addAchat = function (achat) {
        this._achats.push(achat);
        return true;
    };
    inventaire.prototype.renderAll = function () {
        var res = "";
        for (var _i = 0, _a = this._achats; _i < _a.length; _i++) {
            var achat = _a[_i];
            res.concat(achat.render());
        }
        return res;
    };
    return inventaire;
}());
exports.default = inventaire;
