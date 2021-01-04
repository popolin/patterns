const {
    readdir, readFile, writeFile
} = require('fs');

const { join } = require('path');
const { promisify } = require('util')

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str => 
    str.split('').reverse().join('');


// readdir(inbox, (error, files) => {
//     if(error) return console.log("Error: folder inaccessible");
//     files.forEach(file => {
//         readFile(join(inbox, file), 'utf8', (error, data) => {
//             if(error) return console.log("Error: file error");
//             writeFile(join(outbox, file), reverseText(data), (error) => {
//                 if(error) return console.log("Error: file could not be saved!");
//                 console.log(`${file} was successfully saved in the outbox!`);
//             })
//         });
//     })
// });

// const readFileAsync = file => new Promise((resolve, reject) => {
//     readFile(file, 'utf8', (error, data) => {
//         if(error) return reject(error);
//         resolve(data);
//     })
// });


const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

///////

// const readReverseWrite = file => 
//     readFileAsync(join(inbox, file), 'utf8')
//         .then(reverseText)
//         .then(data => writeFileAsync(join(outbox, file), data))
//         .then(() => console.log(`${file} has been processed!`));

// readdirAsync(inbox)
//     .then(files => files.map(file => readReverseWrite(file)))
//     .then(promises => Promise.all(promisses))
//     .then(() => console.log('*** All files processed ***'))
//     .catch(error => console.log(`Error: ${error}`));

////////

async function readReverseWrite(file) {
    try{
        const read = await readFileAsync(join(inbox, file), 'utf8');
        const reverse = await reverseText(read);
        await writeFileAsync(join(outbox, file), reverse);

        console.log(`${file} has been processed`);
    } catch(err){
        throw Error(err);
    } 
}

async function processFiles(){
    try{
        const allFiles = await readdirAsync(inbox);
        const processedFiles = allFiles.map(file => readReverseWrite(file));
        await Promise.all(processedFiles);
    } catch(err){
        console.log(err);
    } finally {
        console.log('** The files have been processed **')
    }
}

processFiles();