// ?? typescript 
// typer ses variables
// class privee / protected 
// choisir la version de js à générer 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// écrire votre code en ts 
// ne pas modifier le fichier en js 
// le fichier js qui est généré est ROBUSTE ( moins d'erreur possible )
// visual studio ( relecture de ton code avant de l'exécuter )
function Decorateur(cible) {
    var a = new cible({ id: 1, titre: " article " });
    console.log(a);
}
var Voiture = /** @class */ (function () {
    function Voiture(params) {
        this.params = {};
        this.params = params;
    }
    Voiture = __decorate([
        Decorateur
    ], Voiture);
    return Voiture;
}());
// fonction qui modifie le comportement d'une class 
// tsc 07-decorateur.ts --target es5 --experimentalDecorators true
// node 07-decorateur.js // retourner la class 
// angular Composant 
/* function Composant(target){
    return function(target){
        console.log(html , target)
    }
} */
/* @Composant({
    selecteur : ".menu",
    css : ["style.css"]
})
class Menu{
    private html ;
} */
