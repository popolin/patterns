const {
    readdir, readFile, writeFile
} = require('fs');

const { join } = require('path');
const { promisify } = require('util')

const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str => 
    str.split('').reverse().join('');


const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function* getFilesIterator(){
    try{
        const readDirectory = await readdirAsync(inbox);
        for(const file of readDirectory){
            yield file;
        }
    } catch(err){
        throw Error(err);
    }
}

async function process(){
    try{
        const allFiles = await getFilesIterator();
        
        for await (const file of allFiles){
            const read = await readFileAsync(join(inbox, file), 'utf8');
            const reverse = await reverseText(read);
            await writeFileAsync(join(outbox, file), reverse);

            console.log(`File ${file} has been processed!`);
        }
    } catch(error){
        console.log(error)
    } finally {
        console.log(`-- All files processed --`);
    }
}

process();