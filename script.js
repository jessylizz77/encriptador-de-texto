let textoIngresado = document.getElementById("textoEncriptar");
let textoDesencriptado = document.getElementById("textoDesencriptado");

window.onload = function () {
    ocultarMostrarDiv("containerTexto", "none");
};

function ocultarMostrarDiv(id, visibilidad) {
    let div = document.getElementById(id);
    div.style.display = visibilidad;
}

function mostrarDivTexto() {
    ocultarMostrarDiv("containerImagen", "none");
    ocultarMostrarDiv("containerTexto", "flex");
}

function encriptarTexto() {
   
    if( validarTexto(textoIngresado.value)){
        textoDesencriptado.value = "";
        let textoEncriptado = encriptar(textoIngresado.value);
        textoIngresado.value = "";
        textoDesencriptado.value = textoEncriptado;
        textoEncriptado = "";
        mostrarDivTexto();
    }
}

function desencriptarTexto() {

    if(validarTexto(textoIngresado.value)){
        let textoDesencriptado1 = desencriptar(textoIngresado.value);
        textoIngresado.value = "";
        textoDesencriptado.value = textoDesencriptado1;
        textoDesencriptado1 = "";
        mostrarDivTexto();
    }
}

function encriptar(textoIngresado) {
   
    let matrizEncriptacion = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    let mensajeEncriptado = textoIngresado.toLowerCase();
   
          for (let i = 0; i < matrizEncriptacion.length; i++) {
            if (textoIngresado.includes(matrizEncriptacion[i][0])) {
                mensajeEncriptado = mensajeEncriptado.replaceAll(
                    matrizEncriptacion[i][0],
                    matrizEncriptacion[i][1]
                );              
            }
        }
    return mensajeEncriptado;
}


function desencriptar(textoIngresado) {
    let matrizEncriptacion =  [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    let mensajeDesencriptado = textoIngresado.toLowerCase();

    for (let i = 0; i < matrizEncriptacion.length; i++) {
        if (textoIngresado.includes(matrizEncriptacion[i][1])) {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(
                matrizEncriptacion[i][1],
                matrizEncriptacion[i][0]
            );
        }
    }
    return mensajeDesencriptado;
}

function copiarTexto() {
    let texto = textoDesencriptado.value;

    navigator.clipboard
        .writeText(texto)
        .then(function () {
            alert("Texto copiado al portapapeles");
            console.log("Texto copiado al portapapeles");
        })
        .catch(function (err) {
            console.error("Error al copiar texto: ", err);
        });
}

function validarTexto(texto) { 
    
    let expresionRegular = /[a-z ]+$/;
    console.log(expresionRegular.test(texto));
    return expresionRegular.test(texto);     
}
