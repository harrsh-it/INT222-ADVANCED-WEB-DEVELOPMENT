const os = require('os')

console.log(os.arch());

console.log(os.freemem()/1024/1024/1024);
console.log(os.platform())
console.log(os.tmpdir());

//path Modules 

const path = require('path')

// console.log(path.dirname("C:\Users\Harshit\Desktop\INT222\INT222-ADVANCED-WEB-DEVELOPMENT\UNIT-1\1.2_Javascript_primer\01_basics.js"));
// console.log(path.extname("C:\Users\Harshit\Desktop\INT222\INT222-ADVANCED-WEB-DEVELOPMENT\UNIT-1\1.2_Javascript_primer\01_basics.js"));
// console.log(path.basename("C:\Users\Harshit\Desktop\INT222\INT222-ADVANCED-WEB-DEVELOPMENT\UNIT-1\1.2_Javascript_primer\01_basics.js"));


// const parse = path.parse("C:\Users\Harshit\Desktop\INT222\INT222-ADVANCED-WEB-DEVELOPMENT\UNIT-1\1.2_Javascript_primer\01_basics.js");
console.log(parse.root);
