(async() => {
    const {value: responder}  = await Swal.fire({
	title:"Bienvenido!",
	text: 'eres mayor de edad?',
	icon: 'question',
	confirmButtonText: 'Seleccionar',
	footer:'<b class="negro">Nos reservamos el derecho de venta a menores</b>',
	width: '40%',
	padding:'2rem',
	backdrop: true,
	allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
	stopKeydownPropagation:false,
	input: 'select',
	inputPlaceholder: 'responder',
	inputValue:'',
	inputOptions: {
        Si: 'Si',
        No: 'No'
    }
    });


if (responder === 'Si') {
    Swal.fire({
        title: `${responder} puedes comprar`,
        icon:'success',
        timer:3000,
        showConfirmButton: false,
        })
} else {
    swal.fire({
    title:`No puedes comprar`,
    icon:'error',
    showConfirmButton: false,
    allowOutsideClick: false,
	allowEscapeKey:false,
	allowEnterKey:false,
    })
}


})()