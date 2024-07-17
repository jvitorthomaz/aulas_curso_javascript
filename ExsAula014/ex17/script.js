function tabuada() {
    
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um numero!')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        //Sera utilizado while() apenaspara trocar
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`

        //Mostra qual item foi selecionado. Não muito util para js, mas util para outras linguagens como php
            item.value = `tab${c}` 

            tab.appendChild(item)
            c++
            
        }
    }
}