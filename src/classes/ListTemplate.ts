// export class ListTemplate {
//   constructor(container) {
//       this.container = container;
//   }
//   render(item, heading, pos) {
//       const li = document.createElement('li');
//       const h4 = document.createElement('h4');
//       h4.innerText = heading;
//       li.append(h4);
//       const p = document.createElement('p');
//       p.innerText = item.format();
//       li.append(p);
//       if (pos === 'start') {
//           this.container.prepend(li);
//       }
//       else {
//           this.container.append(li);
//       }
//   }
// }


import { HasFormatter } from "../Interfaces/HasFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');
  
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

//Commentaires
//classe disposant d'une méthode pour créer du langague HTML, cette méthode prend 3 arguments en entrée: item, heading et pos.
//ce code HTML est implémenté en créant des objets HTML dans lequel on insert les objets factures et paiements en argument item
//le contenu du texte qui sera employé pour créer les objets HTML est la chaine de charactère définie par la méthode format
// des classes factures et invoices.