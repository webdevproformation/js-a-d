// types de base : string / number / boolean / fonction
export = {} ;
// type avancee = type scalaire
// tableau et les objets 

let a : Object = { 
    prop1 : 1 ,
    prop2 : 2
};

// tableau => définit le type + définir le contenu son type aussi
let b :Array<string> = [ "A" , "B" ];
let c :string[] = ["C" , "D"];

let d : Array<string|number> = ["A" , 1] ;
let e : (string|number)[] = ["B" , 2 ] ;

/* let f = 2;
    f = "bonjour"; */

// collection 
// tableau qui contiennent des objets 
let data : Array<Object> = [ 
    { id : 1 , titre : "titre1"} , 
    { id : 2 , titre : "titre2" , contenu : "contenu " } 
];

// typescript => interface 
// interface permet de décrire en profondeur un objet litéral en javascript 
interface Article{
    id : number,
    titre : string
};

let data2 :Array<Article> = [ 
    { id : 1 , titre : "titre1" } , 
    { id : 2 , titre : "2" } 
]

// data2

