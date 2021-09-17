/* Récupération des produits contenus dans le panier */

let productInBasket = JSON.parse(localStorage.getItem('checkedProduct'))


if (productInBasket === null || productInBasket == 0){

    /*------ À afficher si le panier est vide ----- */
    const basketContents = document.getElementById('cart');
    basketContents.innerHTML = `<div class="row">
                                    <div class="col-12 mt-5 mb-5 pt-3 pb-3 text-center emptyBasket">
                                        <div>Votre panier est vide.</div>
                                        <div class="mt-5">Retournez sur la page d'accueil pour <br>choisir des nounours pour le remplir.</div>
                                    </div>
                                </div> 
                                `
} else {


    /*------ Première ligne du tableau à afficher si le panier comporte des produits */

    const basketContents = document.getElementById('cart');
    basketContents.innerHTML = `<p>Votre panier contient les produits suivants : </p>
                                <div class="row p-2 border">
                                    <div class="col-3">
                                        Nom du produit
                                    </div>
                                    <div class="col-3">
                                        Option du produit
                                    </div>
                                    <div class="col-2">
                                        Prix
                                    </div>
                                    <div class="col-4">
                                    Supprimer

                                    </div>
                                </div> 
                                `

    /*----- Affichage des produits contenus dans le panier -----*/                            

    for (let basketProducts of productInBasket){
        basketContents.innerHTML += `<div class="row fullBasket p-2 border">
                                        <div class="col-3">
                                            ${basketProducts.name}
                                        </div>
                                        <div class="col-3 color">
                                            ${basketProducts.options}
                                        </div>
                                        <div class="col-2 productPrice">
                                            ${basketProducts.price} €
                                        </div>
                                        <div class="col-4">
                                            <button type="button" class="btn suppProduct">
                                                <img class ="trash" src="https://img.icons8.com/plasticine/50/000000/trash--v1.png"/>
                                            </button>
                                        </div>
                                    </div>
                                    `
    };

    /*---- Suppression d'un produit du panier ----*/

    const buttonSupp = document.querySelectorAll('.suppProduct'); 
    console.log(buttonSupp);

    buttonSupp.forEach((trash, key) => {
        trash.addEventListener('click', (event) =>{
            event.preventDefault();
            let productSupp = productInBasket.splice(key, 1); //élèment correspondant à key (indice dans la tableau) supprimé
            console.log(productSupp);
            localStorage.setItem('checkedProduct', JSON.stringify(productInBasket));

            document.location.reload()
        })
    } );

    /*------ Calcul du prix total de la commande --------*/

    let total = 0;
    for(i = 0; i < productInBasket.length; i++ ){
        total += productInBasket[i].price;
    }

    console.log(total);

    const totalPrice = document.createElement('div');
    totalPrice.setAttribute('class', 'total p-2');
    totalPrice.textContent = "Prix total : " + total + " €";
    document.getElementById('cart').appendChild(totalPrice);

    /*----- Bouton pour vider complètement le panier ---*/

    const clearBasket = document.createElement('div');
    clearBasket.setAttribute('class', 'clearedBasket');
    clearBasket.innerHTML = `<div class="clearBasket">
                                <button type="button" class=" btn clear p-1 pe-3 ps-3 m-3 rounded-pill">Vider le panier</button>
                            </div>
                            `
    document.getElementById('cart').appendChild(clearBasket);

    const clean = document.querySelector('.clear');

    clean.addEventListener('click', (event) =>{
        event.preventDefault();
        localStorage.clear('checkedProduct');
        document.location.reload();
    });


    /*------- Formulaire de commande -----*/

    const contactDetails = document.getElementById('contactDetail')
    contactDetails.innerHTML = `<div class="row mt-5 contact">
                                    <form action="" method="POST" class="form col-8" id="contactForm">
                                        <div class=" text-start">
                                            <label for="lastName" class="form-label">Nom :</label>
                                            <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Dupont" required>
                                            <small>Texte validation ou pas</small>
                                        </div>
                                        <div class=" text-start">
                                            <label for="firstName" class="form-label">Prénom :</label>
                                            <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Camille" required>
                                        </div>
                                        <div class=" text-start">
                                            <label for="address" class="form-label">Adresse :</label>
                                            <input type="text" name="address" id="address" class="form-control" placeholder="2, rue de la Paix" required>
                                        </div>
                                        <div class=" text-start">
                                            <label for="codePostal" class="form-label">Code postal :</label>
                                            <input type="text"  name="codePostal" id="codePostal" class="form-control" placeholder="00000" required>
                                        </div>
                                        <div class=" text-start">
                                            <label for="city" class="form-label">Ville :</label>
                                            <input type="text" name="city" id="city" class="form-control" placeholder="Peacecity" required>
                                        </div>
                                        <div class=" text-start mt-3 mb-2">
                                            <label for="country" class="form-label">Pays :</label>
                                            <select name="country" id="country"  required>
                                                <option value="choisir">Choisissez votre pays</option>
                                                <option value="allemagne">Allemagne</option>
                                                <option value="autriche">Autriche</option>
                                                <option value="belgique">Belgique</option>
                                                <option value="espagne">Espagne</option>
                                                <option value="france">France</option>
                                                <option value="grece">Grèce</option>
                                                <option value="italie">Italie</option>
                                                <option value="paysBas">Pays-Bas</option>
                                                <option value="suisse">Suisse</option>
                                            </select>
                                        </div>
                                        <div class=" text-start">
                                            <label for="email" class="form-label">Adresse e-mail :</label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="camille.dupont@peace.com" required>
                                        </div>
                                        <div class=" text-center">
                                            <button type="submit" class="btn mt-3 mb-4 p-2 pe-3 ps-3 rounded-pill sendCommand">Envoyer la commande</button>
                                        </div>
                                    </form>
                                </div>
                                `

}


/*Envoyer en fetch(POST) les données du formulaire client et créer idCommande, order Id

Validation : 

nom et prénom : seulement lettres, minuscules ou majuscules, tiret
adresse : lettres, chiffres, virgule, tiret
ville : seulement lettres et tiret
code postal : seulement chiffre, 5 chiffres (différent 5 Itl, Espa, All, Grèce / Suisse Belgique NL Autriche: 4)
pays : récupère option
adresse mail : "lettres, tiret, chiffre, underscore", "@", "lettres", ".", "lettres"


fonction validation nom --> affiche small 
fonction validation prénom --> affiche small
fonction validation adresse --> affiche small
fonction validation ville --> affiche small
fonction validation code postal --> affiche small
focntion validation pays --> affiche small
fonction validation mail --> affiche small

si tout OK, envoi formulaire, sinon demande corrigé champs X */
