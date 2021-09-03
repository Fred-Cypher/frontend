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