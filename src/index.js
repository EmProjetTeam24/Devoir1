"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
require("tether/dist/css/tether.css");
require("./assets/style.css");
var Controller_1 = require("./Controller/Controller");
var View_1 = require("./View/View");
var Modele_1 = require("./Modele/Modele");
require("tether");
require("bootstrap");
function main() {
    var model = new Modele_1.default();
    var controller = new Controller_1.default(model);
    var view = new View_1.default(controller);
}
main();
