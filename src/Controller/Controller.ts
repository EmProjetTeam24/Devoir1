import Inventaire, {Achat, ModelePanier} from "../Modele/Modele";
import {isNullOrUndefined} from "util";
import View from "../View/View";

let $ = require("jquery");


export default class Controller {

    inventaire: Inventaire;
    panier: ModelePanier;

    constructor(model: Inventaire) {
        this.inventaire = model;
        console.log("new Controller");
        this.panier = new ModelePanier();
        console.log("controller started");
        View.makeIndex();
        this.Onchange();

        let lienPanier = document.getElementsByClassName("panier");
        for (let i = 0; i < lienPanier.length; ++i) {
            lienPanier[i].addEventListener('click', () => this.makePanier());
        }

        let liensDescription: HTMLCollectionOf<Element> = document.getElementsByClassName("product_filter");
        for (let i = 0; i < liensDescription.length; ++i) {
            liensDescription[i].addEventListener('click', (e) => this.infoDetaille(<Element>e.target));
        }

        document.getElementById("admin").addEventListener("click", this.chargerAdmin);


    }

    makePanier() {
        console.log("panier en cours");
        View.makePanier();
        console.log("adding events");
        let boutons = document.getElementsByClassName("remove_from_cart_button");
        console.log(boutons);
        let source: HTMLElement;
        for (let i = 0; i < boutons.length; ++i) {
            source = boutons[i].parentElement;
            boutons[i].addEventListener("click", (event) => {
                console.log("remove from cart clicked");
                let _id: string = (<Element>event.target).parentElement.getElementsByTagName("input")[0].value;
                this.removeFromCart(_id);
            });

        }
        console.log("event added");

    }


    Onchange() {
        View.refreshProduits();
        View.refreshPanier();
        let boutons = document.getElementsByClassName("add_to_cart_button");
        let source: HTMLElement;
        for (let i = 0; i < boutons.length; ++i) {
            source = boutons[i].parentElement;
            //console.log("bouton" + i);
            boutons[i].addEventListener("click", (event) => {
                let bouton: Element = <Element>event.target;
                Controller.addToCart(bouton.parentElement);
            });

        }
    }


    static addToCart(source: Element) {

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
        ModelePanier.add(ajout);
        View.refreshPanier();
    }


    private removeFromCart(_Id: string) {
        this.panier.remove(_Id);
        View.makePanier();
        View.refreshPanier();
    }

    private infoDetaille(e: Element) {
        let product_infos = e.parentElement.getElementsByClassName("product_info");
        console.debug(product_infos);
        let _id: string = product_infos[0].id;
        View.infoDetaille(this.inventaire.getAchat(_id));
    }

    private chargerAdmin() {
        View.chargerConnexion();
        document.getElementById("login").addEventListener("click", () => {
            if ((<HTMLInputElement>document.getElementById("username")).value == "admin" &&
                (<HTMLInputElement>document.getElementById("password")).value == "123") {
                View.chargerAdmin();
                document.getElementById("nouveau-produit").addEventListener("click", Controller.nouveauProduit);
            } else {
                alert("erreur authentification: login=admin et password=123");
            }
        });
    }

    private static nouveauProduit(): boolean {
        let nom: string = (<HTMLInputElement>document.getElementById("product-name")).value;
        let prix: number = Number((<HTMLInputElement>document.getElementById("product-prix")).value);
        let description: string = (<HTMLInputElement>document.getElementById("description")).value;
        let poids: number = Number((<HTMLInputElement>document.getElementById("product-weigth")).value);

        let _achat: Achat = new Achat(nom, prix, description, [""], poids);

        let ret = Inventaire.add(_achat);
        View.makeIndex();
        View.refreshProduits();
        return ret;
    }

}