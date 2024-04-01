// for of

// ["","","",""]
// [{},{},{},{}]

const arr=[1,2,3,4]
for (const num of arr) {
    console.log(num);
}

const greeting="hello world"
for (const greet of greeting) {
    console.log(greet);
}

// maps

const map=new Map()
map.set('in',"india")
map.set('usa',"america")
console.log(map);

// map pe loop

for (const key of map) {
    // all object printho jayega
    console.log(key);
  }

    // agar key  ya value chaiye tho bracket laga na hoga 
for (const [key,value] of map) {
    console.log(key, ':-',value);
}

// for of loop object me kaam nahi kartha hai


// for in loop 
// jo ki object me special lagattha hai
const myobject={
    js:"javascript",
    cpp:"c+-",
    rb:"ruby",
    swift:"swiftly"
}
for (const key in myobject) {
    console.log(key);
    console.log(myobject[key]);
    console.log(`${key} shortcut is for${myobject[key]}`);
}

// for in loop in array me index detha hai value nahi detha 


const program=["js","ruby","cpp","python"]
for (const key in program) {
    console.log(key);
    console.log(program[key]);

}


// most use loop for each loop
const coding=["a","b","c","d","e"]

coding.forEach( function (val) {
console.log(val);
} )

// or

coding.forEach( (item)=>{
    console.log(item);
})

// or

coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})


// arry of objects
const mycoding=[
    {
        language:"javascript",
        languagefilename:"js"
    },
    {
        language:"java",
        languagefilename:"ja"
    },
    {
        language:"Pyhton",
        languagefilename:"py"
    },
]


mycoding.forEach((item)=>{
console.log(item.language);
})



// for each return nahi kartha hai


// filter loop
const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynums.filter( (num)=>{
    return num>4
})
console.log(newnums);


const newnumss=[]
mynums.forEach((num)=>{
    if(num>4){
newnumss.push(num)
    }
})
console.log(newnums);




















