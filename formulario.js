let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");


let error = document.getElementById("error");
error.style.color = "white";

function enviarFormulario(){
    console.log("enviando formulario...");

    let mensajesError = [];
    if (nombre.value === null || nombre.value === ""){
        mensajesError.push("ingresa tu nombre");
    }
    if (apellido.value === null || apellido.value === ""){
        mensajesError.push("ingresa tu apellido");
    }
    if (mail.value === null || mail.value === ""){
        mensajesError.push("ingresa tu mail");
    }

    error.innerHTML = mensajesError.join(", ");
    return false;
}