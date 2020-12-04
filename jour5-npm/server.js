// au lieu d'utiliser le module natif http de nodejs pour créer un serveur
// nous allons utiliser express que l'on vient d'installer 

// require() => chercher dans le dossier node_modules 
// via npm télécharger un module et ce module est local 

// Anton => npm
// l'équivalent de composer pour PHP 
// l'équivalent de apt-get pour Linux (Debian)

// nodejs => outil qui permet d'exécuter du js hors du navigateur 
// node fichier.js 

// téléchargement => autre outil (qui en installé en même temps que node)
// npm 
// c'est ce deuxième outil qui est en charge du téléchargement 
// démarre le module http de NodeJS => service en charge de recevoir les requête http

// module local (pour tout nouveau projet, il faut le réinstaller )

// plus simple que le module http de NodeJs

let express = require("express");

let app = express();

// http://localhost:4000
app.get( "/" , function( req , res ){
    res.send("vous utilisez Express");
});

app.get("/api/data" , function(req, res){
    let a = [1,2,3];
    res.send(a); // pas besoin de end() il le fait directement
});
app.listen(4000);

// node server.js
// http://localhost:4000
// http://localhost:4000/api/data

// créer un nouveau dossier jour-ts
// ts pour typescript 
// se placer dans ce dossier via le terminal 
// Ctrl + C pour arrêter le serveur 
// cd ../jour5-ts
// cls
// nous allons utilisez un module qui va télécharger par npm
// mais le npmjs.com => tsc 
// https://formation.webdevpro.net/typescript/
// login : typescript
// mdp : typescript
// malik.h@webdevpro.net 

// typescript => 
// en javascript = tout est public 
// introduire le conception de privé / protected 
// en javascript il n'y a pas de type 
// let a = "string"; => 
// en typescript on va pouvoir typer nos variables
// en typescript pouvoir écrire du javascript en version ES6 => ES3
// transformer une code écrire en js ES6 dans une version antérieure 
// transpiler 
// typescript outil qu'il faut télécharger 
// via npm 
// comme module global 

// install un module en global pas besoin de créer une fichier package.json via la commande npm init --yes

// télécharger dans le dossier 
// C:\Users\HP\AppData\Roaming\npm\node_modules\typescript\bin\tsc
// npm i -g typescript
// tsc --version 
// jsdoc 
// jslint 