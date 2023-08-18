// * complte indormation about object
// object is collection or similar data or similar functionality  cn store any data type ,cn store different type of value
//
//
//
// //
// let user={}
// user.name="saveen";
// console.log(user);
// or
// let member=new Object()
// member.age="jangra";
// console.log(member);

// q1=>u can not change the value of const but when u make obj using const key pe koi fark nhi padta uski value ko change nhi kr sakte means user ko
// const x=10;
// x=20
// console.log(x);
// const user={}
// user.name="saveen";
// console.log(user);
// let key = "address";
// if u want to use key,s value are keyin object
// let landline = 12345;
// let email = "saveen@gmail.com";
// // these are the shorthand property
// const user = {
//   name: "saveen",
//   age: 9,
//   isDeveloper: true,
//   getData: function () {
//     return this.city;
//   },
//   innerobj: {
//     name: "i m inner obj",
//   },
//   ["pin code"]: "125001",
//   // cn assign the value with space, yes
//   [key]: "noida,up",
//   landline,
//   email,
// };

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.isDeveloper);
// console.log(user.getData());
// console.log(user.innerobj);
// console.log(user.innerobj.name);

// for delete any key use delete
//  delete user.name
//  console.log(user);
// hoisting in obj we define property after  function
//  user.city="new york"
//  console.log(user.getData());
//  cn add the value with space, yes
// user["ph number"]="9729746654"
//  console.log(user["pin code"]);
//  console.log(user);

//  is there property exist u can check it
// gives boolean value
// console.log("city" in user);
// console.log("age" in user);

// loop in obj
// for(let item in user){
//     console.log(`key=> ${item} : value=> ${user[item]}`);
// }
// question how to calu sum of all
// let emp = {
//   peter: 100,
//   bruce: 200,
//   savee: 400,
// };
// let total = 0;
// for (let item in emp) {
//   total = total + emp[item];
// }
// console.log(total);
