
var currentDate = new Date();

console.log(currentDate.getHours());

var hourSP= document.getElementById("hours");
var minsSP= document.getElementById("mins");
var secSP= document.getElementById("sec");
var formatSP = document.getElementById("am");
var count = 12;
setInterval(()=>{
    var currentDate = new Date();
    if(currentDate.getHours()>12){
        hourSP.innerText = currentDate.getHours()-12 ;
        formatSP.innerText = "PM"
    }
    else{
         formatSP.innerText = "AM"
        //  console.log("AM")
     }
    minsSP.innerText = currentDate.getMinutes();
    secSP.innerText = currentDate.getSeconds();
},1000
);

console.log(hours)