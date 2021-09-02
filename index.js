// js
fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        let nameTeddy;
        let divTeddy;
        let priceTeddy;
        for (let article of data) {
           /* divTeddy = document.createElement("div");
            nameTeddy = document.createElement("h2");
            nameTeddy.textContent = article.name;
            divTeddy.appendChild(nameTeddy);
            priceTeddy = document.createElement("span");
            priceTeddy.textContent = article.price;
            divTeddy.appendChild(priceTeddy);
            articlesContainer.appendChild(divTeddy);*/
            articlesContainer.innerHTML += `<div><h2>${article.name}</h2> <span>${article.price}</span><br></div>`;
        }
    });


    
