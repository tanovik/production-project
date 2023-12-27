

const fs = require('fs');
fs.rm('node_modules/.cache', { recursive: true }, 
()=> console.log('node_modules cache cleared'));