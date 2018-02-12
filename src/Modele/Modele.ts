import View from "../View/View";
import {isNullOrUndefined} from "util";

export default class Inventaire {

    private _achats: Achat[];

    constructor() {
        this._achats = [
            new Achat("PC 01", 310, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 02", 320, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 03", 330, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 04", 340, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 05", 350, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 06", 360, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 07", 370, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 08", 2000, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 09", 0, "un trés beau PC pas cher", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 10", 1230, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 11", 303, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
            new Achat("PC 12", 301, "un trés beau PC", ["./assets/media/HP.jpg"], 1280),
        ];
    }

    addAchat(achat: Achat): boolean {
        this._achats.push(achat);
        View.refreshProduits(this);
        return true;
    }

    removeAchat(achat: Achat): boolean {
        let index = this._achats.indexOf(achat);
        if (index == -1) return false;
        // splice return the deleted object, we check it deleted the right thing.
        return achat == this._achats.splice(index, 1)[0];
    }

    getAchat(_id: string): Achat {
        let _retour = this._achats.find((x) => x.Id == _id);
        if (!isNullOrUndefined(_retour))
            return this._achats.find((x) => x.Id == _id);
    }


    renderAll(): string {
        let res: string = "";
        for (let achat of this._achats) {
            res += `<div class="product-item"><div class="product product_filter">
                        ${achat.render()}</div>
                    <div class="red_button add_to_cart_button">add to cart</div></div>`;
        }
        return res;
    }

}

export class Achat {
    descriptionDetaillee: string;

    set Quantite(value: number) {
        this._Quantite = value;
    }

    Id: string;
    Nom: string;
    private _Quantite: number;
    Prix: number;
    Description: string;
    Poids: number;
    Photo?: string[]; //path of the image
    render(): string {
        return `<div class="product_image">
            <img src="${this.Photo}" alt="">
        </div>
        <div class="favorite"></div>
        <div class="product_info" id="${this.Id}">
            <input value="${this.Id}" disabled hidden aria-hidden="true">
            <h6 class="product_name"><a href="#">${this.Nom}</a></h6>
            <div class="product_price">$ ${this.Prix}</div>
            <div class="product_description">${this.Description}</div>
            <div class="product_weight">${this.Poids}</div>
        </div>`;


    }

    constructor(nom: string, prix: number, description: string, photo?: string[], poids: number = 0, quantite: number = 0, descritionDetailllee = "Vitae et impedit voluptatem et porro dolorem aspernatur rerum. Maiores sit odit rerum. Voluptatem nobis aspernatur error. Aut voluptatem distinctio omnis. Aspernatur tempore sunt ducimus expedita ea aspernatur temporibus earum.\n" +
    "Vitae ipsa repellat omnis natus deleniti molestias. Sunt quidem nulla vitae. Sit laudantium odio delectus et excepturi. Illo corrupti officia et. Optio assumenda quam pariatur maxime id animi dolores culpa. Facere occaecati et alias reprehenderit atque aut est.\n" +
    "Ipsa minus est corporis numquam non quis hic. Nihil quidem autem sed est odio consequatur. Nesciunt non ipsa id unde. Eligendi provident ad consectetur et.\n" +
    "Doloremque ut laboriosam id. Ducimus eveniet aut nihil sed odio adipisci esse rem. Cupiditate aperiam qui temporibus deserunt. Dolore tempore ut tenetur quo fugit.\n" +
    "Dolorum quos dolorem repellendus minima qui consequatur magnam. Quis eos delectus alias. Aut commodi magnam ut veniam aut laboriosam. Voluptas quaerat ea nihil voluptatem consequatur. Assumenda consequatur quasi tenetur.") {
        this.Id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.Nom = nom;
        this.Prix = prix;
        this.Description = description;
        this.Poids = poids;
        this.descriptionDetaillee = descritionDetailllee;
        if (photo) this.Photo = photo;
    }

}

export class ModelePanier {
    get Quantite(): number {
        return this._Quantite;
    }

    private _Contenu: Achat[];
    private _Quantite: number;

    constructor() {
        this._Contenu = [];
        this._Quantite = this._Contenu.length;
    }

    PrixTotal(): number {
        let prix: number = 0;
        for (let achat of  this._Contenu) {
            prix += achat.Prix;
        }
        return prix;
    }

    add(achat: Achat): boolean {
        this._Contenu.push(achat);
        this._Quantite++;
        View.refreshPanier(this);
        return true;
    }

    remove(_id: string): boolean {
        let _index = this._Contenu.findIndex((x) => x.Id == _id);
        let deleted_id = this._Contenu.splice(_index, 1)[0].Id;
        --this._Quantite;
        View.makePanier(this);
        return deleted_id == _id && this._Contenu.length == this._Quantite;
    }

    renderAll(): string {
        let res: string = "";
        for (let i = 0; i < this._Quantite; ++i) {
            res += `<div class="product-item"><div class="product product_filter">
                        ${this._Contenu[i].render()}</div>
                    <div class="red_button remove_from_cart_button">Remove from to cart</div></div>`;
        }
        return res;
    }

}


                                                          