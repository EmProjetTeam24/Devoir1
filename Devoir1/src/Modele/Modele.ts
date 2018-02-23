import {isNullOrUndefined} from "util";

export default class Inventaire {
    constructor() {
        let _achats: Achat[] = [
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
        localStorage.setItem("inventaire", JSON.stringify(_achats));
    }

    static add(achat: Achat): boolean {
        let _achats: Achat[] = JSON.parse(localStorage.getItem("inventaire"));
        _achats.push(achat);
        localStorage.setItem("inventaire", JSON.stringify(_achats));
        return true;
    }

    static remove(achat: Achat): boolean {
        let _achats: Achat[] = JSON.parse(localStorage.getItem("inventaire"));
        let index = _achats.indexOf(achat);
        if (index == -1) return false;
        // splice remove an object from array
        _achats.splice(index, 1);
        localStorage.setItem("inventaire", JSON.stringify(_achats));
    }

    getAchat(_id: string): Achat {
        let _achats: Achat[] = JSON.parse(localStorage.getItem("inventaire"));
        let _retour = _achats.find((x) => x.Id == _id);
        if (!isNullOrUndefined(_retour))
            return _achats.find((x) => x.Id == _id);

    }


    static renderAll(): string {
        let _achats: Achat[] = JSON.parse(localStorage.getItem("inventaire"));
        let res = ``;
        for (let i = 0; i < _achats.length; ++i) {
            res += `<div class="product-item"><div class="product product_filter">
                        ${Achat.render(_achats[i])}</div>
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

    readonly Id: string;
    Nom: string;
    private _Quantite: number;
    Prix: number;
    Description: string;
    Poids: number;
    Photo?: string[]; //path of the image

    constructor(nom: string, prix: number, description: string, photo?: string[], poids: number = 0, quantite: number = 0, descritionDetailllee = "Vitae et impedit voluptatem et porro dolorem aspernatur rerum. Maiores sit odit rerum. Voluptatem nobis aspernatur error. Aut voluptatem distinctio omnis. Aspernatur tempore sunt ducimus expedita ea aspernatur temporibus earum. Vitae ipsa repellat omnis natus deleniti molestias. Sunt quidem nulla vitae. Sit laudantium odio delectus et excepturi. Illo corrupti officia et. Optio assumenda quam pariatur maxime id animi dolores culpa. Facere occaecati et alias reprehenderit atque aut est. Ipsa minus est corporis numquam non quis hic. Nihil quidem autem sed est odio consequatur. Nesciunt non ipsa id unde. Eligendi provident ad consectetur et. Doloremque ut laboriosam id. Ducimus eveniet aut nihil sed odio adipisci esse rem. Cupiditate aperiam qui temporibus deserunt. Dolore tempore ut tenetur quo fugit. Dolorum quos dolorem repellendus minima qui consequatur magnam. Quis eos delectus alias. Aut commodi magnam ut veniam aut laboriosam. Voluptas quaerat ea nihil voluptatem consequatur. Assumenda consequatur quasi tenetur.") {
        this.Id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.Nom = nom;
        this.Prix = prix;
        this.Description = description;
        this.Poids = poids;
        this._Quantite = quantite;
        this.descriptionDetaillee = descritionDetailllee;
        if (photo) this.Photo = photo;
    }

    static render(achat: Achat): string {
        return `<div class="product_image">
            <img src="${achat.Photo}" alt="">
        </div>
        <div class="favorite"></div>
        <div class="product_info" id="${achat.Id}">
            <input value="${achat.Id}" disabled hidden aria-hidden="true">
            <h6 class="product_name"><a href="#">${achat.Nom}</a></h6>
            <div class="product_price">$ ${achat.Prix}</div>
            <div class="product_description">${achat.Description}</div>
            <div class="product_weight">${achat.Poids}</div>
        </div>`;
    }


}

export class ModelePanier {
    constructor() {
        let _Contenu: Achat[] = [];
        localStorage.setItem("panier", JSON.stringify(_Contenu));
        localStorage.setItem("prixPanier", "0");
    }

    static PrixTotal(): number {
        let prix: number = 0;
        let _Contenu = JSON.parse(localStorage.getItem("panier"));
        for (let achat of  _Contenu) {
            prix += achat.Prix;
        }
        return prix;
    }

    static add(achat: Achat): boolean {
        let _Contenu = JSON.parse(localStorage.getItem("panier"));
        _Contenu.push(achat);
        localStorage.setItem("panier", JSON.stringify(_Contenu));
        localStorage.setItem("prixPanier", ModelePanier.PrixTotal().toString());
        return true;
    }

    remove(_id: string): boolean {
        let _Contenu = JSON.parse(localStorage.getItem("panier"));
        let _index = _Contenu.findIndex((x: Achat) => x.Id == _id);
        let deleted_id = _Contenu.splice(_index, 1)[0].Id;
        localStorage.setItem("prixPanier", ModelePanier.PrixTotal().toString());
        return deleted_id == _id;
    }

    static renderAll(): string {
        let res: string = "";
        let _Contenu = JSON.parse(localStorage.getItem("panier"));
        for (let i = 0; i < _Contenu.length; ++i) {
            res += `<div class="product-item"><div class="product product_filter">
                        ${Achat.render(_Contenu[i])}</div>
                    <div class="red_button remove_from_cart_button">Remove</div></div>`;
        }
        return res;
    }

}


                                                          