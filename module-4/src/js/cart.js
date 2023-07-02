import {products} from './product.js'

const emptyCartContent = '<p>Your cart is empty</p>'
let cartItems = []
const clearCartBtnElement = document.getElementById('clearCartBtn')
const addToCartBtnElements = document.querySelectorAll('.addToCartBtn')
const cartItemsElement = document.getElementById('cartItems')

const cartButtonClickHandler = (e, ...rest) => {
    const id = parseInt(e.target.getAttribute('data-id'));
    const qty = rest.length ? parseInt( rest[0] ) : 1
    const productDetail = products.find(el => el.ID === id)

    const cartIndex = cartItems.findIndex(el => el.ID === id)

    if( cartIndex === -1) {
        // add new product to cart
        productDetail.qty = qty
        cartItems.push(productDetail)
    } else {
        // product already exists in cart
        cartItems[cartIndex].qty += qty
    }

    renderCartItems()
}

const removeCartProductHandler = () => {
    document.querySelectorAll('.removeCartBtn').forEach(buttonElement => {
        buttonElement.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            const findIndex = cartItems.findIndex(item => item.ID === id)
            console.log(findIndex)
            findIndex !== -1 && cartItems.splice(findIndex, 1)
            renderCartItems()
        })
    })
}

clearCartBtnElement.addEventListener('click', () => {
    cartItems = []
    renderCartItems()
})

const renderCartItems = () => {
    if( cartItems.length === 0 ) {
        cartItemsElement.innerHTML = emptyCartContent
        clearCartBtnElement.classList.add('d-none')
    } else {
        let subTotal = 0;
        let cartMarkup = `<ul>`
        cartItems.forEach((item) => {
            const total = item.price * item.qty
            subTotal += total
            cartMarkup += `<li class="d-flex">
            <figure>
              <a href="#">
                <img height="80px" src="${item.photo}" alt="">
              </a>
            </figure>
            <div style="width: 100%;" class="cart-item-inner d-flex justify-content-between p-2">
              <div class="cart-item-content">
                <h4 class="mb-3">${item.name}</h4>
                <strong>Price</strong> $${item.price} <strong>Qty</strong> ${item.qty}
              </div>
              <div class="cart-item-info ">
                <h5>$${total}</h5>
                <button data-id="${item.ID}" class="btn btn-sm btn-warning removeCartBtn">Remove</button>
              </div>
            </div>
          </li>`
        })
        cartMarkup +=`</ul>`
        cartMarkup += `<div class="d-flex align-items-end flex-column mb-5"><h5> <span class="m-2">Sub Total: </span> $${subTotal.toFixed(2)}</h5></div>`
        cartItemsElement.innerHTML = cartMarkup

        clearCartBtnElement.classList.remove('d-none')

        removeCartProductHandler()
    }
}

export {
    emptyCartContent,
    cartItems,
    clearCartBtnElement,
    addToCartBtnElements,
    cartButtonClickHandler
}

