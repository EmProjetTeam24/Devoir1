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
        let divProduits: Element = document.getElementsByClassName('product-grid')[0];
        let produits: string = this.produits.renderAll();
        console.debug(produits);
        divProduits.innerHTML=produits;
    }

}