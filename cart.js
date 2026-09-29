let createCart = '';
let collectPrice = []
let img
let price
let convertNumber
let itemCount=1
let cartId = document.querySelector('.cart-header a')
let cartBring = document.querySelector('nav .carts a')
cartId.addEventListener('click', function () {
    document.querySelector('.right-zero').classList.add('cart-boxx')
})

cartBring.addEventListener('click', function () {
    document.querySelector('.right-zero').classList.remove('cart-boxx')
})

let allCarts = document.querySelectorAll('section .cart ')
let allCards = document.querySelectorAll('.card')
allCarts.forEach(function (e, index) {
    e.addEventListener('click', function () {
        collectItem = allCards[index]
        img = collectItem.querySelector('.upperImg img').src
        price = collectItem.querySelector('.details  h4').textContent
         convertNumber = Number(price.replace('$', ''))
        collectPrice.push(convertNumber)
        totalPrice()
        addCart(img, price)
    })
})

function addCart(img, price) {
    createCart += `
    <img src="${img}">

            <div class="cart-details">

                <h3>Suit</h3>

                <p>${price}</p>

                <div class="quantity">

                    <a href="#">
                        <i class=" fa-solid fa-minus"></i>
                    </a>

                    <span>1</span>

                    <a href="#">
                        <i class="add fa-solid fa-plus"></i>
                    </a>

                </div>

            </div>
    `
    document.querySelector('.cart-item').innerHTML = createCart
}


function totalPrice() {
    let totalPrices = 0
    collectPrice.forEach(function (value) {
        totalPrices += value
        document.querySelector('.cart-bottom h3 span').innerHTML = totalPrices
    })
}


