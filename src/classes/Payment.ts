// export class Payment {
//     constructor(recipient, details, amount) {
//         this.recipient = recipient;
//         this.details = details;
//         this.amount = amount;
//     }
//     ;
//     format() {
//         return `${this.recipient} is owed £${this.amount} for ${this.details}`;
//     }
// }


import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class Payment implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  format() {
    return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}

//Commentaire
//meme chose que la classe facture
//la distinction du choix de constructeur (entre facture et paiement) par le programme va etre réaliser
//lorsque de la selection par l'internautre du menu déroulant "facture" ou "paiement" et la validation du masque d'entrée.
