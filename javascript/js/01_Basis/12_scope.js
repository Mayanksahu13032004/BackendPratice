// function k bhar ya if else k bhaer  kuch declare kara hai tho khai bhi acces  kar shakthe agar if k andar kara hai thi {}
// kmandar hi run karega
let a=300
if(true){
    let a=10
    const b=20
    console.log("inner",a);
}
console.log(a);

// nested scope
function one(){
    const username="mayank"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="hitesh"

    if(username==="hitesh"){
        const website="youtube"
console.log(username+website);
    }
    // console.log(website); error

}
// console.log(username); error

// exapmle 
console.log(addone(50))

function addone(num){
return num+1
}




// console.log(addtwo(5))
const addtwo=function(num){
    return num+2
}
