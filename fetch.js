//JSON Conversion
const person = {
    name: "Mansur Islam",
    age: 25,
    city: "Dhaka",
    country: "Bangladesh",
    family: {
        father: "Mannan",
        mother: "Amina Khatun",
        siblings: ["Rafi", "Sabbir"]
    }
};

const jsonData = JSON.stringify(person); // Convert JavaScript object to JSON string
console.log(jsonData);
const plainData = JSON.parse(jsonData); // Convert JSON string back to JavaScript object