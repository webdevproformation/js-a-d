export {} // éviter que typescript pense que les variables sont dupliquées dans le fichier .ts et .js 

let a :string = "Bonjour";
let b : number = 2 ;

function calculAire( rayon : number) : number{
    return Math.PI * rayon ** 2;
}

// console.log(calculAire(  a ) );

console.log(calculAire ( b ) ); 

// deux commandes à saisir 
// tsc 03-exo.ts --target es6 
// node 03-exo.js

// && 
// tsc 03-exo.ts --target es6 -m CommonJS && node 03-exo.js

// 04-variable-avancee.ts