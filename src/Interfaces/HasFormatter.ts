
export interface HasFormatter {
    format(): string;
  }

  //Commentaires
  //Permets de s'assurer que tous les objets qui seront insérés dans la classe ListTemplate peuvent utiliser la méthode "format"
  //La méthode format est nécessaire pour incrémenter les valeurs du champs HTML qui vont etre générer par la classe ListTemplate.