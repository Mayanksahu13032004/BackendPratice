const myarr=[0,1,2,3,4,5];
console.log(myarr[0]);

// array memthod

myarr.push(6)
myarr.push(7)
console.log(myarr);

console.log(myarr);

myarr.pop();
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
console.log(myarr.indexOf(2));



// slice and splice
console.log("A",myarr);

const myn1=myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3)
console.log("c",myarr);

console.log(myn2);





