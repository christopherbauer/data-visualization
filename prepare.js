const fs = require('fs-extra')
console.log("test")
fs.copy('node_modules/font-awesome/fonts/*', 'src/fonts').then(() => console.log('success!')).catch(err => console.error(err))