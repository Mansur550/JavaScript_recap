let a = "mansur";
a = "mansur Islam";
// console.log(a);

alert("app.js is connected!");


const country = "Bangladesh";
// country = "India"; // This will cause an error because 'country' is a constant
console.log(country);

//if else statement
let age = 20;
if (age >= 18 && age < 30) { //for or age >= 18 || age < 30
    console.log("You are in your 20s");
} else {
    console.log("You are a minor.");
}



// array

const friends = ["Mansur", "Islam", "Rafi", "Sabbir"];
//to add element in array
friends.push("Sabbir"); //add element at the end of the array
friends.unshift("Sabbir"); //add element at the beginning of the array

//to remove last element from array
friends.pop(); //remove last element from array
//to remove first element from array
friends.shift(); //remove first element from array

//Array Slice   
// const slicedFriends = friends.slice(1, 3); //slices the array from index 1 to index 2 (3 is not included)
// console.log(slicedFriends);

//Array Splice
// friends.splice(1, 2); //removes 2 elements starting from index 1 (index 1 and index 2 will be removed)



console.log(friends);
//For cheking array element number
console.log(friends.length);
