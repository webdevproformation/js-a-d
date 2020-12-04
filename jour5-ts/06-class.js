// class 
var Telephone = /** @class */ (function () {
    function Telephone(tel, prop, modele) {
        this.numero = tel;
        this.proprietaire = prop;
        this.modele = modele;
    }
    Telephone.prototype.getNumero = function () {
        return this.numero;
    };
    Telephone.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return Telephone;
}());
var t = new Telephone("01010", "Alain", "Nokia");
// t.numero
// t.setNumero()
t.numeroSerie; // cas c'est un attribut public
// node 06-class.ts
