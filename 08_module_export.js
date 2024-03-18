// local modules :

// local modeules are modules createrd locaally in your node.js application 

// these modules include different functionalities of your application in saperate files and folders.

// you can also package it and distribute it via npm, so that node.js community can use it. we need module.exports to define what could be assess from other file.

const mylogic = function(){
    console.log("hello welcome to local modules");
}

module.exports = mylogic

const hello = {
    studentname : "bhavesh",
    subject:"math",
    greetings :function(){
        console.log("hello welcome");
    }
}

module.exports = hello