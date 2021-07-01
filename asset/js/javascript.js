let show=document.getElementById("show");
let inpt=document.getElementById("inpt");
let sbmit=document.getElementById("s_button");
let answer=document.getElementById("answer");
let rndm;
let btn;
let count=0;
function determine(b_id){
  if(b_id=="easy"){
     btn="easy";
     show.innerHTML="You should enter the number from 1 to 10:"
     rndm=Math.floor(Math.random() * 10) + 1; 
 }
  else {
     btn="hard";
     show.innerHTML="You should enter the number from 1 to 25:"
     rndm=Math.floor(Math.random() * 25) + 1; 
  }
 inpt.style.display="inline-block";
 sbmit.style.display="inline-block";
}

function submit(){
 count++;
 if(btn=="easy"){
     if(inpt.value>=1 && inpt.value<=10){
         if(inpt.value==rndm)
             answer.innerHTML="Your guess is correct! You won!"
             
         else{
             if(count<3)
               answer.innerHTML="Try again!"
             else  {
                show.style.display="none";
                inpt.style.display="none";
                sbmit.style.display="none";
                answer.innerHTML=`<p style="color:red">GAME OVER</p>`;
                
             }
             
         }
         
     }
     else if(inpt.value>10) {
         answer.innerHTML="YOU SHOULD ENTER THE NUMBER FROM 1 TO 10 !!!";
     }
 }
 if(btn=="hard"){
     if(inpt.value>=1 && inpt.value<=25){
         if(inpt.value==rndm)
             answer.innerHTML="Your guess is correct! You won!";
         else{
             if(count<5)
               answer.innerHTML="Try again!"
             else   {
                show.style.display="none";
                inpt.style.display="none";
                sbmit.style.display="none";
                answer.innerHTML=`<p style="color:red">GAME OVER</p>`;
             }
    
         }
     }
     else if(inpt.value>25) {
         answer.innerHTML="YOU SHOULD ENTER THE NUMBER FROM 1 TO 25 !!!";
     }
 }
}

function reset(){
  location.reload();
}