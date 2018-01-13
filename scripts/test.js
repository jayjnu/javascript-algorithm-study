const { exec } = require('child_process')

exec('jest', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        return
    } else if(stdout) {
        console.log(stdout)
    } else {
        console.log(stderr)
    }
})