const argv = process.argv;

const month = argv[2];
const days = 30;

const waithingmethod = new Promise((resolve,reject)=>{
        setTimeout(() => {
                var ans = month * days;
                resolve(ans)
        }, 1000);
})


waithingmethod.then((value)=>{
        console.log("days = " + value);
})