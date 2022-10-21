const botonEnviar = document.querySelector('.enviar')
const inputName = document.getElementById('name')
const inputApellido = document.getElementById('apellido')
const inputEmail = document.getElementById('email')
const inputNumber = document.getElementById('number')

function validarFormulario() {
const nameValue = inputName.value.trim()
const apellidoValue = inputApellido.value.trim()
const emailValue = inputEmail.value.trim()
const numberValue = inputNumber.value.trim()

const emailRegex = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')

if (!emailRegex.exec(emailValue)) {
    swal.fire ({
        toast: true,
        position: 'top-right',
        icon: "error",
        text: "Email inválido",
        type: "error",
        timer: 2000,
        showConfirmButton: false
    });
    return
}

if (!nameValue || !apellidoValue || !emailValue || !numberValue) { 

        swal.fire ({
            toast: true,
            position: 'top-right',
            icon: "error",
            text: "Por favor, ingrese todos los campos",
            type: "error",
            timer: 2000,
            showConfirmButton: false
        });
        return
    } else {
        Swal.fire({  
            toast:true,
            icon: 'success',
            title: 'Enviado correctamente',
            confirmButtonText: 'OK',
        })
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
}
botonEnviar.addEventListener('click', (event)=> { 
    event.preventDefault()
    validarFormulario()
});