


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || (fano.value) > ano){
        window.alert('verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >=0 && idade <=14){
                //criança
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade >=15 && idade <= 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if(idade >21 && idade <=55){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade <=14){
                //criança
                img.setAttribute('src', 'mulher-crianca.png' )
            } else if (idade >=15 && idade <= 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade >21 && idade <=55){
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else{
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
   
}