const fs = require('fs')

fs.stat('novoarquivo.txt',(err, stats) =>{
    if(err){
        console.log(err);
        return
    }

    console.log(stats.isFile())// e um arquivo?
    console.log(stats.isDirectory());//é um diretório?
    console.log(stats.isSymbolicLink());// é um link sinbolico?
    console.log(stats.ctime);// que dia foi criado?
    console.log(stats.size);// qual tamanho?
})