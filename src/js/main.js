// # Exercice 1 DOM ==> Création de Balise + Contenu
// - Créer dans une balise h1 sur votre page jS.
let monH1 = document.createElement("h1");
console.log(monH1);
// - Stocker dans dans une variable le contenu "Run Forest !" 
let contenu = document.createTextNode("Run Forest !");
// - Trouver le moyen d'insérer votre contenu ("Run Forest !") dans votre balises h1
monH1.appendChild(contenu);
// - Insérer votre balise ( avec son contenu) dans votre Html et montrer moi ça dans votre console.
let myBody = document.querySelector("body");
myBody.appendChild(monH1);
// <!-- Attention mis à part votre script js, RIEN ne dois être coder dans votre body, sur votre page HTML...  -->