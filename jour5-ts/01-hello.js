// créer notre fichier typescript 
// l'extension à mettre .ts 
// écrivez du js en version ES6 
var a = "Bonjour";
var b = function () {
    console.log(a);
};
var C = /** @class */ (function () {
    function C(param) {
        this.param = param;
    }
    C.prototype.methode = function () {
        return "bonjour";
    };
    return C;
}());
["1", "2"].forEach(function (item) {
    console.log(item);
});
