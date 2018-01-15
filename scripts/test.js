const { exec } = require('child_process')

const child = exec(['jest --colors', process.argv.slice(2)].join(' '), (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        return
    } else if(stdout) {
        console.log(stdout)
    } else {
        console.log(stderr)
    }
})

child.stdout.on('data', (body) => {
    console.log(body.toString())
})

child.stderr.on('data', (body) => {
    console.log(body.toString())
})