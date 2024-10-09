const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors')

const folder = process.argv[2] ?? '.';
console.log(folder);


async function ls(folder){
    try{
        files = await fs.readdir(folder)
    }
    catch (error){
        console.error(pc.red('Error: not possible to read the folder: ', error.message))
        process.exit(1);
    }

    const filesPromises = files.map( async file => {
        const filepath = path.join(folder, file);
        let stats
        try{
            stats = await fs.stat(filepath)
        }
        catch(error){
            console.error(pc.error('Error: not possible to get the stats of the file: ', error.message))
            process.exit(1)
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString().concat(' bytes');
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType.padEnd(10)} - ${pc.bgBlueBright(file.padEnd(30))} - ${pc.bold(fileSize.padStart(20))} - ${fileModified.padEnd(20)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    console.log(pc.bgBlackBright('------------ -------------------------------- ---------------------- ------------------- '));
    console.log('fileType     file                                          fileSize  modified            ');
    console.log(pc.bgBlackBright('------------ -------------------------------- ---------------------- ------------------- '));
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}

ls(folder);