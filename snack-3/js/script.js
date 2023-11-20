

/*Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due 
parole abbiano la stessa lunghezza. 
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/


const firstWord=prompt('inserisci parola').length;
const secondWord=prompt('inserisci seconda parola').length;

function word (firstWord, secondWord){
     if (firstWord === secondWord){
        console.log(firstWord,secondWord)
       } else{
        return firstWord;
        }
        

     
}

word(firstWord,secondWord);