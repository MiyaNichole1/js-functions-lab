/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult() {
    age = 24;
   if (age >= 18) {
     console.log('Adult');
   } else {
     console.log('minor');
   } 
    }
    console.log('Exercise 2 Result:', isAdult(24));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel() {

    const character = 'y'.toLowerCase()
    
     if (character === 'a' ) {
      console.log('true');
     } else if (character === 'e') {
      console.log('true');
     } else if (character === 'i') {
      console.log('true');
     } else if (character === 'o') {
      console.log('true');
     } else if (character === 'u') {
      console.log('true');
     } else {
      console.log('false');
     }
    }
    
    console.log('Exercise 3 Result:', isCharAVowel("false"));

    /*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail() {
    let name = 'Kaylasmith';
    let domain = '@gmail.com';
    const email = `${name}${domain}`
    console.log(email);
  } 
  
  
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
  
  /*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

    function greetUser() {
    let name = 'Bill';
    let timeOfDay = 'Good Morning';
   const greeting = `${timeOfDay}, ${name} ! :)`
    console.log(greeting);
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
  
function maxOfThree(){
    numA = 8;
    numB = 9;
    numC = 10;
 
    if (numC > numB && numA) {
      console.log(`The largest number is ${numC}`)
    }
 }
 
 
 console.log('Exercise 6 Result:', maxOfThree(8, 9, 10));
    
    
    