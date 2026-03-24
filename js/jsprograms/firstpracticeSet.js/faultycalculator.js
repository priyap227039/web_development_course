/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random=Math.random()
console.log(random)
let num1=prompt("enter first number")
let opt=prompt("enter operation")
let num2=prompt("enter second number")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"

}
if(random>0.1){
    //perform right calculation
    alert(`the result is ${eval(`${num1} ${opt} ${num2}`)}`)
}
else{
    //perform wrong calculaiton 
    opt=obj[opt]
alert(`the result is ${eval(`${num1} ${opt} ${num2}`)}`)
}