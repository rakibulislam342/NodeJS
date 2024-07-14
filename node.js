// Create Server
var http = require('http')
http.createServer(function(req,res){
    res.write('My First Web Srver')
    res.end()
}).listen(1111)


// Request Response Model
var http = require('http')

Server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.write('<h1>This is Home Page</h1>')
        res.end()
    }
    else if(req.url=='/about'){
        res.write('<h1>This is About Page</h1>')
        res.end()
    }
    else if(req.url=='/contact'){
        res.write('<h1>This is Contact Page</h1>')
        res.end()
    }
    else if(req.url=='/terms'){
        res.write('<h1>This is Terms Page</h1>')
        res.end()
    }
}).listen(2222,function(){
    console.log('Server Run Sucessfully!')
})

// NodeJS URL Module
var http = require('http')
var url = require('url')

var Server = http.createServer(function(req,res){
    var MyUrl = "https://www.youtube.com/watch?v=zkV5PJ3kxPE&list=RDGf5yYICFJMg&index=2"
    var Object = url.parse(MyUrl,true)

    var Host = Object.host
    var Path = Object.pathname
    var Search = Object.search
    var Protocol = Object.protocol
    
    res.write(Host)
    res.end()
})

Server.listen(8000,function(){
    console.log('Server Run Sucess!')
})

// NodeJS ReadFile Asyn
var HTTP = require('http')
var fs = require('fs')

var Server = HTTP.createServer(function(req,res){
    
        fs.readFile('node.js',function(error,data){
            res.write(data)
            res.end()
        })
})

Server.listen(1010,function(){
    console.log('Server Run Sucessfully!')
})

// Node ReadFile Sync
var http = require('http')
var fs = require('fs')

http.createServer(function(re,res){
    var Data = fs.readFileSync('node.js')

    res.write(Data)
    res.end()
}).listen(7171)

// Request Response with fs
var http = require('http')
var fs = require('fs')

var Server = http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end()
    }

    else if(req.url=='/node'){
        fs.readFile('node.js',function(erroe,data){
            res.write(data)
            res.end()
        })
    }
})
Server.listen(2020)

// NodeJS ReadFile Sync with Page Routing
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url=='/'){
        var Node = fs.readFileSync('node.js')
        res.write(Node)
        res.end()
    }

    else if(req.url=='/javascript'){
        var javascript = fs.readFileSync('index.js')
        res.write(javascript)
        res.end()
    }
   
}).listen(3030)

// NodeJS WriteFile Asyn
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.writeFile('c.c','Hello C language',function(error){
        if(error){
            res.write('File Write Fail')
            res.end()
        }
        else{
            res.write('File Write Sucess!')
            res.end()
        }
    })
}).listen(4040)

// NodeJS WriteFile Sync
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
        var data = fs.writeFileSync('C.c++','Welcome to C++')

        if(data){
            res.write('File Write Fail')
            res.end()
        }
        else{
            res.write('File Write Sucess!')
            res.end()
        }

}).listen(6060)

// File Rename Async
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url=='/'){
        fs.rename('index.js','Javascript.js',function(error){
            if(error){
                res.end('File Rename Fail')
            }
            else{
                res.end('File Rename Sucess!')
            }
        })
    }
}).listen(9090)

// File Rename Sync
var http = require('http')
var fs = require('fs')

var Server = http.createServer(function(req,res){
    var Data = fs.renameSync('CC.c++','C.c++')

    if(Data){
        res.end('Fail')
    }
    else{
        res.end('Sucess!')
    }
})
Server.listen(7373)

// File Delete Asyn

var http = require('http')
var fs = require('fs')

http.createServer(function(re,res){
    fs.unlink('c.c',function(error){
        if(error){
            res.end('File Delete Fail')
        }
        else{
            res.end('File Delete Sucess!')
        }
    })
}).listen(7878)

// File Delete Sync
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    var error = fs.unlinkSync('C.c++')
    if(error){
        res.end('Fail')
    }
    else{
        res.end('Sucess!')
    }
}).listen(4646)

// File Exists Sync
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    let result = fs.existsSync('node.js')
    if(result){
        res.end("True")
    }
    else{
        res.end("False")
    }
}).listen(8989)

// File Exists Asyn
var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.exists('node.js',function(error){
        if(error){
            res.end('True')
        }
        else{
            res.end('False')
        }
    })
}).listen(7272)