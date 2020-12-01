export function generateArticle(param){
    let html = `
        <article>
            <h1>${param.name}</h1>
            <img src="${param.picture}" alt="" >
            <p>${param.about}</p>
            <ul>
                ${ param.tags.map( item => "<li>" + item + "</li>"  ) }
            </ul>
        </article>
    `; // nouvelle manière de créer des chaines de caractères

    console.log(html)
}
// ${ param.tags.map( function(item){ return "<li>" + item + "</li>" }  ) }

// tableau 
let a = [ 1 , 2 , 3 ];
// vu que c'est une tableau => javascript va ajouter à cette variable des méthodes
// objet natifs
a.map( function(){} )

// .map() => parcourir chacun des éléments  du tableau 
// ajouter des valeurs en plus pour chaque item 
// .map( ) prendre une déclaration de fonction comme paramètre 
// callback 

// document.getElementById("h1").addEventListener( "click" , () => {} )

// a.map(function(){})
// a.map(() => {} )
// a.map(item =>  )

//let a = [ 1 , 2 , 3 ];
//let b = [ <li>1</li> , <li>2</li> , <li>3</li> ];

// let b = a.map(function(item){ return "<li>"+item+"</li>" } );