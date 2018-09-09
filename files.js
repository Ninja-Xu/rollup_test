var fs = require('fs')
var path = require('path')

var filePath = path.resolve('./src/')
let jsFiles = fs.readdirSync(filePath).filter(filename => filename.match(/\.js$/))
module.exports = jsFiles