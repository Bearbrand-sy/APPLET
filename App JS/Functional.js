//E. functional programming 

 //I. Determine a number if it is odd or even 

 function oddOrEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddOrEven(21));
console.log(oddOrEven(12));
 
//II. Determine a number if it is prime number

function prime(num ) {
    let check = true;
    if(num <= 1) {
        check = false;
    }
    for ( let i = 2; i * i <= num; i++  ) {
        if (num % i === 0 ){
            check =  false;
            break;
        }
    }
      if (check) {
        console.log(num + " is a prime number");
      } else {
        console.log(num + " is not a prime number");
      }
    }
prime(10);
prime(5);

// III. Determine a string if it is a palindrome
   function palindrome (pal) {
    let drome = pal.length - 1; 
    for ( let i = 0; i < pal.length / 2; i++ ) {
       if(pal[i] != pal[drome]) {
        return false;
       }
       drome++;
    }
    return true;
   }
   let pal1 = "Sander";
   let pal2 = 2;
   let pal3 = "Raymart";

   console.log(palindrome(pal1));
   console.log(palindrome(pal2));
   console.log(palindrome(pal3));