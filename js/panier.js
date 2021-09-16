/* Récupération des produits contenus dans le panier */

let productInBasket = JSON.parse(localStorage.getItem('checkedProduct'))


if (productInBasket === null || productInBasket == 0){

    /*------ À afficher si le panier est vide ----- */
    const basketContents = document.getElementById('cart');
    basketContents.innerHTML = `<div class="row">
                                    <div class="col-10 emptyBasket">
                                        <p>Votre panier est vide<br>
                                        Retournez sur la page d'accueil pour choisir des nounours pour le remplir</p>
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

    /*---- Suppression d'un produit du panier ----*/

    const buttonSupp = document.querySelectorAll('.suppProduct'); 
    console.log(buttonSupp);

    /* supprime tous les produits 
    for(var i = 0; i < buttonSupp.length; i++){
        buttonSupp[i].addEventListener('click', (event) =>{
        event.preventDefault();    
        
        localStorage.removeItem('checkedProduct');
        document.location.reload() 
        });  
    }*/

    buttonSupp.forEach((trash, key) => {
        trash.addEventListener('click', (event) =>{
            event.preventDefault();
            let productSupp = productInBasket.splice(key, 1); //élèment correspondant à key (indice dans la tableau) supprimé
            console.log(productSupp);
            localStorage.setItem('checkedProduct', JSON.stringify(productInBasket));

            document.location.reload()
        })
    } );


    /*------- Formulaire de commande -----*/

    const contactDetails = document.getElementById('contactDetail')
    contactDetails.innerHTML = `<div class="row mt-5 contact">
                                    <form class="form col-10 text-start">
                                        <label for="lastName" class="form-label">Nom :</label>
                                        <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Dupont">
                                        <label for="firstName" class="form-label">Prénom :</label>
                                        <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Camille">
                                        <label for="address" class="form-label">Adresse :</label>
                                        <input type="text" name="address" id="address" class="form-control" placeholder="2, rue de la Paix">
                                        <label for="city" class="form-label">Ville :</label>
                                        <input type="text" name="city" id="city" class="form-control" placeholder="Peacecity">
                                        <label for="email" class="form-label">Adresse e-mail :</label>
                                        <input type="email" name="email" id="email" class="form-control" placeholder="camille.dupont@peace.com">
                                        <button type="submit" class="btn border-secondary">Envoyer la commande</button>
                                    </form>
                                </div>
                                `

    

        
    

    



}
