var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res) {
    const myURL = url.parse(req.url, true)
    const filename = "." + myURL.pathname + ".html"
    console.log(myURL)
    if(myURL.path === "/") {

        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                return res.end('404 Not Found')
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('index.html')
            return res.end()
        })
    } else {
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'})
                return res.end('404 Not Found')
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
}).listen(8080)