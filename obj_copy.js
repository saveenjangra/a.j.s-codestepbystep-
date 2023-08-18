// let obj={
//     name:"peter"
// }

// console.log(obj)

// let obj={
//     name:"peter"
// }
// let user=obj
// user.name="bruce"
// console.log(obj)

// in j.s when u assign a obj in another obj than data is not copied only memory reference is copied

// let x="anil"
// let y=x;
// y="sam"
// console.log(x)

// in j.s when u copy a variable in another variable than value is copied.

// solution is shallowcopy
// let obj={
//     name:"peter"
// }
// let user=Object.assign({},obj)
// user.name="bruce"
// console.log(obj)
// console.log(user)
// // or
// let obj={
//     name:"peter"
// }
// let user={...obj}
// user.name="bruce"
// console.log(obj)
// console.log(user)

// but there is problem with it
// let obj={
//     name:"peter",
//     address:{
//         city:"noida",
//         state:"up"
//     }

// }
// let user={...obj}
// user.address.city="delhi"
// console.log(obj)
// object.assign ,and destructing not work in shallow copy bcz when u make object in object it will work only for one level not deeply so problem for it deep copy not shallow copy

// let obj={
//     name:"peter",
//     address:{
//         city:"noida",
//         state:"up"
//     }

// }
// let user=JSON.parse(JSON.stringify(obj))
// user.address.city="delhi"
// console.log(obj)
// console.log(user)

// solution is deep copy ist convert it in string than convert back it in  obj with the help of parse

// let obj={
//     name:"peter",
//     address:{
//         city:"noida",
//         state:"up"
//     },
//     getData:function(){
//         return "all data is here"
//     }

// }
// let user=JSON.parse(JSON.stringify(obj))
// user.address.city="delhi"
// console.log(obj)
// console.log(user)

// when u make (function or date) in deep copy it will vanish in user, problem solution is lodash cdn copy it path and paste it in script src

// lodash cdn
// <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

// let obj={
//     name:"peter",
//     address:{
//         city:"noida",
//         state:"up"
//     },
//     getData:function(){
//         return "all data is here"
//     }

// }
// let user= _.cloneDeep(obj)
// user.address.city="delhi"
// console.log(obj)
// console.log(user)
