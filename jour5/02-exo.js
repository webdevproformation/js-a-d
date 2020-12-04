// constructeur de class

function Voiture( proprietaire , marque ){
    this.proprietaire = proprietaire ;
    this.marque = marque;

    this.test = function(){ console.log('test')} // public
    function description(){} // privee
}

// pour créer une méthode de class avec une fonction constructrice
// d'utiliser le prototype 
// cette dernière manière (la plus apprécié) 
// lorsque l'on crée des objets à partir de la class 
// il aura une poids dans la RAM plus faible 
Voiture.prototype.description = function(){ 
    console.log(`je suis le véhicule de ${this.proprietaire} et je suis de marque ${this.marque}`)
}
let v = new Voiture( "Béatrice" , "VW" );
console.log(v);
v.description()

// dans le terminal possibilité d'utiliser la touche tabulation
// elle permet de faire de l'autocomplétion 
// 02 puis touche tabulation => le terminal va compléter le nom du fichier 

// il est meilleur d'utiliser le prototype de la fonction pour créer des méthodes
// permet de mutualiser les méthodes entre toutes les instances de class 
// tous les objets 

// des questions ?? 
// 03-module.js

// cd => change directory se déplacer dans l'arborescence de l'ordinateur 
// créer des fichiers echo > 02-test.js
// cls nettoyer le terminal
// créer un dossier mkdir css
// supprimer un dossier rm -rf css 
// supprimer un fichier rm 02-test.js
// renommer un fichier mv 03-module.js 03-modules.js