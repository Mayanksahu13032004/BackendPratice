// Object literals
// me singleton se nahi banta hai

const mysym=Symbol("key1")
// is symbol ko use karne k liye is ko square brackest me use karn apadtha hai


const jsuser={
    name:"mayank",
    age:14,
    [mysym]:"mykey1",
    location:"indore",
email:"mayank@google.com",
islogged:false,
lastlogin:["monday","saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);


// change value

jsuser.email="mayank@chatpt.com"

// freeze matlab yus objects me  apan change nahi kar pathe

// Object.freeze(jsuser)
jsuser.email="hiteesh@gmail.com"
console.log(jsuser);


// function

jsuser.greeting=function(){
    console.log("hello js");
}
jsuser.greetingTwo=function(){
    console.log(`hello js,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());


// objects 2
// singleton object
const tinder=new Object()


// non singleton objects

// objects balnk me value put karna hai
const tinderuser={}
 tinderuser.id="123abc"
 tinderuser.name="mayank"
 tinderuser.islogin=false
 console.log(tinderuser);


 const regular={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"sahu"
        }
    }
 }
console.log(regular.fullname);
console.log(regular.fullname.userfullname);



// combine objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

// one more method to aasign value

const obj4={...obj1,...obj2}
console.log(obj3);

// databases se value aati hai tho eese use kar the hai
// array of objects ko
const users=[
    {
        id:1,
        name:"jk"
    },
    {
id:2,
name:"q"
    },
    {
        id:3,
        name:"r"
    }
]
// assess
users[1].name


console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

// apan objects se puch rahe hai ke tere pass bavlue ahia ki nahi
console.log(tinderuser.hasOwnProperty("islogin"));


// objects 3
// objects destructureing
const course={
    coursename:"js in hindi",
    price:"999",
    teacher:"hitesh"
}
const{teacher:teach}=course
console.log(teach);


// json
// {
//     "coursename" :"js in hindi",
//     "price":"999",
//     "teacher":"hitesh"
// }


[
    {},
    {},
    {}
]


