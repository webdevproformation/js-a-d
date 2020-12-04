// utiliser un module directement disponible dans Node
// http

let http = require("http"); // télécharger la module dans la fichier 

let server = http.createServer();
// server = apache / ngnix 

server.on( "request", function( req , res ){ 
    // quelquesoit le type de requête que l'on va recevoir
    // http://localhost:4000/
    // http://localhost:4000/bonjour
    // http://localhost:4000/article/2
    // nous allons retourner uniquement le texte "Bonjour vous utilisez un serveur NodeJS"
    res.write( "Bonjour vous utilisez un serveur NodeJS" );
    res.end();
 } );

server.listen( 4000 , "localhost");
// serveur => logiciel => démarrer tout le temps 
// ecouter les ports de la machine 
// lancer le serveur node 06-server.js
// une fois que vous avez démarré le serveur => le serveur est démarré et il attend une requête

// firefox chrome => barre d'adresse 

// ovh => hébergement de base =>
// serveur dédié => installé nodejs 
// serveur virtuel / vps : https://www.ovhcloud.com/fr/vps/

// https://www.heroku.com/ serveur node 

// container doker => migrer soit sur serveur virtuel / vps / heroku.com
// filezilla + ajouter un fichier package.json
// transfert via ligne de commande en utilisant  git + ajouter un fichier package.json

// pour arrêter le serveur / cliquer dans le terminal / Ctrl + C


