const { notDeepEqual } = require('assert');
const { log } = require('console');
const fs = require('fs')

fs.writeFile("read2.txt","I am a demo",
(err) => {
    console.log("File is done");
    console.log(err);
})

// we pass them a function as a argument - a callback-
// that gets called when that task completed
// The callback has a argument that tells you whether the iperation completed or not


fs.appendFile("read2.txt", " I am under Async process ",
(err) =>
{
    console.log("File appended");
})

fs.readFile('read2.txt',"utf8",(err,data)=>
{
    console.log(data);

})
