function cross(n){
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=n;j++){
        if(i==j || i==n+1-j)
        str=str+"*";
    else
    str=str+" ";
    }
    console.log(str);
}
}
cross(5)    


function square(n){
    for(let i=1;i<=n;i++){
        let str="";
        for(let j=1;j<=n;j++){
            if(i==1 || i==n ||j==1 || j==n)
            str=str+"*";
        else
        str=str+" ";
        }
        console.log(str);
    }
    }
    square(5)    ;


    function butterfly(n){
        for(let i=1;i<=n;i++){
            let str="";
            for(let j=1;j<=n;j++){
                if(i==j || i==n+1-j || (i==j+2 && i<=5) || (i==5&&j==1)||
                (i==3&&j==7) || (i==4&&j==6) || (i==5 &&j==7)
                )
                str=str+"*"
            else
            str=str+" "
            }
            console.log(str);
        }
    }
    butterfly(7)