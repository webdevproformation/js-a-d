// veuillez les typer les variables suivantes correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
/* liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};*/
/* liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];*/

let liste1 :string = "pêche poire ananas";
let liste2 : Array<string> = ["pêche" , "poire", "ananas"];
let liste3 : Array<string|number> = ["pêche", 4, "poire", 3, "ananas" , 2];
interface Courses {
    items : Array<string|number>,
    budget : number ,
    unite : string
};
let liste4:Courses = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};
interface Produit {
    id : number ,
    nom : string ,
    quantite : number
}
let liste5 : Array<Produit> = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];