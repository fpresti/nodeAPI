const path = require('node:path');

console.log('Slash or backslash depend on the OS: ', path.sep);

const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename('/file.txt')
console.log(base);

const filename = path.basename('/file.txt', '.txt');
console.log(filename);

const extension = path.extname('/file2.txt')
console.log(extension);
