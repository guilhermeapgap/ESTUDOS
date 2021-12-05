function verif(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value> ano){
        window.alert('[ERRO] verifique o ano e tente novamente!!!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero='Homem'
            if (idade >=0 && idade <10){
                //criaça
                img.setAttribute('src', 'homem-criança.jpg')
            } else if (idade >= 10 && idade <21){
                //jovem
                img.setAttribute('src', 'homem-adolescente.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'homem-velho.jpeg')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criaça
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if (idade >= 10 && idade <21){
                //jovem
                img.setAttribute('src', 'mulher-adolescente.jpg')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                //idoso
                img.setAttribute('src','mulher-velha.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}