interface Achat {
    Nom: string;
    Quantite: number;
    Prix: number;
    Photo: string; //path of the image
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