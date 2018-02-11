import Inventaire, {Achat, ModelePanier} from "../Modele/Modele";

let $ = require("jquery");
export default class Controller {

    inventaire: Inventaire;
    panier: ModelePanier;

    constructor(model: Inventaire) {
        this.inventaire = model;
        console.log("controller started");
    }


    Onchange() {
        let boutons = document.getElementsByClassName("add_to_cart_button");
        let source: HTMLElement;
        for (let i = 0; i < boutons.length; ++i) {
            source = boutons[i].parentElement;
            boutons[i].addEventListener("click", (event) => this.addToCart(event.srcElement));
        }
    }


    addToCart(source: Element) {
        let prix: number = Number(source.getElementsByClassName("product_price")[0].innerHTML);
        let poids: number = Number(source.getElementsByClassName("product_weigth")[0].innerHTML);
        let description: string = source.getElementsByClassName("product_description")[0].innerHTML;
        let nom: string = source.getElementsByClassName("product_title")[0].innerHTML;

        let photo_html: NodeListOf<HTMLImageElement> = source.getElementsByTagName("img");

        let photo: string[] = [];
        for (let i = 0; i < photo_html.length; ++i) {
            photo.push(photo_html.item(i).src);
        }


        let produit = new Achat(nom, prix, description, poids, photo);
        this.panier.Contenu.push(produit);
        this.panier.Quantite++;

    }


}