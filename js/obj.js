const person = {
  firstName: "Emmanuel",
  lastName: "Citron",
  age: 16,
  hobbies: ["music", "reading", "programming"],
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    country: "   USA",
  },
  isManager: false,

  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

//access obj dot notation or []
// console.log(person.firstName);
// console.log(person['firstName']);

// console.log(person);
// console.log(person.hobbies[2]);
// console.log(person['hobbies'][2]);
// console.log(person['address']['state']);
// console.log(person.address.state);
person.salary = 89000;
person.address.state = "Rivers";
// console.log(person);
// person.fullName();

const keys = Object.keys(person);
// console.log(keys);
// if('phone' in keys){
// console.log('phone already exists');
// }else{
//       person.phone = "08038352700";
// }
const values = Object.values(person);

// console.log(values[3]);

// console.log(person);

const entries = Object.entries(person);
// console.log(entries[0][1]);
// console.log(entries);
// console.log(values);

const clubs = {};
const details = { name: "Chelsea", position: 8 };

Object.assign(clubs, details);
// console.log(clubs);

// Object.freeze(person);

// person["address"]["state"] = "Imo";
// console.log(person);

const obj = { name: "Mike" };
// Object.freeze(obj);
// obj.name = "John";
// console.log(obj);
Object.seal(obj);
obj.name = "John";
obj.salary = 56000;
// console.log(obj);

const staffs = [
  {
    name: "Mike",
    salary: 89000,
    gender: "Male",
  },
  {
    name: "Emmanuel",
    salary: 100000,
    gender: "Female",
  },
  {
    name: "Daniel",
    salary: 900000,
    gender: "Male",
  },
];

console.log(staffs[0]);