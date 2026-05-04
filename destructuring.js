
// Array destructuring
const friends = ["Mansur", "Islam", "Rafi", "Sabbir"];

const [firstFriend, secondFriend, ...otherFriends] = friends; //array destructuring
console.log(firstFriend);
console.log(secondFriend);
console.log(otherFriends); //rest operator to collect the remaining elements of the array

