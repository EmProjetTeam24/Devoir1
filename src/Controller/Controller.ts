import inventaire from "../Modele/Modele"

export default class Controller {
    model: inventaire;

    constructor(model: inventaire) {
        this.model = model;
        console.log("controller started");
    }
}