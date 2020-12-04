// 2 imports

let http = require("http");
let { data } = require("./04-exo-data");

let server = http.createServer();

server.on("request", function(req, res){
    // le paramètre req = request permet de savoir quel adresse internet est utilisée côté client 
    // http://localhost:3200
    if(req.url === "/"){
        res.write("Bienvenu sur l'API");
        res.end();
    }
    //http://localhost:3200/api/json-generator
    if(req.url === "/api/json-generator"){
        // texte que l'on renvoi mais un json  => modifier l'entete de la réponse
        // mieux 
        res.writeHead( 200 , {"content-type":"application-json"} );
        res.write(JSON.stringify(data));
        res.end();
    }
    // http://localhost:3200/api/json-generator/0
    let patternUrl = /^\/api\/json-generator\/[0-9]{1,}$/;
    if(req.url.match(patternUrl)){
        let tabUrl = req.url.split("/");
        // "/api/json-generator/0" => ["api" , "json-generator" , "1000" ]
        let index = tabUrl[tabUrl.length - 1];
        if(data[index]){
            res.writeHead( 200 , {"content-type":"application-json"} );
            res.write(JSON.stringify(data[index]));
            res.end();
        } else {
            res.writeHead( 404 );
            res.write("Aucune valeur disponible");
            res.end();
        }
    }
});
server.listen(3200, "localhost", function(){
    console.log("le serveur est démarré et ecoute le port 3200");
}); // 3ème argument de listen() callback 

// créer un nouveau dossier jour5-npm 
// dans le terminal on va se positionnez 
// Ctrl + C => arrêter le serveur
// cd ../jour5-npm 
// cls

// node nom-de-fichier.js
// en même temps que vous avez installé node.js 
// aussi un autre outil npm 
// npm --version
// autre outil de ligne 
// NPM : Node Package Manager = outil qui va permettre de télécharger 
// module depuis un site internet npmjs.com
// npm ......
// téléchargement 
// npmjs.com > moteur de recherche => express 

// installer le module express => il a été codé par la communaute
// créer des fichiers js => mis à disposition sur le site npmjs.com
// télécharger et les utiliser dans un mini projet que l'on va réaliser nous meme 

// package.json => npm init --yes
// donne des indications sur l'ensemble des fichiers et des dépendances
// du dossier === projet 

// installer le module express 
// npm i express
// ?? que fait cette commande ??

// 1  node_modules dans le dossier en cours
// 2 télécharger le module ainsi que ses dépendances
// express => js à lui même besoin d'autres modules

// 3 crée le fichier package-lock.json
// donne uene indication sur où a été téléchargé chaque module dans le dossier node_modules
// version 

// 4 modifié le fichier package.json
// mis à jour de fichier 
// àjouté dans le fichier.json

/*
 "dependencies": {
    "express": "^4.17.1"
  }
  // si je veux faire fonctionner le projet jour5-npm
  // je dois obligatoirement avoir express installé 
  // si je ne l'ai pas => le projet ne peut pas fonctionner
*/