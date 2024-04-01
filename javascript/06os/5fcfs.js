let process=["p1","p2","p3","p4"];

let time=[0,3,6,4,2];

for (let i = 0; i < time.length; i++) {
    console.log(time[i]);
    const newnums=time.map((num)=>num+time[i])
    console.log(newnums);
    }
    
    //  let p1=time[0]
    //  console.log(p1);


    //  let p2=time[0]+time[1];
    //  console.log(p2);

    //  let p3=time[0]+time[1]+time[2];
    //  console.log(p3);

    //  let p4=time[0]+time[1]+time[2]+time[3];
    //  console.log(p4);

    
    //  let average=(p1+p2+p3+p4)/4
    //  console.log(average);


    

