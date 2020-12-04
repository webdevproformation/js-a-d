function getName( data , keyName , indice  ){
    let r = data[indice][keyName];
    console.log(r);
}

module.exports = {
    get : getName
}
