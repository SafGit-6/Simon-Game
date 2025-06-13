let gameseq=[];
let userseq=[];

let btns=["yellow","green","red","blue"];
let level=0;
let highscore=-1;
let started=false;
let h1=document.querySelector("h1");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelup();
    if(levelup){
        highscore++;
    }
    }
    
})


function levelup(){
userseq=[];
level++;

if(level > highscore){
    highscore=level
}

h1.innerHTML=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randCol=btns[randIdx];
let randBtn=document.querySelector(`.${randCol}`);

gameseq.push(randCol);
console.log(gameseq);
gameflash(randBtn);




}

function userflash(btn){
    btn.classList.add("userflash");
   
setTimeout(
    ()=>{btn.classList.remove("userflash")}
    ,250);   
}


function gameflash(btn){
    btn.classList.add("flash");
    
setTimeout(
    function(){btn.classList.remove("flash")},
    250);   
}


function checkAns(idx){

    if(userseq[idx] === gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
   
h1.innerHTML=`Wrong <br> Score : ${level}<br>  Highscore : ${highscore}.Press Any Key to`;
    document.querySelector("body").style.backgroundColor="red";
  
setTimeout(()=>{
    document.querySelector("body").style.backgroundColor="white"}
    ,150);
reset();
        }
    }


function reset(){
     gameseq=[];
     userseq=[];
     level=0;      
     started=false;
}



function btnpress(){
   let btn=this;
   userflash(btn);

   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   checkAns(userseq.length-1);
}


Allbtns=document.querySelectorAll(".btn");
for(butn of Allbtns){
butn.addEventListener("click",btnpress);
}
