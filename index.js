// js
fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        for (let article of data) {
            articlesContainer.innerHTML += `${article.name} ${article.price}<br>`;
        }
    });


    /*------------------ Header ------------------ */

let logo = document.createElement("div");



let headerTitle = document.createElement("div");

let title = document.createElement("h1");

title.textContent = "Orinoco";

let enterpriseDescription = document.createElement("p");

let basket = document.createElement("div");

document.getElementById("header").appendChild(logo);
document.getElementById("header").appendChild(headerTitle).appendChild(title);
document.getElementById("header").appendChild(headerTitle).appendChild(enterpriseDescription);
document.getElementById("header").appendChild(basket);