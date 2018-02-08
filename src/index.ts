import 'bootstrap/dist/css/bootstrap.min.css';
import 'tether/dist/css/tether.css';
import './assets/style.css';
import Controller from "./Controller/Controller";
import Inventaire from "./Modele/Modele";
import View from "./View/View";

require("tether");
require("bootstrap");

let model = new Inventaire();
let controller = new Controller(model);
let view = new View(controller);
