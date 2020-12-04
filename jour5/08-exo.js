// 2 imports

let http = require("http");
let { data } = require("./04-exo-data");

let server = http.createServer();

server.on("request", function(req, res){

    if(req.url === "/"){
        res.write("Bienvenu sur l'API");
        res.end();
    }

    if(req.url === "/api/json-generator"){
        // texte que l'on renvoi mais un json  => modifier l'entete de la réponse
        // mieux 
        res.writeHead( 200 , {"content-type":"application-json"} );
        res.write(JSON.stringify(data));
        res.end();
    }
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
