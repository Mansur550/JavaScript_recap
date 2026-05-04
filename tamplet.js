//tamplet String
const fName = "Mansur";
const lName = "Islam";

// const fullName = fName + " " + lName; //concatenation
const fullName = `${fName} ${lName}`; //template literal
console.log(fullName);

console.log(`I am ${fName} ${lName}. I am learning JavaScript.`);


// Arrow Function
const sum = (a, b) => a + b;
console.log(sum(5, 10));
// Arrow function with multiple lines
const sumWithMultipleLines = (a, b) => {
    const result = a + b;
    return result;
}
console.log(sumWithMultipleLines(6, 10));


/// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2]; //combining two arrays
console.log(combinedArr);
console.log(...arr1); //spread operator to log individual elements of the array

// Spread operator with objects
const obj1 = { name: "Mansur", age: 25 };
const obj2 = { city: "Dhaka", country: "Bangladesh" };

console.log(...obj1); //spread operator to log individual properties of the object
const combinedObj = { ...obj1, ...obj2 }; //combining two objects
console.log(combinedObj);
