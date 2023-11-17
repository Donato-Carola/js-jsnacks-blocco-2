//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array 
//fino a quando la somma degli elementi è minore di 50.



const array =[];

const numberUser = parseInt(prompt('inserisci numero'));




while(numberUser<50){
    array.push(numberUser);
    numberUser++
}