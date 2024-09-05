//C. Conditional statements

// if statement
let today = new Date().getDate();
 let greetings, greet, impression;

if(today < 15){
    greetings = "HI goodmorning";
}
 console.log(greetings);

//if else statement 
if (today > 10) {
    greet = "Hi how are you";
}
 else {
    greet = "Im fine thankyou";
}
console.log(greet);

// else if statement

if (today > 10) {
    impresstion = "hello madlang people";
} else if (today < 9){
    impression = "mabuhaaaay";
} else {
    impression = "mini miss youuu";
}
console.log(impression);

//switch statement

let day = 2;
let todaysGreeting;

 switch (day){
   case 1:
       todaysGreeting = "Hiii its Day 1 being a js coder beginner";
       break;
   
   case 2:
       todaysGreeting = "Hellooo its Day 2 being a js coder beginner";
       break;
   
   case 3:
       todaysGreeting = "Goodmorning its Day 3 being a js coder beginner";
       break; 
   
   case 4:
       todaysGreeting = "Good Afternoon its Day 4 being a js coder beginner";
       break;
 } 
   console.log(todaysGreeting);
   