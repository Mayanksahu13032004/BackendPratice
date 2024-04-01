const user={
username:"mayank",
price:899,

// current value k liye this lagathe hai

welcome:function(){
console.log(`${this.username},welcome to website`);
console.log(this);

}
}
user.welcome()
user.username="sahu"
user.welcome()

// this is only for objects not for function 
// function k liye nahi hai
// samajhane k liye hai 
// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// arrow function

const chai=()=>{
let username="lion"
console.log(this.username);
}
chai()

// return shirf arrow function me agar {} ye hai tho hi return lagega
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4))



// implict return
// implict me return nahi lagtha hai
// agar one line me likhna hai tho imlict ka use karthe hai
const addtwo1=(num1,num2)=>(num1*num2)

console.log(addtwo1(4,4))

// agar object bhi likhna hai thho curly bracket me
const addtwo2=(num1,num2)=>({username:"kl"})



// immediately invoked function expressions(IIFE)
(function chai1(){
    console.log("DB connected");
})();

// iife by arrow function
((name)=>{
console.log(`dbconnected ${name}`);
})('mayank')
