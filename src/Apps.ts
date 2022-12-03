// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { ListTemplate } from './classes/ListTemplate.js';
// const form = document.querySelector('.new-item-form');
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type');
// const tofrom = document.querySelector('#tofrom');
// const details = document.querySelector('#details');
// const amount = document.querySelector('#amount');
// // list template instance
// const ul = document.querySelector('ul');
// const list = new ListTemplate(ul);
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let doc;
//     if (type.value === 'invoice') {
//         doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//     }
//     else {
//         doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//     }
//     list.render(doc, type.value, 'end');
// });


import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});

//Commentaires
// La première partie du code initialise une liste de variable qui correspondent à tous les champs du masque de saisie de la page HTLM
// Le code de ce masque de saisie a été implémenté dans le fichier html indépendament du codage Java/Javascript
// la constante ul a été défini séparément des autres variables car elle corresponds à un emplacement de la page HTLM dans lequel on souhaite
//afficher les objets factures et paiements.
//l'usage d'une liste est utilisé pour afficher plusieurs objets dans l'ul
// form fait réference au formulaire de la page HTML. Sur la puce HTML form, la méthode addEventListener (qui est une méthode implémenté dans java/TS par défault)
// prend pour arguments deux variables, la première qui est l'évèment auquel nous souhaitons que le programme réagisse (ici soumettre le formulaire), le deuxième qui
// est le résultat escompté (en effet le deuxième argmument est une fonction qui retourne un résultat).
// le résultat de la fonction précitée retourne un objet facture ou paiment sur lequel est appliqué la méthode render issue de la classe ListTemplate.
//Cette dernière méthode citée est utilisée pour générer du code HTML qui sera afficher sur la page HTLM à l'emplacement ul du code.
// type fait référence à un des masques de saisie dans lequel on choisit une facture ou un paiement et détermine le constructeur qui sera utilisé.
// les constructeurs factures et paiement sont utilisés pour instancier les objets, ces constructeurs étant issus des classes invoice et payment.
// Lors de l'instanciantion les "..." sont utilisés pour demander au programme de créer une liste d'objets et de les ranger à la suite.
// au final, les ligne de code 52 et 54 on pour variable doc mais il s'agit bien d'une liste, par ailleurs, l'objet définif qui va recevoir la méthode render
// n'est rien d'autre qu'une liste d'objet puisque list est de type liste et qu'en recevant la méthode render, elle recoit pour premier argument doc
// qui lui est une liste contenant des objets.