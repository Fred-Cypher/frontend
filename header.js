    /*------------------ Header ------------------ */
    let header = document.getElementById("header");
    header.setAttribute("class", "row text-center border border-primary pt-3")
    
        /* --- left part with home link -- */
    let homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.style.textDecoration = "none";
    homeLink.setAttribute("class", "col-2");
    
    let logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    
    logo.textContent = "Accueil";
    
    let logoImage = document.createElement("i");
    logoImage.setAttribute("class", "fas fa-shopping-cart");
    
        /* -- center part with title, description and links -- */
    
    let headerTitle = document.createElement("div");
    headerTitle.setAttribute("class", "headerTitle col-8");
    
    let title = document.createElement("h1");
    title.setAttribute("class", "title");
    
    title.textContent = "Orinoco";
    
    let enterpriseDescription = document.createElement("p");
    enterpriseDescription.setAttribute("class", "enterpriseDescription");
    
    let headerLinks = document.createElement("nav");
    headerLinks.setAttribute("class", "headerLinks navbar");
    
        /*-- right part with basket -- */
    let basketLink = document.createElement("a");
    basketLink.href = "#";
    basketLink.style.textDecoration = "none";
    basketLink.setAttribute("class", "col-2");
    
    let basket = document.createElement("div");
    basket.setAttribute("class", "basket");
    
    basket.textContent = "Panier";
    
    let basketImage = document.createElement("img");
    basketImage.setAttribute("class", "basketImage");
    basketImage.src = "https://img.icons8.com/officel/40/000000/shopping-basket.png";
    
    /* -- header structure -- */
    
    document.getElementById("header").appendChild(homeLink).appendChild(logo).appendChild(logoImage);
    document.getElementById("header").appendChild(headerTitle).appendChild(title);
    document.getElementById("header").appendChild(headerTitle).appendChild(enterpriseDescription);
    document.getElementById("header").appendChild(headerTitle).appendChild(headerLinks);
    document.getElementById("header").appendChild(basketLink).appendChild(basket).appendChild(basketImage);

    /* Carte produit */

    

   /* <div class="col-12 col-lg-4">
                    <div class="card mt-4 mb-5 border-secondary shadow">
                        <img class="card-img-top" src="home/instruction.png" alt="Formateur" />
                        <div class="card-body">
                            <h5 class="card-title">Formateurs de qualités</h5>
                            <p class="card-text">Tous nos cours sont réalisés par les meilleurs informaticiens.</p>
                        </div>
                    </div>
                </div>*/

let main = document.getElementById("main");
main.setAttribute("class", "row col-12 col-lg-4 container");

let articles = document.createElement("articles");

let cardArticle = document.createElement("div");
cardArticle.setAttribute("class", "card mt-4 mb-5 border-secondary shadow");
cardArticle.textContent = "coucou";

let cardImage = document.createElement("img");
cardArticle.setAttribute("class", "card-img-top");
cardArticle.src = article.imageUrl;

let cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");
cardBody.textContent = "1";

let cardTitle = document.createElement("div");
cardTitle.setAttribute("card-title h5");
cardTitle.textContent = "2";

let cardText = document.createElement("p");
cardText.setAttribute("card-text");
cardText.textContent = "3";

document.getElementById(main).appendChild(articles).appendChild(cardArticle).appendChild(cardImage);
document.getElementById(main).appendChild(articles).appendChild(cardArticle).appendChild(cardBody).appendChild(cardTitle);
document.getElementById(main).appendChild(articles).appendChild(cardArticle).appendChild(cardBody).appendChild(cardText);
