const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');

const worldCup='21 Nov 2022';

function countdown(){
    const worldCupDate=new Date(worldCup);
    const currentDate=new Date();

    const totalSeconds=(worldCupDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/60/60/24);
    const hours=Math.floor(totalSeconds/60/60)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;
    
    
}



countdown();

setInterval(countdown,1000);