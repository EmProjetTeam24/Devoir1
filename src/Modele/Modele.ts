export default class Inventaire {

    private _achats: Achat[];

    constructor() {
        this._achats = [
            new Achat("PC 01", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 02", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 03", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 04", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 05", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 06", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 07", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 08", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 09", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 10", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 11", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
            new Achat("PC 12", 300, "un trés beau PC", 1280, ["assets/media/HP.jpg"]),
        ];
    }

    addAchat(achat: Achat): boolean {
        this._achats.push(achat);
        return true;
    }


    renderAll(): string {
        let res: string = "";
        for (let achat of this._achats) {
            res.concat(achat.render())
        }
        return res;
    }

}

export class Achat {
    set Quantite(value: number) {
        this._Quantite = value;
    }

    Nom: string;
    private _Quantite: number;
    Prix: number;
    Description: string;
    Poids: number;
    Photo?: string[]; //path of the image
    uniqueID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    render(): string {
        console.log(`rendering ${this.Description}`);
        return `<div class="product-item" id =${this.uniqueID()}>
                    <img src="${this.Photo}" alt="" class="product_image" />
                    <p class="product_info">${this.Description}</p>
                    <button class="add_to_cart_button">ajouter au panier</button>
                </div>`

    }

    constructor(nom: string, prix: number, description: string, poids: number = 0, photo?: string[]) {
        this.Nom = nom;
        this.Prix = prix;
        this.Description = description;
        this.Poids = poids;
        if (photo) this.Photo = photo;
    }

}

export class ModelePanier {
    Contenu: Achat[];
    Quantite: number = this.Contenu.length;

    PrixTotal(): number {
        let prix: number = 0;
        for (let achat of  this.Contenu) {
            prix += achat.Prix;
        }
        return prix;
    }

}


