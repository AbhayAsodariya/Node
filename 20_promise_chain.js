const waithingmethod = new Promise((resolve,reject)=>{
        resolve(1);
}).then((res)=>{
        console.log(res);
        return res * 10;
}).then((res)=>{
        console.log(res);
        return res * 20;
}).then((res)=>{
        console.log(res);
})