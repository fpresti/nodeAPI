const fs = require('node:fs')
const stats = fs.statSync('./file.txt')

// read stats
console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size // in bytes
)

// ASYNC Process!!!******************************
// open file
console.log('Reading file1.txt')
fs.readFile('./file.txt', 'utf-8', (_err, text) => {
  console.log('Async1: ', text)
})
console.log('Do something!')
console.log('Reading file2.txt')
fs.readFile('./file2.txt', 'utf-8', (_err, text) => {
  console.log('Async2: ', text)
})

// ASYNC file system with promise****************
const fsPromise = require('node:fs/promises')
// open file
console.log('Reading file1.txt')
fsPromise.readFile('./file.txt', 'utf-8').then((text) => {
  console.log('First text promise:', text)
})
console.log('Do something!')
console.log('Reading file2.txt')
fsPromise.readFile('./file2.txt', 'utf-8').then((text) => {
  console.log('Second text promise: ', text)
})

// ASYNC Another example************************
Promise.all([
  fsPromise.readFile('./file.txt', 'utf-8'),
  fsPromise.readFile('./file2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('Promise all 1: ', text1)
  console.log('Promise all 2: ', text2)
})

// ASYNC await

// IFFE - inmediatly invoked function expression
const { readFile } = require('node:fs/promises')
;(async () => {
  console.log('Reading first file async await...')
  const text = await readFile('./file.txt', 'utf-8')
  console.log('Async await1: ', text)
  const text2 = await readFile('./file2.txt', 'utf-8')
  console.log('Async await2: ', text2)
})()

console.log('Fin del programa.')
