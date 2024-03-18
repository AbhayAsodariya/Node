const add = (n1,n2)=>{
        return n1 + n2;
}

function ex(n3, callback){
        console.log(n3 + callback(10,20));
}
ex(50,add)