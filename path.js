// path module in the node  

const path = require('path');
// dirname 
console.log(path.dirname(__filename));
//__filename this is come from the iffi function 
//in the node js 

// baseName : this gives the file name 
console.log(path.basename(__filename));

// extension
// here we see the what happend in the code 
// automatic suggest the code 
// in the node js 

console.log(path.extname(__filename));


// pageBreakInside: 
// this give the all the info of the file 

console.log(path.parse(__filename));

// join 
// this help in to concate the file and directory 

console.log(path.join(__filename, 'index.html'));