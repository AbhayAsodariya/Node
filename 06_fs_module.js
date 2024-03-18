// fs modual : file system modeal which is used to handle file

// utf-8 is a character encoding system. it lets you represent character as ascii text.

// utf : unoicorn transformation formate

// we can perform below operations with fs modual read,write,delete,update,rename.

import fs from "fs/promises";
const a = await fs.readFile("bhavesh.txt");
await fs.writeFile("bhavesh.txt", "How are you?");
await fs.appendFile("bhavesh.txt", "Abhay is Dream boy");

console.log(a.toString());
