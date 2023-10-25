// let obj = {
//   name: "chibuike",
//   age: 100,
//   gender: "male",
//   fave: { color: "red", food: "beans" },
//   cars: ["Benz", "volvo", "Lexus"],
//   "Able God": ["man", "woman"],
//   log: function () {},
// };
// console.log(obj["Able God"]);

// // to target name
// obj.name;
// // to target gender
// obj.gender;

// deletekeyword
// let obj = {
//   name: "chi",
//   age: 100,
//   gender: "male",
// };
// delete obj.age;
// console.log(obj);
// console.log("gender" in obj);

// loop (for in)
// to return the keywards of the values
// let genders = {
//   Emma: "male",
//   Cj: "female",
//   levi: "male",
// };
// for (let gender in genders) {
//   console.log(gender);
// }

// to return the values of the keywords
// let genders = {
//   Emma: "male",
//   Cj: "female",
//   levi: "male",
// };
// for (let gender in genders) {
//   console.log(genders[gender]);
// }

// //Object.assign is used to join two or objects into one
// // let obj = {
// //   name: "Adamma",
// // };
// // let newobj = {
// //   age: 50,
// // };
// // Object.assign(obj, newobj);
// // console.log(obj);

// // this method

// let obj = {
//   name: "obi",
//   log() {
//     console.log(this.name);
//   },
// };

// let NEwobj = {
//   name: "ada",
//   log() {
//     console.log(this.name);
//   },
// };

// let newobj = obj;
// obj.log();
// NEwobj.log();

let obj = {
  name: "obi",
  log() {
    console.log(this.name);
  },
  num: [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3],
  ],
  res: function () {
    return { name: "Ada", gender: "Male" };
  },
};
// delete num at index 1
delete obj.num[1];
console.log(obj);

// push to num
let newnum = {
  push: [3.1, 3.2, 3.3],
};
obj.num.push([3.1, 3.2, 3.3]);
// Object.assign(obj.num, newnum);
// console.log(obj);

// if name is "obi", change name to "Ada"

if (obj.name === "obi") {
  obj.name = "Ada";
}
console.log(obj.name);

let response = obj.res();
for (let item in response) {
  console.log(item);
  console.log(response[item]);
}
