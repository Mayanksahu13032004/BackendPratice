// if

const score=200
if(score==200){
    let fly="shree"
    console.log(`the tree is ${fly}`);
}

// if if if means all if run 
// if else nif  else if means  agar ek bhi run karega tho baki sab stop ho jayenga




const userloggedin=true
const debitcard=true
const loggesdfromgoogle=true
const loggedfromgmail=true

if(userloggedin && debitcard && 2==2){
    console.log("to buy course");
}
if(loggedfromgmail || loggesdfromgoogle){
    console.log("TO crearte account ");
}



// switch case
// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3

switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("marck");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("nothinf run");
        break;
}


// truthy and falsey
const useremail="hitesh@gmail"
if(useremail){
    console.log("go");
}else{
    console.log("do not");
}

// false Value

// false,0,-0,bigint 0n,"",null,undefined,nan

// truth values
// "0","false"," ",[],{},function(){}


// object empty hai ki nahi

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}


// nullish coalescing operator(??):null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
val1=undefined ?? 15
console.log(val1);


// ternary operator

const ice=100

ice<=80 ? console.log("less than 80"):console.log("more than 80");