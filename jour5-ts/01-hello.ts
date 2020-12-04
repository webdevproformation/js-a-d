// créer notre fichier typescript 
// l'extension à mettre .ts 
// écrivez du js en version ES6 
export = {} ;

let a = `Bonjour`;

let b = () => { // arrow function 
    console.log(a);
}

class C{ // création de class version ES6
    param ;
    constructor( param ){
        this.param = param;
    }
    methode(){
        return "bonjour";
    }
}

["1", "2"].forEach( (item) => {
    console.log(item)
} );

// transformer = réécrire en version ES3 
// vérifier que vous êtes dans le dossier jour5-ts
// tsc 01-hello.ts
// => générer un fichier  01-hello.js
// tsc fichier.ts

// pas possible d'exécuter 

// Avantages
// ts => prive/ protected
// js ES6 => versio ES3
// typer tes variables 

// code que tu écris en ts => ROBUSTE 