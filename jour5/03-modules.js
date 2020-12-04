//on a vu pour les fichiers .html 
// nouvelle méthode pour créer des modules

// Manière de créer des modules pour les clients ( Navigateur )
// dans les fichiers html => <script type="module">
// import { func , variable } from "./script.js";
// </script>
// dans le fichier script.js
/*
    export function func(){ }
    export let variable = "hello"
*/

// pour les fichiers qui vont être exécuté par Node.js 
// le système de modules est un peu différent

// créer un fichier 03-modules-lib.js

let { c , division } = require ("./03-modules-lib.js");

// import {} from "fichier"
// let {} = require("fichier");

c(1,2); // 3

division( 10 , 2); // 5

// node 03-modules.js

// dans le dossier jour5 créer 3 fichiers 

// 04-exo.js // 04-exo-data.js // 04-exo-lib.js

// dans le fichier 04-exo-data.js => copier coller un fichier json depuis le site json generator
// stocker dans une variable data qui vous allez exporter 

// dans le fichier 04-exo-lib.js => créer un fonction getName 
// deux paramètres keyName // indice 
// afficher dans la console le nom à l'indice concerné 
/*
[ 
    { 
        name : "Alain"
    },{
        name : "Béatrice"
    }
]
getName("name", 0) => "Alain"
getName("name", 1) => "Béatrice"
*/

// importer data et la fonction dans 04-exo.js

// utiliser getName("name", 3) 
// utiliser getName("email", 0)
// pause => 15 min bon café tout le monde à toute suite !! 

// hello hello !
// 10h50 => Correction !


