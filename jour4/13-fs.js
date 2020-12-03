// clear (si tu as installé git et mis à jour le Path)
// cls commande pour nettoyer / vider le terminal 

// commande pour créer des fichiers
// echo "" > nom-fichier.js
// touch > nom-fichier.js 
// > nom-fichier.js 

// lorsque vous êtes dans NodeJS 
// nouvelles fonctionnalités disponibles 
// module 
// Navigateur => DOM  

let fs = require("fs"); // télécharger un module natif de NodeJS 
// import fs from "fs"
fs.writeFile("14-exemple.js" , `un peu de contenu` , function(err, message){
    if(err) throw err; 
    console.log("fichier créé")
});
