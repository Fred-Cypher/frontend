let params = new URL(document.location).searchParams;
let idProduct = params.get('id');


fetch('http://localhost:3000/api/teddies?id=${idProduct}')
    .then(response => response.json())
    .then(dataProduct => {
        for(let product of dataProduct){
            if (idProduct == product._id){
                let createProduct = document.createElement('div');
                createProduct.setAttribute("class", "col-10 mt-4 mb-4");
                createProduct.innerHTML = ` <div class="col-12">
                                                <div class="card mt-4 mb-5 productCard">
                                                    <div class="row g-0">
                                                        <div class="col-5">
                                                            <img class="img-fluid cardImage" src="${product.imageUrl}" alt="Produit à commander" />
                                                        </div>
                                                        <div class="col-7">
                                                            <div class="card-body">
                                                                <div class="card-title h5 pt-3">${product.name}</div>
                                                                <div class="m-3 text-start pt-3">
                                                                    <label class="ms-3 me-2"><strong>Choix de la couleur </strong></label>
                                                                    <select id="choice" name="productChoice"></select>
                                                                <div>
                                                                <p class="m-3 text-start pt-3"><strong>Description</strong> : ${product.description}</p>
                                                                <p class="price m-3 text-end pt-3">Prix : <strong>${product.price / 100},00 €</strong></p>
                                                            </div>
                                                        </div>        
                                                        <button type="button" class="btn border-secondary">Ajouter au panier</button>
                                                    </div>
                                                </div>
                                            </div>`
                                            
        document.getElementById('product').appendChild(createProduct);

        let choice = document.getElementById('choice');
        let options = product.colors;

        options.forEach(function(element, key){
            choice[key] = new Option(element, key);
        });
            }
        }
    })