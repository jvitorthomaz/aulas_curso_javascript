function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res') //jeito mais novo de se fazer

    if (fano.value.length == 0 || fano.value > ano) { // fano.value.length == 0 verifica se a caixa esta vazia
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //[0]=Masculino [1]=Feminino
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotogaroto.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher' 
            if (idade >= 0 && idade < 12) {
                //crianca
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotogarota.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','fotomulher.png')
            } else {
                //idoso
                img.setAttribute('src','fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img) // faz a imagem aparecer
    }
}