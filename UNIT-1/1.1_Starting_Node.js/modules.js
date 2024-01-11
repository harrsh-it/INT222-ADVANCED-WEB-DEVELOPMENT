
const fs = require("fs");

//creating new file
fs.writeFileSync('read.txt',"I am node.js")  //adding file if file does not present it will create 
fs.writeFileSync('read.txt',"I am James Bond") //it will overwrite
fs.appendFileSync('read.txt'," I am from America") //Append data to file

const read_data = fs.readFileSync('read.txt',)
console.log(read_data); 

// Node.js includes an additinal data type called Buffer
// (not available in javascript)
// Buffer is mainly used to store binary data
// while reading from file or receive packet over the network

//out of console.log(read); 
//<Buffer 49 20 61 6d 20 4a 61 6d 65 73 20 42 6f 6e 64 20 49 20 61 6d 20 66 72 6f 6d 20 41 6d 65 72 69 63 61>

const org_data = read_data.toString();
console.log(org_data);

//remane file
fs.renameSync('read.txt','read1.txt')
