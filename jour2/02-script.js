// toutes les variables 
// les fonction  que vous allez créer
// ici 
// sont portées (scope) / visibilité
// locale === que dans le fichier 
// limitées dans le fichier


export function a(){
    console.log("je suis la fonction a");
}

export function b(){
    console.log("je suis la fonction b");
}

// si je veux utiliser ces fonctions dans un
// autre fichier 

// export avant le mot clé function  

// la fonction a est utilisable ailleurs
// la fonction b est locale 

export let e = {
    a : function(){},
    b : function(){},
    c : function(){},
    d : function(){},
    e : function(){},
    f : function(){}
}

// * => NodeJS 
// import 
// require 