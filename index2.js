fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        for (let article of data) {
            articlesContainer.innerHTML += `
            <divclass="col-12 col-lg-4">
                <div class="card mt-4 mb-5 border-secondary shadow">
                <img class="card-img-top" src="${article.imageUrl}" alt="Nounours" />
                <div class="card-body">
                    <div class="card-title">${article.name}</div>
                    <p class="card-text">${article.description}</p>
                    <span>Prix : ${article.price}</span>
                </div>
            </div>
        </divclass=>`;
        }
    });

   /*fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        let nameTeddy;
        let divTeddy;
        let priceTeddy;
        for (let article of data) {
            /*divTeddy = document.createElement("div");
            nameTeddy = document.createElement("h2");
            nameTeddy.textContent = article.name;
            divTeddy.appendChild(nameTeddy);
            priceTeddy = document.createElement("span");
            priceTeddy.textContent = article.price;
            divTeddy.appendChild(priceTeddy);
            articlesContainer.appendChild(divTeddy);
            articlesContainer.innerHTML += `<divclass="col-12 col-lg-4">
                                                <div class="card mt-4 mb-5 border-secondary shadow">
                                                    <img class="card-img-top" src="${article.imageUrl}" alt="Nounours" />
                                                    <div class="card-body">
                                                        <div class="card-title">${article.name}</div>
                                                        <span>Prix : ${article.price}</span>
                                                    </div>
                                                </div>
                                            </div>`;
        }
    });*/ 

    fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(dataProduct => {
        const productContainer = document.getElementById('product');
        let nameTeddy;
        let divTeddy;
        let priceTeddy;
        for (let article of dataProduct) {
            divTeddy = document.createElement("div");
            nameTeddy = document.createElement("h2");
            nameTeddy.textContent = article.name;
            divTeddy.appendChild(nameTeddy);
            priceTeddy = document.createElement("span");
            priceTeddy.textContent = article.price;
            divTeddy.appendChild(priceTeddy);
            productContainer.appendChild(divTeddy);
            productContainer.innerHTML += `<divclass="col-12 col-lg-4">
                                                <div class="card mt-4 mb-5 border-secondary shadow">
                                                    <img class="card-img-top" src="${article.imageUrl}" alt="Nounours" />
                                                    <div class="card-body">
                                                        <div class="card-title">${article.name}</div>
                                                        <span>Prix : ${article.price}</span>
                                                    </div>
                                                </div>
                                            </div>`;
        }
    });


     
    .catch(function(error) {
        console.log(error);
    });

    url+"?id=${idProduct}"

    let product = dataProduct;
        addProduct(dataProduct);

        function addProduct() {
            const productContainer = document.getElementById("product");
                productContainer.innerHTML = `<div class="col-8">
                                                <div class="card mt-4 mb-5 productCard">
                                                    <img class="card-img-top cardImage" src="${product.imageUrl}" alt="Produit à commander" />
                                                    <div class="card-body">
                                                        <div class="card-title h5 text-center">${product.name}</div>
                                                        <p><strong>Description</strong> : ${product.description}</p>
                                                        <span class="price">Prix : <strong>${product.price / 100},00 €</strong></span>
                                                    </div>
                                                    <a class="btn border-secondary" href="#" role="button">Ajouter au panier</a>
                                                </div>
                                            </div>`
        }

/* Mise des produits dans le panier */

function addToBasket(){
    const addProductButton = document.querySelector('.addProduct');

    addProductButton.addEventListener('click', (event) =>{
        
    } )
}

/*const productInBasket = JSON.parse(localStorage.getItem('selectedProduct'));

let selectedProduct={
    _id : "idProduct",
    name: "product.name",
    colors: "choice",
    price: "product.price"
}

Ajoute produit au panier s'il existe ou créer panier si vide 
if(productInBasket !== null){
    productInBasket.push('selectedProduct')
}
*/



/*

button.onclick = () => {
    const productInBasket = {
        id : "product._id",
        name: "product.name",
        choice: "product.colors",
        price: "product.price"
    }
    localStorage.setItem("productInBasket", JSON.parse(productInBasket))
};

