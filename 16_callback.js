function greeting(uname, callback){
        console.log("Hello "+uname);
        callback();
}

const message=()=>{
        console.log("Good Morning!");
}
greeting("World", message)