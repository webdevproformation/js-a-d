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
let pageAccueil = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;
// string 
// tableau 

fs.writeFile("14-exemple.html" , pageAccueil , function(err, message){
    if(err) throw err; 
    console.log("fichier créé")
});

// Node JS un peu plus / NPM (Node Package Manager)
// package.json
// TypeScript 
// https://formation.webdevpro.net/typescript
// login: typescript
// mdp : typescript
