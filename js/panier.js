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
    basketContents.innerHTML = `<p class="mt-4 mb-4"><strong>Votre panier contient les produits suivants : </strong></p>
                                <div class="row p-2 border firstLine">
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
    contactDetails.innerHTML = `<div class="row  contact m-5 pt-3 rounded-3">
                                    <div class="col-7 mb-3">
                                        <strong>Coordonnées</strong>
                                    </div>
                                    <form action="" method="POST" class="form col-8" id="contactForm">
                                        <div class=" text-start">
                                            <label for="lastName" class="form-label">Nom :</label>
                                            <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Dupont" required>
                                            <small></small>
                                        </div>
                                        <div class="text-start">
                                            <label for="firstName" class="form-label">Prénom :</label>
                                            <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Camille" required>
                                            <small></small>
                                        </div>
                                        <div class="text-start">
                                            <label for="address" class="form-label">Adresse :</label>
                                            <input type="text" name="address" id="address" class="form-control" placeholder="2, rue de la Paix" required>
                                            <small></small>
                                        </div>
                                        <div class="text-start">
                                            <label for="city" class="form-label">Ville :</label>
                                            <input type="text" name="city" id="city" class="form-control" placeholder="Peacecity" required>
                                            <small></small>
                                        </div>
                                        <div class=" text-start">
                                            <label for="email" class="form-label">Adresse e-mail :</label>
                                            <input type="email" name="email" id="email" class="form-control" placeholder="camille.dupont@peace.com" required>
                                            <small></small>
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

nom et prénom : seulement lettres, minuscules ou majuscules, tiret, espace
adresse : lettres, chiffres, virgule, tiret, espace
ville : seulement lettres et tiret, espace
code postal : seulement chiffre, 5 chiffres (différent 5 Itl, Espa, All, Grèce / Suisse Belgique NL Autriche: 4)
pays : récupère option
adresse mail : "lettres, tiret, chiffre, underscore", "@", "lettres", ".", "lettres"


fonction validation nom --> affiche small 
fonction validation prénom --> affiche small
fonction validation adresse --> affiche small
fonction validation ville --> affiche small
fonction validation mail --> affiche small

si tout OK, envoi formulaire, sinon demande corrigé champs X */

/*--------- Vérification des différents champs du formulaire de contact  -------*/

    // Récupération du formulaire 

let form = document.querySelector('#contactForm');

    // Validation du nom

form.lastName.addEventListener('change', function(){
    validLastName(this);
})

const validLastName = function(inputLastName) {
    //Expression régulière pour vérifier que le nom ne comporte que des lettres (avec tiret ou espace)
    let lastNameRegex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ- -]+$', 'g');

    //Récupération de la balise small située après l'input
    let small = inputLastName.nextElementSibling;

    //Affichage différent suivant la réponse du test de la RegExp
    if(lastNameRegex.test(inputLastName.value)) {
        inputLastName.setAttribute('class', 'form-control border border-success');
        small.innerHTML = `<i class="fas fa-check"></i> OK`;
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        inputLastName.setAttribute('class', 'form-control border border-danger');
        small.innerHTML = `<i class="fas fa-times"></i> Le nom ne doit comporter que des lettres`;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}

    // Validation du prénom

form.firstName.addEventListener('change', function(){
    validFirstName(this);
})

const validFirstName = function(inputFirstName) {
    //Expression régulière pour vérifier que le prénom ne comporte que des lettres (avec tiret ou espace)
    let firstNameRegex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ- ]+$', 'g');

    //Récupération de la balise small située après l'input
    let small = inputFirstName.nextElementSibling;

    //Affichage différent suivant la réponse du test de la RegExp
    if(firstNameRegex.test(inputFirstName.value)) {
        inputFirstName.setAttribute('class', 'form-control border border-success');
        small.innerHTML = `<i class="fas fa-check"></i> OK`;
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        inputFirstName.setAttribute('class', 'form-control border border-danger');
        small.innerHTML = `<i class="fas fa-times"></i> Le prénom ne doit comporter que des lettres`;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}

    // Validation de l'adresse

form.address.addEventListener('change', function(){
    validAddress(this);
})

const validAddress = function(inputAddress) {
    //Expression régulière pour vérifier que l'adresse ne comporte que des lettres, des chiffres, tiret, espaces et virgule
    let addressRegex = new RegExp('^[A-Za-z0-9À-ÖØ-öø-ÿ- ,]+$', 'g');

    //Récupération de la balise small située après l'input
    let small = inputAddress.nextElementSibling;

    //Affichage différent suivant la réponse du test de la RegExp
    if(addressRegex.test(inputAddress.value)) {
        inputAddress.setAttribute('class', 'form-control border border-success');
        small.innerHTML = `<i class="fas fa-check"></i> OK`;
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        inputAddress.setAttribute('class', 'form-control border border-danger');
        small.innerHTML = `<i class="fas fa-times"></i> L'adresse ne doit comporter que des lettres et des chiffres'`;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}

    // Validation de la ville

form.city.addEventListener('change', function(){
    validCity(this);
})

const validCity = function(inputCity) {
    //Expression régulière pour vérifier que la ville ne comporte que des lettres, tiret, espaces et virgule
    let cityRegex = new RegExp('^[A-Za-zÀ-ÖØ-öø-ÿ- ]+$', 'g');

    //Récupération de la balise small située après l'input
    let small = inputCity.nextElementSibling;

    //Affichage différent suivant la réponse du test de la RegExp
    if(cityRegex.test(inputCity.value)) {
        inputCity.setAttribute('class', 'form-control border border-success');
        small.innerHTML = `<i class="fas fa-check"></i> OK`;
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        return true;
    } else {
        inputCity.setAttribute('class', 'form-control border border-danger');
        small.innerHTML = `<i class="fas fa-times"></i> Le nom de la ville ne doit comporter que des lettres'`;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        return false;
    }
}

    // Validation de l'adresse mail

    form.email.addEventListener('change', function(){
        validEmail(this);
    })
    
    const validEmail = function(inputEmail) {
        //Expression régulière pour vérifier que l'adresse mail est bien au bon format
        let emailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,5}$', 'g');
    
        //Récupération de la balise small située après l'input
        let small = inputEmail.nextElementSibling;
    
        //Affichage différent suivant la réponse du test de la RegExp
        if(emailRegex.test(inputEmail.value)) {
            inputEmail.setAttribute('class', 'form-control border border-success');
            small.innerHTML = `<i class="fas fa-check"></i> OK`;
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        } else {
            inputEmail.setAttribute('class', 'form-control border border-danger');
            small.innerHTML = `<i class="fas fa-times"></i> Veuillez entrer une adresse mail valide'`;
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
    }

