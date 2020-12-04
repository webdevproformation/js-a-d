let { data } = require("./04-exo-data") ; // l'extension .js est facultative

let { get } = require("./04-exo-lib.js") ;  // l'extension .js est facultative

get(data ,"name", 3); // "Ballard Hunter"

get(data , "email", 0); // "inezgarrett@stelaecor.com"

// node 04-exo.js

let a = [ 
    {
        nom : "Alain",
        email : "email@yahoo.fr"
    },
    {
        nom : "Charles",
        email : "autre@email.fr"
    }
]; // 

// data[indice][keyName];
// a[0].nom
// a[0]["nom"]

// data[3]["index"] => 3

// créer un fichier 05-module-suite.js