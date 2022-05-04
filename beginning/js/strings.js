//STEP 1
// 1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name. Use the alert method to display the result.


// let userName = (window.prompt("What is your first name"));

// alert (`The number of characters in your name is: ${userName.length}`);




//STEP 2
// 2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

// let userName = (window.prompt("What is your first name"));
// let userNumber = (window.prompt("Select a number from 1 to 255."));
// let chart = String.fromCharCode(userNumber)
// alert (`letter: ${chart}`);


// alert (`The length of your name is: ${userName.length}, ${userName.charAt(0)}`);



//STEP 3
// 3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.


// let firstName = (window.prompt("What is your first name"));
// let lastName = (window.prompt("What is your last name"));

// alert (`Your name is: ${firstName.concat(lastName)}`);



//STEP 4

// 4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.


// let dog='The quick brown fox jumps over the lazy dog'
// alert (dog.indexOf('fox'));


//STEP 5

// 5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

// let fox ='The quick brown fox jumps over the lazy fox'
// alert (fox.lastIndexOf('fox')); // Here we find fox two times


//STEP 6
// 6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.



    // let dog='The quick brown fox jumps over the lazy dog'
    // let fullName = (window.prompt("What is your full name"));

    // alert (dog.replace('the lazy dog', `${fullName}`));



//STEP 7
// 7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

// let dog='The quick brown fox jumps over the lazy dog'
// let word = (window.prompt(`Please select a word from the following phase:  "The quick brown fox jumps over the lazy dog" `));

// alert (dog.match(`${word}`));



//STEP 8


// 8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.

// let old_string='The quick brown fox jumps over the lazy dog'
// let new_string= (old_string.slice(30, 43));

// alert (new_string.toUpperCase());


//STEP 9

// 9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.


// let caps='            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// let trimmed= (caps.trim());

// alert (trimmed.toLowerCase() );

//STEP 10


// 10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

// let dog='The quick brown fox jumps over the lazy dog';
// alert(dog.charAt(0).toUpperCase() + 'he quick brown fox jumps over the lazy dog.');
