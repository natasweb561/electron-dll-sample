// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const ffi = require('ffi')

var libfactorial = ffi.Library('libfactorial.dll', {
  'factorial': [ 'uint64', [ 'int' ] ]
})


var output = libfactorial.factorial(parseInt("35"))

console.log('Your output: ' + output)
