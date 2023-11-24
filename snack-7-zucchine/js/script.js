

//Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, 
//peso e lunghezza. Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {
      varietà: 'Stairway to Heaven',
      peso: 50,
      lunghezza: '1'
    },
   {
        varietà: 'Stairway to Heaven',
        peso: 10,
        lunghezza: '2'
    },
     {
        varietà: 'Stairway to Heaven',
        peso: 3,
        lunghezza: '3'
    },
     {
        varietà: 'Stairway to Heaven',
        peso: 10,
        lunghezza: '4'
    },
 {
        varietà: 'Stairway to Heaven',
        peso: 5,
        lunghezza: '5'
    },
    {
        varietà: 'Stairway to Heaven',
        peso: 7,
        lunghezza: '6'
    },
    {
        varietà: 'Stairway to Heaven',
        peso: 8,
        lunghezza: '7'
    },
    {
        varietà: 'Stairway to Heaven',
        peso: 9,
        lunghezza: '8'
    },
     {
        varietà: 'Stairway to Heaven',
        peso: 77,
        lunghezza: '9'
    },
    {
        varietà: 'Stairway to Heaven',
        peso: 15,
        lunghezza: '10'
    }

  ];



console.log(zucchine)

let sommaPeso = 0 ;
for (let i=0;i<zucchine.length;i++ ){
    const zucchineAttuale = zucchine[i]
    sommaPeso=sommaPeso+zucchineAttuale.peso;
    
}
console.log(sommaPeso)