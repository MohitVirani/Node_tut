// const app = require('./app')

// console.log(app.x)



// const http = require('http');

// function dataControl(req,resp){
//     resp.write("<h1>Code Step by Step</h1>");;
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);




// var colors = require('colors');
// console.log('hello'.bgBlue);
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass




// import chalk from 'chalk';

// const log = console.log;

// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.green.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.red('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));



// const http = require('http');
// const data = require('./data')

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(2200)



// const fs = require('fs');

// const input = process.argv;

// if(input[2] =='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid input")
// }



// const fs = require('fs');
// const path = require('path');
// const DirPath = path.join(__dirname,'files')

//console.warn(DirPath)

// for(i = 0;i<5;i++){
//     fs.writeFileSync(DirPath+`/hello${i}.txt`,'a simple text file')
// }

// fs.readdir(DirPath,(error,files)=>{
//     files.forEach((item)=>{
//         console.log("File Name Is : " + item);
//     })
    
// })



// const fs = require('fs');
// const path = require('path');
// const DirPath = path.join(__dirname,'crud')

// // Create File
// const FilePath = `${DirPath}/Apple.txt`;

//fs.writeFileSync(FilePath, 'This Is Simple file for leaning' );

// // Read File
// fs.readFile(FilePath,'utf8',(error,item)=>{
//     console.log(item)
// })

// // Update File
// fs.appendFile(FilePath,' And File Name is Apple.txt',(error)=>{
//     if(!error) console.log('file is updated')
// })

// // Rename File
// fs.rename(FilePath,`${DirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('file is updated')
// })

// // Delete File
// fs.unlinkSync(`${DirPath}/fruit.txt`);



// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve,reject) => {    
//     setTimeout(() => {
//        resolve(30);
//     }, 2000);
// });
   
// waitingData.then((data) =>{
//     b = data;
//     console.log(a+b);
// });
