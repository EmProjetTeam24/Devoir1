import Inventaire, {Achat, ModelePanier} from "../Modele/Modele";

let $ = require("jquery");
export default class Controller {

    inventaire: Inventaire;
    panier: ModelePanier;

    constructor(model: Inventaire) {
        this.inventaire = model;
        console.log("controller started");
    }

    /*
        Onchange() {
            let boutons = document.getElementsByClassName("add_to_cart_button");
            for (let i = 0; i < boutons.length; ++i) {
                boutons[i].addEventListener("click", addToCart($(this).parent));
            }
        }
        */

    /*

        addToCart(source) {
            this.panier.Contenu.push(produit);
            this.panier.Quantite++;

        }

    */
}