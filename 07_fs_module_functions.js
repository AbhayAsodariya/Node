// difference beetwin readfile and readfilesync

// read file takes a call back which calls reasponse.sent ,

// fs.readfilesync, you need to be aware it dose not take a callback so your callback which calls response.send will never get called and therefor the response will never end it will timeout.


const fs = require("fs")

fs.writeFile("myfile.txt","Hello welcome to my file",function(e){
    console.log("successfully data added !")
})

fs.appendFile("myfile.txt","\nHello welcome to my second file",function(e){
    console.log("successfully data added !")
})

fs.open("myfileex.txt","w",function(e){
    console.log("file open");
})

fs.unlink("myfileex.txt",function(e){
    console.log("Deleted!");
})

fs.rename("myfile.txt","hellofile.txt",function(e){
    console.log("file rename successfully");
})