//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
  if (name === 'Tyler') {
    return true;
  }
  
};

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
  var name = prompt('What is your name?');
  return name; 
};


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var getName = function() {
  var name = prompt('What is your name?');
  return name;
};
var welcome = function() {
  alert('welcome ' + getName()); 
};


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  //Parameters are used in calls for example:
  var hello = function(x) {

  }
// 'x' above is an parameter
//but arguments are used after the function is called for example:
hello(5) {

}
// 5 is an arguement
//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //false, "", 0 , null, undefined, NaN



//Next Problem



//Create a function called myName that returns your name

  //Code Here

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.