// dans le fichier script
// plein de fonctions 
// 30 fonctions 

export function a (){
    console.log("je suis juste a");
}
export function b (){}
export function c (){}
export function d (){}

// tu dois répéter le mot clé export
// autant de fois que tu as de fonctions créées dans ce fichier 

// technique pour éviter de répéter le mot clé export 

// passer par une objet litéral + méthode d'objet 

export let objet = {
    a : function(){ 
        console.log("je suis dans objet et je suis a ")
    },
    b : function(){},
    c : function(){},
    d : function(){},
}