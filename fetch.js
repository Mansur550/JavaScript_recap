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


//Keys and values
const person2 = {
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


const keys = Object.keys(person2); // Get an array of keys from the object
console.log(keys);
const values = Object.values(person2); // Get an array of values from the object
console.log(values);


const products = [
    { name: "redmi", brand: "Xaiomi", price : 15000 },
    { name: "samsung", brand: "Samsung", price : 20000 },
    { name: "realme", brand: "Realme", price : 18000 },
    { name: "iphone", brand: "Apple", price : 50000 },
];

const newData = {
    name: "Walton",
    brand: "Walton",
    price: 12000,
    color: "Gray"
}

const newArray = [...products, nawData]; // Create a new array by spreading the existing array and adding a new object
console.log(newArray);