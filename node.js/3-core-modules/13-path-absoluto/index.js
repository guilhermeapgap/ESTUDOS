const path = reqire('path')

//path absoluto 

console.log(path.resolve('test.txt'))

// formar path

const midFolder = 'relatorios'
const filename = 'guilherme.txt'

const finalpath = path.join('/','arquivos', midFolder, filename)

console.log(filename)