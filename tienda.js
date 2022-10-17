const addToShoppingCartButtons = document.querySelectorAll('.addToCart')

addToShoppingCartButtons.forEach(addToCartButton => {
  addToCartButton.addEventListener('click', addToCartClicked)
})

function addToCartClicked(event) {
  const button = event.target
  const item = button.closest('.item')

  const itemTitle = item.querySelector('.item-title').textContent
  const itemPrice = item.querySelector('.item-price').textContent
  const itemImage = item.querySelector('.item-image').src

  let carritoActual = JSON.parse(localStorage.getItem('carrito')) || []

  let existe = false
  let posicion = undefined

  for (let i = 0; i < carritoActual.length; i++) {
    if (itemTitle.trim() === carritoActual[i].title.trim()) {
      existe = true
      posicion = i
    }
  }

  if (existe) {
    carritoActual[posicion] = {
      title: itemTitle,
      price: itemPrice,
      image: itemImage,
      quantity: carritoActual[posicion].quantity + 1
    }
  } else {
    carritoActual.push({
      title: itemTitle,
      price: itemPrice,
      image: itemImage,
      quantity: 1
    })
  }

  localStorage.setItem('carrito', JSON.stringify(carritoActual))

  addItemToShoppingCart(itemTitle, itemPrice, itemImage)
}

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

function addItemToShoppingCart(itemTitle) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity =
        elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
      elementQuantity.value++
      $('.toast').toast('show')
      updateShoppingCartTotal()
      return
    }
  }
}