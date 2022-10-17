let productos
let types = document.body.classList[1]

document.addEventListener('DOMContentLoaded', () => getProducts())

function addBoxItem(type) {
    for (i = 0; i < type.length; i++) {
        const addToCart = document.querySelectorAll('.addToCart')
        addToCart.forEach(addToCartButton => {
            addToCartButton.addEventListener('click', addToCartClicked)
        })
        const cartRow = document.createElement('div')
        cartRow.className = 'item mb-4'
        const productContainer = document.querySelector('.columna')

        cartRow.innerHTML = `
    <h3 class="item-title">${type[i].name}</h3>
    <img class="item-image" src="${type[i].image}" />
    <div class="item-details">
    <h4 class="item-price">$${type[i].price}</h4>
    <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
    </div>`
        productContainer.append(cartRow)
    }
}

function getProducts() {
    fetch('./data.json')
        .then(response => response.json())
        .then(productos => {
            switch (types) {
                case 'alcohol':
                    productos = productos.alcohol
                    break
            }
            addBoxItem(productos)
        })
}