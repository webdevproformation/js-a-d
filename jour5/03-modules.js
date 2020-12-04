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

