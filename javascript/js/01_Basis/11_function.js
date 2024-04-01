function sayname(){
    console.log("shree radhe");
}
sayname()


// console shrif print karatha hai return nahi kar tha hai is liye return ksr na phadtha

function addnumber(n1,n2){
    console.log(n1+n2);
}
function addnumber(n1,n2){
    // let result=n1+n2;
    // return result
    // or
    return n1+n2
}
const result=addnumber(2,5)
console.log("result",result);



function loginuser(username){
    return `${username}just logged in`
}
// jab bhi apan rreturn lar the tho console kar na phadtha hai
console.log(loginuser("maank"))



// shopping card function
// ...num1 matlab bhyat sare price ko sare ko add kar dega
function calculatecartprice(...num1){
return num1
}
console.log(calculatecartprice(5,4,6,9,7,9,6));

// object handle in function 
const user={
    username:"ma",
    price:133
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)
// or
handleobject({
    username:"sam",
    price:45
})


// array
const mynewarray=[200,455,477,55]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));