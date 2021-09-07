    let url = ("http://localhost:3000/api/teddies");

    let searchParams = window.location.search;
    
    let params = new URLSearchParams(searchParams);
    let idProduct = params.get('id');


    fetch(url+"?id=${idProduct}")
        .then(response => response.json())
        .then(dataProduct => {
            /*let product = dataProduct;
            if (idProduct == "url._id"){
                const productContainer = document.querySelector("product");
                productContainer.innerHTML = `<div class="card mt-4 mb-5">
                                                    <img class="card-img-top cardImage" src="${product.imageUrl}" alt="Produit à" />
                                                    <div class="card-body text-center">
                                                    <div class="card-title h5">${product.name}</div>
                                                        <p>${product.description}</p>
                                                        <span class="price">Prix : <strong>${product.price / 100},00 €</strong></span>
                                                    </div>
                                                </div>
                `
            }*/
            for(let product of dataProduct) {
                const productContainer = document.getElementById("product");
                productContainer.innerHTML = `<div class="col-8 text-center">
                                                <div class="card mt-4 mb-5">
                                                    <img class="card-img-top cardImage" src="${product.imageUrl}" alt="Produit à" />
                                                    <div class="card-body text-center">
                                                    <div class="card-title h5">${product.name}</div>
                                                        <p>${product.description}</p>
                                                        <span class="price">Prix : <strong>${product.price / 100},00 €</strong></span>
                                                    </div>
                                                </div>
                                            </div>
                `}
            }

            )
        
        .catch(function(error) {
            console.log(error);
        });

        