//Crea una funzione che accetta due elementi del dom, uno e' 
//il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.

const parent = document.querySelector('div');
const child = document.createElement('h1');

function parentChild(firstElem,secondElem){
    
    firstElem.appenChild(secondElem);


}

parentChild(parent,child)