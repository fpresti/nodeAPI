const fs = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors')
const folder = process.argv[2] ?? '.';
console.log(folder);


async function ls(folder){
    try{
        files = await fs.readdir(folder)
    }
    catch (error){
        console.error('Error: not possible to read the folder: ', error.message)
        process.exit(1);
    }

    const filesPromises = files.map( async file => {
        const filepath = path.join(folder, file);
        let stats
        try{
            stats = await fs.stat(filepath)
        }
        catch(error){
            console.error('Error: not possible to get the stats of the file: ', error.message)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString().concat(' bytes');
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType.padEnd(10)} - ${file.padEnd(30)} - ${fileSize.padStart(20)} - ${fileModified.padEnd(20)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    console.log('------------ -------------------------------- ---------------------- ------------------- ');
    console.log('fileType     file                                          fileSize  modified            ');
    console.log('------------ -------------------------------- ---------------------- ------------------- ');
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}

ls(folder);