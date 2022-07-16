const spawn = require('child_process').spawn


const ip = process.argv[2]
const timeout = process.argv[3] || 500

var icmp = spawn(`python`, ["./icmp.py",ip])

var data_stream = ""

setTimeout(() => {
    if (new RegExp("got 1 answer").test(data_stream))
    {
        process.stdout.write("Host is up")
    }
    else
    {
        process.stdout.write("Host isnt reachable\n request timed out!")
    }
}, timeout)

icmp.stdout.setEncoding("utf-8")
icmp.stdout.on('data', (data) => {
    data_stream += data.toString()
})
