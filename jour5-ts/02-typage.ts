//export = {};
// 02-typage.ts

// spéficifique (l'ajout de typescript)

    let a :string = "bonjour"; // on type la variable a 

    // a = 2; si vous réalisez l'instruction suivante => erreur est levée 

    let b :number = 1234 ;

    let c :boolean = 20 > 10;

    let e :any ; // n'importe quelle type 

    // pour une fonction qui retourne un chiffre 
    function calcul ( param1 :number , param2 :number ) :number {
        return param1 + param2 ; 
    }

    function attention ( ) :void { // la fonction retourne rien
        console.log("Attention !!!");
    }

    let autreFonction = ( a :number ) :void => {
        console.log("autre fonction");
    }

// tsc 02-typage.ts => version ES3
// tsc  02-typage.ts --target es6
// tsc  02-typage.ts --target es6 -w
// mode watch

// dans le dossier jour5-ts
// créer un nouveau fichier 03-exo.ts

// créer plusieurs variables 
// a = "Bonjour"
// b = 2 
// fonction aireCercle( rayon ){}

// retourne le résultat du calcul suivante
// PI x rayon x rayon 

// utiliser la fonction   aireCercle( rayon )
// pour a et pour b 

// convertir le fichier 03-exo.ts => 
// 03-exo.js (version6)

// executer le fichier 03-exo.js avec node