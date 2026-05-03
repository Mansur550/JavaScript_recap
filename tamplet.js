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