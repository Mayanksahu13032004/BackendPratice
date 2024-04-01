const fakeArrayOfObjects = [
    { id: 1, name: 'John Doe', age: 25, city: 'Fakeville' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Faketown' },
    { id: 3, name: 'Bob Johnson', age: 28, city: 'Faketon' },
    { id: 4, name: 'Alice Brown', age: 22, city: 'Fakeland' },
    { id: 5, name: 'Charlie Davis', age: 35, city: 'Fakewood' },
    { id: 6, name: 'Eva White', age: 27, city: 'Fakeburg' },
    { id: 7, name: 'Mike Green', age: 32, city: 'Fakemeadow' },
    { id: 8, name: 'Olivia Black', age: 29, city: 'Fakedale' },
    { id: 9, name: 'Sam Miller', age: 26, city: 'Fakefield' },
    { id: 10, name: 'Lily Taylor', age: 31, city: 'Fakeville' }
  ];
  
 let newdata= fakeArrayOfObjects.filter((item)=>{
    return item.age>30 && item.id==10
  })

  console.log(newdata);




  // map

const mynumber=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynumber.map((num)=>num+10)
console.log(newnums);

// chaninig

const newnum=mynumber.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnum);
  


// reduce method

const mynu=[1,2,3]

const total=mynu.reduce(function(acc,currval){
  console.log(`acc : ${acc} and currval :${currval}`);
  return acc+currval
},0)
console.log(total);

// reduce n arroe function

 const mytotal=mynu.reduce((acc,curr)=>acc+curr,0)
 console.log(mytotal);


 const shop=[
  {
    itemname:"js",
    price:233
  },
  {
    itemname:"java",
    price:2353
  },
  {
    itemname:"python",
    price:23354
  },
  {
    itemname:"r",
    price:2335454
  },
 ]

const t=shop.reduce((acc,item)=>acc+item.price,0)
console.log(t);
