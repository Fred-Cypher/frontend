let params = new URL(document.location).searchParams;
let idProduct = params.get('id');


fetch('http://localhost:3000/api/teddies?id=${idProduct}')
    .then(response => response.json())
    .then(dataProduct => {
        for(let product of dataProduct){
            if (idProduct == product._id){
                let createProduct = document.createElement('div');
                createProduct.innerHTML = `<div class="col-8">
                                                <div class="card mt-4 mb-5 productCard">
                                                    <img class="card-img-top cardImage" src="${product.imageUrl}" alt="Produit à commander" />
                                                    <div class="card-body">
                                                        <div class="card-title h5 text-center">${product.name}</div>
                                                        <label>Choix de la couleur</label>
                                                        <select id="choice" name="productChoice">
                                                            <option value="">Choisir la couleur</option>
                                                        </select>
                                                        <p><strong>Description</strong> : ${product.description}</p>
                                                        <span class="price">Prix : <strong>${product.price / 100},00 €</strong></span>
                                                    </div>
                                                    <a class="btn border-secondary" href="#" role="button">Ajouter au panier</a>
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