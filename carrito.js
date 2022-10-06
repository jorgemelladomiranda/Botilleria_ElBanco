const carrito = JSON.parse(localStorage.getItem("carrito" || []));
if (carrito) {
    for (let index = 0; index < carrito.length; index++) {
    const producto = carrito[index];
    addItemToShoppingCart(
    producto.id,
    producto.title,
    producto.price,
    producto.image,
    producto.quantity
    );
}
}
const addToShoppingCartButtons = document.querySelectorAll(".addToCart");

addToShoppingCartButtons.forEach((addToCartButton) => {
addToCartButton.addEventListener("click", addToCartClicked);
});

const comprarButton = document.querySelector(".comprarButton");
comprarButton.addEventListener("click", comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
".shoppingCartItemsContainer"
);

function addItemToShoppingCart(
itemId,
itemTitle,
itemPrice,
itemImage,
itemQuantity
) {
const shoppingCartItemsContainer =
    document.getElementById("contenedor-carrito");

const shoppingCartRow = document.createElement("div");
const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h5 class="shopping-cart-item-title text-white shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h5>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="${itemQuantity}">
                <button id="${itemId}" class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);

shoppingCartRow
.querySelector(".buttonDelete")
.addEventListener("click", removeShoppingCartItem);

shoppingCartRow
.querySelector(".shoppingCartItemQuantity")
.addEventListener("change", quantityChanged);

updateShoppingCartTotal();
}

function removeShoppingCartItem(event) {
const buttonClicked = event.target;
const buttonId = buttonClicked.id;
buttonClicked.closest(".shoppingCartItem").remove();
const carroActual = JSON.parse(localStorage.getItem("carrito" || []));

if (carroActual) {
    const filterItems = carroActual.filter(
    (producto) => producto.id !== buttonId
    );
    localStorage.setItem("carrito", JSON.stringify(filterItems));
}
updateShoppingCartTotal();
}

function quantityChanged(event) {
const input = event.target;
input.value <= 0 ? (input.value = 1) : null;
updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
let total = 0;
const shoppingCartTotal = document.querySelector(".shoppingCartTotal");

const shoppingCartItems = document.querySelectorAll(".shoppingCartItem");

shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
    ".shoppingCartItemPrice"
    );
    const shoppingCartItemPrice = Number(
    shoppingCartItemPriceElement.textContent.replace("$", ``)
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
    ".shoppingCartItemQuantity"
    );
    const shoppingCartItemQuantity = Number(
    shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
});
shoppingCartTotal.innerHTML = `$${total.toLocaleString("es-CL")}`;
}

const buttonCheckout = document.querySelector("#checkout");
buttonCheckout.addEventListener("click", () => checkout());

function checkout() {
shoppingCartItemsContainer.innerHTML = "";
localStorage.clear();
updateShoppingCartTotal();
}

function comprarButtonClicked() {
shoppingCartItemsContainer.innerHTML = "";
updateShoppingCartTotal();
}
