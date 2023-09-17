function calcular(tipo,valor){
    if(tipo==='acao'){
        if(valor==='c'){
            document.getElementById('res').value=''
        }
        if(valor==='+' || valor==='-' || valor==='*' || valor==='/' || valor==='.'){
            document.getElementById('res').value+=valor
        }

        if(valor==='='){
            var valc = eval(document.getElementById('res').value)
            document.getElementById('res').value = valc
        }

    } else if(tipo==='valor'){
        document.getElementById('res').value+=valor
    }
}

function clique(){
    
}