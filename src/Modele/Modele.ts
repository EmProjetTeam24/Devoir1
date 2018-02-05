interface Achat {
    Nom: string;
    Quantite: number;
    Prix: number;
    Description: string;
    Poids: number;
    Photo?: string[]; //path of the image
}

class ModelePanier {
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

class inventaire {

    inventaire: Achat[] = [
        {
            Nom: "HP EliteBook 1040 G4 Notebook PC",
            Quantite: 3,
            Prix: 1200,
            Description: "",
            Poids: 0

        }, {
            Nom: "autre PC",
            Quantite: 3,
            Prix: 1201,
            Description: "",
            Poids: 0
        }, {
            Nom: "autre PC 2",
            Quantite: 3,
            Prix: 1202,
            Description: "",
            Poids: 0
        }, {
            Nom: "autre PC 3",
            Quantite: 3,
            Prix: 1203,
            Description: "",
            Poids: 0
        }, {
            Nom: "autre PC 4",
            Quantite: 3,
            Prix: 1204,
            Description: "",
            Poids: 0
        }, {
            Nom: "autre PC 5",
            Quantite: 3,
            Prix: 1205,
            Description: "",
            Poids: 0
        }
    ];
}







