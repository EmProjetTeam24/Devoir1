import Inventaire from "../Modele/Modele";
import Controller from "../Controller/Controller";

export default class View {
    produits: Inventaire;
    controller: Controller;

    constructor(controller: any) {
        this.controller = controller;
        this.produits = this.controller.inventaire;
        this.refresh();
    }

    refresh() {
        console.log("adding products");

        document.getElementById("produits").innerHTML = this.produits.renderAll();
    }

}