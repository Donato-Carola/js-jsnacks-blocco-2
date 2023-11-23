

//! Cliccando su un pulsante, viene avviato un cronometro. Per fermare il cronometro, bisogna cliccare su un secondo pulsante

const buttonStart =document.getElementById('startButton')
const buttonStop =document.getElementById('stopButton')
const timeSecond=document.getElementById('seconds')

let clock;

buttonStart.addEventListener('click',function(){
           //inserisco setinterval in questo click per far partire il cronometro 
         
clock =setInterval(function(){
    timeSecond.innerHTML=parseInt(timeSecond.innerText,10)+1;
},1000);
   });
buttonStop.addEventListener('click',function(){
    clearInterval(clock);
});

 