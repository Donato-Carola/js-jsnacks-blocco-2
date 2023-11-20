

/*Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due 
parole abbiano la stessa lunghezza. 
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/


/*const firstWord=prompt('inserisci parola').length;
const secondWord=prompt('inserisci seconda parola').length;

function word (firstWord, secondWord){
     if (firstWord === secondWord){
        console.log(firstWord,secondWord)
       } else{
        return firstWord;
       }
        

     
}

word(firstWord,secondWord);*/

const firstWord=prompt('inserisci parola');
const secondWord=prompt('inserisci seconda parola');


if(word(firstWord,secondWord)){         //firstword e secondword sostituiscono wordOne e wordTwo nella funzione 
                                        //in questo caso chiamiamo la funzione e gli diamo i due parametri che li sostituisce 
    console.log(firstWord,secondWord)
}else if(firstWord.length>secondWord.length){
    console.log(firstWord);

}else{
    console.log(secondWord)
}






function word (wordOne,wordTwo){
     if (wordOne.length === wordTwo.length){
        return true;
       } else{
        return false;
       }
        

     
}