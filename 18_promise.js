// without promise

let n1 = 10;
let n2 = 20;
let n3 =0;

setTimeout(() => {
        n3=n1+n2;
        console.log("ans : "+n3);
}, 2000);

console.log(n3+100);



// with promise

let num1 = 10;
let num2 = 20;

let waitingData = new Promise((resolve, reject)=>{
        setTimeout(() => {
             let num3 = num1 + num2; 
             resolve(num3)  
        }, 2000);
})

waitingData.then((value)=>{
        console.log(value+100);
})