interface dataClient
{
    nom : string,
    password:string,
    type : number //1 admin, 2 client
}

interface dataPanier
{
    notransaction:string,
    idclient: number,
    idproduit:number,
    quantitechoisi:number,
    prixtotal:number
}

interface dataProduit
{
    nomproduit:string,
    description:string,
    image:string,
    prix:number,
    quantite:number
}

export let clients : dataClient[];
export let paniers : dataPanier[];
export let produits : dataProduit[];


