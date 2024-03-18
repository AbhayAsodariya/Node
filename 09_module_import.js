const usemodule = require("./08_module_export");

// usemodule()

console.log(usemodule.studentname);
usemodule.greetings()
console.log(usemodule.subject);



/* 

modules:

there are mainly 3 types of modules:

1) individual modules : which is bydefault install at node installation time 

e.g  http,os,fs,path

2) local modules : which is createrd by user and we can export and import from one file to another file.

3) 3rd party modules : which is createrd by other user and we have tom install it in our projects

npm install <modual name>

npm i express, mongoose

*/