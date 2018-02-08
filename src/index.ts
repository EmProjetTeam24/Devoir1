import 'bootstrap/dist/css/bootstrap.min.css';
import 'tether/dist/css/tether.css';
import './assets/style.css';
// import View from "./View/View";
import Controller from "./Controller/Controller";
import Inventaire from "./Modele/Modele";

require("tether");
require("bootstrap");

function main(): void {
    let model = new Inventaire();
    let controller = new Controller(model);
    //let view = new View(controller);
}

main();