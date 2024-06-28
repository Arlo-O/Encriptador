/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
var textoEncriptar = '';
var textoEncriptado = '';

function encriptarTexto() {
    textoEncriptar = document.getElementById('area_texto_original').value;
    if (textoEncriptar == '') {
        return
    } else {
        for (caracter in textoEncriptar){
            switch (caracter) {
                case 'a':
                    textoEncriptado += 'ai';
                    break;
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += caracter;
                break;
            }
        }
        mostrarTextoEncriptado();
    }
}

function mostrarTextoEncriptado() {
    document.getElementsByClassName('texto_historial_mensaje').value = textoEncriptado;
    document.getElementById('imagenCandado').style.display = "none";
    console.log("encriptado");
}