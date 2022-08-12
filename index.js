const fs = require("fs");
const path = require("path");
const http = require("http");


// ----------------------------------------------------------------------------

// fs

// create new file(C)
fs.writeFileSync('BioData.txt', 'My Name is Muskan Chopra. I am pursuning Graduation from Global INstitute of Technology.');


//update (U)
fs.appendFileSync('BioData.txt', 'I am working as a intern in Celebal Tech......yahooooo..');

// read data(R)
const readData = fs.readFileSync('BioData.txt');
console.log(readData);
// Read data as itis:
const fileData = readData.toString();
console.log(fileData);

// delete file(D)
fs.unlinkSync('BioData.txt');


//CRUD operation on file (File Handling) Done



// ---------------------------------------------------------------------------------------

// showing data using http on local host
 
const server = http.createServer( (req, res) => {
    res.write(readData);
    res.end();
});


server.listen(3600, () => {
    console.log("server is listening at 3600......");
});



// ------------------------------------------------------------------------------------
//different ways to give path 


const filePath = path.resolve('test.txt');
console.log(filePath);

const dirName = path.dirname(filePath);
console.log(dirname);

const p = `dirname /${filePath}`
//or instead find file path using join path
const joinPath = path.join('Muskan' , 'txt.txt');
console.log(joinPath)

