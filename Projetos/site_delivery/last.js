let carts = document.querySelectorAll('.add-cart');


//itens do cardapio
let products = [
    {
        name: 'pizza um',
        tag: 'pizzaum',
        price: 10,
        inCart: 0
    }, 
    {
        name: 'pizza dois',
        tag: 'pizzadois',
        price: 25,
        inCart: 0
    },
    {
        name: 'pizza tres',
        tag: 'pizzatres',
        price: 35,
        inCart: 0
    },
    {
        name: 'pizza quatro',
        tag: 'pizzaquatro',
        price: 45,
        inCart: 0
    },
]

//my loop
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers( products[i]);
        totalCost(products[i])
    })
}


//ao recarregar a pagina não sair o numero do carrinho
function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers( product){
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {

        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    console.log("My cart are", cartItems)

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1 
    } else{
        product.inCart = 1
        cartItems = {
            [product.tag]: product
        }
    } 
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product){
    
    //console.log('product is', product.price)
    let cartCost = localStorage.getItem('totalCost')

    console.log('my cartcost is ', cartCost)
    console.log(typeof cartCost)
    
    if(cartCost != null){
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    }else{
        localStorage.setItem("totalCost", product.price)
    }
    
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector(".products")
    let cartCost = localStorage.getItem('totalCost')
    
    //console.log(cartItems)
    if(cartItems && productContainer){
        productContainer.innerHTML = ''
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="icones/trash-black.png" class="trash-cart">
                <img src="./imagens/${item.tag}.jpg" class="img-in-cart">
                <span> ${item.name}</span>
            </div>
            <div class="price text-center">R$ ${item.price},00</div>
            <div class="quantity">
            <img src="icones/icon-plus-black.png" class="count">
            <span> ${item.inCart} </span>
            <img src="icones/minus-.png" class="count">
            </div>
            <div class="total text-center">
                R$ ${item.inCart * item.price},00
            </div>
            `
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle text-center">
                    Basket total
                </h4>
                <h4 class="basketTotal text-center">
                    R$ ${cartCost},00
                </h4>
            </div>
        `
    }
    deleteButtons()
}


//Remove items 

function deleteButtons(){
    let deleteButtons = document.querySelectorAll('.product .trash-cart')
    let productName
    let productNumbers = localStorage.getItem('cartNumbers')
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)
    let cartCost = localStorage.getItem('totalCoat')
    //console.log(cartItems)



    for (let i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', () =>{
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '')
            //console.log(productName)
            
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart )

            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart))

            delete cartItems[productName]
            localStorage.setItem('productsInCart', JSON.stringify(cartItems))
            
            displayCart()
            onloadCartNumbers()
        })
    }
}
    

onloadCartNumbers()
displayCart()