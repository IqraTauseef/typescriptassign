//  1. Define the type for items:

interface item{
    name: string;
    price: number;
    quantity:number;
}
const itemsArray:item[]=[
    {name:'juice', price:50,quantity:3},
    {name:'cookie', price:30,quantity:9},
    {name:'shirt', price:880,quantity:1},
    {name:'pen', price:100,quantity:2},
];
let total=0;

itemsArray.forEach((item) =>{
    const totalPrice = item.price * item.quantity;
    console.log(`Total price of ${item.name}: ${total}`);
    total += totalPrice
});
console.log(`Total price of all items:${total}`);

// 2.Object properties check

interface user{
    name:string, email:string, password:number, age:number,
    gender:string, city:string, country:string,
}
let users: user ={
name:'Hira', email:'hello@gmail.com', password:258369,
gender:'Female',city:'Karachi', country:'Pakistan',age:24,
}
console.log(`Does age exist in the object?`,'age' in users );
console.log(`Does Firstname exist in the object?`,'Firstname' in users );
console.log(`Does Country exist in the object?`,'country' in users );
console.log(`Does Lastname exist in the object?`,'lastname' in users );

// 3. Constructor 

class User {
    Name:string
     email:string 
     age:number;
     gender:string 
     city:string
    country:string


  constructor( Name:string, email:string, age:number,  gender:string, city:string, country:string,){  
  this.Name = Name;
  this.email = email;
this.age = age;
this.gender = gender;
this.city =city;
this.country = country;
}
} 
const User1 =new User ('Ali' , 'ali12@gmail.com', 25 , 'Male', 'London' , 'Uk');
const User2 =new User ('Noor' , 'noor@gmail.com', 20 , 'Female', 'Maidna' , 'Saudia Arabia');
const User3 =new User ('Umer' , 'umer2@yahoo.com', 15 , 'Male', 'Dubai' , 'UAE');
console.log(User1 , User2 , User3);

// 4.PopulationRecord

interface PopulationRecord {
    name: string;
    age: string;
    gender: string;
    address: string;
    education: string;
    profession: string;
  }
  
  const records: PopulationRecord[] = JSON.parse(localStorage.getItem("populationRecords") || "[]");
  
  function addRecord() {
    const newRecord: PopulationRecord = {
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
  