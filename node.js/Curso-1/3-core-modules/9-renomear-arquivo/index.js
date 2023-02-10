const fs = require('fs')

fs.rename('novoarquivo.txt', 'arquivorename.txt', function(err){
    if (err){
        console.log(err)
        return
    }else{
        console.log('arquivo renomeado');
    }
})