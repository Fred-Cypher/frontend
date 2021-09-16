/* --- Récupération de l'id contenu dans l'adresse URL  */

let params = new URL(document.location).searchParams;
let idProduct = params.get('id');


/* ---- Affichage de la fiche produit----- */

fetch('http://localhost:3000/api/teddies?id=${idProduct}')
    .then(response => response.json())
    .then(dataProduct => {
        for(let product of dataProduct){ 

            /* Récupération des caractéristiques du produit grâce à son numéro d'identification */

            if (idProduct == product._id){
                let createProduct = document.createElement('div');
                createProduct.setAttribute("class", "col-10 mt-4 mb-4");

                /* Code à envoyer sur la page HTML pour que le produit s'affiche correctement */

                createProduct.innerHTML = ` <div class="col-12">
                                                <div class="card mt-4 mb-5 productCard">
                                                    <div class="row g-0">
                                                        <div class="col-6">
                                                            <img class="img-fluid cardImage" src="${product.imageUrl}" alt="Produit à commander" />
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="card-body">
                                                                <div class="card-title h5 pt-3">${product.name}</div>
                                                                <form class="m-3 text-start pt-3">
                                                                    <label class="ms-3 me-2"><strong>Choix de la couleur </strong></label>
                                                                    <select id="choice" name="choice"></select>
                                                                <form>
                                                                <p class="m-3 text-start pt-3"><strong>Description</strong> : ${product.description}</p>
                                                                <p class="price m-3 text-end pt-3">Prix : <strong>${product.price / 100} €</strong></p>
                                                            </form>
                                                        </form>        
                                                        <button type="button" class="btn border-secondary addProduct">Ajouter au panier</button>
                                                    </div>
                                                </div>
                                            </div>`
                                            
                document.getElementById('product').appendChild(createProduct);

                /* Choix de la couleur */

                let choice = document.getElementById('choice');
                let options = product.colors;

                options.forEach(function(element, key){
                    choice[key] = new Option(element, key);
                });


                /* Mise des produits dans le panier */

                const formChoice = document.querySelector('#choice');

                const buttonAdd = document.querySelector('.addProduct');

                buttonAdd.addEventListener('click', (event)=>{
                    event.preventDefault();
                    
                    /* Récupération de l'option couleur */
                    const productChoice = formChoice.value;

                    let selectedProduct = {
                        id : product._id,
                        name : product.name,
                        options : productChoice,
                        price : product.price / 100
                    }

                    let productInBasket = JSON.parse(localStorage.getItem('checkedProduct'));

                    /* Création d'une fenêtre popup pour confirmer l'enregistrement du produit */
                    const popupConfirmation = () => {
                        if(window.confirm(`${product.name} a bien rejoint votre panier.
                        Pour vérifier votre panier, cliquez sur OK, si vous voulez adoptez un autre nounours cliquez sur ANNULER`))
                        {
                            window.location.href = "../view/panier.html";
                        } else {
                            window.location.href = "/index.html";
                        }
                    }

                    /* Fonction permettant d'envoyer le produit dans le panier */
                    const addSelectedProduct = () => {
                        productInBasket.push(selectedProduct);
                        localStorage.setItem('checkedProduct', JSON.stringify(productInBasket));
                    }

                    /* Envoi du produit sélectionné dans le localStorage */
                    if(productInBasket){
                        addSelectedProduct();
                        console.log(productInBasket);
                        popupConfirmation();

                    }else{
                        productInBasket = [];
                        addSelectedProduct();
                        console.log(productInBasket);
                        popupConfirmation();
                    }
                })
            }
        }
    })