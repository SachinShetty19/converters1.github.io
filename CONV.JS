// speed script

function kmtomile(input){
    let speed1 = document.querySelector(".speed1")
    output= input*0.6214;
    speed1.innerHTML="Mph = "+output.toFixed(2);
    
}

function miletokm(input){
    let speed2 = document.querySelector(".speed2")
    output = input*1.6093;
    speed2.innerHTML="Kmph = "+output.toFixed(2);
}


// length script

function centitoinche(input){
    let len1 = document.querySelector(".len1");
    output = input*0.393700787;
    len1.innerHTML="Inches = "+output.toFixed(0);
}

function inchetocenti(input){
    let len2 = document.querySelector(".len2");
    output = input*2.54;
    len2.innerHTML="Centimeters = "+output.toFixed(2);
}

function metertocenti(input){
    let len3 = document.querySelector(".len3");
    output = input*100;
    len3.innerHTML="Centimeters = " + output

}

function centitometer(input){
    let len4 = document.querySelector(".len4");
    output = input/100;
    len4.innerHTML="meter = " + output
}

function metertokilo(input){
    let len5 = document.querySelector(".len5");
    output = input/1000;
    len5.innerHTML="Kilometer = "+ output
}

function kilotometer(input){
    let len6 = document.querySelector(".len6");
    output = input*1000;
    len6.innerHTML="Meter = "+ output
}

// time script

function sectomin(input){
    let time1 = document.querySelector(".time1");
    output = input/60;
    time1.innerHTML ="Minutes = "+output.toFixed(2)
}

function mintosec(input){
    let time2 = document.querySelector(".time2");
    output = input*60;
    time2.innerHTML ="Minutes = "+output.toFixed(2)
}

function mintohours(input){
    let time3 = document.querySelector(".time3");
    output = input/60;
    time3.innerHTML ="Hours = "+output.toFixed(2)
}

function hourtomin(input){
    let time4 = document.querySelector(".time4");
    output = input*60;
    time4.innerHTML ="Minutes = "+output
}

function hourstodays(input){
    let time5 = document.querySelector(".time5");
    output = input/24;
    time5.innerHTML ="Days = "+output.toFixed(2)
}

function daystohours(input){
    let time6 = document.querySelector(".time6");
    output = input*24;
    time6.innerHTML ="Hours = "+output
}

// temp script

function fhtocel(input){
    let temp1 = document.querySelector(".temp1");
    output = (5/9)*(input-32);
    temp1.innerHTML = "Celcius = "+ output.toFixed(2) +"°C"
    
}

function celtofh(input){
    let temp2 = document.querySelector(".temp2");
    output = (input*1.8)+32;
    temp2.innerHTML = "Fahrenheit = "+ output.toFixed(2)+"°F"
}

//----------Script Completd------------