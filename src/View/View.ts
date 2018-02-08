export default class View {
    //TODO importer les types
    produits:any;
    controller:any;

    constructor(controller: any) {
        this.controller = controller;
        this.produits = this.controller.model;
        this.refresh();
    }

    refresh() {
        console.log("adding products");

        document.getElementById("produits").innerHTML = this.produits.renderAll();
    }

}