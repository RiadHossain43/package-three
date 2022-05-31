const { spawn } = require('child_process')
let runScript = (bundles = []) => {
    const child = spawn('npm', [
        `link`,
        '@riadhossain43/pkg-one',
        '@riadhossain43/pkg-three',
        ...bundles
    ])
    child.stderr.on('data', data => {
        console.info('info:')
        console.log(Buffer.from(data).toString())
    })
    child.on('error', error => {
        console.error('error:')
        console.log(error)
    })
    child.on('exit', (code, signal) => {
        if (code)
            console.info("Process exited with code", code)
        else if (signal)
            console.info("Process killed with signal", signal)
        else console.info("Local linking successfull.")
    })
}
runScript()