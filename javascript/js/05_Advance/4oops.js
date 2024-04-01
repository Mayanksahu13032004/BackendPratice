const user={
    username:"mayank",
    login:"8",
    signin:true,

    getuerdetail: function(){
console.log("go user detail from user bedetail b");
console.log(`username: ${this.username}`);

    }
}

console.log(user.username);
console.log(user.getuerdetail());



function user123(username, logincount,islogined){
    this.username=username
    this.logincount=logincount
    this.islogined=islogined

    return this
}
const userone= new user123("hitesh",12,true)
const usertwo= new user123("mayank",13,true)

console.log(userone);
console.log(usertwo);