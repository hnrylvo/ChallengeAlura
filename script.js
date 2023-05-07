const input = document.querySelector(".input");
const output =  document.querySelector(".output");
const muneco= document.querySelector(".muneco");
const noMensaje = document.querySelector(".no-mensaje");
const ingreseTexto = document.querySelector(".ingrese-texto");
const copiar = document.querySelector(".copiar");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function BtnEncrypt() {
    const encrypt = Encriptar(input.value);
    output.value = encrypt;
    input.value = "";
    Ocultar();
    Mostrar();    
}

function Encriptar(textoEncriptado) {
    let codeKeys = [["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < codeKeys.length; i++) {
        if(textoEncriptado.includes(codeKeys[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(codeKeys[i][0], codeKeys[i][1]);
        }
    }
    return textoEncriptado;
}

function BtnDecrypt() {
    const encrypt = Desencriptar(input.value);
    output.value = encrypt;
    input.value = "";
    Ocultar();
    Mostrar();    
}

function Desencriptar(textoDesencriptado) {
    let codeKeys = [["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < codeKeys.length; i++) {
        if(textoDesencriptado.includes(codeKeys[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(codeKeys[i][1], codeKeys[i][0]);
        }
    }
    return textoDesencriptado;
}

copiar.addEventListener('click', () => {
    const outputValue = output.value; // Obtiene el valor del textarea
    navigator.clipboard.writeText(outputValue) // Copia el valor al portapapeles
    .then(() => {
        console.log('Texto copiado al portapapeles: ' + textareaValue);
    })
    .catch((error) => {
        console.error('Error al copiar al portapapeles: ', error);
    });
});


function Ocultar(){
    muneco.classList.add("ocultar");
    noMensaje.classList.add("ocultar");
    ingreseTexto.classList.add("ocultar");
}

function Mostrar() {;
    copiar.classList.add("mostrar");
}