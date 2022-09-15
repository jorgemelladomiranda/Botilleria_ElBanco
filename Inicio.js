let Edad = prompt (`¿Eres Mayor de Edad?
SI
NO`);

switch (Edad) {
    case "SI":
        console.log(`respuesta: ${Edad}, Puedes entrar a la tienda virtual y elegir tus bebidas favoritas`)
        alert(`Puedes entrar a la tienda virtual y elegir tus bebidas favoritas`)
        break
    case "NO":
        console.log(`respuesta: ${Edad}, No puedes comprar alcohol, favor no realices compras, porque no te la enviaremos.`)
        alert(`No puedes comprar alcohol, favor no realices compras, porque no te la enviaremos`)
        break
        

    default:
        console.log("Respuesta incorrecta intente respondiendo SI o NO")
        alert(`Respuesta incorrecta intente respondiendo SI o NO`)
        break;
}