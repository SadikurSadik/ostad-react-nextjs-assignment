import products from './../data/products.json' assert {type: 'json'}


const showAllProducts = () => {
    let productListWrapperElement = document.getElementById('productListWrapper')
    // productListWrapperElement.innerHTML = ''
    let productElement = '';

    products.forEach((item) => {
         productElement += `<div class="col-md-4 col-sm-6 mt-4">
        <div class="card p-3" style="border: 2px solid #CCC;">

            <div class="d-flex justify-content-between align-items-center mb-4 ">
                <img src="${item.photo}" width="100%">
            </div>
            
            <h6>${item.name}</h6>
            
            <div style="display: flex; flex-flow: row; justify-content: space-between;">
            <span class="item">$ <strong>${item.price}</strong></span>
            <button class="item btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>`
    })

    productListWrapperElement.innerHTML = productElement
}

showAllProducts();