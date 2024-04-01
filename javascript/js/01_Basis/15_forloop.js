// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

// nested loop
for (let i = 0; i <=10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
    console.log(`Inner loop value: ${j} and inner loop ${i}`);
      
        
    }
    
}


let myarray=["batman","superman","spiderman","shree"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
    
}


// break and continue

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("5 is detected");
        break
    }
    console.log(`value of i is ${i}`);
}

// continue
for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("5 is detected");
        continue
    }
    console.log(`value of i is ${i}`);
}