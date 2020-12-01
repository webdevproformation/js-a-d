
function a(){

};

function b(){

};

export let largeur = 200 ;

// en plus mot export 
// default 
// ??? je ne pense pas que 
// l'on puisse exporter par défaut
// une variable 

export default function jQuery(){
    a();
    b();
   console.log("je suis la fonction c") ;
}

// default ne peut être utilisé
// 1 seule fois dans le fichier 