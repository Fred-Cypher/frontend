// js
fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        for (let article of data) {
            articlesContainer.innerHTML += `<div class="col-12 col-lg-4">
                                                <a href="product.html?id=${article._id}">
                                                    <div class="card mt-4 mb-5">
                                                        <img class="card-img-top cardImage" src="${article.imageUrl}" alt="Nounours" />
                                                        <div class="card-body text-center">
                                                        <div class="card-title h5">${article.name}</div>
                                                            <span class="price">Prix : <strong>${article.price / 100},00 €</strong></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>`;
        }
    });
