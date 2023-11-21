
//! Chiedo all'utente un numero e genero attraverso una funzione un numero di 
//! quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 


const numberUser =parseInt(prompt('inserisci numero'));

const box = document.querySelector('article')
console.log(box)



function number(){
    for(let i=0;i<=numberUser;i++){
        const getSquare = document.createElement('div')
        box.appendChild(getSquare);

        getSquare.classList.add('style-square')

        const box_square = document.querySelector()

    }
}

number();