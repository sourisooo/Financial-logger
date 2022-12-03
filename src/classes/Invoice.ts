// export class Invoice {
//     constructor(client, details, amount) {
//         this.client = client;
//         this.details = details;
//         this.amount = amount;
//     }
//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
// }



import { HasFormatter } from "../Interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number,
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

//Commentaires
// classe facture, dispose de la méthode format qui retourne une chaine de charactère
// cette méthode et l'objet facture ou paiement vont etre utiliser dans la classe list template dans un
// second temps pour générer le code HTML et "actualiser la page web"
