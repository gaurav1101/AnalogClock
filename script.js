var today;
setInterval(function(){
    today = new Date();
    hour=today.getHours();
    minutes=today.getMinutes();
    seconds=today.getSeconds();

//Formula to calculate hour hand rotation
    //12hours=360deg
//1h=360/12deg
//60min=360deg
//1min=360/60
//xmin=360/60*x deg

//x hour=360/12* x + 6
    document.getElementById('hour').style.transform =`rotate(${ (30*hour)+6}deg)`;
   //Formula to calculate seconds hand rotation
    //60s=360deg
    //1s=360/60=seconds *6 deg
    document.getElementById('second').style.transform =`rotate(${seconds*6}deg)`;
    //Formula to calculate minutes hand rotation
    //60min=360deg
    //1min=360/60 * min
    document.getElementById('minute').style.transform =`rotate(${minutes*6}deg)`;
}, 1000);