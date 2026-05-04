const products = [
    { name: "redmi", brand: "Xaiomi", price : 15000 },
    { name: "samsung", brand: "Samsung", price : 20000 },
    { name: "realme", brand: "Realme", price : 18000 },
    { name: "iphone", brand: "Apple", price : 50000 },
];

// map method
const productNames = products.map(product => product.name);
console.log(productNames);

//forEach method
products.forEach(product => console.log(product.name));

//filter method
const result = products.filter(product => product.price > 15000);
console.log(result);