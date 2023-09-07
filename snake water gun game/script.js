const computer_choice=(num)=>{
  if (num>0 && num<34){
    return 's';
  }
  else if (num>33 && num<67){
    return 'w';
  }
  
   else{
    return 'g';
   }
}
const WinOrLoss=(comp_choice,your_choice)=>{
  
 if (comp_choice=='s' && your_choice=='w'){
   return -1;
 }
 else if (comp_choice=='g' && your_choice=='s'){
   return -1;
 }
 else if (comp_choice=='w' && your_choice=='g'){
   return -1;
 }
 else if (comp_choice=='w' && your_choice=='s'){
   return 1;
 }
 else if (comp_choice=='s' && your_choice=='g'){
   return 1;
 }
 else if (comp_choice=='g' && your_choice=='w'){
   return 1;
 }
 else{
   return 0;
 }
  
}

let min=1;
let max=100;

let comp_num=Math.floor(Math.random() *(max-min+1))+min;
console.log(typeof comp_num)
let computer_choose=computer_choice(comp_num)

let user_choose=prompt("enter your choice : snake for 's' water for 'w' gun for 'g'");

let Result=WinOrLoss(computer_choose,user_choose)

if (Result==1){
  document.write("CONGRATS !!! you win")
  document.body.style.background="green"
}
else if (Result==-1){
  document.write("OOPS!!! YOU LOSS")
  document.body.style.background="red"
}
else{
  document.write('MATCH HAS BEEN DRAW !!!')
  document.body.style.background="grey"
}
document.write(`\nComputer choose ${computer_choose} and you choose 
 ${user_choose}`)

