function tabuada(){
    var numero  = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(numero.value.length == 0) {
        window.alert('pr favor, digite um número!')
        
    } else{
        let n = Number(numero.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    var n = Number (numero.value)
    
}