//   in j.s there are two types of map func
// func map and object map ,func map is used to iterate array and obj map is advanced version of obj
// limitions of obj is ,key is only in string but map obj key is anything it can b no ,boolean,array,obj
// 2nd diffeerence is to itirate obj u should use more complex operation
// defination map is advanced obj with new features and with better performance
// let obj={
//   name:"saveen",
//   10:"this is no key in simple obj"
// }

// let data=new Map([
//   ['name','peter'],
//   ["10",'this is no key in map obj']
// ])
// console.log(obj.name)
// // if we do obj.10 it gives error
// console.log(data.get("10"))

// let obj={
//   name:"saveen",
//   true:"this is bool as string in simple obj"
// }
// // it takes bool as string

// let data=new Map([
//   ['name','peter'],
//   [true,'this is bool as bool in map obj']
// ])
// console.log(obj.true)

// console.log(data.get(true))

// let obj={
//   name:"saveen",
//   10:"this is no key in simple obj"
// }

// let data=new Map([
//   ['name','peter'],
//   ["10",'this is no key in map obj']
// ])
// console.log(obj.key)
// // can not access the key in simple obj
// console.log(data.keys())
// // can access the key in map obj use key()

// let obj = {
//   name: "saveen",
//   10: "this is no key in simple obj",
// };
// obj.city = "hisar";
// let data = new Map([
//   ["name", "peter"],
//   ["10", "this is no key in map obj"],
// ]);
// data.set("city", "hansi");
// data.set("{}", "obj setting example");
// data.set("()=>{}", "this is a arrow fucn example");
// data.delete("10");
// console.log(obj.key);
// // can not access the key in simple obj
// console.log(data.keys());
// console.log(data);
// console.log(data.values());
// console.log(data.size);
// console.log(data.has(true));

// can use foreach with it
// data.forEach((k,v)=>{
//   console.log(v,k)
// })
// for loop
// for(x of data){
//   console.log(x[0])
//   console.log(x[1])
// }
// can access the key in map obj use key()
