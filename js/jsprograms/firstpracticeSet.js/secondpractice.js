//use logicak opertors to find whether the age of a person lies between 10 and 20 ?
let age=15;
if(age>=10 && age<=20){
    console.log("your age is lie between 10 and 20");
}
else{
    console.log("your age is  not lie between 10 and 20");
}
//demostrate the use of switch case statements in js
/*switch(expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // code
}*/
//write a js program to find whether a number is divisble by 2 and 3
let num1= 45;
if(num1 %2==0 && num1%3==0){
  console.log("this number is divisible by 2 and 3 ");
}

else{
  console.log("this number is not divisible by 2 and 3 ");
}

//write a js program to find whether a number is divisible by either 2 or 3
let num2= 45;
if(num2 %2==0 || num2%3==0){
  console.log("this number is divisible by  either 2 or 3 ");
}

else{
  console.log("this number is not divisible by 2 or 3 ");
}
// print "you can drive " or "you cannot drive " based on agge being greater than 18 using ternary operator
let age1=56;
let check=(age1>=18)?"you can drive":"you can not drive"
console.log(check);
