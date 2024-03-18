const waitingmethod = new Promise((resolve,reject)=>{
        resolve(1);
})

waitingmethod.then((res)=>{
        console.log(res);
        return res*10;
})

waitingmethod.then((res)=>{
        console.log(res);
        return res*20;
})
