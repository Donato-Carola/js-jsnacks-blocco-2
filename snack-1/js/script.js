//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
//Continua a chiedere i numeri all'utente e a inserirli nell'array 
//fino a quando la somma degli elementi è minore di 50.



const array =[];



let numberUser=0;


while(numberUser<50){
    const numberUser = parseInt(prompt('inserisci numero'));
    array.push(numberUser);
    numberUser++
}

console.log(array);

