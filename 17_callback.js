function loddingdata(callback){
        setTimeout(() => {
               callback(); 
        }, 2000);
}

function process(){
        console.log("Data Loading...");
}

loddingdata(process)