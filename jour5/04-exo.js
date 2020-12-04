let { data } = require("./04-exo-data") ; // l'extension .js est facultative

let { get } = require("./04-exo-lib.js") ;  // l'extension .js est facultative

get(data ,"name", 3); // "Ballard Hunter"

get(data , "email", 0); // "inezgarrett@stelaecor.com"

// node 04-exo.js