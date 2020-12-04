function calcul(a , b){
    console.log(a + b);
}


function division(a, b){
    console.log( a / b );
}

// portée locale par défaut 

module.exports = { 
    c : calcul ,
    division : division
}

// côté key => possible de renommer les fonctions 