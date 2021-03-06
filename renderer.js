// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const DDL = 'libfactorial.dll'

const fs = require('fs')
const path = require('path')
const ffi = require('ffi')

let ddlPath = path.join(process.cwd(), DDL)
if (!fs.existsSync(ddlPath)) {
    ddlPath = path.join(process.cwd(), 'resources', 'app', DDL)
}

console.log(`path -> ${ddlPath}`)

var libfactorial = ffi.Library('libfactorial.dll', {
  'factorial': [ 'uint64', [ 'int' ] ]
})

var output = libfactorial.factorial(parseInt("35"))

console.log('Your output: ' + output)
