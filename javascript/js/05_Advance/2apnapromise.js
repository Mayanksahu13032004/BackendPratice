// function savetodb(data){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//     console.log("your data was saved",data);
//     }else{
//         console.log("weak connection data was not saved");
//     }
// }
// savetodb("mayank")

// ab apan sucess or failure ka functionbanayenga


// callback hell

// function savetodb(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }
// }
// savetodb("mayank",
// ()=>{
//     console.log(" success: your data was saved" );
// savetodb("seconddata",()=>{
//     console.log("success:2 data was saved");
// },()=>{
//     console.log("faliure 2: weak connnection");
// })
// },
// ()=>{
//     console.log("failure: weak connection data was not saved");

// }
// );



// prmoise object hai  promise matlab ya tho complete hogi ya nahi hogi
// resolve and rejject
// success and failure

// async function
// promise ko return kathe Hai or jo bh return hoyta hai yus pe method ya function lagathebhai


// async function greet(){
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("promise was success ful");
// })
// .catch((error)=>{
//     console.log("rjected",error);
// })


// awaait matlab intezar karnna 


 function getnum(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
    return
     num;
    },1000)
 })
}
async function demo(){
    getnum();
}