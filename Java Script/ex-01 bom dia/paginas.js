function carreg(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18 //forçar a hora manualmente

    msg.innerHTML = ` Agora são ${hora} horas.`
if (hora< 12){
    imagem.src = 'imagens/manha.png'
    document.body.style.background = '#FFE11E'
} else if (hora >= 12 && hora <18){
        imagem.src = 'imagens/tarde.png'
        document.body.style.background ='#FF6635'
} else {
    imagem.src = 'imagens/noite.png'
    document.body.style.background = '#404866'
}
 
}
