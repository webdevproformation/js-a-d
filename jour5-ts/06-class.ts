// class 


class Telephone {
    private numero ; // en ts OUI !!! 
    protected proprietaire ;
    public modele ;
    numeroSerie ; // automatiquement un propriété public 
    constructor( tel:string , prop :string , modele : string ){
        this.numero = tel;
        this.proprietaire = prop ;
        this.modele = modele
    }
    getNumero():string {
        return this.numero;
    }
    private setNumero(numero) :void{
        this.numero = numero
    }
}
let t = new Telephone("01010", "Alain", "Nokia");
// t.numero
// t.setNumero()
t.numeroSerie  // cas c'est un attribut public
// tsc 06-class.ts

// tu vas ecrire dans .ts =>
// compiler en js 
// tu ne vas écrire dans le .js 

// 07-decorateur.ts 