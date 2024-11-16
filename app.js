"use strict";
//  1. Define the type for items:
var itemsArray = [
    { name: 'juice', price: 50, quantity: 3 },
    { name: 'cookie', price: 30, quantity: 9 },
    { name: 'shirt', price: 880, quantity: 1 },
    { name: 'pen', price: 100, quantity: 2 },
];
var total = 0;
itemsArray.forEach(function (item) {
    var totalPrice = item.price * item.quantity;
    console.log("Total price of ".concat(item.name, ": ").concat(total));
    total += totalPrice;
});
console.log("Total price of all items:".concat(total));
var users = {
    name: 'Hira', email: 'hello@gmail.com', password: 258369,
    gender: 'Female', city: 'Karachi', country: 'Pakistan', age: 24,
};
console.log("Does age exist in the object?", 'age' in users);
console.log("Does Firstname exist in the object?", 'Firstname' in users);
console.log("Does Country exist in the object?", 'country' in users);
console.log("Does Lastname exist in the object?", 'lastname' in users);
// 3. Constructor 
var User = /** @class */ (function () {
    function User(Name, email, age, gender, city, country) {
        this.Name = Name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.city = city;
        this.country = country;
    }
    return User;
}());
var User1 = new User('Ali', 'ali12@gmail.com', 25, 'Male', 'London', 'Uk');
var User2 = new User('Noor', 'noor@gmail.com', 20, 'Female', 'Maidna', 'Saudia Arabia');
var User3 = new User('Umer', 'umer2@yahoo.com', 15, 'Male', 'Dubai', 'UAE');
console.log(User1, User2, User3);
var records = JSON.parse(localStorage.getItem("populationRecords") || "[]");
function addRecord() {
    var newRecord = {
        name: prompt("Enter your name:") || "N/A",
        age: prompt("Enter your age:") || "N/A",
        gender: prompt("Enter your gender:") || "N/A",
        address: prompt("Enter your address:") || "N/A",
        education: prompt("Enter your education:") || "N/A",
        profession: prompt("Enter your profession:") || "N/A",
    };
    records.push(newRecord);
    localStorage.setItem("populationRecords", JSON.stringify(records));
    console.log("New record added:", newRecord);
    console.log("All records:", records);
}
addRecord();
