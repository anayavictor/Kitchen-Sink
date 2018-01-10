/* Is the first letter after L?
let name = 'Victor';
const states = 50;
let x = 5 + 4;

if (name.charCodeAt(0) > 76) {
    alert('Back of the line!');
} else {
    alert('Next!');
}


function sayHello() {
    alert('Hello World')
}
sayHello()



function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + " you aren't old enough to view this page");
    } else {
        alert('Come on In ' + name);
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

*/


let vegetables = ["Apple", "Orange", "Pear"];

for (let a = 1; a < vegetables.length; a++) { 
    console.log(vegetables[a]);
}

/*
Write a function called sayHello that displays an alert that says Hello World!
Call the sayHello function.
Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says "Sorry [name], you aren't old enough to view this page!"
Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
Create an array of your favorite vegetables and name it accordingly.
Use a loop to display each of your favorite vegetables to the developer console.*/
