// Promise bana rahe hai
// promise create kar k promise ko consume bhi karna phadtha hai
const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})
// .then matlab promise run karega jab phele settineout run karega then resolve se .then bala promise rin karea 

promiseone.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("asnc 2 resolve");
})



// resolve me jo bhi parameter pass karenge tho vo then k function me run karenga
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"chai@chai.com"})
    },1000)
})
promisethree.then(function(user){
console.log(user);
})


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function()  {
        let error =true
        if(!error){
            resolve({username:"mayank",password:"1234"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000);
})
// chaning
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved "))
// finally always run 




const promisefive=new Promise(function(resolve,reject){
    setTimeout(function()  {
        let error =true
        if(!error){
            resolve({username:"java",password:"123456"})
        }else{
            reject('ERROR:js  went wrong')
        }
    },1000)
});
async function consumepromisefive(){
   try {
    const respone=await promisefive
    console.log(respone);
   } catch (error) {
    console.log(error);
   }
}
consumepromisefive()



async function getallusers(){
   try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
   } catch (error) {
    console.log(error);
   }
}
getallusers()


// using then catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return  response.json()
})
.then((data)=>{
    console.log(data);
    })
    
.catch((e)=>console.log(e))