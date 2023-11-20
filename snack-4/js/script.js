
//Crea una funzione che accetta due numeri, se il primo e' divisibile 
//per il secondo, allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.


const firstNumber=parseInt(prompt('inserisici il primo numero'));
const secondNumber=parseInt(prompt('inserisici il secondo numero'));

if (number(firstNumber,secondNumber)){
    console.log('true');
}else{
    console.log('false')
}




function number(numberOne,numberTwo){
    if(numberOne % numberTwo == 0){
        return true

    }else{
        return false
    }

}