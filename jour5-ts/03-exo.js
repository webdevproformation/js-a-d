//export = {} // éviter que typescript pense que les variables sont dupliquées dans le fichier .ts et .js 
let a = "Bonjour";
let b = 2;
function calculAire(rayon) {
    return Math.PI * Math.pow(rayon, 2);
}
// console.log(calculAire(  a ) );
console.log(calculAire(b));
// deux commandes à saisir 
// tsc 03-exo.ts --target es6 
// node 03-exo.js
// && 
// tsc 03-exo.ts --target es6 -m CommonJS && node 03-exo.js
