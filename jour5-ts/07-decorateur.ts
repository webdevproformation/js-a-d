// ?? typescript 
// typer ses variables
// class privee / protected 
// choisir la version de js à générer 

// écrire votre code en ts 
// ne pas modifier le fichier en js 
// le fichier js qui est généré est ROBUSTE ( moins d'erreur possible )

// visual studio ( relecture de ton code avant de l'exécuter )

function Decorateur(cible){
    let a = new cible( {id : 1 , titre : " article "} );
    console.log(a);
}
@Decorateur
class Voiture{
    private params = {};
    constructor ( params ){
        this.params = params;
    }
}

// fonction qui modifie le comportement d'une class 

// tsc 07-decorateur.ts --target es5 --experimentalDecorators true

// node 07-decorateur.js // retourner la class 

// Angular Composant 

function Composant(target){
    return function(target){
        console.log(html , target)
    }
}
@Composant({
    selecteur : ".menu",
    css : ["style.css"]
})
class Menu{
    private html ;
    constructor( html ){
        this.html = html ;
    }
} 

// support https://formation.webdevpro.net/typescript // https://formation.webdevpro.net/js-avancee 
// mot qui peuvent changer durée de vie 6 mois 
// malik.h@webdevpro.net
