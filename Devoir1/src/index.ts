import 'bootstrap/dist/css/bootstrap.min.css';
import 'tether/dist/css/tether.css';
import './assets/style.css';
import Controller from "./Controller/Controller";
import Inventaire from "./Modele/Modele";

require("tether");
require("bootstrap");
window.onload = function () {
    if (typeof localStorage == 'undefined') alert("You need localstorage to use this website");
    console.log("c'est parti");
    let model = new Inventaire();
    let controller = new Controller(model);
};
