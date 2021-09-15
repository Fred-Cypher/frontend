/* Récupération des données des produits */

fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');

        /* Récupération des produits */
        
        for (let article of data) {

            /* Code à envoyer sur la page d'index pour que les produits s'affichent sous forme de carte */

            articlesContainer.innerHTML += `<div class="col-12 col-lg-4">
                                                <a href="./view/product.html?id=${article._id}">
                                                    <div class="card mt-4 mb-5">
                                                        <img class="card-img-top cardImage" src="${article.imageUrl}" alt="Nounours" />
                                                        <div class="card-body text-center">
                                                        <div class="card-title h5">${article.name}</div>
                                                            <span class="price">Prix : <strong>${article.price / 100} €</strong></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>`;
        }
    });
