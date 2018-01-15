const { exec } = require('child_process')

const child = exec(['jest --colors', process.argv.slice(2)].join(' '))

child.stdout.on('data', (body) => {
    console.log(body.toString())
})

child.stderr.on('data', (body) => {
    console.log(body.toString())
})

child.on('close', (code) => {
    console.log('[jest.js] test closed - code:', code)
})