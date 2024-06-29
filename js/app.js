/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
var textoEncriptar = '';
var textoEncriptado = '';
var textoDesencriptar = '';
var textoDesencriptado = '';

function encriptarTexto() {
    textoEncriptar = condicionesProceso();
    if (textoEncriptar == '') {
        return
    } else {
        for (let i = 0; i < textoEncriptar.length; i++){
            caracter = textoEncriptar.charAt(i);
            switch (caracter) {
                case "a":
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
        mostrarTextoEncriptado(textoEncriptado);
    }
}

function mostrarTextoEncriptado(texto) {
    document.getElementById('anuncio__inicial').style.display = "none";
    document.getElementById('imagenCandado').style.display = "none";
    document.getElementById('mensaje__procesado').textContent = texto;
    document.getElementById('area_texto_original').value = '';
    document.getElementById('copiarBTN').style.display = "flex";
    document.getElementById('desencriptarBTN').removeAttribute('disabled')
}

function condicionesProceso() {
    document.getElementById('mensaje__procesado').textContent = '';
    textoEncriptado = '';
    textoDesencriptado = '';
    return document.getElementById('area_texto_original').value;
}

function desencriptarTexto() {
    textoDesencriptar = condicionesProceso();
    if (textoDesencriptar == '') {
        return;
    } else {
        for (let i = 0; i < textoDesencriptar.length; i++){
            caracter = textoDesencriptar.charAt(i);
            textoDesencriptado += caracter;
            switch (caracter) {
                case "a":
                    i += 1;
                    break;
                case 'e':
                    i += 4;
                    break;
                case 'i':
                    i +=3;
                    break;
                case 'o':
                    i += 3;
                    break;
                case 'u':
                    i += 3;
                    break;
            }
        }
        document.getElementById('mensaje__procesado').textContent = textoDesencriptado;
        document.getElementById('area_texto_original').value = '';
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('mensaje__procesado').textContent);
}