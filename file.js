// file systems

const fs = require("fs");
const path = require("path");
//read write file

// fs.readFile('./file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// make directory
// fs.mkdir(path.join(__dirname, "/file"), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("directory created");
//     return;
//   }
// });

// create file

// for writting the file we have a method  called
// writeFile

// fs.writeFile(path.join(__dirname,'/file/file.txt'),'hello world this is ashutosh kumar singh',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file created');
//         return;
//     }
// });

//how to read a file
// bydefalut this will gives the buffer 
// so we have to convert in to the string 
// for that we have a methods called  toString ()



// here we create the server and listen on port 
const server = require('http').createServer((req,res)=>{
    fs.readFile(path.join(__dirname, "./file/file.txt"),'utf-8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
            res.end(data);
         }
        }
    );
})

// here we listen the server on port number 
var port = 8000;
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
