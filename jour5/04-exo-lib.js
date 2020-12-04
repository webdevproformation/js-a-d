function getName( data , keyName , index  ){
    let r = data[index][keyName];
    console.log(r);
}

module.exports = {
    get : getName
}
