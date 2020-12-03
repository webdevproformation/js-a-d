/*
dans le dossier jour4 , créer le fichier 12-exo.js

Il contient le tableau suivant ["lundi", "mardi", "mercredi"]

1 afficher dans la terminal de Visual Studio  les informations suivantes :
lundi
mardi
mercredi

2 ajouter à la fin du tableau la valeur "jeudi"

afficher la tableau en intégralité dans le terminal de Visual Studio 
*/

let semaine = ["lundi", "mardi", "mercredi"] ;

semaine.forEach( (item) => {
    console.log(item)
});

semaine.push( "jeudi" );

console.log( semaine );
// node 12-exo.js

// module natifs de Nodejs 
// avec un navigateur il est impossible de créer des fichiers dans un ordinateur 
// node on peut désormais créer des fichiers dans notre ordinateur
// créer dans le dossier jour4 le fichier 13-fs.js
// fs = File System