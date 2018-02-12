import Inventaire, {Achat, ModelePanier} from "../Modele/Modele";
import {isNullOrUndefined} from "util";
import View from "../View/View";

let $ = require("jquery");
export default class Controller {

    inventaire: Inventaire;
    panier: ModelePanier;

    constructor(model: Inventaire) {
        this.inventaire = model;
        this.panier = new ModelePanier();
        console.log("controller started");
        View.makeIndex();
        this.Onchange();

        let lienPanier = document.getElementsByClassName("panier");
        for (let i = 0; i < lienPanier.length; ++i) {
            lienPanier[i].addEventListener('click', () => this.makePanier(this.panier));
        }

    }

    makePanier(_panier: ModelePanier) {
        console.log("panier en cours");
        View.makePanier(_panier);
        console.log("adding events");
        let boutons = document.getElementsByClassName("remove_from_cart_button");
        console.log(boutons);
        let source: HTMLElement;
        for (let i = 0; i < boutons.length; ++i) {
            source = boutons[i].parentElement;
            boutons[i].addEventListener("click", (event) => {
                console.log("remove from cart clicked");
                let _id: string = (<Element>event.target).parentElement.getElementsByTagName("input")[0].value;
                console.log("removing" + _id);
                this.removeFromCart(_id);
            });

        }
        console.log("event added");

    }


    Onchange() {
        View.refreshProduits(this.inventaire);
        View.refreshPanier(this.panier);
        let boutons = document.getElementsByClassName("add_to_cart_button");
        let source: HTMLElement;
        for (let i = 0; i < boutons.length; ++i) {
            source = boutons[i].parentElement;
            //console.log("bouton" + i);
            boutons[i].addEventListener("click", (event) => {
                let bouton: Element = <Element>event.target;
                this.addToCart(bouton.parentElement);
            });

        }
    }


    addToCart(source: Element) {

        if (isNullOrUndefined(source)) {
            console.error("error source is null");

        }
        let product_prix = source.getElementsByClassName("product_price");
        let product_poids = source.getElementsByClassName("product_weight");
        let product_description = source.getElementsByClassName("product_description");
        let product_name = source.getElementsByClassName("product_name");


        let prix: number = Number(product_prix[0].innerHTML.replace("$", ""));
        let poids: number = Number(product_poids[0].innerHTML);
        let description: string = product_description[0].innerHTML;
        let nom: string = product_name[0].innerHTML;

        let photo_html: NodeListOf<HTMLImageElement> = source.getElementsByTagName("img");

        let photo: string[] = [];
        for (let i = 0; i < photo_html.length; ++i) {
            photo.push(photo_html[i].src);
        }

        let ajout: Achat = new Achat(nom, prix, description, photo, poids);
        this.panier.add(ajout);
    }


    private removeFromCart(_Id: string) {
        this.panier.remove(_Id);
    }
}