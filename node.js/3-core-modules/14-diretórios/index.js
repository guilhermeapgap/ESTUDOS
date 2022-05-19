const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
    console.log('não existe')
    fs.mkdirSync('minhaspasta')
}

else if(fs.existsSync('./minhapasta')){
    console.log('Existe!');
}