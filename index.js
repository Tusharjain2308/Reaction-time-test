document.querySelector(".box").addEventListener("click",change);
const d = new Date();
let seconds1 =  d.getTime();
function change(){
    var colorRandom=Math.floor(Math.random()*5);
    var shapeRandom=Math.floor(Math.random()*3);
    var heightRandom=Math.random()+0.25;
    var widthRandom=Math.random()+0.25;
    var mleft=Math.random()*1000+100;
    var mup=Math.random()*350+50;
    if(shapeRandom===1){
        document.querySelector(".box").style.width=heightRandom*400+"px";
        document.querySelector(".box").style.height=heightRandom*400+"px";

        document.querySelector(".box").style.borderRadius="50%";
        document.querySelector(".box").style.left=mleft+"px";
        document.querySelector(".box").style.top=mup+"px";}
else if(shapeRandom===2){
    document.querySelector(".box").style.width=widthRandom*200+"px";
    document.querySelector(".box").style.height=heightRandom*100+"px";
    document.querySelector(".box").style.borderRadius="0";
    document.querySelector(".box").style.left=mleft+"px";
    document.querySelector(".box").style.top=mup+"px";
}
else{

    document.querySelector(".box").style.width=heightRandom*200+"px";
    document.querySelector(".box").style.height=heightRandom*200+"px";
    document.querySelector(".box").style.borderRadius="0";
    document.querySelector(".box").style.left=mleft+"px";
        document.querySelector(".box").style.top=mup+"px";
}
if(colorRandom===1){
    document.querySelector(".box").style.backgroundColor="red";
}
else if(colorRandom===2){
    document.querySelector(".box").style.backgroundColor="blue";
}
else if(colorRandom===3){
        document.querySelector(".box").style.backgroundColor="green";
    }
else if(colorRandom===4){
        document.querySelector(".box").style.backgroundColor="yellow";
    }
else{
        document.querySelector(".box").style.backgroundColor="black";
    
}



const d = new Date();
let seconds2 =  d.getTime();
var diff=seconds2-seconds1;
document.querySelector("p").innerHTML="Your score is "+diff/1000+" Second.";
seconds1=seconds2;
}