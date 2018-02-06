import {default as Controller} from "../Controller/Controller";
import inventaire from "../Modele/Modele";

export default class View {
    produits: inventaire;
    controller: Controller;

    constructor(controller: Controller) {
        this.controller = controller;
        this.produits = this.controller.model;
        this.refresh();
    }

    refresh() {
        console.log("adding products");

        document.getElementById("produits").innerHTML = this.produits.renderAll();
    }

}